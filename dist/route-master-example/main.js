(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/app/lazy/lazy.module": [
		"./src/app/lazy/lazy.module.ts",
		"src-app-lazy-lazy-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_core/close-modal-button/close-modal-button.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/_core/close-modal-button/close-modal-button.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-primary\" \n[routerLink]=\"[\n    '', \n    { \n      outlets: { \n        'ng-router-app-wide-modal': null, \n        'rm-router-app-wide-modal': null,\n        'custom-classes-modal': null\n      }\n    }\n  ]\" role=\"button\">\n  {{ buttonText | uppercase }}\n</a>\n"

/***/ }),

/***/ "./src/app/_core/close-modal-button/close-modal-button.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/_core/close-modal-button/close-modal-button.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb3JlL2Nsb3NlLW1vZGFsLWJ1dHRvbi9jbG9zZS1tb2RhbC1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/_core/close-modal-button/close-modal-button.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/_core/close-modal-button/close-modal-button.component.ts ***!
  \**************************************************************************/
/*! exports provided: CloseModalButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseModalButtonComponent", function() { return CloseModalButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CloseModalButtonComponent = /** @class */ (function () {
    function CloseModalButtonComponent() {
        this.buttonText = 'Close Modal';
    }
    CloseModalButtonComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CloseModalButtonComponent.prototype, "buttonText", void 0);
    CloseModalButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-close-modal-button',
            template: __webpack_require__(/*! ./close-modal-button.component.html */ "./src/app/_core/close-modal-button/close-modal-button.component.html"),
            styles: [__webpack_require__(/*! ./close-modal-button.component.scss */ "./src/app/_core/close-modal-button/close-modal-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CloseModalButtonComponent);
    return CloseModalButtonComponent;
}());



/***/ }),

/***/ "./src/app/_core/core.module.ts":
/*!**************************************!*\
  !*** ./src/app/_core/core.module.ts ***!
  \**************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/_core/header/header.component.ts");
/* harmony import */ var _home_modal_home_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-modal/home-modal.component */ "./src/app/_core/home-modal/home-modal.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/_core/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/_core/navbar/navbar.component.ts");
/* harmony import */ var _not_found_modal_not_found_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found-modal/not-found-modal.component */ "./src/app/_core/not-found-modal/not-found-modal.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/_core/not-found/not-found.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/_core/spinner/spinner.component.ts");
/* harmony import */ var _unauthorized_modal_unauthorized_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./unauthorized-modal/unauthorized-modal.component */ "./src/app/_core/unauthorized-modal/unauthorized-modal.component.ts");











var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"],
                _home_modal_home_modal_component__WEBPACK_IMPORTED_MODULE_4__["HomeModalComponent"],
                _not_found_modal_not_found_modal_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundModalComponent"],
                _unauthorized_modal_unauthorized_modal_component__WEBPACK_IMPORTED_MODULE_10__["UnauthorizedModalComponent"],
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            ],
            exports: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _home_modal_home_modal_component__WEBPACK_IMPORTED_MODULE_4__["HomeModalComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"],
            ],
            // Add Route Master Components to entryComponents[] so it can be loaded dynamically
            entryComponents: [
                _not_found_modal_not_found_modal_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundModalComponent"],
                _unauthorized_modal_unauthorized_modal_component__WEBPACK_IMPORTED_MODULE_10__["UnauthorizedModalComponent"],
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/_core/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/_core/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1 class=\"d-flex justify-content-start align-items-center\">\n    <span class=\"logo d-inline-block p-4 mr-3\"></span>\n    <span>Route Master</span>\n  </h1>\n  <small>(Angular 7.1.0 demo)</small>\n  <p>\n    It allows Entry Components of a Lazy Loaded NgModule to be available outside the Module through Routing.\n  </p>\n  <p>\n    This demo was inspired by a few github issues...\n  </p>\n  <ul>\n    <li *ngFor=\"let issue of issues\">\n      <a [href]=\"issue\" target=\"_blank\">{{issue}}</a>\n    </li>\n  </ul>\n</header>\n"

/***/ }),

