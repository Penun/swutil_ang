(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _species_species_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./species/species.component */ "./src/app/species/species.component.ts");
/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./careers/careers.component */ "./src/app/careers/careers.component.ts");





var routes = [
    { path: 'species', redirectTo: '', pathMatch: "full" },
    { path: '', component: _species_species_component__WEBPACK_IMPORTED_MODULE_3__["SpeciesComponent"] },
    { path: 'careers', component: _careers_careers_component__WEBPACK_IMPORTED_MODULE_4__["CareersComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainDiv {\n    /* transform: rotateX(5deg);\n    -moz-transform: rotateX(5deg);\n    -webkit-transform:rotateX(5deg); */\n}\n\n.menu_wrapper {\n\tposition: absolute;\n\ttop: 2.5vh;\n\tmargin-left: 3vw;\n\theight: 4vh;\n\tfont-size: 3vmin;\n\tdisplay: flex;\n}\n\n.tab_header {\n\ttransition: all 500ms ease;\n\t-webkit-transition: all 500ms ease;\n\t-moz-transition: all 500ms ease;\n\t-o-transition:width 500ms ease;\n\tdisplay: flex;\n\twidth: auto;\n\tjustify-content: space-evenly;\n}\n\n/* .tab_header:hover {\n\t-ms-transform: translate(0, -1.25em);\n    -webkit-transform: translate(0, -1.25em);\n    transform: translate(0, -1.25em);\n} */\n\n.menu_tab {\n\tcursor: pointer;\n\ttext-align: center;\n\tpadding: 0 1vw 0 1vw;\n}\n\n.menu_index {\n\tz-index: 200;\n}\n\n.tab {\n\tbackground-image: url(\"/static/img/light_underline.png\");\n\tbackground-repeat: no-repeat;\n\tbackground-position: center bottom;\n\tbackground-size: 100%;\n\tcursor: pointer;\n\ttext-align: center;\n\tmargin: 0 1vw 0 1vw;\n}\n\n.tab:hover {\n\tbackground-image: url(\"/static/img/light_underline_high.png\");\n\tcolor: #293c56;\n\tbackground-size: 100% 100%;\n}\n\n.menu_arrow {\n\tmax-height: 3vh;\n}\n\n.menu_arrow_l {\n transform: rotateZ(-17.1deg);\n}\n\n.menu_arrow_r {\n transform: rotateZ(17.1deg);\n}\n\n.hide {\n    display: none;\n}\n\n.hide_m {\n\tdisplay: none;\n}\n\n.fade_in {\n\tanimation-name: fade_in;\n\tanimation-duration: 1750ms;\n\t-webkit-animation-name: fade_in;\n\t-webkit-animation-duration: 1750ms;\n\t-moz-animation-name: fade_in;\n\t-moz-animation-duration: 1750ms;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTs7c0NBRWtDO0FBQ3RDOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsa0NBQWtDO0NBQ2xDLCtCQUErQjtDQUMvQiw4QkFBOEI7Q0FDOUIsYUFBYTtDQUNiLFdBQVc7Q0FDWCw2QkFBNkI7QUFDOUI7O0FBRUE7Ozs7R0FJRzs7QUFFSDtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0Msd0RBQXdEO0NBQ3hELDRCQUE0QjtDQUM1QixrQ0FBa0M7Q0FDbEMscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsNkRBQTZEO0NBQzdELGNBQWM7Q0FDZCwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBR0ksNEJBQTRCO0FBQ2hDOztBQUVBO0NBR0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QiwwQkFBMEI7Q0FDMUIsK0JBQStCO0NBQy9CLGtDQUFrQztDQUNsQyw0QkFBNEI7Q0FDNUIsK0JBQStCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkRpdiB7XG4gICAgLyogdHJhbnNmb3JtOiByb3RhdGVYKDVkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDVkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoNWRlZyk7ICovXG59XG5cbi5tZW51X3dyYXBwZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMi41dmg7XG5cdG1hcmdpbi1sZWZ0OiAzdnc7XG5cdGhlaWdodDogNHZoO1xuXHRmb250LXNpemU6IDN2bWluO1xuXHRkaXNwbGF5OiBmbGV4O1xufVxuXG4udGFiX2hlYWRlciB7XG5cdHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuXHQtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuXHQtby10cmFuc2l0aW9uOndpZHRoIDUwMG1zIGVhc2U7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHdpZHRoOiBhdXRvO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLyogLnRhYl9oZWFkZXI6aG92ZXIge1xuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEuMjVlbSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMS4yNWVtKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMS4yNWVtKTtcbn0gKi9cblxuLm1lbnVfdGFiIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDAgMXZ3IDAgMXZ3O1xufVxuXG4ubWVudV9pbmRleCB7XG5cdHotaW5kZXg6IDIwMDtcbn1cblxuLnRhYiB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaW1nL2xpZ2h0X3VuZGVybGluZS5wbmdcIik7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbjogMCAxdncgMCAxdnc7XG59XG5cbi50YWI6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZy9saWdodF91bmRlcmxpbmVfaGlnaC5wbmdcIik7XG5cdGNvbG9yOiAjMjkzYzU2O1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLm1lbnVfYXJyb3cge1xuXHRtYXgtaGVpZ2h0OiAzdmg7XG59XG5cbi5tZW51X2Fycm93X2wge1xuXHQtbXMtdHJhbnNmb3JtOiByb3RhdGVaKC0xNy4xZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigtMTcuMWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xNy4xZGVnKTtcbn1cblxuLm1lbnVfYXJyb3dfciB7XG5cdC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooMTcuMWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMTcuMWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDE3LjFkZWcpO1xufVxuXG4uaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGVfbSB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mYWRlX2luIHtcblx0YW5pbWF0aW9uLW5hbWU6IGZhZGVfaW47XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMTc1MG1zO1xuXHQtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlX2luO1xuXHQtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTc1MG1zO1xuXHQtbW96LWFuaW1hdGlvbi1uYW1lOiBmYWRlX2luO1xuXHQtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMTc1MG1zO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainDiv\">\n    <div class=\"page sw_back\">\n        <div class=\"menu_wrapper\">\n            <div class=\"tab_header sw_back menu_tab menu_index\" (click)=\"toggleMenu()\" (mouseenter)=\"darkArrow()\" (mouseleave)=\"lightArrow()\">\n                <img src=\"/static/img/{{menuArrow}}\" alt=\"^\" [@rotateLeft]=\"menuStatus ? 'left' : 'vertical'\" class=\"menu_arrow\" />\n                <img src=\"/static/img/{{menuArrow}}\" alt=\"^\" [ngClass]=\"{hide_m: menuStatus}\" class=\"menu_arrow menu_arrow_r fade_in\" />\n            </div>\n            <div class=\"tab_header sw_back menu_index\" [@openClose]=\"menuStatus ? 'true' : 'false'\">\n                <span class=\"tab fade_in\" routerLink=\"/\" routerLinkActive=\"hide\" [routerLinkActiveOptions]=\"{exact: true}\" [ngClass]=\"{hide_m: !menuStatus}\" (click)=\"toggleMenu()\">Species</span>\n                <span class=\"tab fade_in\" routerLink=\"/careers\" routerLinkActive=\"hide\" [routerLinkActiveOptions]=\"{exact: true}\" [ngClass]=\"{hide_m: !menuStatus}\" (click)=\"toggleMenu()\">Careers</span>\n                <span class=\"tab fade_in\" routerLinkActive=\"hide\" [ngClass]=\"{hide_m: !menuStatus}\">Weapons</span>\n                <span class=\"tab fade_in\" routerLinkActive=\"hide\" [ngClass]=\"{hide_m: !menuStatus}\">Armor</span>\n            </div>\n        </div>\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/unit.service */ "./src/app/services/unit.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(unit) {
        this.unit = unit;
        this.menuStatus = false;
        this.lightArrow();
    }
    AppComponent.prototype.toggleMenu = function () {
        if (this.menuStatus) {
            this.menuStatus = false;
        }
        else {
            this.menuStatus = true;
        }
        this.unit.log("Menu Status :: " + this.menuStatus);
    };
    AppComponent.prototype.lightArrow = function () {
        this.menuArrow = "menu_arrow.png";
    };
    AppComponent.prototype.darkArrow = function () {
        this.menuArrow = "menu_arrow_inv.png";
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openClose', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ width: '50vw' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ width: '0vw' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('false => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500)),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(250))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('rotateLeft', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('vertical', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotateZ(-17.1deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotateZ(-90deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('vertical => left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500)),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('left => vertical', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(250))
                ])
            ],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_unit_service__WEBPACK_IMPORTED_MODULE_3__["UnitService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _species_species_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./species/species.component */ "./src/app/species/species.component.ts");
/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./careers/careers.component */ "./src/app/careers/careers.component.ts");
/* harmony import */ var _species_species_attribute_image_safe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./species/species.attribute.image.safe.pipe */ "./src/app/species/species.attribute.image.safe.pipe.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _species_species_component__WEBPACK_IMPORTED_MODULE_7__["SpeciesComponent"],
                _species_species_attribute_image_safe_pipe__WEBPACK_IMPORTED_MODULE_9__["SafeHtmlPipe"],
                _careers_careers_component__WEBPACK_IMPORTED_MODULE_8__["CareersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/careers/careers.component.css":
/*!***********************************************!*\
  !*** ./src/app/careers/careers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tripPage {\n\tdisplay: grid;\n\tgrid-template-columns: 16% 16% 1fr;\n\theight: 95vh;\n\tword-break: break-all;\n\tpadding-top: 2.5vh;\n}\n\n.pageGrid {\n\tdisplay: grid;\n\tgrid-template-rows: 4vh auto 1fr;\n\tgrid-row-gap: 1vh;\n\theight: 95vh;\n\toverflow-y: auto;\n}\n\n.innerCol {\n\tpadding-top: 1vh;\n\tdisplay: grid;\n\tgrid-auto-rows: -webkit-max-content;\n\tgrid-auto-rows: max-content;\n\tgrid-gap: 1vh;\n\toverflow-y: auto;\n}\n\n.closeButton {\n\tfont-size: 2vmin;\n\tgrid-row: 1;\n\tgrid-column: 2;\n\tjustify-self: right;\n\tmargin: 0 1.5vw 0 0;\n}\n\n.skillDiv {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr);\n\tgrid-template-rows: auto;\n\talign-items: end;\n\tjustify-items: stretch;\n\tmargin-bottom: 3vh;\n}\n\n.skill {\n\ttext-align: center;\n\tbackground-image: url('/static/img/light_underline.png');\n\tbackground-repeat: no-repeat;\n\tbackground-position: center bottom;\n\tbackground-size: 95% 15%;\n}\n\n.specialWrap {\n\tdisplay: grid;\n\tgrid-template-rows: repeat(9, 1fr);\n\tgrid-template-columns: repeat(7, 1fr);\n\theight: 70vh;\n}\n\n.talent {\n\tfont-size: 1.5vmin;\n\ttext-align: center;\n\tz-index: 125;\n\talign-self: stretch;\n\tpadding: 2vh .4vw 0 .4vw;\n}\n\n.talent:hover {\n\tbackground-image: url(\"/static/img/sw_back_h.png\");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: round;\n\tcursor: pointer;\n\tcolor: #F0F0F0;\n}\n\n.conn > img {\n\twidth: 100%;\n\tposition: relative;\n\ttop: 35%\n}\n\n.vConn > img {\n\ttransform: rotate(90deg);\n    position: relative;\n    top: 40%;\n    left: 15%;\n\twidth: 60%;\n}\n\n.specialGrid {\n\tdisplay: grid;\n\tgrid-row-gap: 1vh;\n}\n\n.talentPaOut {\n\tgrid-row: 1 / 10;\n\tgrid-column: 1 / 8;\n\tz-index: 150;\n}\n\n.talentPanel {\n\toverflow-y: auto;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 10vw;\n\tgrid-row-gap: 1vh;\n\tpadding: 3vh 1vw 0 1vw;\n\tmax-height: 95%;\n}\n\n.talentPanel > p {\n\twidth: 100%;\n\tfont-size: 1.1em;\n}\n\n.taleDesc {\n\twhite-space: pre-line;\n\tfont-size: 2.25vmin;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZWVycy9jYXJlZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2Isa0NBQWtDO0NBQ2xDLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtDQUNiLGdDQUFnQztDQUNoQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsbUNBQTJCO0NBQTNCLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2IsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQ0FBcUM7Q0FDckMsd0JBQXdCO0NBQ3hCLGdCQUFnQjtDQUNoQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHdEQUF3RDtDQUN4RCw0QkFBNEI7Q0FDNUIsa0NBQWtDO0NBQ2xDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixrQ0FBa0M7Q0FDbEMscUNBQXFDO0NBQ3JDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxrREFBa0Q7Q0FDbEQsMEJBQTBCO0NBQzFCLHdCQUF3QjtDQUN4QixlQUFlO0NBQ2YsY0FBYztBQUNmOztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQjtBQUNEOztBQUVBO0NBQ0Msd0JBQXdCO0lBQ3JCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztDQUNaLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsK0JBQStCO0NBQy9CLGlCQUFpQjtDQUNqQixzQkFBc0I7Q0FDdEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2FyZWVycy9jYXJlZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJpcFBhZ2Uge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2JSAxNiUgMWZyO1xuXHRoZWlnaHQ6IDk1dmg7XG5cdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblx0cGFkZGluZy10b3A6IDIuNXZoO1xufVxuXG4ucGFnZUdyaWQge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDR2aCBhdXRvIDFmcjtcblx0Z3JpZC1yb3ctZ2FwOiAxdmg7XG5cdGhlaWdodDogOTV2aDtcblx0b3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmlubmVyQ29sIHtcblx0cGFkZGluZy10b3A6IDF2aDtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xuXHRncmlkLWdhcDogMXZoO1xuXHRvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY2xvc2VCdXR0b24ge1xuXHRmb250LXNpemU6IDJ2bWluO1xuXHRncmlkLXJvdzogMTtcblx0Z3JpZC1jb2x1bW46IDI7XG5cdGp1c3RpZnktc2VsZjogcmlnaHQ7XG5cdG1hcmdpbjogMCAxLjV2dyAwIDA7XG59XG5cbi5za2lsbERpdiB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcblx0YWxpZ24taXRlbXM6IGVuZDtcblx0anVzdGlmeS1pdGVtczogc3RyZXRjaDtcblx0bWFyZ2luLWJvdHRvbTogM3ZoO1xufVxuXG4uc2tpbGwge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWcvbGlnaHRfdW5kZXJsaW5lLnBuZycpO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDk1JSAxNSU7XG59XG5cbi5zcGVjaWFsV3JhcCB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksIDFmcik7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XG5cdGhlaWdodDogNzB2aDtcbn1cblxuLnRhbGVudCB7XG5cdGZvbnQtc2l6ZTogMS41dm1pbjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR6LWluZGV4OiAxMjU7XG5cdGFsaWduLXNlbGY6IHN0cmV0Y2g7XG5cdHBhZGRpbmc6IDJ2aCAuNHZ3IDAgLjR2dztcbn1cblxuLnRhbGVudDpob3ZlciB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaW1nL3N3X2JhY2tfaC5wbmdcIik7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Y29sb3I6ICNGMEYwRjA7XG59XG5cbi5jb25uID4gaW1nIHtcblx0d2lkdGg6IDEwMCU7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAzNSVcbn1cblxuLnZDb25uID4gaW1nIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQwJTtcbiAgICBsZWZ0OiAxNSU7XG5cdHdpZHRoOiA2MCU7XG59XG5cbi5zcGVjaWFsR3JpZCB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtcm93LWdhcDogMXZoO1xufVxuXG4udGFsZW50UGFPdXQge1xuXHRncmlkLXJvdzogMSAvIDEwO1xuXHRncmlkLWNvbHVtbjogMSAvIDg7XG5cdHotaW5kZXg6IDE1MDtcbn1cblxuLnRhbGVudFBhbmVsIHtcblx0b3ZlcmZsb3cteTogYXV0bztcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTB2dztcblx0Z3JpZC1yb3ctZ2FwOiAxdmg7XG5cdHBhZGRpbmc6IDN2aCAxdncgMCAxdnc7XG5cdG1heC1oZWlnaHQ6IDk1JTtcbn1cblxuLnRhbGVudFBhbmVsID4gcCB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IDEuMWVtO1xufVxuXG4udGFsZURlc2Mge1xuXHR3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG5cdGZvbnQtc2l6ZTogMi4yNXZtaW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/careers/careers.component.html":
/*!************************************************!*\
  !*** ./src/app/careers/careers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sixty_he fade_in\">\n    <div class=\"tripPage\">\n        <div class=\"gridCol fade_in pageGrid\">\n            <span class=\"gridRow2 h2\"><b>Careers</b></span>\n            <div class=\"gridRow3 innerCol\">\n                <span *ngFor=\"let care of careers\" (click)=\"revealCareer(care)\" class=\"clickable alCenter\">\n                    {{care.name}}\n\t            </span>\n            </div>\n        </div>\n        <div class=\"gridCol2 fade_in pageGrid\" *ngIf=\"curCar && curCar.specializations\">\n            <!-- <div class=\"mobOnly\"><h3>{{\"{{curCar.name}}\"}}</h3><button type=\"button\" ng-click=\"mCont.BackToLeftCar()\" class=\"closeButton\">Back</button></div> -->\n            <span class=\"gridRow2 h2\"><b>Specializations</b></span>\n            <div class=\"gridRow3 innerCol\">\n                <span *ngFor=\"let spec of curCar.specializations\" (click)=\"revealSpecialization(spec)\" class=\"clickable alCenter\">\n                    {{spec.name}}\n                </span>\n            </div>\n        </div>\n        <div class=\"gridCol3 right_col pageGrid fade_in\" *ngIf=\"curCar\">\n            <!-- <div class=\"mobOnly\"><button type=\"button\" ng-click=\"mCont.BackToMidCar()\" class=\"closeButton\">Back</button></div> -->\n            <div class=\"gridRow2\">\n                <span class=\"h2\"><b>{{curCar.name}}</b></span>\n                <p>Skill Proficiencies: {{curCar.skill_slots}}</p>\n                <div class=\"skillDiv\">\n                    <span *ngFor=\"let skill of curCar.skills\" class=\"skill\">\n                        <i>{{skill.name}}</i>\n                    </span>\n                </div>\n            </div>\n            <div class=\"fade_in gridRow3 specialGrid\" *ngIf=\"curSpecial\">\n                <span class=\"h2\"><b>{{curSpecial.name}}</b></span>\n                <p>Skill Proficiencies: {{curSpecial.skill_slots}}</p>\n                <div class=\"skillDiv\">\n                    <span *ngFor=\"let skill of curSpecial.skills\" class=\"skill\">\n                        <i>{{skill.name}}</i>\n                    </span>\n                </div>\n                <span class=\"h2\"><b>Talent Tree</b></span>\n                <div class=\"specialWrap\" *ngIf=\"curSpecial.talents != null\">\n                    <div class=\"talent sw_back gridCol gridRow\" (click)=\"revealTalent(curSpecial.talents[0])\">{{curSpecial.talents[0].name}}</div>\n                    <div class=\"conn gridCol2 gridRow\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[0].disp_right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol3 gridRow\" (click)=\"revealTalent(curSpecial.talents[1])\">{{curSpecial.talents[1].name}}</div>\n                    <div class=\"conn gridCol4 gridRow\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[1].disp_right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol5 gridRow\" (click)=\"revealTalent(curSpecial.talents[2])\">{{curSpecial.talents[2].name}}</div>\n                    <div class=\"conn gridCol6 gridRow\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[2].disp_right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol7 gridRow\" (click)=\"revealTalent(curSpecial.talents[3])\">{{curSpecial.talents[3].name}}</div>\n                    <div class=\"vConn gridCol gridRow2\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[0].disp_down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol3 gridRow2\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[1].disp_down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol5 gridRow2\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[2].disp_down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol7 gridRow2\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[3].disp_down\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol gridRow3\" (click)=\"revealTalent(curSpecial.talents[4])\">{{curSpecial.talents[4].name}}</div>\n                    <div class=\"conn gridCol2 gridRow3\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[4].disp_right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol3 gridRow3\" (click)=\"revealTalent(curSpecial.talents[5])\">{{curSpecial.talents[5].name}}</div>\n                    <div class=\"conn gridCol4 gridRow3\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[5].disp_right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol5 gridRow3\" (click)=\"revealTalent(curSpecial.talents[6])\">{{curSpecial.talents[6].name}}</div>\n                    <div class=\"conn gridCol6 gridRow3\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[6].disp_right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol7 gridRow3\" (click)=\"revealTalent(curSpecial.talents[7])\">{{curSpecial.talents[7].name}}</div>\n                    <div class=\"vConn gridCol gridRow4\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[4].disp_down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol3 gridRow4\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[5].disp_down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol5 gridRow4\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[6].disp_down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol7 gridRow4\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[7].disp_down\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol gridRow5\" (click)=\"revealTalent(curSpecial.talents[8])\">{{curSpecial.talents[8].name}}</div>\n                    <div class=\"conn gridCol2 gridRow5\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[8].disp_right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol3 gridRow5\" (click)=\"revealTalent(curSpecial.talents[9])\">{{curSpecial.talents[9].name}}</div>\n                    <div class=\"conn gridCol4 gridRow5\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[9].disp_right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol5 gridRow5\" (click)=\"revealTalent(curSpecial.talents[10])\">{{curSpecial.talents[10].name}}</div>\n                    <div class=\"conn gridCol6 gridRow5\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[10].disp_right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol7 gridRow5\" (click)=\"revealTalent(curSpecial.talents[11])\">{{curSpecial.talents[11].name}}</div>\n                    <div class=\"vConn gridCol gridRow6\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[8].disp_down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol3 gridRow6\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[9].disp_down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol5 gridRow6\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[10].disp_down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol7 gridRow6\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[11].disp_down\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol gridRow7\" (click)=\"revealTalent(curSpecial.talents[12])\">{{curSpecial.talents[12].name}}</div>\n                    <div class=\"conn gridCol2 gridRow7\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[12].disp_right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol3 gridRow7\" (click)=\"revealTalent(curSpecial.talents[13])\">{{curSpecial.talents[13].name}}</div>\n                    <div class=\"conn gridCol4 gridRow7\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[13].disp_right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol5 gridRow7\" (click)=\"revealTalent(curSpecial.talents[14])\">{{curSpecial.talents[14].name}}</div>\n                    <div class=\"conn gridCol6 gridRow7\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[14].disp_right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol7 gridRow7\" (click)=\"revealTalent(curSpecial.talents[15])\">{{curSpecial.talents[15].name}}</div>\n                    <div class=\"vConn gridCol gridRow8\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[12].disp_down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol3 gridRow8\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[13].disp_down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol5 gridRow8\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[14].disp_down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol7 gridRow8\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[15].disp_down\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol gridRow9\" (click)=\"revealTalent(curSpecial.talents[16])\">{{curSpecial.talents[16].name}}</div>\n                    <div class=\"conn gridCol2 gridRow9\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[16].disp_right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol3 gridRow9\" (click)=\"revealTalent(curSpecial.talents[17])\">{{curSpecial.talents[17].name}}</div>\n                    <div class=\"conn gridCol4 gridRow9\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[17].disp_right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol5 gridRow9\" (click)=\"revealTalent(curSpecial.talents[18])\">{{curSpecial.talents[18].name}}</div>\n                    <div class=\"conn gridCol6 gridRow9\"><img src=\"/static/img/connector.png\" [ngStyle]=\"curSpecial.talents[18].disp_right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol7 gridRow9\" (click)=\"revealTalent(curSpecial.talents[19])\">{{curSpecial.talents[19].name}}</div>\n                    <div class=\"sw_back_s talentPaOut fade_in\" *ngIf=\"curTale\">\n                        <div class=\"talentPanel\">\n                            <button type=\"button\" (click)=\"closeTalent()\" class=\"closeButton\">X</button>\n                            <div class=\"gridRow gridCol h2\">{{curTale.name}}</div>\n                            <div class=\"gridRow2 gridCol\">Type: {{curTale.type}}</div>\n                            <div class=\"gridRow3 gridCol\">Ranked:\n                                <span style=\"float: none;\" *ngIf=\"curTale.ranked\">Yes</span>\n                                <span style=\"float: none;\" *ngIf=\"!curTale.ranked\">No</span>\n                            </div>\n                            <div [innerHtml]=\"curTale.description\" class=\"taleDesc gridRow4 tp_spanCol\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/careers/careers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/careers/careers.component.ts ***!
  \**********************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_unit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/unit.service */ "./src/app/services/unit.service.ts");
/* harmony import */ var _services_careers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/careers.service */ "./src/app/services/careers.service.ts");
/* harmony import */ var _services_skills_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/skills.service */ "./src/app/services/skills.service.ts");
/* harmony import */ var _services_specializations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/specializations.service */ "./src/app/services/specializations.service.ts");






