(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-lazy-lazy-module"],{

/***/ "./src/app/_guards/bad-cop.guard.ts":
/*!******************************************!*\
  !*** ./src/app/_guards/bad-cop.guard.ts ***!
  \******************************************/
/*! exports provided: BadCopGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadCopGuard", function() { return BadCopGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BadCopGuard = /** @class */ (function () {
    function BadCopGuard(router) {
        this.router = router;
    }
    BadCopGuard.prototype.canActivate = function (next, state) {
        var url = 'lazy-module(rm-router-app-wide-modal:unauthorized)';
        var tree = this.router.parseUrl(url);
        // Fake http waiting..
        return new Promise(function (resolve, reject) { return setTimeout(function () {
            // BadCopGuard says no and redirects
            console.log('about to resolve tree');
            resolve(tree);
        }, 1500); });
    };
    BadCopGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BadCopGuard);
    return BadCopGuard;
}());



/***/ }),

/***/ "./src/app/_guards/good-cop.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/_guards/good-cop.guard.ts ***!
  \*******************************************/
/*! exports provided: GoodCopGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodCopGuard", function() { return GoodCopGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoodCopGuard = /** @class */ (function () {
    function GoodCopGuard() {
    }
    GoodCopGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    GoodCopGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GoodCopGuard);
    return GoodCopGuard;
}());



/***/ }),

/***/ "./src/app/_guards/observable-test.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/_guards/observable-test.guard.ts ***!
  \**************************************************/
/*! exports provided: ObservableTestGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableTestGuard", function() { return ObservableTestGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ObservableTestGuard = /** @class */ (function () {
    function ObservableTestGuard() {
    }
    ObservableTestGuard.prototype.canActivate = function (next, state) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    };
    ObservableTestGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ObservableTestGuard);
    return ObservableTestGuard;
}());



/***/ }),

/***/ "./src/app/lazy/complex-modal/complex-modal.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/lazy/complex-modal/complex-modal.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Complex Modal</h2>\n<div class=\"mb-2\">\n  Test to confirm multiple route parameters, route data, and observable route guard all work.\n</div>\n<div class=\"d-flex justify-content-between align-items-start\">\n  <div class=\"mr-3\">\n    <div>\n      <strong>Route-parameters</strong>\n    </div>\n    <ul>\n      <li *ngFor=\"let obj of params | keyvalue\" class=\"p-2\">\n        <div><strong>Route Param Key:</strong> ':{{ obj.key }}'</div>\n        <div><strong>Captured Route Param:</strong> '{{ obj.value }}'</div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"mr-3\">\n    <div>\n      <strong>Data</strong>:\n    </div>\n    <div>\n      {{ routeData | json }}\n    </div>\n  </div>\n</div>\n<hr>\n<div class=\"mb-3\">\n  <div class=\"mb-2\">\n    Test to confirm other native route functionality still works.\n  </div>\n  <div>\n    <strong>ActivatedRoute Query Parameters:</strong>\n  </div>\n  <code>\n    {{ queryParams | json }}\n  </code>\n  <div>\n    <strong>ActivatedRoute Query Parameters:</strong>\n  </div>\n  <code>\n    {{ fragment | json }}\n  </code>\n</div>\n\n<app-close-modal-button></app-close-modal-button>\n"

/***/ }),

/***/ "./src/app/lazy/complex-modal/complex-modal.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/lazy/complex-modal/complex-modal.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhenkvY29tcGxleC1tb2RhbC9jb21wbGV4LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/lazy/complex-modal/complex-modal.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/lazy/complex-modal/complex-modal.component.ts ***!
  \***************************************************************/
/*! exports provided: ComplexModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexModalComponent", function() { return ComplexModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_layout_master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-layout-master */ "./node_modules/angular-layout-master/fesm5/angular-layout-master.js");