/***/ "./src/app/_core/header/header.component.scss":
/*!****************************************************!*\
  !*** ./src/app/_core/header/header.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb3JlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/_core/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/_core/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.issues = [
            'https://github.com/angular/angular/issues/17343',
            'https://github.com/angular/angular/issues/10981',
            'https://github.com/angular/angular/issues/14324',
            'https://github.com/angular/angular/issues/26964',
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/_core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/_core/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/_core/home-modal/home-modal.component.html":
/*!************************************************************!*\
  !*** ./src/app/_core/home-modal/home-modal.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Home Modal</h2>\n<p>Hello from Home Modal Component!</p>\n<app-close-modal-button></app-close-modal-button>"

/***/ }),

/***/ "./src/app/_core/home-modal/home-modal.component.scss":
/*!************************************************************!*\
  !*** ./src/app/_core/home-modal/home-modal.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb3JlL2hvbWUtbW9kYWwvaG9tZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/_core/home-modal/home-modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/_core/home-modal/home-modal.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModalComponent", function() { return HomeModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeModalComponent = /** @class */ (function () {
    function HomeModalComponent() {
    }
    HomeModalComponent.prototype.ngOnInit = function () {
    };
    HomeModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-modal',
            template: __webpack_require__(/*! ./home-modal.component.html */ "./src/app/_core/home-modal/home-modal.component.html"),
            styles: [__webpack_require__(/*! ./home-modal.component.scss */ "./src/app/_core/home-modal/home-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeModalComponent);
    return HomeModalComponent;
}());



/***/ }),

/***/ "./src/app/_core/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/_core/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Welcome to HomeComponent</h2>\n<div class=\"mb-3\">\n  Loaded From Root Module (AppModule)\n</div>\n<div>\n  <p>The anchor button below demos using Angular's named outlet to load a component. This is only possible here since\n    the component and the named router-outlet are part of AppModule.\n    If a lazy module tried to use AppModules named router-outlet for routing, the route will fail. Select Lazy Module in\n    the Navbar when finished viewing home modal demo.</p>\n  <a class=\"btn btn-primary\" [routerLink]=\"['', { outlets: { 'ng-router-app-wide-modal': ['home-modal'] }}]\"\n    role=\"button\">{{ anchorText | uppercase }}</a>\n</div>"

/***/ }),

/***/ "./src/app/_core/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/_core/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb3JlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/_core/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/_core/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.anchorText = "Open Home Modal - Outlet: 'ng-router-app-wide-modal'";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/_core/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/_core/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/_core/navbar/navbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/_core/navbar/navbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand d-flex justify-content-start align-items-center\" [routerLink]=\"home.path\">\n    <span class=\"logo d-inline-block p-3 mr-2\"></span>\n    <span>Route Master</span>\n  </a>\n  <div id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto d-flex flex-row justify-content-between align-items-center\">\n      <li *ngFor=\"let nav of navs\" class=\"nav-item\">\n        <a class=\"nav-link pl-3 pr-3\" [routerLink]=\"nav.path\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">{{ nav.name }}</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/_core/navbar/navbar.component.scss":
/*!****************************************************!*\
  !*** ./src/app/_core/navbar/navbar.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb3JlL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/_core/navbar/navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/_core/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.home = { name: 'Home', path: '' };
        this.navs = [
            this.home,
            { name: 'Lazy Module', path: ['/', 'lazy-module'] },
        ];
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/_core/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/_core/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/_core/not-found-modal/not-found-modal.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/_core/not-found-modal/not-found-modal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>404</h2>\n<p>\n  Not-found Modal works!\n</p>\n<p>\n  This Modal is a part of AppCore and is added through AppRoutingModule.\n</p>\n<app-close-modal-button></app-close-modal-button>"

/***/ }),