var CareersComponent = /** @class */ (function () {
    function CareersComponent(unit, careerServ, skillServ, specialServ) {
        this.unit = unit;
        this.careerServ = careerServ;
        this.skillServ = skillServ;
        this.specialServ = specialServ;
    }
    CareersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unit.log("Career Component :: Init");
        this.careerServ.getCareers()
            .subscribe(function (careers) { return _this.careers = careers; });
    };
    CareersComponent.prototype.revealCareer = function (car) {
        this.unit.log("Career Comp :: revealing career :: " + car.name);
        if (car.specializations == null) {
            this.specialServ.getCareerSpecs(car.id)
                .subscribe(function (specializations) { return car.specializations = specializations; });
        }
        if (car.skills == null) {
            this.skillServ.getCareerSkills(car.id)
                .subscribe(function (skills) { return car.skills = skills; });
        }
        this.curCar = car;
        this.curSpecial = null;
        this.curTale = null;
    };
    CareersComponent.prototype.revealSpecialization = function (spec) {
        this.unit.log("Career Comp :: revealing specialization :: " + spec.name);
        if (spec.skills == null) {
            this.skillServ.getSpecSkills(spec.id)
                .subscribe(function (skills) { return spec.skills = skills; });
        }
        if (spec.talents == null) {
            // this.talentsServ.getSpecTalents(spec.id)
            //     .subscribe(talents => spec.talents = talents);
        }
        this.curSpecial = spec;
        this.curTale = null;
    };
    CareersComponent.prototype.revealTalent = function (tale) {
        this.unit.log("Career Comp :: revealing talent :: " + tale.name);
        this.curTale = tale;
    };
    CareersComponent.prototype.closeTalent = function () {
        this.unit.log("Career Comp :: closing talent :: " + this.curTale.name);
        this.curTale = null;
    };
    CareersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-careers',
            template: __webpack_require__(/*! ./careers.component.html */ "./src/app/careers/careers.component.html"),
            styles: [__webpack_require__(/*! ./careers.component.css */ "./src/app/careers/careers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_unit_service__WEBPACK_IMPORTED_MODULE_2__["UnitService"],
            _services_careers_service__WEBPACK_IMPORTED_MODULE_3__["CareersService"],
            _services_skills_service__WEBPACK_IMPORTED_MODULE_4__["SkillsService"],
            _services_specializations_service__WEBPACK_IMPORTED_MODULE_5__["SpecializationsService"]])
    ], CareersComponent);
    return CareersComponent;
}());



