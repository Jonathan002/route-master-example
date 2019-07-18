import { ComponentFactoryResolver, Injector, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleFactoryRoutes, RouteMasterService, RoutePlus } from 'layout-master';

import { ComplexModalComponent } from './complex-modal/complex-modal.component';
import { GuardedModalComponent } from './guarded-modal/guarded-modal.component';
import { LazyModalComponent } from './lazy-modal/lazy-modal.component';
import { LazyComponent } from './lazy.component';
import { RouteParamModalComponent } from './route-param-modal/route-param-modal.component';
import { StaticDataComponent } from './static-data/static-data.component';
import { ObservableTestGuard } from '../_guards/observable-test.guard';
import { GoodCopGuard } from '../_guards/good-cop.guard';
import { BadCopGuard } from '../_guards/bad-cop.guard';

// Setting up Regular Routing for Angular..
const routes: Routes = [
  // NOTE: If Angular's Router does not know about LazyModalComponent,
  // it needs to be added LazyModule @NgModule - entryComponents array.
  { path: 'lazy-modal', outlet: 'ng-router-app-wide-modal', component: LazyModalComponent },
  { path: '', component: LazyComponent },
];

// Create routes for Route Master
// RouteMaster can only do flat path matching.. '.children' will not be iterated over..
const lazyModalRoutes: RoutePlus[] = [
  { path: 'lazy-modal', component: LazyModalComponent },
  { path: 'route-param-modal/:id', component: RouteParamModalComponent },
  { path: 'static-route-data-modal', component: StaticDataComponent, data: [1, 2, 3, 4, 5] },
  { path: 'guarded-modal', component: GuardedModalComponent, canActivate: [GoodCopGuard, BadCopGuard] },
  {
    path: 'complex/:route/demo/:with-more-params',
    component: ComplexModalComponent,
    data: [1, 2, 3, 4, 5],
    canActivate: [ObservableTestGuard]
  },
];

const customClassesModalRoutes: RoutePlus[] = [
  { path: 'lazy-modal', component: LazyModalComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class LazyRoutingModule {
  // Send it to Route Master when the lazy Module loads
  constructor(
    // Get info about the lazy Module
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    // DI Route Master Service
    private rm: RouteMasterService,
  ) {
    console.log('Lazy Module Initialized!');

    // Add module data via Route Master API..
    const lazyFactoryRoutes: ModuleFactoryRoutes = {
      moduleName: 'LazyRoutingModule',
      moduleFactory: this.componentFactoryResolver,
      moduleInjector: this.injector,
      moduleRoutes: {
        // Pair the respective named-outlet with it's routes.
        'rm-router-app-wide-modal': lazyModalRoutes,
        'custom-classes-modal': customClassesModalRoutes,
      }
    };
    // Register to Routes to RouteMaster
    this.rm.registerRoutes(lazyFactoryRoutes);
  }
}
