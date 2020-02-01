(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schedule-schedule-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/schedule/schedule.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/schedule/schedule.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button ></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Agenda</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"none\" class=\"label-header\">\n    <ion-label>AGENDE UM PROCEDIMENTO</ion-label>\n  </ion-item>\n \n  <div class=\"calendar\">\n    <ion-item>\n      <ionic-calendar-date-picker [dayLabels]=\"dayLabels\" [monthLabels]=\"monthLabels\" (onSelect)=\"dateSelected($event)\">\n      </ionic-calendar-date-picker>\n    </ion-item>\n  </div>\n  <div class=\"cad\">\n    <ion-item>\n      <ion-label>Paciente:</ion-label>\n      <ion-input [(ngModel)]=\"todo.paciente\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Procedimento:</ion-label>\n      <ion-input [(ngModel)]=\"todo.procedimento\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Especialista:</ion-label>\n      <ion-input [(ngModel)]=\"todo.especialista\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Horário:</ion-label>\n      <ion-datetime [(ngModel)]=\"horario\" display-format=\"HH:mm A\" picker-format=\"HH:mm\"></ion-datetime>\n    </ion-item>\n  </div>\n  <div class=\"cad\">\n    <!-- <section class=\"full-width\">\n      <ion-button expand=\"full\" color=\"dark\" [routerLink]=\"['/home']\" (click)=\"saveTodo()\">AGENDAR</ion-button>\n    </section> -->\n\n    <ion-fab horizontal=\"center\" vertical=\"end\" slot=\"fixed\">\n      <ion-fab-button color=\"dark\" [routerLink]=\"['/home']\" (click)=\"saveTodo()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/schedule/schedule-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/schedule/schedule-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SchedulePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageRoutingModule", function() { return SchedulePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule.page */ "./src/app/schedule/schedule.page.ts");




const routes = [
    {
        path: '',
        component: _schedule_page__WEBPACK_IMPORTED_MODULE_3__["SchedulePage"]
    }
];
let SchedulePageRoutingModule = class SchedulePageRoutingModule {
};
SchedulePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SchedulePageRoutingModule);



/***/ }),

/***/ "./src/app/schedule/schedule.module.ts":
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.module.ts ***!
  \*********************************************/
/*! exports provided: SchedulePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function() { return SchedulePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule-routing.module */ "./src/app/schedule/schedule-routing.module.ts");
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule.page */ "./src/app/schedule/schedule.page.ts");
/* harmony import */ var ionic4_date_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-date-picker */ "./node_modules/ionic4-date-picker/dist/index.js");








let SchedulePageModule = class SchedulePageModule {
};
SchedulePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _schedule_routing_module__WEBPACK_IMPORTED_MODULE_5__["SchedulePageRoutingModule"],
            ionic4_date_picker__WEBPACK_IMPORTED_MODULE_7__["DatePickerModule"],
        ],
        declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_6__["SchedulePage"]]
    })
], SchedulePageModule);



/***/ }),

/***/ "./src/app/schedule/schedule.page.scss":
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calendar {\n  margin-top: 2px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.cad {\n  margin-top: 18px;\n}\n\n.label-header {\n  text-align: center;\n  font-size: small;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZ29yaXRtby9Eb2N1bWVudG9zL0VuZ2VuaGFyaWEgZGUgU29mdHdhcmUvUHJvamV0b3MvZmlyc3RBcHAvc3JjL2FwcC9zY2hlZHVsZS9zY2hlZHVsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NjaGVkdWxlL3NjaGVkdWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlL3NjaGVkdWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxlbmRhciB7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmNhZHtcclxuICBtYXJnaW4tdG9wOiAxOHB4XHJcbn1cclxuLmxhYmVsLWhlYWRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBtYXJnaW4tdG9wOiA1cHhcclxufVxyXG4iLCIuY2FsZW5kYXIge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY2FkIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cblxuLmxhYmVsLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/schedule/schedule.page.ts":
/*!*******************************************!*\
  !*** ./src/app/schedule/schedule.page.ts ***!
  \*******************************************/
/*! exports provided: SchedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePage", function() { return SchedulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/todo.service */ "./src/app/services/todo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let SchedulePage = class SchedulePage {
    constructor(todoService, route, loadingController, menu, router) {
        this.todoService = todoService;
        this.route = route;
        this.loadingController = loadingController;
        this.menu = menu;
        this.router = router;
        this.monthLabels = [];
        this.dayLabels = [];
        this.todoId = null;
        this.horario = null;
        this.todo = {
            paciente: null,
            procedimento: null,
            especialista: null,
            horario: '',
            date: null,
            createdAt: new Date().getTime(),
        };
    }
    ngOnInit() {
        this.monthLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ag0', 'Set', 'Out', 'Nov', 'Dez'];
        this.dayLabels = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
        this.todoId = this.route.snapshot.params['id'];
        if (this.todoId) {
            this.loadTodo();
        }
    }
    dateSelected(event) {
        this.todo.date = event.toLocaleDateString();
    }
    loadTodo() {
        this.todoService.getTodo(this.todoId).subscribe(res => {
            this.todo = res;
        });
    }
    saveTodo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.todoId) {
                this.todo.horario = this.horario.split('T')[1].split('.')[0].split(':').join(' ').split(' ', 2).join().replace(',', ':');
                yield this.todoService.updateTodo(this.todo, this.todoId).then(() => {
                });
            }
            else {
                this.todo.horario = this.horario.split('T')[1].split('.')[0].split(':').join(' ').split(' ', 2).join().replace(',', ':');
                yield this.todoService.addTodo(this.todo).then(() => {
                });
            }
        });
    }
};
SchedulePage.ctorParameters = () => [
    { type: _services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SchedulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-schedule',
        template: __webpack_require__(/*! raw-loader!./schedule.page.html */ "./node_modules/raw-loader/index.js!./src/app/schedule/schedule.page.html"),
        styles: [__webpack_require__(/*! ./schedule.page.scss */ "./src/app/schedule/schedule.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SchedulePage);



/***/ })

}]);
//# sourceMappingURL=schedule-schedule-module-es2015.js.map