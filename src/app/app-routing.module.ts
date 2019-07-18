import { ComponentFactoryResolver, Injector, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleFactoryRoutes, RouteMasterService } from 'layout-master';

import { HomeModalComponent } from './_core/home-modal/home-modal.component';
import { HomeComponent } from './_core/home/home.component';
import { NotFoundModalComponent } from './_core/not-found-modal/not-found-modal.component';
import { NotFoundComponent } from './_core/not-found/not-found.component';
import { UnauthorizedModalComponent } from './_core/unauthorized-modal/unauthorized-modal.component';

const routes: Routes = [
  { path: 'lazy-module', loadChildren: 'src/app/lazy/lazy.module#LazyModule'},
  { path: 'home-modal', outlet: 'ng-router-app-wide-modal', component: HomeModalComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

// Add Core Routes for RouteMaster
// NOTE: It is first come first serve route rules.. so keep '**' as the last route.
  // When a lazy modules loads, new route arrays are always concatenated to the START of each outlet's known routes,
  // This allows the first routes having the '**' path stay at the bottom since it's already loaded first here in AppRoutingModule.
const coreModalRoutes: Routes = [
  // ..lazy modules will concatenated their route arrays up here (match is per named-outlet so register this array twice)
  { path: 'unauthorized', component: UnauthorizedModalComponent },
  { path: '**', component: NotFoundModalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(
    // Get info about the Module
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    // DI Route Master Service
    private rm: RouteMasterService,
  ) {
    // Add module data via Route Master API..
    const lazyFactoryRoutes: ModuleFactoryRoutes = {
      moduleName: 'AppRoutingModule',
      moduleFactory: this.componentFactoryResolver,
      moduleInjector: this.injector,
      moduleRoutes: {
        // Pair the respective named-outlet with it's routes.
        'rm-router-app-wide-modal': coreModalRoutes,
        'custom-classes-modal': coreModalRoutes,
      }
    };
    // Register to Routes to RouteMaster
    this.rm.registerRoutes(lazyFactoryRoutes);
  }
}
