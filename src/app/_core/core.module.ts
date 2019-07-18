import { NgModule } from '@angular/core';
import { SharedModule } from './../_shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { HomeModalComponent } from './home-modal/home-modal.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundModalComponent } from './not-found-modal/not-found-modal.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { UnauthorizedModalComponent } from './unauthorized-modal/unauthorized-modal.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    SpinnerComponent,
    HomeModalComponent,
    NotFoundModalComponent,
    UnauthorizedModalComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    HomeModalComponent,
    SpinnerComponent,
  ],
  // Add Route Master Components to entryComponents[] so it can be loaded dynamically
  entryComponents: [
    NotFoundModalComponent,
    UnauthorizedModalComponent,
  ]
})
export class CoreModule { }
