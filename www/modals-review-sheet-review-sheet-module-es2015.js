(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modals-review-sheet-review-sheet-module"],{

/***/ "./src/app/modals/review-sheet/review-sheet-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modals/review-sheet/review-sheet-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ReviewSheetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewSheetPageRoutingModule", function() { return ReviewSheetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _review_sheet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./review-sheet.page */ "./src/app/modals/review-sheet/review-sheet.page.ts");




const routes = [
    {
        path: '',
        component: _review_sheet_page__WEBPACK_IMPORTED_MODULE_3__["ReviewSheetPage"]
    }
];
let ReviewSheetPageRoutingModule = class ReviewSheetPageRoutingModule {
};
ReviewSheetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReviewSheetPageRoutingModule);



/***/ }),

/***/ "./src/app/modals/review-sheet/review-sheet.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modals/review-sheet/review-sheet.module.ts ***!
  \************************************************************/
/*! exports provided: ReviewSheetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewSheetPageModule", function() { return ReviewSheetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _review_sheet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review-sheet-routing.module */ "./src/app/modals/review-sheet/review-sheet-routing.module.ts");
/* harmony import */ var _review_sheet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review-sheet.page */ "./src/app/modals/review-sheet/review-sheet.page.ts");







let ReviewSheetPageModule = class ReviewSheetPageModule {
};
ReviewSheetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _review_sheet_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReviewSheetPageRoutingModule"]
        ],
        declarations: [_review_sheet_page__WEBPACK_IMPORTED_MODULE_6__["ReviewSheetPage"]]
    })
], ReviewSheetPageModule);



/***/ })

}]);
//# sourceMappingURL=modals-review-sheet-review-sheet-module-es2015.js.map