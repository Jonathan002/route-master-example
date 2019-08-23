# Route Master Example Project

## About
- This project demonstrates how to use the RouteMaster Module in an Angular Project.
- Route Master is a workaround solution that allows Entry Components of a Lazy Loaded NgModule to be available outside the Module through limited Routing functionality. (Ideal so lazy modules can be lazy or do not need to share their components with AppModule). This is not yet possible with Angular and has several issues about it:
  - https://github.com/angular/angular/issues/17343
  - https://github.com/angular/angular/issues/10981
  - https://github.com/angular/angular/issues/14324
  - https://github.com/angular/angular/issues/26964
- This project is compatible with the following Angular versions (Visit branches for working examples):
  - 6.1.0 - @angular/cli@6.2.9
  - 7.1.0 - @angular/cli@7.1.0
  - 8.1.2 - @angular/cli@8.1.2
  
## Demo Url
https://jonathan002.github.io/route-master-example/

## Installation and Setup

Install Angular Layout Master

```
npm i angular-layout-master --save
```

Import the RouteMaster Module from the Angular Layout Master Package and add it to AppModule with a `routeMasterConfig` object added to the `.forRoot()` method.

```ts
import { RouteMasterModule, RouteMasterConfig } from 'angular-layout-master';

const routeMasterConfig: RouteMasterConfig = {
  outlets: {
    'app-wide-modal': true,
  },
};

@NgModule({
  imports: [
    RouteMasterModule.forRoot(routeMasterConfig),
  ],
})
export class AppModule { }
```

Similar to setting up named `<router-outlet>`s, add the `<lay-router>` component in your app with a name property that matches up with the `routeMasterConfig` provided.

```html
  <lay-router name="app-wide-modal"></lay-router>

  <!-- If you are using Angular 6.. the below code is necessary -->
  <div style="display: none">
  <!-- Add a regular named router outlet for each <lay-router> -->
    <router-outlet  name="app-wide-modal"></router-outlet>
  </div>
```

Register routes around your app and match them up to each named `<lay-router>` outlet.


Register from **app-routing.module.ts**

```ts
// Regular Angular routes..
const routes: Routes = []

// Route Master Routes..
const coreModalRoutes: RoutePlus[] = [
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
      // NOTE: Module names are used to match up with the modules injector in Route Master..
          // Make sure all modules registered to RouteMaster are unique in name.
      moduleName: 'AppRoutingModule',
      moduleFactory: this.componentFactoryResolver,
      moduleInjector: this.injector,
      moduleRoutes: {
        // Pair the respective named-outlet with it's routes.
        'app-wide-modal': coreModalRoutes,
      }
    };
    // Register to Routes to RouteMaster
    this.rm.registerRoutes(lazyFactoryRoutes);
  }
}
```

Continue Registering from other modules as they load.. such as **lazy-routing.module.ts**

```ts
// Regular Angular routes..
const routes: Routes = []

// Route Master Routes..
const lazyModalRoutes: RoutePlus[] = [
  { path: 'lazy-modal', component: LazyModalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRoutingModule {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private rm: RouteMasterService,
  ) {  
    const lazyFactoryRoutes: ModuleFactoryRoutes = {
          moduleName: 'LazyRoutingModule',
      moduleFactory: this.componentFactoryResolver,
      moduleInjector: this.injector,
      moduleRoutes: {
          'app-wide-modal': lazyModalRoutes,
      }
    };

    // Register more Routes to RouteMaster when this module loads
    this.rm.registerRoutes(lazyFactoryRoutes);
    console.log('Lazy Module Initialized!');
  }
}
```

Lastly make sure all components registered with RouteMaster are added to each modules `entryComponents` array since they are dynamically loaded.

```ts
// app.module.ts
@NgModule({
  entryComponents: [
    NotFoundModalComponent,
  ]
})
export class AppModule {}

// lazy.module.ts
@NgModule({
  entryComponents: [
    LazyModalComponent,
  ]
})
export class LazyModule { }
```

## Using Route Master

Just navigate as you normally would and pretend as though the `<lay-router>` can be used just like the native named `<router-outlet>`s in Angular.

```ts
this.router.navigate(['', { outlets: { 'app-wide-modal': ['lazy-modal'] } })
```

When there is a url match the `<lay-router>` will create your component below it as a sibling just like a regular `<router-outlet>`.