var ComplexModalComponent = /** @class */ (function () {
    function ComplexModalComponent(route, rm) {
        this.route = route;
        this.rm = rm;
    }
    ;
    ComplexModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        // View Complex Param Map with Route Master
        this.params = this.rm.params('rm-router-app-wide-modal');
        this.routeData = this.rm.data('rm-router-app-wide-modal');
        // Other Angular Stuff Still works too..
        this.querySub = this.route.queryParams.subscribe(function (params) { return _this.queryParams = params; });
        this.fragmentSub = this.route.fragment.subscribe(function (fragment) { return _this.fragment = fragment; });
    };
    ComplexModalComponent.prototype.ngOnDestroy = function () {
        this.querySub.unsubscribe();
        this.fragmentSub.unsubscribe();
    };
    ComplexModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-complex-modal',
            template: __webpack_require__(/*! ./complex-modal.component.html */ "./src/app/lazy/complex-modal/complex-modal.component.html"),
            styles: [__webpack_require__(/*! ./complex-modal.component.scss */ "./src/app/lazy/complex-modal/complex-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            angular_layout_master__WEBPACK_IMPORTED_MODULE_3__["RouteMasterService"]])
    ], ComplexModalComponent);
    return ComplexModalComponent;
}());



/***/ }),

/***/ "./src/app/lazy/guarded-modal/guarded-modal.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/lazy/guarded-modal/guarded-modal.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Legendary Routing Artifact Found!</h2>\n<p>Wait!! What are you doing here?!! There should of been a guard to stop you!! Do not use this artifact!! Turn away and close this modal! It is too powerful and has unpredictable routing powers!!</p>\n<figure>\n  <img class=\"img-size\" src=\"/assets/legendary-routing-artifact.png\" alt=\"your screen reader is in awe with the awesome power of the legendary routing artifact.. There can be no words to describe it..\">\n</figure>\n<a class=\"btn btn-success d-inline-block m-2\" [href]=\"useArtifact()\">COLLECT ARTIFACT AND USE IT!</a>\n<app-close-modal-button class=\"d-inline-block m-2\" buttonText=\"CLOSE MODAL AND LEAVE ARTIFACT ALONE\"></app-close-modal-button>"

/***/ }),

/***/ "./src/app/lazy/guarded-modal/guarded-modal.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/lazy/guarded-modal/guarded-modal.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-size {\n  width: 300px;\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Kb25hdGhhbjAwMi9EZXNrdG9wL3JvdXRlLW1hc3Rlci1leGFtcGxlL3NyYy9hcHAvbGF6eS9ndWFyZGVkLW1vZGFsL2d1YXJkZWQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvbGF6eS9ndWFyZGVkLW1vZGFsL2d1YXJkZWQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXNpemUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/lazy/guarded-modal/guarded-modal.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/lazy/guarded-modal/guarded-modal.component.ts ***!
  \***************************************************************/
/*! exports provided: GuardedModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardedModalComponent", function() { return GuardedModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GuardedModalComponent = /** @class */ (function () {
    function GuardedModalComponent() {
    }
    GuardedModalComponent.prototype.ngOnInit = function () {
    };
    GuardedModalComponent.prototype.useArtifact = function () {
        return 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    };
    GuardedModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guarded-modal',
            template: __webpack_require__(/*! ./guarded-modal.component.html */ "./src/app/lazy/guarded-modal/guarded-modal.component.html"),
            styles: [__webpack_require__(/*! ./guarded-modal.component.scss */ "./src/app/lazy/guarded-modal/guarded-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GuardedModalComponent);
    return GuardedModalComponent;
}());



/***/ }),

/***/ "./src/app/lazy/lazy-modal/lazy-modal.component.html":
/*!***********************************************************!*\
  !*** ./src/app/lazy/lazy-modal/lazy-modal.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Lazy Modal</h2>\n<p>Hello from Lazy Modal Component!</p>\n<p>Lazy Routing Demo is complete! Enjoy keeping Modules Encapsulated. :)</p>\n<p>For more information, please refer to the code in this example project to see how Route Master is set up.</p>\n<app-close-modal-button></app-close-modal-button>"

/***/ }),

