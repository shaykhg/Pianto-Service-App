(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>Dashboard</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <mat-tab-group>\r\n        <!--    Review Tab-->\r\n        <mat-tab label=\"Review\">\r\n\r\n            <div>\r\n                <mat-card class=\"mat-elevation-z3 money-card\">\r\n                    <h6>Average Rating</h6>\r\n                    <div>\r\n                        <ion-icon name=\"star\" *ngFor=\"let i of reviewArray(avgReview).fill(1)\"></ion-icon>\r\n\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n\r\n            <div>\r\n                <nav>\r\n                    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                        <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\"\r\n                           role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\" (click)=\"getWeeklyReviews()\">Last 7\r\n                            Days</a>\r\n                        <a class=\"nav-item nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#nav-profile\"\r\n                           role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\" (click)=\"getMonthlyReviews()\">Last\r\n                            30 Days</a>\r\n                        <a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" href=\"#nav-contact\"\r\n                           role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\" (click)=\"getAnnualReviews()\">Last\r\n                            365 Days</a>\r\n                    </div>\r\n                </nav>\r\n                <div class=\"tab-content\" id=\"nav-tabContent\">\r\n\r\n                    <div class=\"tab-pane fade show active expansion-tab-container\" id=\"nav-home\" role=\"tabpanel\"\r\n                         aria-labelledby=\"nav-home-tab\">\r\n\r\n                        <mat-card *ngFor=\"let review of weekReviews\" (click)=\"openReviewBottomSheet(review)\"\r\n                                  style=\"margin: 10px\" class=\"mat-elevation-z2\">\r\n                            <div class=\"details-container\">\r\n                                <div>#{{review._id}}</div>\r\n                                <div>{{getHumanShortDate(review.date)}}</div>\r\n                                <div>{{util.getTime(review.date)}}</div>\r\n                            </div>\r\n                            <hr>\r\n\r\n                            <div class=\"rating-container\">\r\n                                <span>{{review.name}}</span>\r\n                                <span>\r\n                  <ion-icon name=\"star\" *ngFor=\"let i of reviewArray(review.rating).fill(1)\"></ion-icon>\r\n\r\n                </span>\r\n                            </div>\r\n                        </mat-card>\r\n\r\n                        <mat-card *ngIf=\"weekReviews.length === 0\" style=\"margin: 16px\" class=\"mat-elevation-z2\">\r\n\r\n                            <div>\r\n                                <h2 class=\"no-order-icon\">\r\n                                    <ion-icon name=\"pricetag-outline\"></ion-icon>\r\n                                </h2>\r\n                                <h5 class=\"no-order-text\">No Reviews Found</h5></div>\r\n\r\n                        </mat-card>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane fade\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\r\n                        <mat-card *ngFor=\"let review of monthReviews\" (click)=\"openReviewBottomSheet(review)\"\r\n                                  style=\"margin: 10px\" class=\"mat-elevation-z2\">\r\n                            <div class=\"details-container\">\r\n                                <div>#{{review._id}}</div>\r\n                                <div>{{getHumanShortDate(review.date)}}</div>\r\n<!--                                <div>14:35</div>-->\r\n                            </div>\r\n                            <hr>\r\n\r\n                            <div class=\"rating-container\">\r\n                                <span>{{review.name}}</span>\r\n                                <span>\r\n                        <ion-icon name=\"star\" *ngFor=\"let i of reviewArray(review.rating).fill(1)\"></ion-icon>\r\n\r\n\r\n                </span>\r\n                            </div>\r\n                        </mat-card>\r\n                        <mat-card *ngIf=\"monthReviews.length === 0\" style=\"margin: 16px\" class=\"mat-elevation-z2\">\r\n\r\n                            <div>\r\n                                <h2 class=\"no-order-icon\">\r\n                                    <ion-icon name=\"pricetag-outline\"></ion-icon>\r\n                                </h2>\r\n                                <h5 class=\"no-order-text\">No Reviews Found</h5></div>\r\n\r\n                        </mat-card>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane fade\" id=\"nav-contact\" role=\"tabpanel\" aria-labelledby=\"nav-contact-tab\">\r\n\r\n                        <mat-card *ngFor=\"let review of yearReviews\" (click)=\"openReviewBottomSheet(review)\"\r\n                                  style=\"margin: 10px\" class=\"mat-elevation-z2\">\r\n                            <div class=\"details-container\">\r\n                                <div>#{{review._id}}</div>\r\n                                <div>{{getHumanShortDate(review.date)}}</div>\r\n<!--                                <div>14:35</div>-->\r\n                            </div>\r\n                            <hr>\r\n\r\n                            <div class=\"rating-container\">\r\n                                <span>{{review.name}}</span>\r\n                                <span>\r\n                  <ion-icon name=\"star\" *ngFor=\"let i of reviewArray(review.rating).fill(1)\"></ion-icon>\r\n\r\n                </span>\r\n                            </div>\r\n                        </mat-card>\r\n                        <mat-card *ngIf=\"yearReviews.length === 0\" style=\"margin: 16px\" class=\"mat-elevation-z2\">\r\n\r\n                            <div>\r\n                                <h2 class=\"no-order-icon\">\r\n                                    <ion-icon name=\"pricetag-outline\"></ion-icon>\r\n                                </h2>\r\n                                <h5 class=\"no-order-text\">No Reviews Found</h5></div>\r\n\r\n                        </mat-card>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </mat-tab>\r\n        <!--    Earning Tab-->\r\n        <mat-tab label=\"Payment\">\r\n            <div>\r\n                <mat-card class=\"mat-elevation-z3 money-card\">\r\n                    <h6>Total</h6>\r\n                    <h3>{{getTotalEarning(typeOfEarning)}}&euro;</h3>\r\n                </mat-card>\r\n            </div>\r\n\r\n            <div>\r\n                <nav>\r\n                    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                        <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\"\r\n                           role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\" (click)=\"typeOfEarning = 1\">Last 7\r\n                            Days</a>\r\n                        <a class=\"nav-item nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#nav-profile\"\r\n                           role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\" (click)=\"typeOfEarning = 2\">Last\r\n                            30 Days</a>\r\n                        <a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" href=\"#nav-contact\"\r\n                           role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\" (click)=\"typeOfEarning = 3\">Last\r\n                            365 Days</a>\r\n                    </div>\r\n                </nav>\r\n                <div class=\"tab-content\" id=\"nav-tabContent\">\r\n\r\n                    <!--          Last week-->\r\n\r\n                    <div class=\"tab-pane fade show active expansion-tab-container\" id=\"nav-home\" role=\"tabpanel\"\r\n                         aria-labelledby=\"nav-home-tab\">\r\n\r\n                        <mat-card *ngFor=\"let order of weekOrders\" style=\"padding: 10px\" class=\"mat-elevation-z2\"\r\n                                  (click)=\"openEarningBottomSheet(order)\">\r\n                            <div class=\"details-container\">\r\n                                <div>#{{order._id}}</div>\r\n                                <div>{{getHumanShortDate(order.date)}}</div>\r\n                            </div>\r\n                            <div class=\"text-right\">\r\n                                <div>{{util.getTime(order.date)}}</div>\r\n                            </div>\r\n                            <hr>\r\n\r\n                            <div class=\"rating-container\">\r\n                                <span>{{order.name}}</span>\r\n                                <span>\r\n                                   {{((order.total + order.discount) * earningPercentage).toFixed(2)}}&euro;\r\n\r\n\r\n                </span>\r\n                            </div>\r\n                        </mat-card>\r\n\r\n                        <mat-card *ngIf=\"weekOrders.length === 0\" style=\"margin: 16px\" class=\"mat-elevation-z2\">\r\n\r\n                            <div>\r\n                                <h2 class=\"no-order-icon\">\r\n                                    <ion-icon name=\"cube-outline\"></ion-icon>\r\n                                </h2>\r\n                                <h5 class=\"no-order-text\">No Orders Found</h5></div>\r\n\r\n                        </mat-card>\r\n\r\n                    </div>\r\n\r\n                    <!--          Last Month-->\r\n\r\n                    <div class=\"tab-pane fade\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\r\n\r\n                        <mat-card *ngFor=\"let order of monthOrders\" style=\"margin: 10px\" class=\"mat-elevation-z2\"\r\n                                  (click)=\"openEarningBottomSheet(order)\">\r\n                            <div class=\"details-container\">\r\n                                <div>#{{order._id}}</div>\r\n                                <div>{{getHumanShortDate(order.date)}}</div>\r\n                            </div>\r\n                            <div class=\"text-right\">\r\n                                <div>{{util.getTime(order.date)}}</div>\r\n\r\n                            </div>\r\n                            <hr>\r\n\r\n                            <div class=\"rating-container\">\r\n                                <span>{{order.name}}</span>\r\n                                <span>\r\n                                   {{((order.total + order.discount) * earningPercentage).toFixed(2)}}&euro;\r\n\r\n\r\n                </span>\r\n                            </div>\r\n                        </mat-card>\r\n\r\n                        <mat-card *ngIf=\"monthOrders.length === 0\" style=\"margin: 16px\" class=\"mat-elevation-z2\">\r\n\r\n                            <div>\r\n                                <h2 class=\"no-order-icon\">\r\n                                    <ion-icon name=\"cube-outline\"></ion-icon>\r\n                                </h2>\r\n                                <h5 class=\"no-order-text\">No Orders Found</h5></div>\r\n\r\n                        </mat-card>\r\n\r\n                    </div>\r\n\r\n                    <!--          Last Year-->\r\n\r\n                    <div class=\"tab-pane fade\" id=\"nav-contact\" role=\"tabpanel\" aria-labelledby=\"nav-contact-tab\">\r\n                        <mat-card *ngFor=\"let order of yearOrders\" (click)=\"openEarningBottomSheet(order)\"\r\n                                  style=\"margin: 10px\" class=\"mat-elevation-z2\">\r\n                            <div class=\"details-container\">\r\n                                <div>#{{order._id}}</div>\r\n                                <span>{{getHumanShortDate(order.date)}}</span>\r\n\r\n                            </div>\r\n                            <div class=\"text-right\">\r\n                                <span class=\"m-l-5 m-r-5\">{{util.getTime(order.date)}}</span>\r\n                            </div>\r\n                            <hr>\r\n\r\n                            <div class=\"rating-container\">\r\n                                <span>{{order.name}}</span>\r\n                                <span>\r\n                                   {{((order.total + order.discount) * earningPercentage).toFixed(2)}}&euro;\r\n\r\n\r\n                </span>\r\n                            </div>\r\n                        </mat-card>\r\n\r\n                        <mat-card *ngIf=\"yearOrders.length === 0\" style=\"margin: 10px\" class=\"mat-elevation-z2\">\r\n                            <div>\r\n                                <div class=\"no-order-icon\">\r\n                                    <ion-icon name=\"cube-outline\"></ion-icon>\r\n                                </div>\r\n                                <h5 class=\"no-order-text\">No Orders Found</h5>\r\n                            </div>\r\n                        </mat-card>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _modals_earning_popup_earning_popup_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modals/earning-popup/earning-popup.page */ "./src/app/modals/earning-popup/earning-popup.page.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _modals_review_popup_review_popup_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modals/review-popup/review-popup.page */ "./src/app/modals/review-popup/review-popup.page.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");














