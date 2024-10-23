(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["completion-completion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/completion/completion.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/completion/completion.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>Complete Order</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"container my-3\">\r\n\r\n        <mat-card class=\"mat-elevation-z2\">\r\n\r\n            <div *ngFor=\"let ques of answers\">\r\n                <div>Q : {{ques.question}}</div>\r\n                <mat-form-field>\r\n                    <mat-label>Answer</mat-label>\r\n                    <label>\r\n                        <input matInput minlength=\"1\" type=\"text\" [(ngModel)]=\"ques.answer\">\r\n                    </label>\r\n                    <mat-error>Please enter an answer</mat-error>\r\n\r\n                </mat-form-field>\r\n\r\n            </div>\r\n\r\n            <div class=\"d-flex justify-content-around\">\r\n                <button class=\"cncl-btn\" mat-flat-button routerLink=\"/tab/tabs/home\">Cancel</button>\r\n                <button (click)=\"submit()\" class=\"sbmt-btn\" mat-raised-button>Submit</button>\r\n            </div>\r\n\r\n        </mat-card>\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/completion/completion-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/completion/completion-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CompletionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionPageRoutingModule", function() { return CompletionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _completion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./completion.page */ "./src/app/completion/completion.page.ts");




const routes = [
    {
        path: '',
        component: _completion_page__WEBPACK_IMPORTED_MODULE_3__["CompletionPage"]
    }
];
let CompletionPageRoutingModule = class CompletionPageRoutingModule {
};
CompletionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CompletionPageRoutingModule);



/***/ }),

/***/ "./src/app/completion/completion.module.ts":
/*!*************************************************!*\
  !*** ./src/app/completion/completion.module.ts ***!
  \*************************************************/
/*! exports provided: CompletionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionPageModule", function() { return CompletionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _completion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./completion-routing.module */ "./src/app/completion/completion-routing.module.ts");
/* harmony import */ var _completion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./completion.page */ "./src/app/completion/completion.page.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");













let CompletionPageModule = class CompletionPageModule {
};
CompletionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _completion_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompletionPageRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"]
        ],
        declarations: [_completion_page__WEBPACK_IMPORTED_MODULE_6__["CompletionPage"]]
    })
], CompletionPageModule);



/***/ }),

/***/ "./src/app/completion/completion.page.scss":
/*!*************************************************!*\
  !*** ./src/app/completion/completion.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sbmt-btn {\n  background: blueviolet;\n  color: white;\n  padding: 1px 40px;\n}\n\n.cncl-btn {\n  border: orangered 1px solid;\n  color: orangered;\n  padding: 1px 40px;\n}\n\n.mat-card {\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGxldGlvbi9jb21wbGV0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBR0E7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFJQTtFQUNFLG1CQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9jb21wbGV0aW9uL2NvbXBsZXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNibXQtYnRue1xyXG4gIGJhY2tncm91bmQ6IGJsdWV2aW9sZXQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDFweCA0MHB4O1xyXG5cclxufVxyXG5cclxuLmNuY2wtYnRue1xyXG4gIGJvcmRlcjogb3JhbmdlcmVkIDFweCBzb2xpZDtcclxuICBjb2xvcjogb3JhbmdlcmVkO1xyXG4gIHBhZGRpbmc6IDFweCA0MHB4O1xyXG5cclxufVxyXG5cclxuLm1hdC1jYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/completion/completion.page.ts":
/*!***********************************************!*\
  !*** ./src/app/completion/completion.page.ts ***!
  \***********************************************/
/*! exports provided: CompletionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionPage", function() { return CompletionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/util.service */ "./src/app/services/util.service.ts");






let CompletionPage = class CompletionPage {
    constructor(util, formBuilder, api, route, router) {
        this.util = util;
        this.formBuilder = formBuilder;
        this.api = api;
        this.route = route;
        this.router = router;
        this.questions = [];
        this.answers = [];
    }
    ngOnInit() {
        this.orderId = this.route.snapshot.params.id;
        this.completionForm = this.formBuilder.group({
            q1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            q2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.getQuestions();
    }
    // Get Questions from extra api type is "question"
    getQuestions() {
        this.api.getQuestionsFromExtras().subscribe(data => {
            this.questions = data.results;
            for (const item of this.questions) {
                this.answers.push({
                    question: item.name,
                    answer: ''
                });
            }
            console.log('these are all questions', this.questions);
        }, error => {
            console.log('an error occurred while getting questions', error);
        });
    }
    submit() {
        const body = {
            id: this.orderId,
            status: 'COMPLETED',
            questions: this.answers
        };
        this.api.updateOrderStat(body).subscribe(data => {
            console.log('this is data after COMPLETED', data);
            this.util.orderUpdate.next(true);
            this.router.navigateByUrl('/tab/tabs/home');
            this.util.openSnackBar('Booking completed', '');
        }, error => {
            this.util.openSnackBar('An error occurred while completing booking', '');
            console.log('this is error occurred', error);
        });
    }
};
CompletionPage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CompletionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-completion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./completion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/completion/completion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./completion.page.scss */ "./src/app/completion/completion.page.scss")).default]
    })
], CompletionPage);



/***/ })

}]);
//# sourceMappingURL=completion-completion-module-es2015.js.map