/***/ "./src/app/lazy/lazy-modal/lazy-modal.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/lazy/lazy-modal/lazy-modal.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhenkvbGF6eS1tb2RhbC9sYXp5LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/lazy/lazy-modal/lazy-modal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/lazy/lazy-modal/lazy-modal.component.ts ***!
  \*********************************************************/
/*! exports provided: LazyModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyModalComponent", function() { return LazyModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LazyModalComponent = /** @class */ (function () {
    function LazyModalComponent() {
    }
    LazyModalComponent.prototype.ngOnInit = function () {
    };
    LazyModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lazy-modal',
            template: __webpack_require__(/*! ./lazy-modal.component.html */ "./src/app/lazy/lazy-modal/lazy-modal.component.html"),
            styles: [__webpack_require__(/*! ./lazy-modal.component.scss */ "./src/app/lazy/lazy-modal/lazy-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LazyModalComponent);
    return LazyModalComponent;
}());



/***/ }),

/***/ "./src/app/lazy/lazy-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/lazy/lazy-routing.module.ts ***!
  \*********************************************/
/*! exports provided: LazyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyRoutingModule", function() { return LazyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_layout_master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-layout-master */ "./node_modules/angular-layout-master/fesm5/angular-layout-master.js");
/* harmony import */ var _complex_modal_complex_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complex-modal/complex-modal.component */ "./src/app/lazy/complex-modal/complex-modal.component.ts");
/* harmony import */ var _guarded_modal_guarded_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guarded-modal/guarded-modal.component */ "./src/app/lazy/guarded-modal/guarded-modal.component.ts");
/* harmony import */ var _lazy_modal_lazy_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lazy-modal/lazy-modal.component */ "./src/app/lazy/lazy-modal/lazy-modal.component.ts");
/* harmony import */ var _lazy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lazy.component */ "./src/app/lazy/lazy.component.ts");
/* harmony import */ var _route_param_modal_route_param_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./route-param-modal/route-param-modal.component */ "./src/app/lazy/route-param-modal/route-param-modal.component.ts");
/* harmony import */ var _static_data_static_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./static-data/static-data.component */ "./src/app/lazy/static-data/static-data.component.ts");
/* harmony import */ var _guards_observable_test_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_guards/observable-test.guard */ "./src/app/_guards/observable-test.guard.ts");
/* harmony import */ var _guards_good_cop_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_guards/good-cop.guard */ "./src/app/_guards/good-cop.guard.ts");
/* harmony import */ var _guards_bad_cop_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_guards/bad-cop.guard */ "./src/app/_guards/bad-cop.guard.ts");