/***/ "./src/app/_core/not-found-modal/not-found-modal.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/_core/not-found-modal/not-found-modal.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb3JlL25vdC1mb3VuZC1tb2RhbC9ub3QtZm91bmQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/_core/not-found-modal/not-found-modal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/_core/not-found-modal/not-found-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: NotFoundModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModalComponent", function() { return NotFoundModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundModalComponent = /** @class */ (function () {
    function NotFoundModalComponent() {
    }
    NotFoundModalComponent.prototype.ngOnInit = function () {
    };
    NotFoundModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found-modal',
            template: __webpack_require__(/*! ./not-found-modal.component.html */ "./src/app/_core/not-found-modal/not-found-modal.component.html"),
            styles: [__webpack_require__(/*! ./not-found-modal.component.scss */ "./src/app/_core/not-found-modal/not-found-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundModalComponent);
    return NotFoundModalComponent;
}());



/***/ }),

/***/ "./src/app/_core/not-found/not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/_core/not-found/not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>404</h2>\n<p>\n  Page Not Found! :(\n</p>\n<a class=\"btn btn-primary\" [routerLink]=\"['/']\" role=\"button\">Go Back</a>"

/***/ }),

/***/ "./src/app/_core/not-found/not-found.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/_core/not-found/not-found.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb3JlL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/_core/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/_core/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/_core/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/_core/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/_core/spinner/spinner.component.html":
/*!******************************************************!*\
  !*** ./src/app/_core/spinner/spinner.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.should-show]=\"\" class=\"app-spinner\">\n  <div class=\"spinner-border text-white\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/_core/spinner/spinner.component.scss":
/*!******************************************************!*\
  !*** ./src/app/_core/spinner/spinner.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes spinner-border {\n  to {\n    transform: rotate(360deg); } }\n\n@keyframes spinner-border {\n  to {\n    transform: rotate(360deg); } }\n\n.spinner-border {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  border: .25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  -webkit-animation: spinner-border .75s linear infinite;\n          animation: spinner-border .75s linear infinite; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Kb25hdGhhbjAwMi9EZXNrdG9wL3JvdXRlLW1hc3Rlci1leGFtcGxlL3NyYy9hcHAvX2NvcmUvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSwwQkFBeUIsRUFBQSxFQUFBOztBQUY3QjtFQUNFO0lBQ0UsMEJBQXlCLEVBQUEsRUFBQTs7QUFJN0I7RUFDRSxzQkFBcUI7RUFDckIsWUFBVztFQUNYLGFBQVk7RUFDWiw0QkFBMkI7RUFDM0IsaUNBQWdDO0VBQ2hDLGdDQUErQjtFQUUvQixtQkFBa0I7RUFDbEIsdURBQThDO1VBQTlDLCtDQUE4QyxFQUMvQyIsImZpbGUiOiJzcmMvYXBwL19jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc3Bpbm5lci1ib3JkZXIge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4uc3Bpbm5lci1ib3JkZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgYm9yZGVyOiAuMjVlbSBzb2xpZCBjdXJyZW50Q29sb3I7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBwcm9wZXJ0eS1ibGFja2xpc3RcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHNwaW5uZXItYm9yZGVyIC43NXMgbGluZWFyIGluZmluaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/_core/spinner/spinner.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_core/spinner/spinner.component.ts ***!
  \****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/_core/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/_core/spinner/spinner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/_core/unauthorized-modal/unauthorized-modal.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/_core/unauthorized-modal/unauthorized-modal.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>401</h2>\n<p>\n  You are not allowed to view the Secret Modal Component. A route guard has stopped you and redirected you here.\n</p>\n<figure>\n  <img class=\"rounded img-size\" src=\"/assets/route-guard.jpg\" alt=\"A security guard facing the other way going down an escalator. He wears his white security shirt proudly.\">\n</figure>\n<p>\n  This Modal is a part of AppCore and is added through AppRoutingModule.\n</p>\n<app-close-modal-button></app-close-modal-button>"

/***/ }),

