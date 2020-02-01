(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patients-patients-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/patients/patients.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/patients/patients.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button ></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Pacientes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"none\" class=\"header\">\n    <ion-label class=\"form-group\">FORMULÁRIO DE CADASTRO</ion-label>\n  </ion-item>\n  <div class=\"avatar\">\n    <ion-avatar > \n      <img src=\"assets/icon/avatar.png\">\n    </ion-avatar>\n  </div>\n  <div class=\"cad\">\n    <ion-item>\n      <ion-label>Nome:</ion-label>\n      <ion-input ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Registro:</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Telefone:</ion-label>\n      <ion-input ></ion-input>\n    </ion-item>\n  </div>\n  <div class=\"cad\">\n    <!-- <section class=\"full-width\">\n      <ion-button expand=\"full\" color=\"dark\" [routerLink]=\"['/home']\" (click)=\"saveTodo()\">AGENDAR</ion-button>\n    </section> -->\n\n    <ion-fab horizontal=\"center\" vertical=\"end\" slot=\"fixed\">\n      <ion-fab-button color=\"dark\" [routerLink]=\"['/home']\" (click)=\"saveSpecialist()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/patients/patients-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/patients/patients-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PatientsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsPageRoutingModule", function() { return PatientsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _patients_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patients.page */ "./src/app/patients/patients.page.ts");




const routes = [
    {
        path: '',
        component: _patients_page__WEBPACK_IMPORTED_MODULE_3__["PatientsPage"]
    }
];
let PatientsPageRoutingModule = class PatientsPageRoutingModule {
};
PatientsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PatientsPageRoutingModule);



/***/ }),

/***/ "./src/app/patients/patients.module.ts":
/*!*********************************************!*\
  !*** ./src/app/patients/patients.module.ts ***!
  \*********************************************/
/*! exports provided: PatientsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsPageModule", function() { return PatientsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _patients_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patients-routing.module */ "./src/app/patients/patients-routing.module.ts");
/* harmony import */ var _patients_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patients.page */ "./src/app/patients/patients.page.ts");







let PatientsPageModule = class PatientsPageModule {
};
PatientsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _patients_routing_module__WEBPACK_IMPORTED_MODULE_5__["PatientsPageRoutingModule"]
        ],
        declarations: [_patients_page__WEBPACK_IMPORTED_MODULE_6__["PatientsPage"]]
    })
], PatientsPageModule);



/***/ }),

/***/ "./src/app/patients/patients.page.scss":
/*!*********************************************!*\
  !*** ./src/app/patients/patients.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cad {\n  margin-top: 18px;\n}\n\n.header {\n  text-align: center;\n  font-size: small;\n  margin-top: 5px;\n}\n\n.avatar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZ29yaXRtby9Eb2N1bWVudG9zL0VuZ2VuaGFyaWEgZGUgU29mdHdhcmUvUHJvamV0b3MvZmlyc3RBcHAvc3JjL2FwcC9wYXRpZW50cy9wYXRpZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhdGllbnRzL3BhdGllbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnRzL3BhdGllbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWR7XG4gIG1hcmdpbi10b3A6IDE4cHhcbn1cbi5oZWFkZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWFyZ2luLXRvcDogNXB4XG59XG4uYXZhdGFye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iLCIuY2FkIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYXZhdGFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/patients/patients.page.ts":
/*!*******************************************!*\
  !*** ./src/app/patients/patients.page.ts ***!
  \*******************************************/
/*! exports provided: PatientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsPage", function() { return PatientsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PatientsPage = class PatientsPage {
    constructor() { }
    ngOnInit() {
    }
};
PatientsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patients',
        template: __webpack_require__(/*! raw-loader!./patients.page.html */ "./node_modules/raw-loader/index.js!./src/app/patients/patients.page.html"),
        styles: [__webpack_require__(/*! ./patients.page.scss */ "./src/app/patients/patients.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PatientsPage);



/***/ })

}]);
//# sourceMappingURL=patients-patients-module-es2015.js.map