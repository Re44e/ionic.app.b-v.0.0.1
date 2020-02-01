(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button ></ion-menu-button>\n      </ion-buttons>\n    <ion-title>\n      Agendamentos\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"editar == false\">\n  <div *ngIf=\"flagList == true\">\n    <h2 style=\"text-align: center; font-size: medium;\" >NÃO HÁ REGISTROS AGENDADOS...</h2>\n  </div>\n  <ion-list >\n    <ion-item-sliding *ngFor=\"let item of todos\">\n      <ion-item lines=\"full\">\n        <ion-label>\n          <h2>{{item.paciente}}<ion-icon class=\"icon-size-edit\"(click)=\"editarTodo(item.id)\" style=\"margin-left: 10px;\"ios=\"ios-create\" md=\"md-create\"></ion-icon></h2>\n          <h3>Procedimento: {{item.procedimento}}</h3>\n          <p>Agendado: {{item.horario}} - {{item.date}}\n              <ion-icon class=\"icon-size-trash\" style=\"color: black\" float-right (click)=\"presentAlertConfirmDelete(item)\" name=\"trash\"></ion-icon>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n\n\n<ion-content *ngIf=\"editar == true\">\n  <ion-item lines=\"none\" class=\"label-header\">\n    <ion-label>EDITAR REGISTRO</ion-label>\n  </ion-item>\n \n  <div class=\"calendar\">\n    <ion-item lines=\"none\">\n      <ionic-calendar-date-picker [dayLabels]=\"dayLabels\" [monthLabels]=\"monthLabels\" (onSelect)=\"dateSelected($event)\">\n      </ionic-calendar-date-picker>\n    </ion-item>\n  </div>\n  <div class=\"cad\">\n    <ion-item>\n      <ion-label>Paciente:</ion-label>\n      <ion-input [(ngModel)]=\"todo.paciente\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Procedimento:</ion-label>\n      <ion-input [(ngModel)]=\"todo.procedimento\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Especialista:</ion-label>\n      <ion-input [(ngModel)]=\"todo.especialista\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label>Horário:</ion-label>\n      <ion-datetime [(ngModel)]=\"todo.horario\" display-format=\"HH:mm A\" picker-format=\"HH:mm\"></ion-datetime>\n    </ion-item>\n  </div>\n  <div class=\"cad\">\n    <div class=\"button-footer\">\n      <ion-button shape=\"round\" fill=\"outline\" color=\"dark\" (click)=\"saveTodo()\">SALVAR ALTERAÇÕES</ion-button>\n    </div>\n    <div class=\"label-footer\">\n      <a style=\"color: black\" (click)=\"back()\">VOLTAR</a>\n    </div>\n    <!-- <ion-fab horizontal=\"center\" vertical=\"end\" slot=\"fixed\">\n      <ion-fab-button color=\"dark\" [routerLink]=\"['/home']\" (click)=\"saveTodo()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab> -->\n  </div>\n  \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var ionic4_date_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-date-picker */ "./node_modules/ionic4-date-picker/dist/index.js");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            ionic4_date_picker__WEBPACK_IMPORTED_MODULE_7__["DatePickerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-native {\n  height: 50%;\n}\n\n.calendar {\n  margin-top: 2px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.cad {\n  margin-top: 10px;\n}\n\n.label-header {\n  text-align: center;\n  font-size: small;\n  margin-top: 5px;\n}\n\n.label-footer {\n  text-align: center;\n  font-size: small;\n  margin-left: 2px;\n  margin-right: 2px;\n  margin-top: 8px;\n}\n\n.button-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.icon-size-trash {\n  font-size: 22px;\n}\n\n.icon-size-edit {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZ29yaXRtby9Eb2N1bWVudG9zL0VuZ2VuaGFyaWEgZGUgU29mdHdhcmUvUHJvamV0b3MvZmlyc3RBcHAvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURBQTtFQUNFLGdCQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0lGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSUY7O0FEREE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLW5hdGl2ZXtcbiAgaGVpZ2h0OiA1MCU7XG59XG4uY2FsZW5kYXIge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmNhZHtcbiAgbWFyZ2luLXRvcDogMTBweFxufVxuLmxhYmVsLWhlYWRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW4tdG9wOiA1cHhcbn1cblxuLmxhYmVsLWZvb3RlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLXRvcDogOHB4XG59XG5cbi5idXR0b24tZm9vdGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmljb24tc2l6ZS10cmFzaHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uaWNvbi1zaXplLWVkaXR7XG4gIGZvbnQtc2l6ZTogMjBweFxufSIsIi5pdGVtLW5hdGl2ZSB7XG4gIGhlaWdodDogNTAlO1xufVxuXG4uY2FsZW5kYXIge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY2FkIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxhYmVsLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubGFiZWwtZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uYnV0dG9uLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaWNvbi1zaXplLXRyYXNoIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uaWNvbi1zaXplLWVkaXQge1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/todo.service */ "./src/app/services/todo.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HomePage = class HomePage {
    constructor(router, todoService, route, alertController, menu) {
        this.router = router;
        this.todoService = todoService;
        this.route = route;
        this.alertController = alertController;
        this.menu = menu;
        this.monthLabels = [];
        this.dayLabels = [];
        this.flagList = false;
        this.todoId = null;
        this.editar = null;
        this.idRegister = null;
        this.todo = {
            paciente: null,
            procedimento: null,
            especialista: null,
            horario: null,
            date: null,
            createdAt: new Date().getTime(),
        };
        this.horario = null;
    }
    ngOnInit() {
        this.monthLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ag0', 'Set', 'Out', 'Nov', 'Dez'];
        this.dayLabels = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
        this.todoService.getTodos().subscribe(res => {
            this.todos = res;
            if (this.todos.length == 0) {
                this.flagList = true;
            }
            else {
                this.flagList = false;
            }
        });
        this.editar = false;
        // this.todoId = this.route.snapshot.params['id'];
        // if (this.todoId) {
        //   this.loadTodo();
        // }
    }
    dateSelected(event) {
        this.todo.date = event.toLocaleDateString();
    }
    back() {
        this.editar = false;
        this.router.navigate(['/home']);
    }
    loadTodo() {
        this.todoService.getTodo(this.todoId).subscribe(res => {
            this.todo = res;
        });
    }
    presentAlertConfirmDelete(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Excluir Registro',
                message: 'Tem certeza que deseja excluir este registro?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            return false;
                        }
                    }, {
                        text: 'Excluir',
                        handler: () => {
                            this.todoService.removeTodo(item.id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    editarTodo(register) {
        this.idRegister = register;
        this.todoService.getTodo(register).subscribe(res => {
            this.todo = res;
            this.editar = true;
        });
        this.editar = false;
    }
    saveTodo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.idRegister) {
                yield this.todoService.updateTodo(this.todo, this.idRegister).then(() => {
                });
                this.back();
            }
            else {
                this.todo.horario = this.horario.split('T')[1].split('.')[0].split(':').join(' ').split(' ', 2).join().replace(',', ':');
                yield this.todoService.addTodo(this.todo).then(() => {
                });
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map