/***/ "./src/app/_core/unauthorized-modal/unauthorized-modal.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/_core/unauthorized-modal/unauthorized-modal.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-size {\n  width: 300px;\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Kb25hdGhhbjAwMi9EZXNrdG9wL3JvdXRlLW1hc3Rlci1leGFtcGxlL3NyYy9hcHAvX2NvcmUvdW5hdXRob3JpemVkLW1vZGFsL3VuYXV0aG9yaXplZC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9fY29yZS91bmF1dGhvcml6ZWQtbW9kYWwvdW5hdXRob3JpemVkLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1zaXplIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/_core/unauthorized-modal/unauthorized-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/_core/unauthorized-modal/unauthorized-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: UnauthorizedModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedModalComponent", function() { return UnauthorizedModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnauthorizedModalComponent = /** @class */ (function () {
    function UnauthorizedModalComponent() {
    }
    UnauthorizedModalComponent.prototype.ngOnInit = function () {
    };
    UnauthorizedModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unauthorized-modal',
            template: __webpack_require__(/*! ./unauthorized-modal.component.html */ "./src/app/_core/unauthorized-modal/unauthorized-modal.component.html"),
            styles: [__webpack_require__(/*! ./unauthorized-modal.component.scss */ "./src/app/_core/unauthorized-modal/unauthorized-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UnauthorizedModalComponent);
    return UnauthorizedModalComponent;
}());



/***/ }),

/***/ "./src/app/_services/can-scroll.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/can-scroll.service.ts ***!
  \*************************************************/
/*! exports provided: CanScrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanScrollService", function() { return CanScrollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_layout_master__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-layout-master */ "./node_modules/angular-layout-master/fesm5/angular-layout-master.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CanScrollService = /** @class */ (function () {
    function CanScrollService(router, rm) {
        this.router = router;
        this.rm = rm;
    }
    CanScrollService.prototype.createCheckIfBodyCanScrollSubscription = function () {
        var _this = this;
        return this.rm.navigationEnd$.subscribe(function (rmNavigationEnd) {
            if (_this.router.url.includes('(ng-router-app-wide-modal:')
                || _this.router.url.includes('(rm-router-app-wide-modal:')
                || _this.router.url.includes('(custom-classes-modal:')) {
                window.document.body.style.overflow = 'hidden';
            }
            else {
                window.document.body.style.overflow = 'initial';
            }
        });
    };
    CanScrollService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_layout_master__WEBPACK_IMPORTED_MODULE_2__["RouteMasterService"]])
    ], CanScrollService);
    return CanScrollService;
}());



/***/ }),

/***/ "./src/app/_shared/shared.module.ts":
/*!******************************************!*\
  !*** ./src/app/_shared/shared.module.ts ***!
  \******************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _core_close_modal_button_close_modal_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_core/close-modal-button/close-modal-button.component */ "./src/app/_core/close-modal-button/close-modal-button.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _core_close_modal_button_close_modal_button_component__WEBPACK_IMPORTED_MODULE_3__["CloseModalButtonComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _core_close_modal_button_close_modal_button_component__WEBPACK_IMPORTED_MODULE_3__["CloseModalButtonComponent"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_layout_master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-layout-master */ "./node_modules/angular-layout-master/fesm5/angular-layout-master.js");
/* harmony import */ var _core_home_modal_home_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_core/home-modal/home-modal.component */ "./src/app/_core/home-modal/home-modal.component.ts");
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_core/home/home.component */ "./src/app/_core/home/home.component.ts");
/* harmony import */ var _core_not_found_modal_not_found_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_core/not-found-modal/not-found-modal.component */ "./src/app/_core/not-found-modal/not-found-modal.component.ts");
/* harmony import */ var _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_core/not-found/not-found.component */ "./src/app/_core/not-found/not-found.component.ts");
/* harmony import */ var _core_unauthorized_modal_unauthorized_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_core/unauthorized-modal/unauthorized-modal.component */ "./src/app/_core/unauthorized-modal/unauthorized-modal.component.ts");









