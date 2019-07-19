import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteMasterModule } from 'angular-layout-master';

import { CoreModule } from './_core/core.module';
import { SharedModule } from './_shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routeMasterConfig = {
  outlets: {
    'rm-router-app-wide-modal': true,
    // .example-css-classes are in styles.scss of this project
    'custom-classes-modal': 'example-css-class-1 example-css-class-2',
  },


  // It is expected that all named-outlets will be added to route-master..
  // Route Master will console.warn if a named-outlet in the url does not match what route-master knows about..
  // Disable this if you are using named outlets you don't want route master to know about..
    // e.g. HomeModal uses a named-outlet route master doesn't know about, causing a console warning..
  disableNoOutletMatchWarnings: true,
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
    NgbModule.forRoot(),
    RouteMasterModule.forRoot(routeMasterConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