let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]],
        entryComponents: [_modals_earning_popup_earning_popup_page__WEBPACK_IMPORTED_MODULE_10__["EarningPopupPage"], _modals_review_popup_review_popup_page__WEBPACK_IMPORTED_MODULE_12__["ReviewPopupPage"]],
        providers: [{ provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: true } }]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".money-card {\n  text-align: center;\n  margin: 20px;\n}\n\n.nav-tabs .nav-item {\n  margin-bottom: -1px;\n  min-width: 33.33%;\n}\n\n.expansion-tab-container {\n  padding: 10px;\n}\n\n.details-container {\n  display: flex;\n  flex-direction: row;\n  /* make main axis horizontal (default setting) */\n  justify-content: space-between;\n  /* center items horizontally, in this case */\n  align-items: center;\n  /* center items vertically, in this case */\n}\n\nhr {\n  background-color: #dbdbdb;\n}\n\n.rating-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.no-order-icon {\n  text-align: center;\n  font-size: 60px;\n  color: #767676;\n}\n\n.no-order-text {\n  text-align: center;\n  font-size: 18px;\n  color: #767676;\n}\n\n.mat-card {\n  border-radius: 12px;\n}\n\n.nav-link {\n  display: block;\n  padding: 5px 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUF5QixnREFBQTtFQUN6Qiw4QkFBQTtFQUFnQyw0Q0FBQTtFQUNoQyxtQkFBQTtFQUF5QiwwQ0FBQTtBQUkzQjs7QUFEQTtFQUNFLHlCQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFJRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFLRjs7QUFGQTtFQUNFLG1CQUFBO0FBS0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb25leS1jYXJke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5uYXYtdGFicyAubmF2LWl0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgbWluLXdpZHRoOiAzMy4zMyU7XHJcbn1cclxuXHJcbi5leHBhbnNpb24tdGFiLWNvbnRhaW5lcntcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZGV0YWlscy1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93OyAgICAgLyogbWFrZSBtYWluIGF4aXMgaG9yaXpvbnRhbCAoZGVmYXVsdCBzZXR0aW5nKSAqL1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogY2VudGVyIGl0ZW1zIGhvcml6b250YWxseSwgaW4gdGhpcyBjYXNlICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgIC8qIGNlbnRlciBpdGVtcyB2ZXJ0aWNhbGx5LCBpbiB0aGlzIGNhc2UgKi9cclxufVxyXG5cclxuaHJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcclxufVxyXG5cclxuLnJhdGluZy1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5uby1vcmRlci1pY29ue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgY29sb3I6ICM3Njc2NzY7XHJcbn1cclxuLm5vLW9yZGVyLXRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzc2NzY3NjtcclxufVxyXG5cclxuLm1hdC1jYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modals_earning_popup_earning_popup_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/earning-popup/earning-popup.page */ "./src/app/modals/earning-popup/earning-popup.page.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _modals_review_sheet_review_sheet_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modals/review-sheet/review-sheet.page */ "./src/app/modals/review-sheet/review-sheet.page.ts");