// Setting up Regular Routing for Angular..
var routes = [
    // NOTE: If Angular's Router does not know about LazyModalComponent,
    // it needs to be added LazyModule @NgModule - entryComponents array.
    { path: 'lazy-modal', outlet: 'ng-router-app-wide-modal', component: _lazy_modal_lazy_modal_component__WEBPACK_IMPORTED_MODULE_6__["LazyModalComponent"] },
    { path: '', component: _lazy_component__WEBPACK_IMPORTED_MODULE_7__["LazyComponent"] },
];
// Create routes for Route Master
// RouteMaster can only do flat path matching.. '.children' will not be iterated over..
var lazyModalRoutes = [
    { path: 'lazy-modal', component: _lazy_modal_lazy_modal_component__WEBPACK_IMPORTED_MODULE_6__["LazyModalComponent"] },
    { path: 'route-param-modal/:id', component: _route_param_modal_route_param_modal_component__WEBPACK_IMPORTED_MODULE_8__["RouteParamModalComponent"] },
    { path: 'static-route-data-modal', component: _static_data_static_data_component__WEBPACK_IMPORTED_MODULE_9__["StaticDataComponent"], data: [1, 2, 3, 4, 5] },
    { path: 'guarded-modal', component: _guarded_modal_guarded_modal_component__WEBPACK_IMPORTED_MODULE_5__["GuardedModalComponent"], canActivate: [_guards_good_cop_guard__WEBPACK_IMPORTED_MODULE_11__["GoodCopGuard"], _guards_bad_cop_guard__WEBPACK_IMPORTED_MODULE_12__["BadCopGuard"]] },
    {
        path: 'complex/:route/demo/:with-more-params',
        component: _complex_modal_complex_modal_component__WEBPACK_IMPORTED_MODULE_4__["ComplexModalComponent"],
        data: [1, 2, 3, 4, 5],
        canActivate: [_guards_observable_test_guard__WEBPACK_IMPORTED_MODULE_10__["ObservableTestGuard"]]
    },
];
var customClassesModalRoutes = [
    { path: 'lazy-modal', component: _lazy_modal_lazy_modal_component__WEBPACK_IMPORTED_MODULE_6__["LazyModalComponent"] },
];
var LazyRoutingModule = /** @class */ (function () {
    // Send it to Route Master when the lazy Module loads
    function LazyRoutingModule(
    // Get info about the lazy Module
    componentFactoryResolver, injector, 
    // DI Route Master Service
    rm) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.rm = rm;
        console.log('Lazy Module Initialized!');
        // Add module data via Route Master API..
        var lazyFactoryRoutes = {
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
    LazyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            angular_layout_master__WEBPACK_IMPORTED_MODULE_3__["RouteMasterService"]])
    ], LazyRoutingModule);
    return LazyRoutingModule;
}());



/***/ }),

/***/ "./src/app/lazy/lazy.component.html":
/*!******************************************!*\
  !*** ./src/app/lazy/lazy.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Welcome to LazyComponent</h2>\n<div class=\"mb-3\">\n  Lazy Loaded From \"Lazy Module\"\n</div>\n<section class=\"mb-4\">\n  <h3>Main Feature</h3>\n  <ng-container \n  *ngFor=\"let content of mainFeature; first as isFirst\" \n  [ngTemplateOutlet]=\"divTemplate\" \n  [ngTemplateOutletContext]=\"{ $implicit: content, isFirst: isFirst }\">\n</ng-container>\n</section>\n<section>\n  <h3>Other Features to Explore</h3>\n  <ng-container \n    *ngFor=\"let content of otherFeatures\" \n    [ngTemplateOutlet]=\"divTemplate\" \n    [ngTemplateOutletContext]=\"{ $implicit: content }\">\n  </ng-container>\n</section>\n<section>\n  <h3>Complex Route Testing</h3>\n  <ng-container \n    *ngFor=\"let content of complexRouteTesting\" \n    [ngTemplateOutlet]=\"divTemplate\" \n    [ngTemplateOutletContext]=\"{ $implicit: content }\">\n  </ng-container>\n</section>\n\n<ng-template #divTemplate let-content=\"$implicit\" let-isFirst=\"isFirst\">\n  <div class=\"mb-3\">\n    <p>{{ content.description }}</p>\n    <ngb-alert *ngIf=\"isFirst && showErrorAlert\" [type]=\"'danger'\" (close)=\"showErrorAlert = false\">Angular Lazy Route Error Occurred: Check the console for details</ngb-alert>\n    <a (click)=\"content.onClick ? content.onClick() : null\" class=\"btn\"\n      [ngClass]=\"isFirst ? 'btn-warning' : 'btn-primary'\"\n      [routerLink]=\"content.routerLink\"\n      [queryParams]=\"content.queryParams ? content.queryParams : null\"\n      [fragment]=\"content.fragment ? content.fragment : null\"\n      role=\"button\">{{ content.anchorText | uppercase }}</a>\n  </div>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/lazy/lazy.component.scss":
/*!******************************************!*\
  !*** ./src/app/lazy/lazy.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhenkvbGF6eS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/lazy/lazy.component.ts":
/*!****************************************!*\
  !*** ./src/app/lazy/lazy.component.ts ***!
  \****************************************/