/***/ }),

/***/ "./src/app/services/careers.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/careers.service.ts ***!
  \*********************************************/
/*! exports provided: CareersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersService", function() { return CareersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unit.service */ "./src/app/services/unit.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CareersService = /** @class */ (function () {
    function CareersService(unit, http) {
        this.unit = unit;
        this.http = http;
        this.careerUrl = '/careers_d';
        this.carSpecUrl = '/careers/specializations';
    }
    CareersService.prototype.getCareers = function () {
        var _this = this;
        this.unit.log("Career Serv :: Careers Began");
        return this.http.get(this.careerUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.unit.log('Career Serv :: Careers Gotten'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCareers', [])));
    };
    CareersService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.unit.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    CareersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_unit_service__WEBPACK_IMPORTED_MODULE_5__["UnitService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CareersService);
    return CareersService;
}());



/***/ }),

/***/ "./src/app/services/skills.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/skills.service.ts ***!
  \********************************************/
/*! exports provided: SkillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsService", function() { return SkillsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unit.service */ "./src/app/services/unit.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SkillsService = /** @class */ (function () {
    function SkillsService(unit, http) {
        this.unit = unit;
        this.http = http;
        this.skillsUrl = '/skills';
        this.carSkillUrl = '/careers/skills';
        this.specSkillUrl = '/specializations/skills';
    }
    SkillsService.prototype.getSkills = function () {
        var _this = this;
        this.unit.log('Skill Serv :: Skills Began');
        return this.http.get(this.skillsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.unit.log('Skill Serv :: Skills Gotten'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getSkills', [])));
    };
    SkillsService.prototype.getCareerSkills = function (id) {
        var _this = this;
        this.unit.log("Skill Serv :: Career Skills Began");
        return this.http.post(this.carSkillUrl, { id: id }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.unit.log("Skill Serv :: Career Skills Gotten"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCareerSkills')));
    };
    SkillsService.prototype.getSpecSkills = function (id) {
        var _this = this;
        this.unit.log("Skill Serv :: Spec Skills Began");
        return this.http.post(this.specSkillUrl, { id: id }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.unit.log("Skill Serv :: Spec Skills Gotten"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getSpecSkills')));
    };
    SkillsService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.unit.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    SkillsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_unit_service__WEBPACK_IMPORTED_MODULE_5__["UnitService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SkillsService);
    return SkillsService;
}());



/***/ }),

/***/ "./src/app/services/specializations.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/specializations.service.ts ***!
  \*****************************************************/
/*! exports provided: SpecializationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecializationsService", function() { return SpecializationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unit.service */ "./src/app/services/unit.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SpecializationsService = /** @class */ (function () {
    function SpecializationsService(unit, http) {
        this.unit = unit;
        this.http = http;
        this.carSpecUrl = '/careers/specializations';
    }
    SpecializationsService.prototype.getCareerSpecs = function (id) {
        var _this = this;
        this.unit.log("special Serv :: Specializations Began");
        return this.http.post(this.carSpecUrl, { id: id }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.unit.log("Special Serv :: Spec Gotten"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCareerSpecs')));
    };
    SpecializationsService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.unit.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    SpecializationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_unit_service__WEBPACK_IMPORTED_MODULE_5__["UnitService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SpecializationsService);
    return SpecializationsService;
}());



/***/ }),

/***/ "./src/app/services/species.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/species.service.ts ***!
  \*********************************************/
/*! exports provided: SpeciesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeciesService", function() { return SpeciesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unit.service */ "./src/app/services/unit.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SpeciesService = /** @class */ (function () {
    function SpeciesService(unit, http) {
        this.unit = unit;
        this.http = http;
        this.speciesUrl = '/species';
        this.specAttrUrl = '/species/attributes';
    }
    SpeciesService.prototype.getSpecies = function () {
        var _this = this;
        this.unit.log("Spec Serv :: Species Began");
        return this.http.get(this.speciesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.unit.log('Spec Serv :: Species Gotten'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getSpecies', [])));
    };
    SpeciesService.prototype.getSpecAttr = function (id) {
        var _this = this;
        this.unit.log("Spec Serv :: Spec Began");
        return this.http.post(this.specAttrUrl, { id: id }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.unit.log("Spec Serv :: Spec Gotten"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getSpecAttr')));
    };
    SpeciesService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.unit.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    SpeciesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_unit_service__WEBPACK_IMPORTED_MODULE_5__["UnitService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SpeciesService);
    return SpeciesService;
}());



/***/ }),

/***/ "./src/app/services/unit.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/unit.service.ts ***!
  \******************************************/
/*! exports provided: UnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitService", function() { return UnitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnitService = /** @class */ (function () {
    function UnitService() {
    }
    UnitService.prototype.log = function (message) {
        console.log(message);
    };
    UnitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UnitService);
    return UnitService;
}());



/***/ }),