/* harmony import */ var _modals_earning_sheet_earning_sheet_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modals/earning-sheet/earning-sheet.page */ "./src/app/modals/earning-sheet/earning-sheet.page.ts");













let DashboardPage = class DashboardPage {
    constructor(bottomSheet, dialog, api, modalController, session, util) {
        this.bottomSheet = bottomSheet;
        this.dialog = dialog;
        this.api = api;
        this.modalController = modalController;
        this.session = session;
        this.util = util;
        this.date = moment__WEBPACK_IMPORTED_MODULE_4__();
        this.weekOrders = [];
        this.monthOrders = [];
        this.yearOrders = [];
        this.weekReviews = [];
        this.monthReviews = [];
        this.yearReviews = [];
        this.reviewArray = Array;
        this.type = 1;
        this.typeOfEarning = 1;
        this.earningPercentage = 0.7;
        this.dates = [{ start: moment__WEBPACK_IMPORTED_MODULE_4__().subtract(7, 'days') },
            { start: moment__WEBPACK_IMPORTED_MODULE_4__().subtract(30, 'days'), end: moment__WEBPACK_IMPORTED_MODULE_4__() },
            { start: moment__WEBPACK_IMPORTED_MODULE_4__().subtract(365, 'days'), end: moment__WEBPACK_IMPORTED_MODULE_4__() }];
    }
    ngOnInit() {
        this.init();
    }
    ionViewWillEnter() {
        this.getWeeklyOrder();
        this.getMonthlyOrder();
        this.getAnnualOrder();
        this.getWeeklyReviews();
        this.getMonthlyReviews();
        this.getAnnualReviews();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.util.checkLogin();
            this.getAvgReview(1);
            this.getWeeklyReviews();
        });
    }
    getTotalEarning(type) {
        if (type === 1) {
            this.totalEarning = lodash__WEBPACK_IMPORTED_MODULE_5__["sumBy"](this.weekOrders, 'total') + lodash__WEBPACK_IMPORTED_MODULE_5__["sumBy"](this.weekOrders, 'discount');
            return (this.totalEarning * this.earningPercentage).toFixed(2);
        }
        else if (type === 2) {
            this.totalEarning = lodash__WEBPACK_IMPORTED_MODULE_5__["sumBy"](this.monthOrders, 'total') + lodash__WEBPACK_IMPORTED_MODULE_5__["sumBy"](this.monthOrders, 'discount');
            return (this.totalEarning * this.earningPercentage).toFixed(2);
        }
        else if (type === 3) {
            this.totalEarning = lodash__WEBPACK_IMPORTED_MODULE_5__["sumBy"](this.yearOrders, 'total') + lodash__WEBPACK_IMPORTED_MODULE_5__["sumBy"](this.yearOrders, 'discount');
            return (this.totalEarning * this.earningPercentage).toFixed(2);
        }
    }
    getWeeklyOrder() {
        this.api.getOrdersByDate(moment__WEBPACK_IMPORTED_MODULE_4__().subtract(7, 'days').toDate().toISOString(), moment__WEBPACK_IMPORTED_MODULE_4__().toDate().toISOString(), this.session.getUser().id).subscribe(data => {
            // this.weekOrders = data;
            this.weekOrders = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](data, { status: 'COMPLETED' });
            console.log('these are week orders', this.weekOrders);
        }, error => {
            console.log('an error occurred while fetching weekly order data', error);
        });
    }
    getMonthlyOrder() {
        this.api.getOrdersByDate(moment__WEBPACK_IMPORTED_MODULE_4__().subtract(30, 'days').toDate().toISOString(), moment__WEBPACK_IMPORTED_MODULE_4__().toDate().toISOString(), this.session.getUser().id).subscribe(data => {
            // this.monthOrders = data;
            this.monthOrders = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](data, { status: 'COMPLETED' });
        }, error => {
            console.log('an error occurred while fetching monthly data', error);
        });
    }
    getAnnualOrder() {
        this.api.getOrdersByDate(moment__WEBPACK_IMPORTED_MODULE_4__().subtract(365, 'days').toDate().toISOString(), moment__WEBPACK_IMPORTED_MODULE_4__().toDate().toISOString(), this.session.getUser().id).subscribe(data => {
            // this.yearOrders = data;
            this.yearOrders = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](data, { status: 'COMPLETED' });
            console.log('**************', this.yearOrders);
        }, error => {
            console.log('an error occurred while fetching annual Order data', error);
        });
    }
    getWeeklyReviews() {
        this.type = 1;
        this.api.getReviewsByDate(moment__WEBPACK_IMPORTED_MODULE_4__().subtract(7, 'days').toDate().toISOString(), moment__WEBPACK_IMPORTED_MODULE_4__().toDate().toISOString(), this.session.getUser().id).subscribe(data => {
            this.weekReviews = data;
            console.log('this review data from week review method ^^^^^^^^', this.weekReviews);
            this.getAvgReview(1);
        }, error => {
            console.log('an error occurred while fetching weekly order data', error);
        });
    }
    getMonthlyReviews() {
        this.type = 2;
        this.api.getReviewsByDate(moment__WEBPACK_IMPORTED_MODULE_4__().subtract(30, 'days').toDate().toISOString(), moment__WEBPACK_IMPORTED_MODULE_4__().toDate().toISOString(), this.session.getUser().id).subscribe(data => {
            this.monthReviews = data;
            console.log('this review data from week review method ^^^^^^^^', this.monthReviews);
            this.getAvgReview(2);
        }, error => {
            console.log('an error occurred while fetching monthly data', error);
        });
    }
    getAnnualReviews() {
        this.type = 3;
        this.api.getReviewsByDate(moment__WEBPACK_IMPORTED_MODULE_4__().subtract(365, 'days').toDate().toISOString(), moment__WEBPACK_IMPORTED_MODULE_4__().toDate().toISOString(), this.session.getUser().id).subscribe(data => {
            this.yearReviews = data;
            console.log('this review data from week review method ^^^^^^^^', this.yearReviews);
            this.getAvgReview(3);
        }, error => {
            console.log('an error occurred while fetching annual Order data', error);
        });
    }
    // Open Earning Bottom sheet
    openEarningBottomSheet(order) {
        this.bottomSheet.open(_modals_earning_sheet_earning_sheet_page__WEBPACK_IMPORTED_MODULE_12__["EarningSheetPage"], {
            data: { order },
        });
    }
    // Open review bottom sheet
    openReviewBottomSheet(review) {
        this.bottomSheet.open(_modals_review_sheet_review_sheet_page__WEBPACK_IMPORTED_MODULE_11__["ReviewSheetPage"], {
            data: { review },
        });
    }
    getHumanShortDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_4__(date).format('DD-MMM');
    }
    presentModal(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_earning_popup_earning_popup_page__WEBPACK_IMPORTED_MODULE_2__["EarningPopupPage"],
            });
            return yield modal.present();
        });
    }
    getAvgReview(type) {
        if (type === 1) {
            this.avgReview = lodash__WEBPACK_IMPORTED_MODULE_5__["sumBy"](this.weekReviews, 'rating') / this.weekReviews.length;
            this.avgReview = Number.isNaN(this.avgReview) ? 0 : Math.round(this.avgReview);
            console.log('this is total avgreview type 1', this.avgReview);
            console.log('this is week reviews lenght', this.weekReviews.length);
        }
        else if (type === 2) {
            this.avgReview = lodash__WEBPACK_IMPORTED_MODULE_5__["sumBy"](this.monthReviews, 'rating') / this.monthReviews.length;
            this.avgReview = Number.isNaN(this.avgReview) ? 0 : Math.round(this.avgReview);
            console.log('this is total avgreview type 2', this.avgReview);
        }
        else if (type === 3) {
            this.avgReview = lodash__WEBPACK_IMPORTED_MODULE_5__["sumBy"](this.yearReviews, 'rating') / this.yearReviews.length;
            this.avgReview = Number.isNaN(this.avgReview) ? 0 : Math.round(this.avgReview);
            console.log('this is total avgreview type 3', this.avgReview);
        }
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheet"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_6__["ApiServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")).default]
    })
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map