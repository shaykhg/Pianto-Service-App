(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modals-add-time-sheet-add-time-sheet-module"],{

/***/ "./src/app/modals/add-time-sheet/add-time-sheet-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modals/add-time-sheet/add-time-sheet-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: AddTimeSheetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTimeSheetPageRoutingModule", function() { return AddTimeSheetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_time_sheet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-time-sheet.page */ "./src/app/modals/add-time-sheet/add-time-sheet.page.ts");




const routes = [
    {
        path: '',
        component: _add_time_sheet_page__WEBPACK_IMPORTED_MODULE_3__["AddTimeSheetPage"]
    }
];
let AddTimeSheetPageRoutingModule = class AddTimeSheetPageRoutingModule {
};
AddTimeSheetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddTimeSheetPageRoutingModule);



/***/ }),

/***/ "./src/app/modals/add-time-sheet/add-time-sheet.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modals/add-time-sheet/add-time-sheet.module.ts ***!
  \****************************************************************/
/*! exports provided: AddTimeSheetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTimeSheetPageModule", function() { return AddTimeSheetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_time_sheet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-time-sheet-routing.module */ "./src/app/modals/add-time-sheet/add-time-sheet-routing.module.ts");
/* harmony import */ var _add_time_sheet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-time-sheet.page */ "./src/app/modals/add-time-sheet/add-time-sheet.page.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/__ivy_ngcc__/fesm2015/ngx-material-timepicker.js");











let AddTimeSheetPageModule = class AddTimeSheetPageModule {
};
AddTimeSheetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_time_sheet_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddTimeSheetPageRoutingModule"],
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_10__["NgxMaterialTimepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        ],
        declarations: [_add_time_sheet_page__WEBPACK_IMPORTED_MODULE_6__["AddTimeSheetPage"]]
    })
], AddTimeSheetPageModule);



/***/ })

}]);
//# sourceMappingURL=modals-add-time-sheet-add-time-sheet-module-es2015.js.map