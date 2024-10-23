(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personal-info-personal-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-info/personal-info.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-info/personal-info.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Personal Info</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"container\">\r\n\r\n  <mat-card *ngIf=\"session.getUser().id\" class=\"edit-info mat-elevation-z3\">\r\n    <form [formGroup] = profileForm >\r\n\r\n      <mat-form-field>\r\n        <mat-label>Name</mat-label>\r\n        <input minlength=\"2\" formControlName=\"firstName\" matInput type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-label>Last Name</mat-label>\r\n        <input formControlName=\"lastName\" matInput type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-label>Email</mat-label>\r\n        <input style=\"background: #e7e7e7\" readonly formControlName=\"email\" matInput type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-label>Mobile</mat-label>\r\n        <input minlength=\"10\" formControlName=\"telephone\" matInput type=\"text\">\r\n        <mat-error>Please enter a valid 10 digit mobile number</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n<!--      Add multiple cities not required in Pianto v2-->\r\n\r\n\r\n<!--        <mat-form-field >-->\r\n<!--          <mat-label>Add postcode to add city</mat-label>-->\r\n<!--            <input matInput  id=\"input-post\"-->\r\n<!--                   #postcode maxlength=\"5\"  (input)=\"onSearchChange($event.target.value)\"   placeholder=\"postcode\" type=\"text\">-->\r\n<!--        </mat-form-field>-->\r\n\r\n<!--      <mat-form-field >-->\r\n<!--            <mat-label >City</mat-label>-->\r\n<!--            <input matInput  formControlName=\"newCiy\" id=\"input-city\"-->\r\n<!--                   style=\"cursor: not-allowed\"  readonly  [(ngModel)]=\"post\"   placeholder=\"City\" type=\"text\">-->\r\n<!--      </mat-form-field>-->\r\n<!--      <div *ngIf=\"city.length > 0\" class=\"grid-chip\">-->\r\n<!--        <span class=\"chip\" *ngFor=\"let loc of city\">-->\r\n<!--        <span *ngIf=\"loc.name\">-->\r\n<!--          {{loc.name}}-->\r\n<!--          <span (click)=\"removeCity(loc)\" style=\"margin-left: 5px\">-->\r\n<!--            <ion-icon name=\"close-outline\"></ion-icon>-->\r\n<!--          </span>-->\r\n<!--        </span>-->\r\n<!--      </span>-->\r\n<!--      </div>-->\r\n<!--      <div>-->\r\n<!--        <button mat-flat-button class=\"save\" [disabled]=\"!postCodeIsValid\" (click)=\"addCity(post)\">Add City</button>-->\r\n<!--      </div>-->\r\n\r\n    </form>\r\n  </mat-card>\r\n\r\n  <button class=\"save-btn\" mat-button (click)=\"updateUser()\">Save Profile</button>\r\n\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/personal-info/personal-info-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/personal-info/personal-info-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PersonalInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoPageRoutingModule", function() { return PersonalInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _personal_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal-info.page */ "./src/app/personal-info/personal-info.page.ts");




const routes = [
    {
        path: '',
        component: _personal_info_page__WEBPACK_IMPORTED_MODULE_3__["PersonalInfoPage"]
    }
];
let PersonalInfoPageRoutingModule = class PersonalInfoPageRoutingModule {
};
PersonalInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PersonalInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/personal-info/personal-info.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/personal-info/personal-info.module.ts ***!
  \*******************************************************/
/*! exports provided: PersonalInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoPageModule", function() { return PersonalInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _personal_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-info-routing.module */ "./src/app/personal-info/personal-info-routing.module.ts");
/* harmony import */ var _personal_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal-info.page */ "./src/app/personal-info/personal-info.page.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











let PersonalInfoPageModule = class PersonalInfoPageModule {
};
PersonalInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _personal_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonalInfoPageRoutingModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_personal_info_page__WEBPACK_IMPORTED_MODULE_6__["PersonalInfoPage"]]
    })
], PersonalInfoPageModule);



/***/ }),