/*! exports provided: LazyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyComponent", function() { return LazyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LazyComponent = /** @class */ (function () {
    function LazyComponent() {
        var _this = this;
        this.showErrorAlert = false;
        this.mainFeature = [
            {
                description: "The anchor button below will fail as Angular does not allow lazy components to be routed outside it's own module.\n      See the browser console for error when the button is clicked.",
                routerLink: ['', { outlets: { 'ng-router-app-wide-modal': ['lazy-modal'] } }],
                anchorText: "Open Lazy Modal - Outlet: 'ng-router-app-wide-modal'",
                onClick: function () {
                    _this.showErrorAlert = true;
                },
            },
            {
                description: "Using Route Master, you may freely add a custom component from a lazy module and have it routed outside the\n      module.",
                routerLink: ['', { outlets: { 'rm-router-app-wide-modal': ['lazy-modal'] } }],
                anchorText: "Open Lazy Modal - Outlet: 'rm-router-app-wide-modal'",
            },
        ];
        this.otherFeatures = [
            {
                description: "404 Routing",
                routerLink: ['', { outlets: { 'rm-router-app-wide-modal': ['lazy-404-modal', '404-child'] } }],
                anchorText: "Open 404 Modal - Outlet: 'rm-router-app-wide-modal'",
            },
            {
                description: ":Route-Parameters",
                routerLink: ['', { outlets: { 'rm-router-app-wide-modal': ['route-param-modal', '123'] } }],
                anchorText: "Open Route Parameters :id = 123 - Outlet: 'rm-router-app-wide-modal'",
            },
            {
                description: "Static Route Data",
                routerLink: ['', { outlets: { 'rm-router-app-wide-modal': ['static-route-data-modal'] } }],
                anchorText: "Open Static Route Data Modal - Outlet: 'rm-router-app-wide-modal'",
            },
            {
                description: "Can Activate Guard",
                routerLink: ['', { outlets: { 'rm-router-app-wide-modal': ['guarded-modal'] } }],
                anchorText: "Open Guarded Modal - Outlet: 'rm-router-app-wide-modal'",
            },
            {
                description: "Add Predefined Classes for Created Components",
                routerLink: ['', { outlets: { 'custom-classes-modal': ['lazy-modal'] } }],
                anchorText: "Open Lazy Modal Again - Outlet: 'custom-classes-modal'",
            },
        ];
        this.complexRouteTesting = [
            {
                description: "Test a Complex Route with Route Master",
                routerLink: [
                    '',
                    {
                        outlets: {
                            'rm-router-app-wide-modal': ['complex', '456', 'demo', '789', { matrixData: 'red pill', fooBar: 'barFoo' }]
                        }
                    }
                ],
                queryParams: { foo: 'bar', data: true },
                fragment: 'my-special-fragment',
                anchorText: "Test A Complex Route - Outlet: 'rm-router-app-wide-modal'",
            }
        ];
    }
    LazyComponent.prototype.ngOnInit = function () {
    };
    LazyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lazy',
            template: __webpack_require__(/*! ./lazy.component.html */ "./src/app/lazy/lazy.component.html"),
            styles: [__webpack_require__(/*! ./lazy.component.scss */ "./src/app/lazy/lazy.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LazyComponent);
    return LazyComponent;
}());



/***/ }),

/***/ "./src/app/lazy/lazy.module.ts":
/*!*************************************!*\
  !*** ./src/app/lazy/lazy.module.ts ***!
  \*************************************/
