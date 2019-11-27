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

module.exports = ".tripPage {\n\tdisplay: grid;\n\tgrid-template-columns: 16% 16% 1fr;\n\theight: 95vh;\n\tword-break: break-word;\n\tpadding-top: 2.5vh;\n}\n\n.pageGrid {\n\tdisplay: grid;\n\tgrid-template-rows: 4vh auto 1fr;\n\tgrid-row-gap: 1vh;\n\theight: 95vh;\n\toverflow-y: auto;\n}\n\n.innerCol {\n\tpadding-top: 1vh;\n\tdisplay: grid;\n\tgrid-auto-rows: -webkit-max-content;\n\tgrid-auto-rows: max-content;\n\tgrid-gap: 1vh;\n\toverflow-y: auto;\n}\n\n.closeButton {\n\tfont-size: 2vmin;\n\tgrid-row: 1;\n\tgrid-column: 2;\n\tjustify-self: right;\n\tmargin: 0 1.5vw 0 0;\n}\n\n.skillDiv {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr);\n\tgrid-template-rows: auto;\n\talign-items: end;\n\tjustify-items: stretch;\n\tmargin-bottom: 3vh;\n}\n\n.skill {\n\ttext-align: center;\n\tbackground-image: url('/static/img/light_underline.png');\n\tbackground-repeat: no-repeat;\n\tbackground-position: center bottom;\n\tbackground-size: 95% 15%;\n}\n\n.specialWrap {\n\tdisplay: grid;\n\tgrid-template-rows: repeat(9, 1fr);\n\tgrid-template-columns: repeat(7, 1fr);\n\theight: 70vh;\n}\n\n.talent {\n\tfont-size: 1.5vmin;\n\ttext-align: center;\n\tz-index: 125;\n\talign-self: stretch;\n\tpadding: 2vh .4vw 0 .4vw;\n}\n\n.talent:hover {\n\tbackground-image: url(\"/static/img/sw_back_h.png\");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: round;\n\tcursor: pointer;\n\tcolor: #F0F0F0;\n}\n\n.conn > img {\n\twidth: 100%;\n\tposition: relative;\n\ttop: 35%\n}\n\n.vConn > img {\n\ttransform: rotate(90deg);\n    position: relative;\n    top: 40%;\n    left: 15%;\n\twidth: 60%;\n}\n\n.specialGrid {\n\tdisplay: grid;\n\tgrid-row-gap: 1vh;\n}\n\n.talentPaOut {\n\tgrid-row: 1 / 10;\n\tgrid-column: 1 / 8;\n\tz-index: 150;\n}\n\n.talentPanel {\n\toverflow-y: auto;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 10vw;\n\tgrid-row-gap: 1vh;\n\tpadding: 3vh 2vw 0 2vw;\n\tmax-height: 95%;\n}\n\n.talentPanel > p {\n\twidth: 100%;\n\tfont-size: 1.1em;\n}\n\n.taleDesc {\n\twhite-space: pre-line;\n\tfont-size: 2.25vmin;\n}\n\n.tp_spanCol {\n\tgrid-column: 1 / 3;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZWVycy9jYXJlZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2Isa0NBQWtDO0NBQ2xDLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtDQUNiLGdDQUFnQztDQUNoQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsbUNBQTJCO0NBQTNCLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2IsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQ0FBcUM7Q0FDckMsd0JBQXdCO0NBQ3hCLGdCQUFnQjtDQUNoQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHdEQUF3RDtDQUN4RCw0QkFBNEI7Q0FDNUIsa0NBQWtDO0NBQ2xDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixrQ0FBa0M7Q0FDbEMscUNBQXFDO0NBQ3JDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxrREFBa0Q7Q0FDbEQsMEJBQTBCO0NBQzFCLHdCQUF3QjtDQUN4QixlQUFlO0NBQ2YsY0FBYztBQUNmOztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQjtBQUNEOztBQUVBO0NBQ0Msd0JBQXdCO0lBQ3JCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztDQUNaLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsK0JBQStCO0NBQy9CLGlCQUFpQjtDQUNqQixzQkFBc0I7Q0FDdEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2FyZWVycy9jYXJlZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJpcFBhZ2Uge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2JSAxNiUgMWZyO1xuXHRoZWlnaHQ6IDk1dmg7XG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cdHBhZGRpbmctdG9wOiAyLjV2aDtcbn1cblxuLnBhZ2VHcmlkIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA0dmggYXV0byAxZnI7XG5cdGdyaWQtcm93LWdhcDogMXZoO1xuXHRoZWlnaHQ6IDk1dmg7XG5cdG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5pbm5lckNvbCB7XG5cdHBhZGRpbmctdG9wOiAxdmg7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcblx0Z3JpZC1nYXA6IDF2aDtcblx0b3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNsb3NlQnV0dG9uIHtcblx0Zm9udC1zaXplOiAydm1pbjtcblx0Z3JpZC1yb3c6IDE7XG5cdGdyaWQtY29sdW1uOiAyO1xuXHRqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xuXHRtYXJnaW46IDAgMS41dncgMCAwO1xufVxuXG4uc2tpbGxEaXYge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG5cdGFsaWduLWl0ZW1zOiBlbmQ7XG5cdGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XG5cdG1hcmdpbi1ib3R0b206IDN2aDtcbn1cblxuLnNraWxsIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1nL2xpZ2h0X3VuZGVybGluZS5wbmcnKTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcblx0YmFja2dyb3VuZC1zaXplOiA5NSUgMTUlO1xufVxuXG4uc3BlY2lhbFdyYXAge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg5LCAxZnIpO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuXHRoZWlnaHQ6IDcwdmg7XG59XG5cbi50YWxlbnQge1xuXHRmb250LXNpemU6IDEuNXZtaW47XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0ei1pbmRleDogMTI1O1xuXHRhbGlnbi1zZWxmOiBzdHJldGNoO1xuXHRwYWRkaW5nOiAydmggLjR2dyAwIC40dnc7XG59XG5cbi50YWxlbnQ6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZy9zd19iYWNrX2gucG5nXCIpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGNvbG9yOiAjRjBGMEYwO1xufVxuXG4uY29ubiA+IGltZyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRvcDogMzUlXG59XG5cbi52Q29ubiA+IGltZyB7XG5cdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA0MCU7XG4gICAgbGVmdDogMTUlO1xuXHR3aWR0aDogNjAlO1xufVxuXG4uc3BlY2lhbEdyaWQge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXJvdy1nYXA6IDF2aDtcbn1cblxuLnRhbGVudFBhT3V0IHtcblx0Z3JpZC1yb3c6IDEgLyAxMDtcblx0Z3JpZC1jb2x1bW46IDEgLyA4O1xuXHR6LWluZGV4OiAxNTA7XG59XG5cbi50YWxlbnRQYW5lbCB7XG5cdG92ZXJmbG93LXk6IGF1dG87XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwdnc7XG5cdGdyaWQtcm93LWdhcDogMXZoO1xuXHRwYWRkaW5nOiAzdmggMnZ3IDAgMnZ3O1xuXHRtYXgtaGVpZ2h0OiA5NSU7XG59XG5cbi50YWxlbnRQYW5lbCA+IHAge1xuXHR3aWR0aDogMTAwJTtcblx0Zm9udC1zaXplOiAxLjFlbTtcbn1cblxuLnRhbGVEZXNjIHtcblx0d2hpdGUtc3BhY2U6IHByZS1saW5lO1xuXHRmb250LXNpemU6IDIuMjV2bWluO1xufVxuXG4udHBfc3BhbkNvbCB7XG5cdGdyaWQtY29sdW1uOiAxIC8gMztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/careers/careers.component.html":
/*!************************************************!*\
  !*** ./src/app/careers/careers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sixty_he fade_in\">\n    <div class=\"tripPage\">\n        <div class=\"gridCol fade_in pageGrid\">\n            <span class=\"gridRow2 h2\"><b>Careers</b></span>\n            <div class=\"gridRow3 innerCol\">\n                <span *ngFor=\"let care of careers\" (click)=\"revealCareer(care)\" class=\"clickable alCenter\">\n                    {{care.name}}\n\t            </span>\n            </div>\n        </div>\n        <div class=\"gridCol2 fade_in pageGrid\" *ngIf=\"curCar && curCar.specializations\">\n            <!-- <div class=\"mobOnly\"><h3>{{\"{{curCar.name}}\"}}</h3><button type=\"button\" ng-click=\"mCont.BackToLeftCar()\" class=\"closeButton\">Back</button></div> -->\n            <span class=\"gridRow2 h2\"><b>Specializations</b></span>\n            <div class=\"gridRow3 innerCol\">\n                <span *ngFor=\"let spec of curCar.specializations\" (click)=\"revealSpecialization(spec)\" class=\"clickable alCenter\">\n                    {{spec.name}}\n                </span>\n            </div>\n        </div>\n        <div class=\"gridCol3 right_col pageGrid fade_in\" *ngIf=\"curCar\">\n            <!-- <div class=\"mobOnly\"><button type=\"button\" ng-click=\"mCont.BackToMidCar()\" class=\"closeButton\">Back</button></div> -->\n            <div class=\"gridRow2\">\n                <span class=\"h2\"><b>{{curCar.name}}</b></span>\n                <p>Skill Proficiencies: {{curCar.skill_slots}}</p>\n                <div class=\"skillDiv\">\n                    <span *ngFor=\"let skill of curCar.skills\" class=\"skill\">\n                        <i>{{skill.name}}</i>\n                    </span>\n                </div>\n            </div>\n            <div class=\"fade_in gridRow3 specialGrid\" *ngIf=\"curSpecial\">\n                <span class=\"h2\"><b>{{curSpecial.name}}</b></span>\n                <p>Skill Proficiencies: {{curSpecial.skill_slots}}</p>\n                <div class=\"skillDiv\">\n                    <span *ngFor=\"let skill of curSpecial.skills\" class=\"skill\">\n                        <i>{{skill.name}}</i>\n                    </span>\n                </div>\n                <span class=\"h2\"><b>Talent Tree</b></span>\n                <div class=\"specialWrap\" *ngIf=\"curSpecial.talents != null\">\n                    <div class=\"talent sw_back gridCol gridRow\" (click)=\"revealTalent(curSpecial.talents[0])\">{{curSpecial.talents[0].name}}</div>\n                    <div class=\"conn gridCol2 gridRow\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[0].right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol3 gridRow\" (click)=\"revealTalent(curSpecial.talents[1])\">{{curSpecial.talents[1].name}}</div>\n                    <div class=\"conn gridCol4 gridRow\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[1].right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol5 gridRow\" (click)=\"revealTalent(curSpecial.talents[2])\">{{curSpecial.talents[2].name}}</div>\n                    <div class=\"conn gridCol6 gridRow\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[2].right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol7 gridRow\" (click)=\"revealTalent(curSpecial.talents[3])\">{{curSpecial.talents[3].name}}</div>\n                    <div class=\"vConn gridCol gridRow2\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[0].down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol3 gridRow2\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[1].down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol5 gridRow2\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[2].down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol7 gridRow2\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[3].down\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol gridRow3\" (click)=\"revealTalent(curSpecial.talents[4])\">{{curSpecial.talents[4].name}}</div>\n                    <div class=\"conn gridCol2 gridRow3\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[4].right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol3 gridRow3\" (click)=\"revealTalent(curSpecial.talents[5])\">{{curSpecial.talents[5].name}}</div>\n                    <div class=\"conn gridCol4 gridRow3\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[5].right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol5 gridRow3\" (click)=\"revealTalent(curSpecial.talents[6])\">{{curSpecial.talents[6].name}}</div>\n                    <div class=\"conn gridCol6 gridRow3\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[6].right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol7 gridRow3\" (click)=\"revealTalent(curSpecial.talents[7])\">{{curSpecial.talents[7].name}}</div>\n                    <div class=\"vConn gridCol gridRow4\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[4].down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol3 gridRow4\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[5].down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol5 gridRow4\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[6].down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol7 gridRow4\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[7].down\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol gridRow5\" (click)=\"revealTalent(curSpecial.talents[8])\">{{curSpecial.talents[8].name}}</div>\n                    <div class=\"conn gridCol2 gridRow5\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[8].right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol3 gridRow5\" (click)=\"revealTalent(curSpecial.talents[9])\">{{curSpecial.talents[9].name}}</div>\n                    <div class=\"conn gridCol4 gridRow5\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[9].right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol5 gridRow5\" (click)=\"revealTalent(curSpecial.talents[10])\">{{curSpecial.talents[10].name}}</div>\n                    <div class=\"conn gridCol6 gridRow5\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[10].right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol7 gridRow5\" (click)=\"revealTalent(curSpecial.talents[11])\">{{curSpecial.talents[11].name}}</div>\n                    <div class=\"vConn gridCol gridRow6\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[8].down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol3 gridRow6\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[9].down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol5 gridRow6\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[10].down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol7 gridRow6\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[11].down\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol gridRow7\" (click)=\"revealTalent(curSpecial.talents[12])\">{{curSpecial.talents[12].name}}</div>\n                    <div class=\"conn gridCol2 gridRow7\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[12].right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol3 gridRow7\" (click)=\"revealTalent(curSpecial.talents[13])\">{{curSpecial.talents[13].name}}</div>\n                    <div class=\"conn gridCol4 gridRow7\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[13].right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol5 gridRow7\" (click)=\"revealTalent(curSpecial.talents[14])\">{{curSpecial.talents[14].name}}</div>\n                    <div class=\"conn gridCol6 gridRow7\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[14].right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol7 gridRow7\" (click)=\"revealTalent(curSpecial.talents[15])\">{{curSpecial.talents[15].name}}</div>\n                    <div class=\"vConn gridCol gridRow8\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[12].down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol3 gridRow8\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[13].down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol5 gridRow8\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[14].down\" alt=\"Conn\"/></div>\n                    <div class=\"vConn gridCol7 gridRow8\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[15].down\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol gridRow9\" (click)=\"revealTalent(curSpecial.talents[16])\">{{curSpecial.talents[16].name}}</div>\n                    <div class=\"conn gridCol2 gridRow9\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[16].right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol3 gridRow9\" (click)=\"revealTalent(curSpecial.talents[17])\">{{curSpecial.talents[17].name}}</div>\n                    <div class=\"conn gridCol4 gridRow9\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[17].right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol5 gridRow9\" (click)=\"revealTalent(curSpecial.talents[18])\">{{curSpecial.talents[18].name}}</div>\n                    <div class=\"conn gridCol6 gridRow9\"><img src=\"/static/img/connector.png\" *ngIf=\"curSpecial.talents[18].right\" alt=\"Conn\"/></div>\n                    <div class=\"talent sw_back gridCol7 gridRow9\" (click)=\"revealTalent(curSpecial.talents[19])\">{{curSpecial.talents[19].name}}</div>\n                    <div class=\"sw_back_s talentPaOut fade_in\" *ngIf=\"curTale\">\n                        <div class=\"talentPanel\">\n                            <button type=\"button\" (click)=\"closeTalent()\" class=\"closeButton\">X</button>\n                            <div class=\"gridRow gridCol h2\">{{curTale.name}}</div>\n                            <div class=\"gridRow2 gridCol\">Type: {{curTale.type}}</div>\n                            <div class=\"gridRow3 gridCol\">Ranked:\n                                <span style=\"float: none;\" *ngIf=\"curTale.ranked\">Yes</span>\n                                <span style=\"float: none;\" *ngIf=\"!curTale.ranked\">No</span>\n                            </div>\n                            <div [innerHtml]=\"curTale.description\" class=\"taleDesc gridRow4 tp_spanCol\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

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
/* harmony import */ var _services_talents_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/talents.service */ "./src/app/services/talents.service.ts");