var routes = [
    { path: 'lazy-module', loadChildren: 'src/app/lazy/lazy.module#LazyModule' },
    { path: 'home-modal', outlet: 'ng-router-app-wide-modal', component: _core_home_modal_home_modal_component__WEBPACK_IMPORTED_MODULE_4__["HomeModalComponent"] },
    { path: '', component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: '**', component: _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"] },
];
// Add Core Routes for RouteMaster
// NOTE: It is first come first serve route rules.. so keep '**' as the last route.
// When a lazy modules loads, new route arrays are always concatenated to the START of each outlet's known routes,
// This allows the first routes having the '**' path stay at the bottom since it's already loaded first here in AppRoutingModule.
var coreModalRoutes = [
    // ..lazy modules will concatenated their route arrays up here (match is per named-outlet so register this array twice)
    { path: 'unauthorized', component: _core_unauthorized_modal_unauthorized_modal_component__WEBPACK_IMPORTED_MODULE_8__["UnauthorizedModalComponent"] },
    { path: '**', component: _core_not_found_modal_not_found_modal_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundModalComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule(
    // Get info about the Module
    componentFactoryResolver, injector, 
    // DI Route Master Service
    rm) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.rm = rm;
        // Add module data via Route Master API..
        var lazyFactoryRoutes = {
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
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            angular_layout_master__WEBPACK_IMPORTED_MODULE_3__["RouteMasterService"]])
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- App Document -->\n<app-navbar></app-navbar>\n<main class=\"p-3\">\n  <app-header></app-header>\n  <section>\n    <hr>\n    <router-outlet></router-outlet>\n  </section>\n</main>\n\n<!-- App Positioned Elements -->\n<div class=\"app-background position-center\" [class.should-show]=\"router.url.includes('(ng-router-app-wide-modal:') || router.url.includes('(rm-router-app-wide-modal:') || router.url.includes('(custom-classes-modal:')\"></div>\n<app-spinner class=\"position-center\" [class.should-show]=\"rm.getOutlet('rm-router-app-wide-modal').isResolving || rm.getOutlet('custom-classes-modal').isResolving\"></app-spinner>\n<div  class=\"app-wide-modal-container position-center\" [class.should-show]=\"!rm.getOutlet('rm-router-app-wide-modal').isResolving \n&& (\n      router.url.includes('(ng-router-app-wide-modal:') \n      || router.url.includes('(rm-router-app-wide-modal:')\n      || router.url.includes('(custom-classes-modal:')\n    )\">\n  <!-- Regular Angular Router-Outlet -->\n  <router-outlet #ngOutlet=\"outlet\" name=\"ng-router-app-wide-modal\"></router-outlet>\n  <!-- Route Master Router-Outlet -->\n  <lay-router [animationDuration]=\"500\" #appWideModal name=\"rm-router-app-wide-modal\"></lay-router>\n  <!-- Styled Modal Demo -->\n  <lay-router [animationDuration]=\"500\" #appWideModal name=\"custom-classes-modal\"></lay-router>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.app-wide-modal-container {\n  z-index: 2;\n  background-color: #fafafa;\n  border-radius: 8px;\n  opacity: 0;\n  padding: 1rem;\n  width: 90vw;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Kb25hdGhhbjAwMi9EZXNrdG9wL3JvdXRlLW1hc3Rlci1leGFtcGxlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0MsYUFBWTtFQUNaLGNBQWE7RUFDYixxQ0FBb0MsRUFDckM7O0FBRUQ7RUFDRSxXQUFVO0VBQ1YsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsY0FBYTtFQUNiLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuYXBwLWJhY2tncm91bmQge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmFwcC13aWRlLW1vZGFsLWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDkwdnc7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_can_scroll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/can-scroll.service */ "./src/app/_services/can-scroll.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_layout_master__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-layout-master */ "./node_modules/angular-layout-master/fesm5/angular-layout-master.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(router, rm, canScroll) {
        this.router = router;
        this.rm = rm;
        this.canScroll = canScroll;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.canScrollSubscription = this.canScroll.createCheckIfBodyCanScrollSubscription();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.canScrollSubscription.unsubscribe();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_layout_master__WEBPACK_IMPORTED_MODULE_4__["RouteMasterService"],
            _services_can_scroll_service__WEBPACK_IMPORTED_MODULE_1__["CanScrollService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_layout_master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-layout-master */ "./node_modules/angular-layout-master/fesm5/angular-layout-master.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_core/core.module */ "./src/app/_core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");









var routeMasterConfig = {
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot(),
                angular_layout_master__WEBPACK_IMPORTED_MODULE_3__["RouteMasterModule"].forRoot(routeMasterConfig),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Jonathan002/Desktop/route-master-example/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map