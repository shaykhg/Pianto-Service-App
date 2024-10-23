(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "    <ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>Home</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div *ngIf=\"allOrders\" class=\"container\">\r\n\r\n        <mat-tab-group>\r\n\r\n            <mat-tab label=\"All orders\">\r\n\r\n                <div class=\"m5 my-3\">\r\n                    <mat-card *ngFor=\"let order of orders\" style=\"padding: 10px;margin: 10px 0\" class=\"mat-elevation-z2\"\r\n                              (click)=\"openDetailBottomSheet(order)\">\r\n                        <div class=\"details-container\">\r\n                            <div class=\"m-t-10\">#<i>{{order._id}}</i></div>\r\n\r\n                            <div class=\"m-t-10\">\r\n                             <span>   <svg class=\"icon\" viewBox=\"0 0 24 24\">\r\n                                <path fill=\"currentColor\" d=\"M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z\" />\r\n                                </svg>\r\n                             </span>\r\n                            <span>\r\n                                 {{getHumanShortDate(order.date)}}\r\n                            </span>\r\n                            </div>\r\n                            <div>\r\n                            <span>\r\n                                <svg class=\"icon\" viewBox=\"0 0 24 24\">\r\n                                    <path fill=\"currentColor\" d=\"M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M15.3 16.2L14 17L11 11.8V7H12.5V11.4L15.3 16.2Z\" />\r\n                                </svg>\r\n                            </span>\r\n                                <span>{{order.time}}</span>\r\n                            </div>\r\n                            <div >\r\n                            <span>\r\n                                <svg class=\"icon\" viewBox=\"0 0 24 24\">\r\n                                    <path fill=\"currentColor\" d=\"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z\" />\r\n                                </svg>\r\n                            </span>\r\n                                <span>{{order.name}}</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                        \r\n\r\n                    </mat-card>\r\n\r\n                    <div class=\"m5\" *ngIf=\"orders.length === 0\">\r\n                        <mat-card>\r\n                            <div class=\"empty-icon\">\r\n                                <ion-icon name=\"folder-open-outline\"></ion-icon>\r\n                            </div>\r\n                            <h5 class=\"no-order\">No Orders assigned for this day</h5>\r\n                        </mat-card>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Date based orders\">\r\n                <ion-slides [options]=\"slideOpts\" style=\"margin-top: 25px\">\r\n                    <ion-slide (click)=\"getOrdersByDate(day, session.getUser().id)\" *ngFor=\"let day of days\"\r\n                               [class]=\"getDaysCss(day)\">\r\n                        <div>\r\n                            <div>{{day.format('ddd')}}</div>\r\n                            <div class=\"small\">{{day.format('DD-MM')}}</div>\r\n                        </div>\r\n\r\n                    </ion-slide>\r\n\r\n                </ion-slides>\r\n\r\n\r\n                <div style=\"margin-top: 20px\">\r\n\r\n                    <div *ngFor=\"let order of allOrders\">\r\n                        <mat-card *ngIf=\"order.status === 'PAYMENT_CONFIRMED' || order.status === 'COMPLETED' \" [style.background]=\"getCss(order.status)\"  class=\"my-3 row m-l-2 m-r-2\" (click)=\"openDetailBottomSheet(order)\">\r\n                            <div >\r\n                                <div class=\"o-detail-title\">\r\n                    <span style=\"width:24px;height:24px\">\r\n                        <ion-icon  name=\"information-circle-outline\"></ion-icon>\r\n                  </span>\r\n                                    <span>{{order._id}}</span>\r\n                                </div>\r\n\r\n                                <div class=\"o-detail-title\">\r\n                    <span style=\"width:24px;height:24px\">\r\n                        <ion-icon name=\"person-outline\"></ion-icon>\r\n                    </span>\r\n                                    <span>{{order.name}}</span>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"o-detail-title\">\r\n                    <span style=\"width:24px;height:24px\">\r\n                        <ion-icon name=\"time-outline\"></ion-icon>\r\n                    </span>\r\n                                    <span>{{order.time}}</span>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"o-detail-title\">\r\n                    <span style=\"width:24px;height:24px\">\r\n                        <ion-icon name=\"home-outline\"></ion-icon>\r\n                    </span>\r\n                                    <span>{{order.address}}</span>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"o-detail-title\">\r\n                    <span style=\"width:24px;height:24px\">\r\n                        <ion-icon name=\"call-outline\"></ion-icon>\r\n                    </span>\r\n                                    <span>{{order.phone}}</span>\r\n                                </div>\r\n\r\n\r\n\r\n                                <div class=\"o-detail-title\">\r\n                    <span style=\"width:24px;height:24px\">\r\n                        <ion-icon name=\"hardware-chip-outline\"></ion-icon>\r\n                    </span>\r\n                                    <span [style.color]=\"getStatusColor(order.status)\">{{getStatus(order.status)}}</span>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </mat-card>\r\n                    </div>\r\n                    <!--            <mat-accordion *ngFor=\"let order of allOrders\">-->\r\n                    <!--                <mat-expansion-panel [class]=\"getCss(order.status)\" style=\"margin-top: 10px!important\">-->\r\n\r\n                    <!--                    <mat-expansion-panel-header [collapsedHeight]=\"'auto'\" style=\"padding: 10px\">-->\r\n                    <!--                        <mat-panel-title>-->\r\n                    <!--                        <span class=\"expansion-title\">-->\r\n                    <!--                            #{{order._id}}-->\r\n                    <!--                            <br>-->\r\n                    <!--                            <br>-->\r\n                    <!--                      <span class=\"my-2\">{{order.address}}</span>-->\r\n                    <!--                        </span>-->\r\n                    <!--                        </mat-panel-title>-->\r\n                    <!--                        <mat-panel-title class=\"expansion-title\">-->\r\n                    <!--               <span>-->\r\n                    <!--                {{order.time}}-->\r\n                    <!--               </span>-->\r\n                    <!--                        </mat-panel-title>-->\r\n\r\n                    <!--                    </mat-expansion-panel-header>-->\r\n                    <!--                    <hr>-->\r\n                    <!--                    <div class=\"call\">-->\r\n                    <!--                        <ion-icon name=\"call\"></ion-icon>-->\r\n                    <!--                        &lt;!&ndash;                {{order.mobile}}&ndash;&gt;-->\r\n                    <!--                        <a href=\"tel:{{order.phone}}\"-->\r\n                    <!--                           style=\"color: black;text-decoration: none;margin-left: 3px\">{{order.phone ? order.phone : 'Contact not added'}}</a>-->\r\n                    <!--                    </div>-->\r\n\r\n                    <!--                    <div class=\"btn-container\">-->\r\n                    <!--                        <button (click)=\"openDetailBottomSheet(order)\" class=\"user-btn\" mat-flat-button>Details</button>-->\r\n                    <!--                        <button (click)=\"presentAlertConfirm(order._id)\" *ngIf=\"!(order.status === 'cancel' ||order.status === 'completed')\" class=\"user-btn\"-->\r\n                    <!--                                mat-flat-button>Cancel-->\r\n                    <!--                        </button>-->\r\n                    <!--                        <button *ngIf=\"!(order.status === 'cancel' || order.status === 'completed')\" [routerLink]=\"'/completion/' + order._id\" class=\"user-btn\"-->\r\n                    <!--                                mat-flat-button>Complete-->\r\n                    <!--                        </button>-->\r\n                    <!--                    </div>-->\r\n\r\n\r\n                    <!--                </mat-expansion-panel>-->\r\n                    <!--            </mat-accordion>-->\r\n\r\n                </div>\r\n\r\n                <div class=\"m5\" *ngIf=\"allOrders.length === 0\">\r\n                    <mat-card>\r\n                        <div class=\"empty-icon\">\r\n                            <ion-icon name=\"folder-open-outline\"></ion-icon>\r\n                        </div>\r\n                        <h5 class=\"no-order\">No Orders assigned for this day</h5>\r\n                    </mat-card>\r\n                </div>\r\n\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n\r\n\r\n    </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/expansion */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
      /* harmony import */


      var _order_history_order_history_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../order-history/order-history.module */
      "./src/app/order-history/order-history.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"], _order_history_order_history_module__WEBPACK_IMPORTED_MODULE_14__["OrderHistoryPageModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".user-btn {\n  background-color: #88d62c;\n  color: white;\n  font-size: 12px;\n  border-radius: 20px;\n  margin: 5px;\n}\n\n.btn-container {\n  text-align: center;\n}\n\n.call {\n  text-align: center;\n  font-size: 16px;\n  margin: 20px 0;\n}\n\nhr {\n  background-color: #dbdbdb;\n}\n\n.mat-expansion-panel-header.mat-expanded {\n  min-height: 100px !important;\n  height: auto !important;\n}\n\n.days {\n  border: 1px solid;\n  padding: 10px;\n  color: #8a2be2;\n  margin-right: 10px;\n}\n\n.days-selected {\n  border: 1px solid;\n  padding: 10px;\n  color: white;\n  background: #8a2be2;\n  margin-right: 10px;\n}\n\n.days-container {\n  overflow: scroll;\n  width: 800px;\n}\n\n.no-order {\n  text-align: center;\n  color: #7d7d7d;\n}\n\n.empty-icon {\n  color: #7d7d7d;\n  text-align: center;\n  font-size: 48px;\n}\n\n.mat-card {\n  border-radius: 12px;\n}\n\n.completed-card {\n  border: 1px solid #8a2be2;\n}\n\n.cancel-card {\n  border: 1px solid orangered;\n}\n\n.icon {\n  font-size: 16px;\n  height: 100%;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n\n.o-detail-title {\n  color: #111111;\n  font-size: 16px;\n  margin-top: 2px;\n}\n\n.details-container {\n  flex-direction: row;\n  /* make main axis horizontal (default setting) */\n  justify-content: space-between;\n  /* center items horizontally, in this case */\n  align-items: center;\n  /* center items vertically, in this case */\n}\n\n.details-container div {\n  font-size: 18px;\n  margin-top: 5px;\n}\n\n.icon {\n  height: 28px;\n  width: 28px;\n  color: #8a2be2;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUY7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsNEJBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBRUY7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7QUFDRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUY7O0FBSUE7RUFFRSxtQkFBQTtFQUF5QixnREFBQTtFQUN6Qiw4QkFBQTtFQUFnQyw0Q0FBQTtFQUNoQyxtQkFBQTtFQUF5QiwwQ0FBQTtBQUMzQjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODhkNjJjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4uYnRuLWNvbnRhaW5lcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYWxse1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcblxyXG59XHJcblxyXG5ocntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5tYXQtZXhwYW5kZWQge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4IWltcG9ydGFudDtcclxuICBoZWlnaHQ6IGF1dG8haW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF5c3tcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiAjOGEyYmUyO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmRheXMtc2VsZWN0ZWR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogIzhhMmJlMjtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kYXlzLWNvbnRhaW5lcntcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIHdpZHRoOiA4MDBweDtcclxuXHJcbn1cclxuXHJcbi5uby1vcmRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM3ZDdkN2Q7XHJcbn1cclxuXHJcbi5lbXB0eS1pY29ue1xyXG4gIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZHtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG4uY29tcGxldGVkLWNhcmR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzhhMmJlMjtcclxufVxyXG5cclxuLmNhbmNlbC1jYXJke1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZXJlZDtcclxufVxyXG5cclxuXHJcbi5pY29ue1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLm8tZGV0YWlsLXRpdGxle1xyXG4gIGNvbG9yOiAjMTExMTExO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcblxyXG59XHJcblxyXG4uZGV0YWlscy1jb250YWluZXJ7XHJcbiAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7ICAgICAvKiBtYWtlIG1haW4gYXhpcyBob3Jpem9udGFsIChkZWZhdWx0IHNldHRpbmcpICovXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvKiBjZW50ZXIgaXRlbXMgaG9yaXpvbnRhbGx5LCBpbiB0aGlzIGNhc2UgKi9cclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgLyogY2VudGVyIGl0ZW1zIHZlcnRpY2FsbHksIGluIHRoaXMgY2FzZSAqL1xyXG5cclxuICBkaXZ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbntcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgY29sb3I6ICM4YTJiZTI7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/api-service.service */
      "./src/app/services/api-service.service.ts");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/session.service */
      "./src/app/services/session.service.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _modals_earning_popup_earning_popup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../modals/earning-popup/earning-popup.page */
      "./src/app/modals/earning-popup/earning-popup.page.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! lodash */
      "./node_modules/lodash/lodash.js");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/util.service */
      "./src/app/services/util.service.ts");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
      /* harmony import */


      var _modals_details_sheet_details_sheet_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../modals/details-sheet/details-sheet.page */
      "./src/app/modals/details-sheet/details-sheet.page.ts");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var _modals_earning_sheet_earning_sheet_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../modals/earning-sheet/earning-sheet.page */
      "./src/app/modals/earning-sheet/earning-sheet.page.ts");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(local, util, api, session, dialog, alertController, bottomSheet) {
          _classCallCheck(this, HomePage);

          this.local = local;
          this.util = util;
          this.api = api;
          this.session = session;
          this.dialog = dialog;
          this.alertController = alertController;
          this.bottomSheet = bottomSheet;
          this.orders = [];
          this.date = moment__WEBPACK_IMPORTED_MODULE_7__();
          this.selectedDay = moment__WEBPACK_IMPORTED_MODULE_7__();
          this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 5.5
          };
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.util.checkLogin();

                    case 2:
                      this.removePreviousSLots();
                      this.util.orderUpdate.subscribe(function (data) {
                        if (data) {
                          _this.getOrdersByDate(moment__WEBPACK_IMPORTED_MODULE_7__(), _this.session.getUser().id);

                          _this.getNextDays();

                          _this.selectedDay = moment__WEBPACK_IMPORTED_MODULE_7__();
                        }
                      }); // update token

                      this.sendFCMToken();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "sendFCMToken",
          value: function sendFCMToken() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var fcmToken;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.local.getValue('fcm_token');

                    case 2:
                      fcmToken = _context2.sent;

                      if (!fcmToken) {
                        _context2.next = 12;
                        break;
                      }

                      _context2.prev = 4;
                      _context2.next = 7;
                      return this.api.setFCMToken(this.session.getUser().id, fcmToken);

                    case 7:
                      _context2.next = 12;
                      break;

                    case 9:
                      _context2.prev = 9;
                      _context2.t0 = _context2["catch"](4);
                      console.log('Err in token submit!');

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[4, 9]]);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getOrdersByDate(moment__WEBPACK_IMPORTED_MODULE_7__(), this.session.getUser().id);
            this.getNextDays();
            this.selectedDay = moment__WEBPACK_IMPORTED_MODULE_7__();
            console.log('ionViewDidEnter*****************');
            this.getOrders();
          }
        }, {
          key: "getNextDays",
          value: function getNextDays() {
            var daysToGet = 35;
            var arrDays = [];

            while (daysToGet) {
              var current = moment__WEBPACK_IMPORTED_MODULE_7__(this.date).add(daysToGet, 'day');
              arrDays.push(current);
              daysToGet--;
            }

            return this.days = [moment__WEBPACK_IMPORTED_MODULE_7__()].concat(arrDays.reverse());
          }
        }, {
          key: "getOrdersByDate",
          value: function getOrdersByDate(start, user) {
            var _this2 = this;

            this.selectedDay = start;
            start = moment__WEBPACK_IMPORTED_MODULE_7__(start).startOf('day').toDate().toISOString();
            var end = moment__WEBPACK_IMPORTED_MODULE_7__(start).endOf('day').toDate().toISOString();
            this.api.getOrdersByDate(start, end, user).subscribe(function (data) {
              _this2.allOrders = data;
              _this2.allOrders = lodash__WEBPACK_IMPORTED_MODULE_8__["filter"](_this2.allOrders, function (order) {
                return order.status === 'PAYMENT_CONFIRMED' || order.status === 'COMPLETED';
              });
            }, function (error) {
              _this2.util.openSnackBar('Sorry!! an error occurred while getting orders', '');
            });
          }
        }, {
          key: "openDialog",
          value: function openDialog(order) {
            var _this3 = this;

            console.log('this is order data to be sent', order);
            var dialogRef = this.dialog.open(_modals_earning_popup_earning_popup_page__WEBPACK_IMPORTED_MODULE_5__["EarningPopupPage"], {
              width: '350px',
              data: {
                order: order
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
              _this3.onCloseData = result;
            });
          }
        }, {
          key: "openDetailBottomSheet",
          value: function openDetailBottomSheet(order) {
            this.bottomSheet.open(_modals_details_sheet_details_sheet_page__WEBPACK_IMPORTED_MODULE_11__["DetailsSheetPage"], {
              data: {
                order: order
              }
            });
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Confirm!',
                        message: 'Cancel this order!!!',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel', blah);
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            _this4.api.updateOrderStatus(id, {
                              status: 'REJECTED'
                            }).subscribe(function (data) {
                              console.log('Confirm Okay');

                              _this4.util.openSnackBar('Status Updated to "Cancel', '');
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getDaysCss",
          value: function getDaysCss(day) {
            if (moment__WEBPACK_IMPORTED_MODULE_7__(day).isSame(this.selectedDay, 'day')) {
              return 'days-selected';
            } else {
              return 'days';
            }
          } // Remove previous slots before last 7 days

        }, {
          key: "removePreviousSLots",
          value: function removePreviousSLots() {
            var _this5 = this;

            // get user details
            this.api.getUser(this.session.getUser().id).subscribe(function (data) {
              _this5.allSlots = data.slots;
              var slots = [];

              _this5.allSlots.forEach(function (item) {
                if (moment__WEBPACK_IMPORTED_MODULE_7__(item.date).isBefore(moment__WEBPACK_IMPORTED_MODULE_7__().subtract(7, 'day')) && item.available) {
                  slots.push(item);
                } else {}
              }); // get unique slots


              _this5.allSlots = lodash__WEBPACK_IMPORTED_MODULE_8__["difference"](_this5.allSlots, slots);
              var body = {
                slots: _this5.allSlots
              }; // update user if there are slots before 7 days

              if (slots.length > 0) {
                _this5.api.updateUser(_this5.session.getUser().id, body).subscribe(function (resp) {
                  console.log('slots are removed and updated', resp);
                }, function (error) {
                  console.log('an error occurred while updating slots ', error);
                });
              } else {
                console.log('nothing to do here');
              }
            }, function (error) {
              console.log('an error occurred while getting user', error);
            });
          }
        }, {
          key: "getStatusColor",
          value: function getStatusColor(status) {
            status = status.toUpperCase();
            console.log('Status', status);

            if (status === 'PAYMENT_CONFIRMED') {
              return '#1E90FF';
            } else if (status === 'COMPLETED') {
              return '#4caf50';
            } else if (status === 'PENDING') {
              return '#4caf50';
            } else if (status === 'CANCELLED') {
              return '#d32f2f';
            } else if (status === 'REJECTED') {
              return '#e74e01';
            } else {
              return '#000000';
            }
          }
        }, {
          key: "getStatus",
          value: function getStatus(status) {
            var mWord = status.toLowerCase();
            mWord = mWord.replace('_', ' ');
            return mWord[0].toUpperCase() + mWord.substr(1).toLowerCase();
          }
        }, {
          key: "getCss",
          value: function getCss(status) {
            status = status.toUpperCase();
            console.log('Status', status);

            if (status === 'PAYMENT_CONFIRMED') {
              return '#c4e1f8';
            } else if (status === 'COMPLETED') {
              return '#f0fdf8';
            } else if (status === 'PENDING') {
              return '#f5fdf8';
            } else if (status === 'CANCELLED') {
              return '#ffe6e6';
            } else if (status === 'REJECTED') {
              return '#FFE6E6';
            } else {
              return '#ffffff';
            }
          }
        }, {
          key: "getOrders",
          value: function getOrders() {
            var _this6 = this;

            this.api.getOrdersByDate(moment__WEBPACK_IMPORTED_MODULE_7__().startOf('day').toDate().toISOString(), moment__WEBPACK_IMPORTED_MODULE_7__().add('365', 'days').toDate().toISOString(), this.session.getUser().id).subscribe(function (data) {
              // this.weekOrders = data;
              _this6.orders = lodash__WEBPACK_IMPORTED_MODULE_8__["filter"](data, function (el) {
                return el.status === 'PAYMENT_CONFIRMED' || el.status === 'COMPLETED';
              });
              _this6.orders = lodash__WEBPACK_IMPORTED_MODULE_8__["sortBy"](_this6.orders, 'date', 'time');
            }, function (error) {
              console.log('an error occurred while fetching weekly order data', error);
            });
          } // Open Earning Bottom sheet

        }, {
          key: "openEarningBottomSheet",
          value: function openEarningBottomSheet(order) {
            this.bottomSheet.open(_modals_earning_sheet_earning_sheet_page__WEBPACK_IMPORTED_MODULE_13__["EarningSheetPage"], {
              data: {
                order: order
              }
            });
          }
        }, {
          key: "getHumanShortDate",
          value: function getHumanShortDate(date) {
            return moment__WEBPACK_IMPORTED_MODULE_7__(date).format('DD-MMM');
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_12__["LocalStorageService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"]
        }, {
          type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"]
        }, {
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheet"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map