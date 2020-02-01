(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["specialist-specialist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/specialist/specialist.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/specialist/specialist.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Especialistas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"none\" class=\"header\">\n    <ion-label class=\"form-group\">FORMULÁRIO DE CADASTRO</ion-label>\n  </ion-item>\n  <div class=\"avatar\">\n    <ion-avatar > \n      <img src=\"assets/icon/avatar.png\">\n    </ion-avatar>\n  </div>\n  <div class=\"cad\">\n    <ion-item>\n      <ion-label>Nome:</ion-label>\n      <ion-input ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Registro:</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Telefone:</ion-label>\n      <ion-input ></ion-input>\n    </ion-item>\n  </div>\n  <div class=\"cad\">\n    <!-- <section class=\"full-width\">\n      <ion-button expand=\"full\" color=\"dark\" [routerLink]=\"['/home']\" (click)=\"saveTodo()\">AGENDAR</ion-button>\n    </section> -->\n\n    <ion-fab horizontal=\"center\" vertical=\"end\" slot=\"fixed\">\n      <ion-fab-button color=\"dark\" [routerLink]=\"['/home']\" (click)=\"saveSpecialist()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/specialist/specialist-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/specialist/specialist-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SpecialistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialistPageRoutingModule", function() { return SpecialistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _specialist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./specialist.page */ "./src/app/specialist/specialist.page.ts");




var routes = [
    {
        path: '',
        component: _specialist_page__WEBPACK_IMPORTED_MODULE_3__["SpecialistPage"]
    }
];
var SpecialistPageRoutingModule = /** @class */ (function () {
    function SpecialistPageRoutingModule() {
    }
    SpecialistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SpecialistPageRoutingModule);
    return SpecialistPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/specialist/specialist.module.ts":
/*!*************************************************!*\
  !*** ./src/app/specialist/specialist.module.ts ***!
  \*************************************************/
/*! exports provided: SpecialistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialistPageModule", function() { return SpecialistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _specialist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./specialist-routing.module */ "./src/app/specialist/specialist-routing.module.ts");
/* harmony import */ var _specialist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./specialist.page */ "./src/app/specialist/specialist.page.ts");







var SpecialistPageModule = /** @class */ (function () {
    function SpecialistPageModule() {
    }
    SpecialistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _specialist_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpecialistPageRoutingModule"]
            ],
            declarations: [_specialist_page__WEBPACK_IMPORTED_MODULE_6__["SpecialistPage"]]
        })
    ], SpecialistPageModule);
    return SpecialistPageModule;
}());



/***/ }),

/***/ "./src/app/specialist/specialist.page.scss":
/*!*************************************************!*\
  !*** ./src/app/specialist/specialist.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cad {\n  margin-top: 18px;\n}\n\n.header {\n  text-align: center;\n  font-size: small;\n  margin-top: 5px;\n}\n\n.avatar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZ29yaXRtby9Eb2N1bWVudG9zL0VuZ2VuaGFyaWEgZGUgU29mdHdhcmUvUHJvamV0b3MvZmlyc3RBcHAvc3JjL2FwcC9zcGVjaWFsaXN0L3NwZWNpYWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9zcGVjaWFsaXN0L3NwZWNpYWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvc3BlY2lhbGlzdC9zcGVjaWFsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhZHtcbiAgbWFyZ2luLXRvcDogMThweFxufVxuLmhlYWRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW4tdG9wOiA1cHhcbn1cbi5hdmF0YXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSIsIi5jYWQge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5hdmF0YXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/specialist/specialist.page.ts":
/*!***********************************************!*\
  !*** ./src/app/specialist/specialist.page.ts ***!
  \***********************************************/
/*! exports provided: SpecialistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialistPage", function() { return SpecialistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SpecialistPage = /** @class */ (function () {
    function SpecialistPage(menu, router) {
        this.menu = menu;
        this.router = router;
    }
    SpecialistPage.prototype.ngOnInit = function () {
    };
    SpecialistPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SpecialistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-specialist',
            template: __webpack_require__(/*! raw-loader!./specialist.page.html */ "./node_modules/raw-loader/index.js!./src/app/specialist/specialist.page.html"),
            styles: [__webpack_require__(/*! ./specialist.page.scss */ "./src/app/specialist/specialist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SpecialistPage);
    return SpecialistPage;
}());



/***/ })

}]);
//# sourceMappingURL=specialist-specialist-module-es5.js.map