```html
<lay-router name="app-wide-modal"></lay-router>
<app-lazy-modal></app-lazy-modal>
```

Navigating away will automatically close the dynamic component.

```ts
this.router.navigate(['', { outlets: { 'app-wide-modal': null } })
```

```html
<lay-router name="app-wide-modal"></lay-router>
<!-- poof! -->
```

## API Breakdown



### RouteMaster Config

```ts
interface RouteMasterConfig {
    outlets: {
        [x: string]: true | string | string[];
    };
    disableNoOutletMatchWarnings?: boolean;
}
```

| Property Name                    | Type                      | Description                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| outlets                          | Object                    | An object containing property names of the named route master outlets you would like the app to have                                                                                                                                                                                                                                                              |
| outlets['named-outlet-property'] | boolean, string, string[] | A boolean of true to enable the named outlet or a string / string array that represents classnames to apply to each dynamically loaded component of the route master outlet. There is no false option. Do not include the property if you do not want the outlet object to be created by route master.                                                            |
| disableNoOutletMatchWarnings     | boolean                   | If route master detects a url with a named outlet it cannot match, it will console.warn a no outlet match found warning. If you intend to use the native named `router-outlet` and don't want verbose console.warnings from route master, you can disable the warnings by setting this to false. (Default is set to true whether the property is present or not.) |

### Route Master Service

Inject it as so:

```ts
import { RouteMasterService } from 'layout-master';
class MyComponent {
  constructor(
      public rm: RouteMasterService,
  ) {}
}
```

```ts
// Please refer to the project typing files for a full list of all the returned interfaces..
interface RouteMasterService {
  getOutlet(outletName: string): Outlet
  getAllOutlets(): Outlets
  registerRoutes(moduleFactoryRoutes: ModuleFactoryRoutes): void
  data(outletName: string): any;
  data$(outletName: string): Observable<any>
  paramMap(outletName: string): RouteParams
  params(outletName: string): RouteParamsWithoutGetter
}
```

| Method Name                                          | Description                                                                                                                        |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| getOutlet(outletName: string): Outlet                | Get information about the requested outlet, the outletName is one of the outlet property names provided in the route master config |
| getAllOutlets(): Outlets                             | Returns and object with all the outlets provided in the config as well as route master's version of the primary outlet.            |
| registerRoutes()                                     | Used in a routing module. This method helps registers the modules routes to route master.                                          |
| data(outletName: string): any;                       | Used to get the current data stored in the selected route master outlet.                                                           |
| data$(outletName: string): Observable<any>           | An observable that will keep emitting any data that passes by the selected route master outlet.                                    |
| paramMap(outletName: string): RouteParams            | Returns an object literal with all param data a get() getter function that helps return a selected param.                          |
| params(outletName: string): RouteParamsWithoutGetter | Returns the param object literal the getter function removed.                                                                      |

### Route Master Component

```html
<lay-router></lay-router>
```

```ts
  @Input() name: string;
  @Input() animationDuration: number;
  @Input() enableSafariBodyScrollAssist: boolean;
  @Output() activation = new EventEmitter<boolean>();
```

| Property Name                | Type                               | Description                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| name                         | @Input: string                     | The name of the `<lay-router>`. This name must match one of the outlets properties listed in the route master config provided.                                                                                                                                                                                                                         |
| animationDuration            | @Input: number                     | The amount of time to keep the dynamic component in the DOM before it is removed. Useful for letting css animations finish building out the component.                                                                                                                                                                                                 |
| enableSafariBodyScrollAssist | @Input: boolean                    | Defaults to `true`. This is made to assist safari's browser for mobile devices. If the component is scrollable, it will call prevent default onTouchmove when the top or bottom has been reached. This helps prevents the body document in the background from continuing the onTouchmove events scroll. Set to `false` to disable the preventDefault. |
| activation                   | @Output: EventEmitter\<boolean\>() | An event emitter that emits `true` if the `<lay-router>` is creating a component and `false` if it is destroying a component.                                                                                                                                                                                                                          |

## Support

If this project was useful or helpful to you in any way consider supporting me by doing one of the following:

-  Star this GitHub repo ⭐️
-  Share how you are using RouteMaster in the closed issue ["Using RouteMaster"](https://github.com/Jonathan002/route-master-example/issues/1). 
-  Buy me a coffee: https://www.buymeacoffee.com/jonathandev