/*! exports provided: LazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyModule", function() { return LazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _complex_modal_complex_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complex-modal/complex-modal.component */ "./src/app/lazy/complex-modal/complex-modal.component.ts");
/* harmony import */ var _guarded_modal_guarded_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guarded-modal/guarded-modal.component */ "./src/app/lazy/guarded-modal/guarded-modal.component.ts");
/* harmony import */ var _lazy_modal_lazy_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lazy-modal/lazy-modal.component */ "./src/app/lazy/lazy-modal/lazy-modal.component.ts");
/* harmony import */ var _lazy_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lazy-routing.module */ "./src/app/lazy/lazy-routing.module.ts");
/* harmony import */ var _lazy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lazy.component */ "./src/app/lazy/lazy.component.ts");
/* harmony import */ var _route_param_modal_route_param_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./route-param-modal/route-param-modal.component */ "./src/app/lazy/route-param-modal/route-param-modal.component.ts");
/* harmony import */ var _static_data_static_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./static-data/static-data.component */ "./src/app/lazy/static-data/static-data.component.ts");










var LazyModule = /** @class */ (function () {
    function LazyModule() {
    }
    LazyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _lazy_component__WEBPACK_IMPORTED_MODULE_7__["LazyComponent"],
                _lazy_modal_lazy_modal_component__WEBPACK_IMPORTED_MODULE_5__["LazyModalComponent"],
                _route_param_modal_route_param_modal_component__WEBPACK_IMPORTED_MODULE_8__["RouteParamModalComponent"],
                _complex_modal_complex_modal_component__WEBPACK_IMPORTED_MODULE_3__["ComplexModalComponent"],
                _static_data_static_data_component__WEBPACK_IMPORTED_MODULE_9__["StaticDataComponent"],
                _guarded_modal_guarded_modal_component__WEBPACK_IMPORTED_MODULE_4__["GuardedModalComponent"],
            ],
            imports: [
                _lazy_routing_module__WEBPACK_IMPORTED_MODULE_6__["LazyRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            ],
            exports: [
                _lazy_component__WEBPACK_IMPORTED_MODULE_7__["LazyComponent"],
                _lazy_modal_lazy_modal_component__WEBPACK_IMPORTED_MODULE_5__["LazyModalComponent"],
            ],
            // Add Route Master Components to entryComponents[] so it can be loaded dynamically
            entryComponents: [
                _lazy_modal_lazy_modal_component__WEBPACK_IMPORTED_MODULE_5__["LazyModalComponent"],
                _route_param_modal_route_param_modal_component__WEBPACK_IMPORTED_MODULE_8__["RouteParamModalComponent"],
                _complex_modal_complex_modal_component__WEBPACK_IMPORTED_MODULE_3__["ComplexModalComponent"],
                _static_data_static_data_component__WEBPACK_IMPORTED_MODULE_9__["StaticDataComponent"],
                _guarded_modal_guarded_modal_component__WEBPACK_IMPORTED_MODULE_4__["GuardedModalComponent"],
            ]
        })
    ], LazyModule);
    return LazyModule;
}());



/***/ }),

/***/ "./src/app/lazy/route-param-modal/route-param-modal.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/lazy/route-param-modal/route-param-modal.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Lazy Route Param Modal</h2>\n<div class=\"mb-3\">\n  <p class=\"mb-0\">Use Route Master to capture Route Parameters</p>\n  <small class=\"mb-3 d-block\">\n    Necessary as Angular's ActivatedRoute route parameters are not yet available for lazy components.\n  </small>\n  <p><strong>Route Param Key:</strong> ':id'</p>\n  <p><strong>Captured Route Param:</strong> '{{ paramMapData }}'</p>\n  <p><strong>Typeof Captured Route Param:</strong> {{ paramDataType }}</p>\n</div>\n\n<app-close-modal-button></app-close-modal-button>\n"

/***/ }),

/***/ "./src/app/lazy/route-param-modal/route-param-modal.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/lazy/route-param-modal/route-param-modal.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhenkvcm91dGUtcGFyYW0tbW9kYWwvcm91dGUtcGFyYW0tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/lazy/route-param-modal/route-param-modal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/lazy/route-param-modal/route-param-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: RouteParamModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteParamModalComponent", function() { return RouteParamModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_layout_master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-layout-master */ "./node_modules/angular-layout-master/fesm5/angular-layout-master.js");




