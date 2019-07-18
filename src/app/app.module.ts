import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteMasterModule } from 'layout-master';

import { CoreModule } from './_core/core.module';
import { SharedModule } from './_shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_core/header/header.component';

// const routeMasterConfig = {
//   // It is expected that all named-outlets will be added to route-master..
//   // Route Master will console.warn if a named-outlet in the url does not match what route-master knows about..
//   // Disable this if you are using named outlets you don't want route master to know about..
//   disableNoOutletMatchWarnings: false,
//   outlets: {
//     'rm-router-app-wide-modal': true,
//     // .example-css-classes are in styles.scss of this project
//     'custom-classes-modal': 'example-css-class-1 example-css-class-2',
//   }
// };

const routeMasterConfig = {
  // Add as many <lay-router> named outlets as you want through object keys
  'rm-router-app-wide-modal': true,
  // .example-css-classes are in styles.scss of this project
  'custom-classes-modal': 'example-css-class-1 example-css-class-2',
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    RouteMasterModule.forRoot(routeMasterConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
