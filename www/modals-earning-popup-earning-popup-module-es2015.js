(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modals-earning-popup-earning-popup-module"],{

/***/ "./src/app/modals/earning-popup/earning-popup-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modals/earning-popup/earning-popup-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: EarningPopupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningPopupPageRoutingModule", function() { return EarningPopupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _earning_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./earning-popup.page */ "./src/app/modals/earning-popup/earning-popup.page.ts");




const routes = [
    {
        path: '',
        component: _earning_popup_page__WEBPACK_IMPORTED_MODULE_3__["EarningPopupPage"]
    }
];
let EarningPopupPageRoutingModule = class EarningPopupPageRoutingModule {
};
EarningPopupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EarningPopupPageRoutingModule);



/***/ }),

/***/ "./src/app/modals/earning-popup/earning-popup.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modals/earning-popup/earning-popup.module.ts ***!
  \**************************************************************/
/*! exports provided: EarningPopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningPopupPageModule", function() { return EarningPopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _earning_popup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./earning-popup-routing.module */ "./src/app/modals/earning-popup/earning-popup-routing.module.ts");
/* harmony import */ var _earning_popup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./earning-popup.page */ "./src/app/modals/earning-popup/earning-popup.page.ts");







let EarningPopupPageModule = class EarningPopupPageModule {
};
EarningPopupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _earning_popup_routing_module__WEBPACK_IMPORTED_MODULE_5__["EarningPopupPageRoutingModule"]
        ],
        declarations: [_earning_popup_page__WEBPACK_IMPORTED_MODULE_6__["EarningPopupPage"]],
    })
], EarningPopupPageModule);



/***/ })

}]);
//# sourceMappingURL=modals-earning-popup-earning-popup-module-es2015.js.map