var CareersComponent = /** @class */ (function () {
    function CareersComponent(unit, careerServ, skillServ, specialServ, talentServ) {
        this.unit = unit;
        this.careerServ = careerServ;
        this.skillServ = skillServ;
        this.specialServ = specialServ;
        this.talentServ = talentServ;
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
            this.talentServ.getSpecTalents(spec.id)
                .subscribe(function (talents) { return spec.talents = talents; });
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
            _services_specializations_service__WEBPACK_IMPORTED_MODULE_5__["SpecializationsService"],
            _services_talents_service__WEBPACK_IMPORTED_MODULE_6__["TalentsService"]])
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

/***/ "./src/app/services/talents.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/talents.service.ts ***!
  \*********************************************/
/*! exports provided: TalentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentsService", function() { return TalentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unit.service */ "./src/app/services/unit.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TalentsService = /** @class */ (function () {
    function TalentsService(unit, http) {
        this.unit = unit;
        this.http = http;
        this.specTalentsUrl = '/specializations/talents';
    }
    TalentsService.prototype.getSpecTalents = function (id) {
        var _this = this;
        this.unit.log("Talent Serv :: Talents Began");
        return this.http.post(this.specTalentsUrl, { id: id }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.unit.log('Talent Serv :: Talents Gotten'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getSpecTalents', [])));
    };
    TalentsService.prototype.handleError = function (operation, result) {
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
    TalentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_unit_service__WEBPACK_IMPORTED_MODULE_5__["UnitService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TalentsService);
    return TalentsService;
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

module.exports = ".tabPag_inner {\n\tfont-size: 2.1vmin;\n\tmargin-top: 2vh;\n    display: grid;\n    grid-template-rows: 10vh auto;\n\tgrid-template-columns: 1fr;\n\theight: 100%;\n}\n\n.headTable {\n    grid-row: 1;\n\tgrid-column: 1;\n    display: grid;\n    grid-template-rows: 5vh 5vh;\n    grid-template-columns: 30% repeat(6, 3%) repeat(3, 1fr);\n\talign-items: center;\n}\n\n.headerColor {\n\tcolor: #293c56;\n}\n\n.follTable {\n    grid-row: 2;\n\tgrid-column: 1;\n    display: grid;\n    grid-template-rows: auto;\n    grid-template-columns: 1fr;\n\toverflow-y: auto;\n}\n\n.th_head {\n\tbackground-image: url(\"/static/img/light_underline_high.png\");\n\tbackground-size: 100% 100%;\n\talign-self: stretch;\n}\n\n.th_row {\n    display: flex;\n    height: 5vh;\n    align-items: center;\n}\n\n.th_c_span {\n\tgrid-column-start: 1;\n    grid-column-end: 12;\n}\n\n.th_r_2 {\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n.sortable:hover {\n    cursor: row-resize;\n}\n\n.th_item {\n    display: grid;\n    grid-template-columns: 30% repeat(6, 3%) repeat(3, 1fr);\n    background-image: url(\"/static/img/light_underline.png\");\n\tbackground-size: 105% 20%;\n    background-repeat: no-repeat;\n\tbackground-position: bottom center;\n}\n\n.th_item:hover {\n\tcursor: pointer;\n\tbackground-image: url(\"/static/img/light_underline_high.png\");\n\tbackground-size: 100% 100%;\n\tcolor: #293c56;\n\tfont-weight: 200;\n}\n\n.th_name {\n\tfont-size: 2.5vmin;\n}\n\n.th_subTab_name {\n    font-size: 2vmin;\n}\n\n.closeButton {\n\tfont-size: 2vmin;\n\tgrid-row: 1;\n\tgrid-column: 1;\n\tjustify-self: right;\n\talign-self: start;\n\tmargin: 3vh 2vw 0 0;\n}\n\nimg.detail_img {\n\twidth: auto;\n\tmax-width: 95%;\n\theight: auto;\n\tmax-height: 83vh;\n\tgrid-row: 1;\n\tgrid-column: 1;\n\tjustify-self: center;\n\talign-self: center;\n}\n\n.characterBlock {\n\tfont-size: 1.3em;\n\tdisplay: grid;\n\tgrid-template-rows: auto auto;\n\tgrid-template-columns: 3vw auto 3vw;\n\talign-items: center;\n\tgrid-row-gap: 1vh;\n}\n\n.charCharGrid {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(6, 1fr);\n\tgrid-template-rows: 1fr;\n}\n\n.tp_spanCol {\n\tgrid-column-start: 1;\n\tgrid-column-end: 3;\n}\n\n.tp_spanRow {\n\theight: 100%;\n\tgrid-row-start: 1;\n\tgrid-row-end: 7;\n}\n\n.tp_midRow {\n\tpadding-left: 3vw;\n\tfont-size: 1.35em;\n\tdisplay: flex;\n\tflex-flow: row wrap;\n}\n\n.tp_midInner {\n\tmargin-right: 1vmin;\n\tpadding: 0 1vw 0 1vw;\n}\n\n.tp_specAbil > li {\n\twidth: 90%;\n\tpadding: 2vh 0 0 3vw;\n}\n\n.attrib_desc {\n\tfont-size: 3vmin;\n\tword-wrap: break-word;\n\ttext-align: left;\n}\n\n.alStretch {\n\tjustify-self: stretch;\n\talign-self: stretch;\n\ttext-align: justify;\n}\n\n.speciesMain {\n\tgrid-row: 1 / 3;\n\tgrid-column: 1;\n\tz-index: 150;\n\theight: 96vh;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-rows: 1fr;\n\tjustify-items: center;\n\talign-items: center;\n}\n\n.speciesDet {\n\theight: 95%;\n\twidth: 95%;\n\toverflow-y: auto;\n\tgrid-column: 1;\n\tgrid-row: 1;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: 10vh 10vh repeat(3, auto) 1fr;\n\tgrid-row-gap: 1vh;\n}\n\n.speciesImg {\n\theight: 100%;\n\twidth: 100%;\n\tgrid-column: 2;\n\tgrid-row: 1;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: 1fr;\n}\n\n.sw_back_op {\n\tbackground-image: url(\"/static/img/sw_back_op.png\");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: no-repeat;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlY2llcy9zcGVjaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7Q0FDaEMsMEJBQTBCO0NBQzFCLFlBQVk7QUFDYjs7QUFFQTtJQUNJLFdBQVc7Q0FDZCxjQUFjO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQix1REFBdUQ7Q0FDMUQsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0lBQ0ksV0FBVztDQUNkLGNBQWM7SUFDWCxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLDBCQUEwQjtDQUM3QixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyw2REFBNkQ7Q0FDN0QsMEJBQTBCO0NBQzFCLG1CQUFtQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0NBQ0Msb0JBQW9CO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVEQUF1RDtJQUN2RCx3REFBd0Q7Q0FDM0QseUJBQXlCO0lBQ3RCLDRCQUE0QjtDQUMvQixrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsNkRBQTZEO0NBQzdELDBCQUEwQjtDQUMxQixjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsY0FBYztDQUNkLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLGNBQWM7Q0FDZCxvQkFBb0I7Q0FDcEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYiw2QkFBNkI7Q0FDN0IsbUNBQW1DO0NBQ25DLG1CQUFtQjtDQUNuQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IscUNBQXFDO0NBQ3JDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLFlBQVk7Q0FDWixZQUFZO0NBQ1osYUFBYTtDQUNiLDhCQUE4QjtDQUM5Qix1QkFBdUI7Q0FDdkIscUJBQXFCO0NBQ3JCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsYUFBYTtDQUNiLDBCQUEwQjtDQUMxQixpREFBaUQ7Q0FDakQsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsV0FBVztDQUNYLGFBQWE7Q0FDYiwwQkFBMEI7Q0FDMUIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsbURBQW1EO0NBQ25ELDBCQUEwQjtDQUMxQiw0QkFBNEI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9zcGVjaWVzL3NwZWNpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJQYWdfaW5uZXIge1xuXHRmb250LXNpemU6IDIuMXZtaW47XG5cdG1hcmdpbi10b3A6IDJ2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCBhdXRvO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZFRhYmxlIHtcbiAgICBncmlkLXJvdzogMTtcblx0Z3JpZC1jb2x1bW46IDE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDV2aCA1dmg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgcmVwZWF0KDYsIDMlKSByZXBlYXQoMywgMWZyKTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlckNvbG9yIHtcblx0Y29sb3I6ICMyOTNjNTY7XG59XG5cbi5mb2xsVGFibGUge1xuICAgIGdyaWQtcm93OiAyO1xuXHRncmlkLWNvbHVtbjogMTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblx0b3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnRoX2hlYWQge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZy9saWdodF91bmRlcmxpbmVfaGlnaC5wbmdcIik7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXHRhbGlnbi1zZWxmOiBzdHJldGNoO1xufVxuXG4udGhfcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNXZoO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aF9jX3NwYW4ge1xuXHRncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDEyO1xufVxuXG4udGhfcl8yIHtcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICBncmlkLXJvdy1lbmQ6IDM7XG59XG5cbi5zb3J0YWJsZTpob3ZlciB7XG4gICAgY3Vyc29yOiByb3ctcmVzaXplO1xufVxuXG4udGhfaXRlbSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSByZXBlYXQoNiwgMyUpIHJlcGVhdCgzLCAxZnIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaW1nL2xpZ2h0X3VuZGVybGluZS5wbmdcIik7XG5cdGJhY2tncm91bmQtc2l6ZTogMTA1JSAyMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcbn1cblxuLnRoX2l0ZW06aG92ZXIge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaW1nL2xpZ2h0X3VuZGVybGluZV9oaWdoLnBuZ1wiKTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdGNvbG9yOiAjMjkzYzU2O1xuXHRmb250LXdlaWdodDogMjAwO1xufVxuXG4udGhfbmFtZSB7XG5cdGZvbnQtc2l6ZTogMi41dm1pbjtcbn1cblxuLnRoX3N1YlRhYl9uYW1lIHtcbiAgICBmb250LXNpemU6IDJ2bWluO1xufVxuXG4uY2xvc2VCdXR0b24ge1xuXHRmb250LXNpemU6IDJ2bWluO1xuXHRncmlkLXJvdzogMTtcblx0Z3JpZC1jb2x1bW46IDE7XG5cdGp1c3RpZnktc2VsZjogcmlnaHQ7XG5cdGFsaWduLXNlbGY6IHN0YXJ0O1xuXHRtYXJnaW46IDN2aCAydncgMCAwO1xufVxuXG5pbWcuZGV0YWlsX2ltZyB7XG5cdHdpZHRoOiBhdXRvO1xuXHRtYXgtd2lkdGg6IDk1JTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRtYXgtaGVpZ2h0OiA4M3ZoO1xuXHRncmlkLXJvdzogMTtcblx0Z3JpZC1jb2x1bW46IDE7XG5cdGp1c3RpZnktc2VsZjogY2VudGVyO1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5jaGFyYWN0ZXJCbG9jayB7XG5cdGZvbnQtc2l6ZTogMS4zZW07XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDN2dyBhdXRvIDN2dztcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z3JpZC1yb3ctZ2FwOiAxdmg7XG59XG5cbi5jaGFyQ2hhckdyaWQge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbn1cblxuLnRwX3NwYW5Db2wge1xuXHRncmlkLWNvbHVtbi1zdGFydDogMTtcblx0Z3JpZC1jb2x1bW4tZW5kOiAzO1xufVxuXG4udHBfc3BhblJvdyB7XG5cdGhlaWdodDogMTAwJTtcblx0Z3JpZC1yb3ctc3RhcnQ6IDE7XG5cdGdyaWQtcm93LWVuZDogNztcbn1cblxuLnRwX21pZFJvdyB7XG5cdHBhZGRpbmctbGVmdDogM3Z3O1xuXHRmb250LXNpemU6IDEuMzVlbTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1mbG93OiByb3cgd3JhcDtcbn1cblxuLnRwX21pZElubmVyIHtcblx0bWFyZ2luLXJpZ2h0OiAxdm1pbjtcblx0cGFkZGluZzogMCAxdncgMCAxdnc7XG59XG5cbi50cF9zcGVjQWJpbCA+IGxpIHtcblx0d2lkdGg6IDkwJTtcblx0cGFkZGluZzogMnZoIDAgMCAzdnc7XG59XG5cbi5hdHRyaWJfZGVzYyB7XG5cdGZvbnQtc2l6ZTogM3ZtaW47XG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFsU3RyZXRjaCB7XG5cdGp1c3RpZnktc2VsZjogc3RyZXRjaDtcblx0YWxpZ24tc2VsZjogc3RyZXRjaDtcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnNwZWNpZXNNYWluIHtcblx0Z3JpZC1yb3c6IDEgLyAzO1xuXHRncmlkLWNvbHVtbjogMTtcblx0ei1pbmRleDogMTUwO1xuXHRoZWlnaHQ6IDk2dmg7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNwZWNpZXNEZXQge1xuXHRoZWlnaHQ6IDk1JTtcblx0d2lkdGg6IDk1JTtcblx0b3ZlcmZsb3cteTogYXV0bztcblx0Z3JpZC1jb2x1bW46IDE7XG5cdGdyaWQtcm93OiAxO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDEwdmggcmVwZWF0KDMsIGF1dG8pIDFmcjtcblx0Z3JpZC1yb3ctZ2FwOiAxdmg7XG59XG5cbi5zcGVjaWVzSW1nIHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0Z3JpZC1jb2x1bW46IDI7XG5cdGdyaWQtcm93OiAxO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG59XG5cbi5zd19iYWNrX29wIHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWcvc3dfYmFja19vcC5wbmdcIik7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuIl19 */"

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

module.exports = __webpack_require__(/*! /home/penun/code_work/angular/swang/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map