import { NgModule } from '@angular/core';

import { SharedModule } from '../_shared/shared.module';
import { ComplexModalComponent } from './complex-modal/complex-modal.component';
import { GuardedModalComponent } from './guarded-modal/guarded-modal.component';
import { LazyModalComponent } from './lazy-modal/lazy-modal.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { RouteParamModalComponent } from './route-param-modal/route-param-modal.component';
import { StaticDataComponent } from './static-data/static-data.component';


@NgModule({
  declarations: [
    LazyComponent,
    LazyModalComponent,
    RouteParamModalComponent,
    ComplexModalComponent,
    StaticDataComponent,
    GuardedModalComponent,
  ],
  imports: [
    LazyRoutingModule,
    SharedModule,
  ],
  exports: [
    LazyComponent,
    LazyModalComponent,
  ],
  // Add Route Master Components to entryComponents[] so it can be loaded dynamically
  entryComponents: [
    LazyModalComponent,
    RouteParamModalComponent,
    ComplexModalComponent,
    StaticDataComponent,
    GuardedModalComponent,
  ]
})
export class LazyModule { }