/***/ "./src/app/personal-info/personal-info.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/personal-info/personal-info.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\n  width: 100%;\n}\n\n.edit-info {\n  margin-top: 20px;\n}\n\n.chip {\n  background: #24b47e;\n  color: white;\n  padding: 5px 15px;\n  border-radius: 20px;\n  margin: 5px;\n}\n\n.save {\n  background: teal;\n  color: white;\n  margin-top: 20px;\n}\n\n.grid-chip {\n  display: grid;\n  grid-template-columns: repeat(2, 40%);\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWwtaW5mby9wZXJzb25hbC1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wZXJzb25hbC1pbmZvL3BlcnNvbmFsLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5lZGl0LWluZm97XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmNoaXB7XHJcbiAgYmFja2dyb3VuZDogIzI0YjQ3ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLnNhdmV7XHJcbiAgYmFja2dyb3VuZDogdGVhbDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmdyaWQtY2hpcHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDQwJSk7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/personal-info/personal-info.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/personal-info/personal-info.page.ts ***!
  \*****************************************************/
/*! exports provided: PersonalInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoPage", function() { return PersonalInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








let PersonalInfoPage = class PersonalInfoPage {
    constructor(formBuilder, api, localStorage, session, util) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.localStorage = localStorage;
        this.session = session;
        this.util = util;
        this.city = [];
        this.postCodeIsValid = false;
    }
    ngOnInit() {
        this.init();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.profileForm = this.formBuilder.group({
                firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                lastName: [''],
                telephone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                // address: ['', Validators.required],
                city: [''],
                // postcode: [''],
                newCiy: ['']
            });
            yield this.util.checkLogin();
            this.getUserDetails();
        });
    }
    onSearchChange(value) {
        if (value.length === 5) {
            this.checkAvailability(value);
        }
        else {
            this.postCodeIsValid = false;
            this.post = undefined;
        }
    }
    checkAvailability(postcode) {
        console.log('these are postcodes', postcode);
        const body = [{ type: 'postcode' }, { value: postcode }];
        this.api.getAllSearchInExtras(body).subscribe(data => {
            this.postcodes = data;
            console.log('postcodes***********', this.postcodes);
            if (lodash__WEBPACK_IMPORTED_MODULE_7__["find"](this.postcodes, { value: postcode })) {
                this.postCodeResult = lodash__WEBPACK_IMPORTED_MODULE_7__["find"](this.postcodes, { value: postcode });
                this.postCodeIsValid = true;
                this.post = this.postCodeResult.name;
            }
            else {
                this.util.openSnackBar('Please enter a valid postcode', '');
                console.log('this postcode is not available');
                this.postCodeIsValid = false;
                this.post = undefined;
            }
        }, error => {
            console.log('An error occurred while fetching postcodes', error);
        });
    }
    getUserDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.api.getUser(this.session.getUser().id).subscribe(data => {
                this.userData = data;
                this.profileForm.patchValue({
                    firstName: this.userData.name,
                    lastName: this.userData.lastName,
                    telephone: this.userData.phone,
                    email: this.userData.email,
                    address: this.userData.city + this.userData.country + this.userData.postcode,
                    postcode: this.userData.postcode
                });
                this.city = this.userData.city;
                console.log('This is user data', this.userData);
            }, error => {
                console.log('an error occurred while fetching user data', error);
            });
        });
    }
    updateUser() {
        const body = {
            name: this.profileForm.value.firstName,
            lastName: this.profileForm.value.lastName,
            phone: this.profileForm.value.telephone,
            city: this.profileForm.value.city,
        };
        body.city = this.city;
        if (this.profileForm.valid) {
            this.api.updateUser(this.session.getUser().id, body).subscribe(data => {
                console.log('pofile updated', data);
                this.util.openSnackBar('Profile updated successfully', '');
            }, error => {
                console.log('error occurred while updating', error);
            });
        }
        else {
            this.util.openSnackBar('Please correct form errors first', '');
        }
    }
    addCity(value) {
        const lowercaseCity = value.toLowerCase();
        this.city.push({ name: lowercaseCity });
    }
    removeCity(name) {
        console.log('these are city before removing', this.city);
        lodash__WEBPACK_IMPORTED_MODULE_7__["remove"](this.city, { name: name.name });
        console.log('these are city after removing', this.city);
    }
};
PersonalInfoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] }
];
PersonalInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./personal-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-info/personal-info.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./personal-info.page.scss */ "./src/app/personal-info/personal-info.page.scss")).default]
    })
], PersonalInfoPage);



/***/ })

}]);
//# sourceMappingURL=personal-info-personal-info-module-es2015.js.map