/***/ "./src/app/species/species.attribute.image.safe.pipe.ts":
/*!**************************************************************!*\
  !*** ./src/app/species/species.attribute.image.safe.pipe.ts ***!
  \**************************************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safeHtml',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/species/species.component.css":
/*!***********************************************!*\
  !*** ./src/app/species/species.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabPag_inner {\n\tfont-size: 2.1vmin;\n\tmargin-top: 2vh;\n    display: grid;\n    grid-template-rows: 10vh auto;\n\tgrid-template-columns: 1fr;\n\theight: 100%;\n}\n\n.headTable {\n    grid-row: 1;\n\tgrid-column: 1;\n    display: grid;\n    grid-template-rows: 5vh 5vh;\n    grid-template-columns: 30% repeat(6, 3%) repeat(3, 1fr);\n\talign-items: center;\n}\n\n.headerColor {\n\tcolor: #293c56;\n}\n\n.follTable {\n    grid-row: 2;\n\tgrid-column: 1;\n    display: grid;\n    grid-template-rows: auto;\n    grid-template-columns: 1fr;\n\toverflow-y: auto;\n}\n\n.th_head {\n\tbackground-image: url(\"/static/img/light_underline_high.png\");\n\tbackground-size: 100% 100%;\n\talign-self: stretch;\n}\n\n.th_row {\n    display: flex;\n    height: 5vh;\n    align-items: center;\n}\n\n.th_c_span {\n\tgrid-column-start: 1;\n    grid-column-end: 12;\n}\n\n.th_r_2 {\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n.sortable:hover {\n    cursor: row-resize;\n}\n\n.th_item {\n    display: grid;\n    grid-template-columns: 30% repeat(6, 3%) repeat(3, 1fr);\n    background-image: url(\"/static/img/light_underline.png\");\n\tbackground-size: 105% 20%;\n    background-repeat: no-repeat;\n\tbackground-position: bottom center;\n}\n\n.th_item:hover {\n\tcursor: pointer;\n\tbackground-image: url(\"/static/img/light_underline_high.png\");\n\tbackground-size: 100% 100%;\n\tcolor: #293c56;\n\tfont-weight: 200;\n}\n\n.th_name {\n\tfont-size: 2.5vmin;\n}\n\n.th_subTab_name {\n    font-size: 2vmin;\n}\n\n.closeButton {\n\tfont-size: 2vmin;\n\tgrid-row: 1;\n\tgrid-column: 1;\n\tjustify-self: right;\n\talign-self: start;\n\tmargin: 3vh 2vw 0 0;\n}\n\nimg.detail_img {\n\twidth: auto;\n\tmax-width: 95%;\n\theight: auto;\n\tmax-height: 83vh;\n\tgrid-row: 1;\n\tgrid-column: 1;\n\tjustify-self: center;\n\talign-self: center;\n}\n\n.characterBlock {\n\tfont-size: 1.3em;\n\tdisplay: grid;\n\tgrid-template-rows: auto auto;\n\tgrid-template-columns: 3vw auto 3vw;\n\talign-items: center;\n\tgrid-row-gap: 1vh;\n}\n\n.charCharGrid {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(6, 1fr);\n\tgrid-template-rows: 1fr;\n}\n\n.tp_spanCol {\n\tgrid-column-start: 1;\n\tgrid-column-end: 3;\n}\n\n.tp_spanRow {\n\theight: 100%;\n\tgrid-row-start: 1;\n\tgrid-row-end: 7;\n}\n\n.tp_midRow {\n\tpadding-left: 3vw;\n\tfont-size: 1.35em;\n\tdisplay: flex;\n\tflex-flow: row wrap;\n}\n\n.tp_midInner {\n\tmargin-right: 1vmin;\n\tpadding: 0 1vw 0 1vw;\n}\n\n.tp_specAbil > li {\n\twidth: 90%;\n\tpadding: 2vh 0 0 3vw;\n}\n\n.attrib_desc {\n\tfont-size: 3vmin;\n\tword-wrap: break-word;\n}\n\n.alStretch {\n\tjustify-self: stretch;\n\talign-self: stretch;\n\ttext-align: justify;\n}\n\n.speciesMain {\n\tgrid-row: 1 / 3;\n\tgrid-column: 1;\n\tz-index: 150;\n\theight: 96vh;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-rows: 1fr;\n\tjustify-items: center;\n\talign-items: center;\n}\n\n.speciesDet {\n\theight: 95%;\n\twidth: 95%;\n\toverflow-y: auto;\n\tgrid-column: 1;\n\tgrid-row: 1;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: 10vh 10vh repeat(3, auto) 1fr;\n\tgrid-row-gap: 1vh;\n}\n\n.speciesImg {\n\theight: 100%;\n\twidth: 100%;\n\tgrid-column: 2;\n\tgrid-row: 1;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: 1fr;\n}\n\n.sw_back_op {\n\tbackground-image: url(\"/static/img/sw_back_op.png\");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlY2llcy9zcGVjaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7Q0FDaEMsMEJBQTBCO0NBQzFCLFlBQVk7QUFDYjs7QUFFQTtJQUNJLFdBQVc7Q0FDZCxjQUFjO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQix1REFBdUQ7Q0FDMUQsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0lBQ0ksV0FBVztDQUNkLGNBQWM7SUFDWCxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLDBCQUEwQjtDQUM3QixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyw2REFBNkQ7Q0FDN0QsMEJBQTBCO0NBQzFCLG1CQUFtQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0NBQ0Msb0JBQW9CO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVEQUF1RDtJQUN2RCx3REFBd0Q7Q0FDM0QseUJBQXlCO0lBQ3RCLDRCQUE0QjtDQUMvQixrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsNkRBQTZEO0NBQzdELDBCQUEwQjtDQUMxQixjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsY0FBYztDQUNkLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLGNBQWM7Q0FDZCxvQkFBb0I7Q0FDcEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYiw2QkFBNkI7Q0FDN0IsbUNBQW1DO0NBQ25DLG1CQUFtQjtDQUNuQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IscUNBQXFDO0NBQ3JDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0NBQ2QsWUFBWTtDQUNaLFlBQVk7Q0FDWixhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLHVCQUF1QjtDQUN2QixxQkFBcUI7Q0FDckIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsMEJBQTBCO0NBQzFCLGlEQUFpRDtDQUNqRCxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsYUFBYTtDQUNiLDBCQUEwQjtDQUMxQix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxtREFBbUQ7Q0FDbkQsMEJBQTBCO0NBQzFCLDRCQUE0QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpZXMvc3BlY2llcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYlBhZ19pbm5lciB7XG5cdGZvbnQtc2l6ZTogMi4xdm1pbjtcblx0bWFyZ2luLXRvcDogMnZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIGF1dG87XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkVGFibGUge1xuICAgIGdyaWQtcm93OiAxO1xuXHRncmlkLWNvbHVtbjogMTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNXZoIDV2aDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSByZXBlYXQoNiwgMyUpIHJlcGVhdCgzLCAxZnIpO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyQ29sb3Ige1xuXHRjb2xvcjogIzI5M2M1Njtcbn1cblxuLmZvbGxUYWJsZSB7XG4gICAgZ3JpZC1yb3c6IDI7XG5cdGdyaWQtY29sdW1uOiAxO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHRvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4udGhfaGVhZCB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaW1nL2xpZ2h0X3VuZGVybGluZV9oaWdoLnBuZ1wiKTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdGFsaWduLXNlbGY6IHN0cmV0Y2g7XG59XG5cbi50aF9yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA1dmg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRoX2Nfc3BhbiB7XG5cdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMTI7XG59XG5cbi50aF9yXzIge1xuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgIGdyaWQtcm93LWVuZDogMztcbn1cblxuLnNvcnRhYmxlOmhvdmVyIHtcbiAgICBjdXJzb3I6IHJvdy1yZXNpemU7XG59XG5cbi50aF9pdGVtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIHJlcGVhdCg2LCAzJSkgcmVwZWF0KDMsIDFmcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWcvbGlnaHRfdW5kZXJsaW5lLnBuZ1wiKTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDUlIDIwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xufVxuXG4udGhfaXRlbTpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWcvbGlnaHRfdW5kZXJsaW5lX2hpZ2gucG5nXCIpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblx0Y29sb3I6ICMyOTNjNTY7XG5cdGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi50aF9uYW1lIHtcblx0Zm9udC1zaXplOiAyLjV2bWluO1xufVxuXG4udGhfc3ViVGFiX25hbWUge1xuICAgIGZvbnQtc2l6ZTogMnZtaW47XG59XG5cbi5jbG9zZUJ1dHRvbiB7XG5cdGZvbnQtc2l6ZTogMnZtaW47XG5cdGdyaWQtcm93OiAxO1xuXHRncmlkLWNvbHVtbjogMTtcblx0anVzdGlmeS1zZWxmOiByaWdodDtcblx0YWxpZ24tc2VsZjogc3RhcnQ7XG5cdG1hcmdpbjogM3ZoIDJ2dyAwIDA7XG59XG5cbmltZy5kZXRhaWxfaW1nIHtcblx0d2lkdGg6IGF1dG87XG5cdG1heC13aWR0aDogOTUlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdG1heC1oZWlnaHQ6IDgzdmg7XG5cdGdyaWQtcm93OiAxO1xuXHRncmlkLWNvbHVtbjogMTtcblx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmNoYXJhY3RlckJsb2NrIHtcblx0Zm9udC1zaXplOiAxLjNlbTtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3Z3IGF1dG8gM3Z3O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRncmlkLXJvdy1nYXA6IDF2aDtcbn1cblxuLmNoYXJDaGFyR3JpZCB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xufVxuXG4udHBfc3BhbkNvbCB7XG5cdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuXHRncmlkLWNvbHVtbi1lbmQ6IDM7XG59XG5cbi50cF9zcGFuUm93IHtcblx0aGVpZ2h0OiAxMDAlO1xuXHRncmlkLXJvdy1zdGFydDogMTtcblx0Z3JpZC1yb3ctZW5kOiA3O1xufVxuXG4udHBfbWlkUm93IHtcblx0cGFkZGluZy1sZWZ0OiAzdnc7XG5cdGZvbnQtc2l6ZTogMS4zNWVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuXG4udHBfbWlkSW5uZXIge1xuXHRtYXJnaW4tcmlnaHQ6IDF2bWluO1xuXHRwYWRkaW5nOiAwIDF2dyAwIDF2dztcbn1cblxuLnRwX3NwZWNBYmlsID4gbGkge1xuXHR3aWR0aDogOTAlO1xuXHRwYWRkaW5nOiAydmggMCAwIDN2dztcbn1cblxuLmF0dHJpYl9kZXNjIHtcblx0Zm9udC1zaXplOiAzdm1pbjtcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uYWxTdHJldGNoIHtcblx0anVzdGlmeS1zZWxmOiBzdHJldGNoO1xuXHRhbGlnbi1zZWxmOiBzdHJldGNoO1xuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc3BlY2llc01haW4ge1xuXHRncmlkLXJvdzogMSAvIDM7XG5cdGdyaWQtY29sdW1uOiAxO1xuXHR6LWluZGV4OiAxNTA7XG5cdGhlaWdodDogOTZ2aDtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcblx0anVzdGlmeS1pdGVtczogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3BlY2llc0RldCB7XG5cdGhlaWdodDogOTUlO1xuXHR3aWR0aDogOTUlO1xuXHRvdmVyZmxvdy15OiBhdXRvO1xuXHRncmlkLWNvbHVtbjogMTtcblx0Z3JpZC1yb3c6IDE7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggMTB2aCByZXBlYXQoMywgYXV0bykgMWZyO1xuXHRncmlkLXJvdy1nYXA6IDF2aDtcbn1cblxuLnNwZWNpZXNJbWcge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRncmlkLWNvbHVtbjogMjtcblx0Z3JpZC1yb3c6IDE7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbn1cblxuLnN3X2JhY2tfb3Age1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZy9zd19iYWNrX29wLnBuZ1wiKTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/species/species.component.html":
/*!************************************************!*\
  !*** ./src/app/species/species.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sixty_he fade_in\">\n    <div class=\"sw_back_s\"></div>\n    <div class=\"sw_back_op\"></div>\n    <div class=\"tabPag_inner\">\n        <div class=\"headTable headerColor sw_back\">\n            <span class=\"th_head gridRow th_c_span\"></span>\n            <span class=\"alCenter th_name gridRow th_c_span\">Species</span>\n            <span class=\"th_head gridRow2 th_c_span\"></span>\n            <span class=\"gridCol gridRow2 th_subTab_name alCenter sortable\" (click)=\"sortSpecies('name')\">Name</span>\n            <span class=\"gridCol2 gridRow2 th_subTab_name alCenter sortable\" (click)=\"sortSpecies('brawn')\">Br</span>\n            <span class=\"gridCol3 gridRow2 th_subTab_name alCenter sortable\" (click)=\"sortSpecies('agility')\">Ag</span>\n            <span class=\"gridCol4 gridRow2 th_subTab_name alCenter sortable\" (click)=\"sortSpecies('intellect')\">In</span>\n            <span class=\"gridCol5 gridRow2 th_subTab_name alCenter sortable\" (click)=\"sortSpecies('cunning')\">Cu</span>\n            <span class=\"gridCol6 gridRow2 th_subTab_name alCenter sortable\" (click)=\"sortSpecies('willpower')\">Wi</span>\n            <span class=\"gridCol7 gridRow2 th_subTab_name alCenter sortable\" (click)=\"sortSpecies('presence')\">Pr</span>\n            <span class=\"gridCol8 gridRow2 th_subTab_name alCenter sortable\" (click)=\"sortSpecies('wound_threshold')\">Wound Threshold</span>\n            <span class=\"gridCol9 gridRow2 th_subTab_name alCenter sortable\" (click)=\"sortSpecies('strain_threshold')\">Strain Threshold</span>\n            <span class=\"gridCol10 gridRow2 th_subTab_name alCenter sortable\" (click)=\"sortSpecies('starting_xp')\">Starting XP</span>\n        </div>\n        <div class=\"follTable\">\n            <div class=\"th_item\" *ngFor=\"let spec of species\" (click)=\"revealSpecies(spec)\">\n                <span class=\"alCenter\">{{spec.name}}</span>\n                <span class=\"alCenter\">{{spec.brawn}}</span>\n                <span class=\"alCenter\">{{spec.agility}}</span>\n                <span class=\"alCenter\">{{spec.intellect}}</span>\n                <span class=\"alCenter\">{{spec.cunning}}</span>\n                <span class=\"alCenter\">{{spec.willpower}}</span>\n                <span class=\"alCenter\">{{spec.presence}}</span>\n                <span class=\"alCenter\">{{spec.wound_threshold}}</span>\n                <span class=\"alCenter\">{{spec.strain_threshold}}</span>\n                <span class=\"alCenter\">{{spec.starting_xp}}</span>\n            </div>\n        </div>\n        <div *ngIf=\"curSpec\" class=\"speciesMain sw_back_s fade_in\">\n            <div class=\"speciesDet speciesInner\">\n                <span class=\"th_head gridRow gridCol\"></span>\n                <span class=\"gridRow gridCol alCenter th_name headerColor\"><b>{{curSpec.name}}</b></span>\n                <div class=\"characterBlock gridCol gridRow2 alCenter\">\n                    <span></span>\n                    <span class=\"th_head gridRow gridCol2\"></span>\n                    <span class=\"headerColor gridRow gridCol2 charCharGrid\">\n                        <span><b>Br</b></span>\n                        <span><b>Ag</b></span>\n                        <span><b>In</b></span>\n                        <span><b>Cu</b></span>\n                        <span><b>Wi</b></span>\n                        <span><b>Pr</b></span>\n                    </span>\n                    <span></span>\n                    <span></span>\n                    <span class=\"charCharGrid\">\n                        <span>{{curSpec.brawn}}</span>\n                        <span>{{curSpec.agility}}</span>\n                        <span>{{curSpec.intellect}}</span>\n                        <span>{{curSpec.cunning}}</span>\n                        <span>{{curSpec.willpower}}</span>\n                        <span>{{curSpec.presence}}</span>\n                    </span>\n                    <span></span>\n                </div>\n                <div class=\"gridCol gridRow3 tp_midRow\">\n                    <span class=\"headerColor th_head tp_midInner\"><b>Wound Threshold:</b></span>\n                    <span>{{curSpec.wound_threshold}} + Brawn</span>\n                </div>\n                <div class=\"gridCol gridRow4 tp_midRow\">\n                    <span class=\"headerColor th_head tp_midInner\"><b>Strain Threshold:</b></span>\n                    <span>{{curSpec.strain_threshold}} + Willpower</span>\n                </div>\n                <div class=\"gridCol gridRow5 tp_midRow\">\n                    <span class=\"headerColor th_head tp_midInner\"><b>Starting XP:</b></span>\n                    <span>{{curSpec.starting_xp}} xp</span>\n                </div>\n                <div class=\"gridRow6 alStretch\">\n                    <ul class=\"tp_specAbil\">\n                        <li *ngFor=\"let attrib of curSpec.attributes\">\n                            <span class=\"attrib_desc\" [innerHtml]=\"attrib.description | safeHtml\"></span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"speciesImg sw_back_op\">\n                <img class=\"detail_img\" src=\"/static/img/species/{{curSpec.img_name}}\" alt=\"\" />\n                <button type=\"button\" (click)=\"closePanel()\" class=\"closeButton\">X</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/species/species.component.ts":
/*!**********************************************!*\
  !*** ./src/app/species/species.component.ts ***!
  \**********************************************/