var RouteParamModalComponent = /** @class */ (function () {
    function RouteParamModalComponent(route, router, rm) {
        this.route = route;
        this.router = router;
        this.rm = rm;
    }
    RouteParamModalComponent.prototype.ngOnInit = function () {
        // Does not work with lazy components
        this.route.paramMap.subscribe(function (params) {
            console.log("ActivatedRoute.paramMap 'id' is unavailable at RouteParamModalComponent - Captured Value: ", params.get('id'));
        });
        this.route.params.subscribe(function (params) {
            console.log("ActivatedRoute.params unavailable in RouteParamModalComponent - Captured Value: ", params);
        });
        // Route Master Workaround
        this.paramMapData = this.rm.paramMap('rm-router-app-wide-modal').get('id');
        this.params = this.rm.params('rm-router-app-wide-modal');
        this.paramDataType = typeof this.paramMapData;
    };
    RouteParamModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-route-param-modal',
            template: __webpack_require__(/*! ./route-param-modal.component.html */ "./src/app/lazy/route-param-modal/route-param-modal.component.html"),
            styles: [__webpack_require__(/*! ./route-param-modal.component.scss */ "./src/app/lazy/route-param-modal/route-param-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular_layout_master__WEBPACK_IMPORTED_MODULE_3__["RouteMasterService"]])
    ], RouteParamModalComponent);
    return RouteParamModalComponent;
}());



/***/ }),

/***/ "./src/app/lazy/static-data/static-data.component.html":
/*!*************************************************************!*\
  !*** ./src/app/lazy/static-data/static-data.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Static Route Data Modal</h2>\n<div class=\"mb-3\">\n  <p class=\"mb-0\">2 ways to pass static data to lazy components:</p>\n  <div class=\"mb-3\">\n    <div>\n      <strong>Static Data:</strong>\n    </div>\n    <div>\n      <code>this.rm.data('outletName'):</code>\n      <div>=> {{ outletCurrentData | json }}</div>\n    </div>\n  </div>\n  <div class=\"mb-3\">\n    <div>\n      <strong>Stream Data:</strong>\n    </div>\n    <div>\n      <code>this.rm.data$('outletName').subscribe():</code>\n      <div>=> {{ outletData$ | async | json }}</div>\n    </div>\n  </div>\n</div>\n<app-close-modal-button></app-close-modal-button>\n"

/***/ }),

/***/ "./src/app/lazy/static-data/static-data.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/lazy/static-data/static-data.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhenkvc3RhdGljLWRhdGEvc3RhdGljLWRhdGEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/lazy/static-data/static-data.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/lazy/static-data/static-data.component.ts ***!
  \***********************************************************/
/*! exports provided: StaticDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticDataComponent", function() { return StaticDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_layout_master__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-layout-master */ "./node_modules/angular-layout-master/fesm5/angular-layout-master.js");



var StaticDataComponent = /** @class */ (function () {
    function StaticDataComponent(rm) {
        this.rm = rm;
    }
    StaticDataComponent.prototype.ngOnInit = function () {
        // Subscribe to Data Stream
        this.outletData$ = this.rm.data$('rm-router-app-wide-modal');
        this.outletDataSubscription = this.outletData$.subscribe(function (data) {
            console.log('Subscribe to outlet data', data);
        });
        // or just get current outlet data value..
        this.outletCurrentData = this.rm.data('rm-router-app-wide-modal');
        console.log('log outletCurrentData', this.outletCurrentData);
    };
    StaticDataComponent.prototype.ngOnDestroy = function () {
        this.outletDataSubscription.unsubscribe();
    };
    StaticDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-static-data',
            template: __webpack_require__(/*! ./static-data.component.html */ "./src/app/lazy/static-data/static-data.component.html"),
            styles: [__webpack_require__(/*! ./static-data.component.scss */ "./src/app/lazy/static-data/static-data.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_layout_master__WEBPACK_IMPORTED_MODULE_2__["RouteMasterService"]])
    ], StaticDataComponent);
    return StaticDataComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-lazy-lazy-module.js.map