/*! exports provided: SpeciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeciesComponent", function() { return SpeciesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_unit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/unit.service */ "./src/app/services/unit.service.ts");
/* harmony import */ var _services_species_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/species.service */ "./src/app/services/species.service.ts");




var SpeciesComponent = /** @class */ (function () {
    function SpeciesComponent(unit, specServ) {
        this.unit = unit;
        this.specServ = specServ;
    }
    SpeciesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unit.log("Spec Comp :: Init");
        this.specServ.getSpecies()
            .subscribe(function (species) { return _this.species = species; });
    };
    SpeciesComponent.prototype.revealSpecies = function (spec) {
        this.unit.log("Spec Comp :: revealSpecies :: " + spec.name);
        if (spec.attributes == null) {
            this.specServ.getSpecAttr(spec.id)
                .subscribe(function (attributes) { return spec.attributes = attributes; });
        }
        this.curSpec = spec;
    };
    SpeciesComponent.prototype.closePanel = function () {
        this.curSpec = null;
    };
    SpeciesComponent.prototype.sortSpecies = function (varName) {
        var _a, _b;
        if (this.lastSort != varName + "desc") {
            for (var i = 0; i < this.species.length; i++) {
                var minInd = i;
                for (var j = i; j < this.species.length; ++j) {
                    if (this.species[j][varName] > this.species[minInd][varName]) {
                        minInd = j;
                    }
                }
                _a = [this.species[minInd], this.species[i]], this.species[i] = _a[0], this.species[minInd] = _a[1];
            }
            this.lastSort = varName + "desc";
        }
        else {
            for (var i = 0; i < this.species.length; i++) {
                var minInd = i;
                for (var j = i; j < this.species.length; ++j) {
                    if (this.species[j][varName] < this.species[minInd][varName]) {
                        minInd = j;
                    }
                }
                _b = [this.species[minInd], this.species[i]], this.species[i] = _b[0], this.species[minInd] = _b[1];
            }
            this.lastSort = varName + "asc";
        }
    };
    ;
    SpeciesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-species',
            template: __webpack_require__(/*! ./species.component.html */ "./src/app/species/species.component.html"),
            styles: [__webpack_require__(/*! ./species.component.css */ "./src/app/species/species.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_unit_service__WEBPACK_IMPORTED_MODULE_2__["UnitService"],
            _services_species_service__WEBPACK_IMPORTED_MODULE_3__["SpeciesService"]])
    ], SpeciesComponent);
    return SpeciesComponent;
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

module.exports = __webpack_require__(/*! /home/penun/angular/swang/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map