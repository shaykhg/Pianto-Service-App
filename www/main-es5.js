(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/AppConstants.ts":
    /*!*********************************!*\
      !*** ./src/app/AppConstants.ts ***!
      \*********************************/

    /*! exports provided: AppConstants */

    /***/
    function srcAppAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppConstants", function () {
        return AppConstants;
      });

      var AppConstants = function AppConstants() {
        _classCallCheck(this, AppConstants);
      }; // public static BASE_URL = 'https://api.pianto.io';


      AppConstants.BASE_URL = 'https://test-api.pianto.io';
      AppConstants.API = {
        LOGIN: AppConstants.BASE_URL + '/v1/auth/login',
        REGISTER: AppConstants.BASE_URL + '/v1/auth/register',
        FORGOT: AppConstants.BASE_URL + '/v1/auth/forgot-password',
        NEW_PASSWORD: AppConstants.BASE_URL + '/v1/auth/reset-password',
        All_USERS: AppConstants.BASE_URL + '/v1/users',
        All_SETTINGS: AppConstants.BASE_URL + '/v1/settings',
        All_SERVICES: AppConstants.BASE_URL + '/v1/services',
        All_COUPONS: AppConstants.BASE_URL + '/v1/coupons',
        All_ORDERS: AppConstants.BASE_URL + '/v1/orders',
        UPDATE_TOKEN: AppConstants.BASE_URL + '/v1/users/updateToken/',
        All_ORDERS_BY_DATE: AppConstants.BASE_URL + '/v1/orders/earnings',
        All_REVIEWS_BY_DATE: AppConstants.BASE_URL + '/v1/reviews/reviewsByDate',
        PLACE_ORDERS: AppConstants.BASE_URL + '/v1/orders/place',
        CONFIRM_ORDERS: AppConstants.BASE_URL + '/v1/orders/confirm',
        All_PRICING: AppConstants.BASE_URL + '/v1/pricing',
        All_CHARGES: AppConstants.BASE_URL + '/v1/charges',
        All_EXTRAS: AppConstants.BASE_URL + '/v1/extras',
        SILENT_REGISTER: AppConstants.BASE_URL + '/v1/auth/registerSilent',
        APPLY_COUPON: AppConstants.BASE_URL + '/v1/coupons/applyCoupon',
        PAYOUT: AppConstants.BASE_URL + '/v1/payouts',
        UPDATE_ORDER_STATUS: AppConstants.BASE_URL + '/v1/orders/updateStatus'
      };
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/auth-guard */
      "./src/app/services/auth-guard.ts");

      var routes = [{
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        path: 'tab',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "./src/app/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'onboarding',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | onboarding-onboarding-module */
          "onboarding-onboarding-module").then(__webpack_require__.bind(null,
          /*! ./onboarding/onboarding.module */
          "./src/app/onboarding/onboarding.module.ts")).then(function (m) {
            return m.OnboardingPageModule;
          });
        }
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | splash-splash-module */
          [__webpack_require__.e("default~calendar-calendar-module~completion-completion-module~dashboard-dashboard-module~home-home-m~870e2586"), __webpack_require__.e("splash-splash-module")]).then(__webpack_require__.bind(null,
          /*! ./splash/splash.module */
          "./src/app/splash/splash.module.ts")).then(function (m) {
            return m.SplashPageModule;
          });
        }
      }, {
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        path: 'payout-method',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | payout-method-payout-method-module */
          "payout-method-payout-method-module").then(__webpack_require__.bind(null,
          /*! ./payout-method/payout-method.module */
          "./src/app/payout-method/payout-method.module.ts")).then(function (m) {
            return m.PayoutMethodPageModule;
          });
        }
      }, {
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        path: 'personal-info',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | personal-info-personal-info-module */
          [__webpack_require__.e("default~calendar-calendar-module~completion-completion-module~dashboard-dashboard-module~home-home-m~870e2586"), __webpack_require__.e("default~calendar-calendar-module~dashboard-dashboard-module~home-home-module~order-history-order-his~d1646840"), __webpack_require__.e("personal-info-personal-info-module")]).then(__webpack_require__.bind(null,
          /*! ./personal-info/personal-info.module */
          "./src/app/personal-info/personal-info.module.ts")).then(function (m) {
            return m.PersonalInfoPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("default~calendar-calendar-module~completion-completion-module~dashboard-dashboard-module~home-home-m~870e2586"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'earning-popup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modals-earning-popup-earning-popup-module */
          [__webpack_require__.e("default~calendar-calendar-module~completion-completion-module~dashboard-dashboard-module~home-home-m~870e2586"), __webpack_require__.e("default~dashboard-dashboard-module~home-home-module~modals-earning-popup-earning-popup-module~modals~962a23f0"), __webpack_require__.e("common"), __webpack_require__.e("modals-earning-popup-earning-popup-module")]).then(__webpack_require__.bind(null,
          /*! ./modals/earning-popup/earning-popup.module */
          "./src/app/modals/earning-popup/earning-popup.module.ts")).then(function (m) {
            return m.EarningPopupPageModule;
          });
        }
      }, {
        path: 'review-popup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modals-review-popup-review-popup-module */
          [__webpack_require__.e("default~calendar-calendar-module~completion-completion-module~dashboard-dashboard-module~home-home-m~870e2586"), __webpack_require__.e("default~dashboard-dashboard-module~home-home-module~modals-earning-popup-earning-popup-module~modals~962a23f0"), __webpack_require__.e("common"), __webpack_require__.e("modals-review-popup-review-popup-module")]).then(__webpack_require__.bind(null,
          /*! ./modals/review-popup/review-popup.module */
          "./src/app/modals/review-popup/review-popup.module.ts")).then(function (m) {
            return m.ReviewPopupPageModule;
          });
        }
      }, {
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        path: 'completion/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | completion-completion-module */
          [__webpack_require__.e("default~calendar-calendar-module~completion-completion-module~dashboard-dashboard-module~home-home-m~870e2586"), __webpack_require__.e("default~calendar-calendar-module~completion-completion-module~modals-add-time-sheet-add-time-sheet-module"), __webpack_require__.e("completion-completion-module")]).then(__webpack_require__.bind(null,
          /*! ./completion/completion.module */
          "./src/app/completion/completion.module.ts")).then(function (m) {
            return m.CompletionPageModule;
          });
        }
      }, {
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        path: 'onboarding',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | onboarding-onboarding-module */
          "onboarding-onboarding-module").then(__webpack_require__.bind(null,
          /*! ./onboarding/onboarding.module */
          "./src/app/onboarding/onboarding.module.ts")).then(function (m) {
            return m.OnboardingPageModule;
          });
        }
      }, {
        path: 'terms',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | terms-terms-module */
          "terms-terms-module").then(__webpack_require__.bind(null,
          /*! ./terms/terms.module */
          "./src/app/terms/terms.module.ts")).then(function (m) {
            return m.TermsPageModule;
          });
        }
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | about-about-module */
          "about-about-module").then(__webpack_require__.bind(null,
          /*! ./about/about.module */
          "./src/app/about/about.module.ts")).then(function (m) {
            return m.AboutPageModule;
          });
        }
      }, {
        path: 'splash',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | splash-splash-module */
          [__webpack_require__.e("default~calendar-calendar-module~completion-completion-module~dashboard-dashboard-module~home-home-m~870e2586"), __webpack_require__.e("splash-splash-module")]).then(__webpack_require__.bind(null,
          /*! ./splash/splash.module */
          "./src/app/splash/splash.module.ts")).then(function (m) {
            return m.SplashPageModule;
          });
        }
      }, {
        path: 'add-time-sheet',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modals-add-time-sheet-add-time-sheet-module */
          [__webpack_require__.e("default~calendar-calendar-module~completion-completion-module~dashboard-dashboard-module~home-home-m~870e2586"), __webpack_require__.e("default~calendar-calendar-module~completion-completion-module~modals-add-time-sheet-add-time-sheet-module"), __webpack_require__.e("default~calendar-calendar-module~modals-add-time-sheet-add-time-sheet-module"), __webpack_require__.e("modals-add-time-sheet-add-time-sheet-module")]).then(__webpack_require__.bind(null,
          /*! ./modals/add-time-sheet/add-time-sheet.module */
          "./src/app/modals/add-time-sheet/add-time-sheet.module.ts")).then(function (m) {
            return m.AddTimeSheetPageModule;
          });
        }
      }, {
        path: 'details-sheet',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modals-details-sheet-details-sheet-module */
          [__webpack_require__.e("default~calendar-calendar-module~completion-completion-module~dashboard-dashboard-module~home-home-m~870e2586"), __webpack_require__.e("default~calendar-calendar-module~modals-details-sheet-details-sheet-module~modals-earning-sheet-earn~56747fc3"), __webpack_require__.e("default~calendar-calendar-module~home-home-module~modals-details-sheet-details-sheet-module"), __webpack_require__.e("modals-details-sheet-details-sheet-module")]).then(__webpack_require__.bind(null,
          /*! ./modals/details-sheet/details-sheet.module */
          "./src/app/modals/details-sheet/details-sheet.module.ts")).then(function (m) {
            return m.DetailsSheetPageModule;
          });
        }
      }, {
        path: 'review-sheet',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modals-review-sheet-review-sheet-module */
          [__webpack_require__.e("default~calendar-calendar-module~completion-completion-module~dashboard-dashboard-module~home-home-m~870e2586"), __webpack_require__.e("common"), __webpack_require__.e("modals-review-sheet-review-sheet-module")]).then(__webpack_require__.bind(null,
          /*! ./modals/review-sheet/review-sheet.module */
          "./src/app/modals/review-sheet/review-sheet.module.ts")).then(function (m) {
            return m.ReviewSheetPageModule;
          });
        }
      }, {
        path: 'earning-sheet',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modals-earning-sheet-earning-sheet-module */
          [__webpack_require__.e("default~calendar-calendar-module~completion-completion-module~dashboard-dashboard-module~home-home-m~870e2586"), __webpack_require__.e("default~dashboard-dashboard-module~home-home-module~modals-earning-sheet-earning-sheet-module~order-~813641e4"), __webpack_require__.e("default~calendar-calendar-module~modals-details-sheet-details-sheet-module~modals-earning-sheet-earn~56747fc3"), __webpack_require__.e("modals-earning-sheet-earning-sheet-module")]).then(__webpack_require__.bind(null,
          /*! ./modals/earning-sheet/earning-sheet.module */
          "./src/app/modals/earning-sheet/earning-sheet.module.ts")).then(function (m) {
            return m.EarningSheetPageModule;
          });
        }
      }, {
        path: 'details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-details-details-module */
          "pages-details-details-module").then(__webpack_require__.bind(null,
          /*! ./pages/details/details.module */
          "./src/app/pages/details/details.module.ts")).then(function (m) {
            return m.DetailsPageModule;
          });
        }
      }, {
        path: 'order-history',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | order-history-order-history-module */
          [__webpack_require__.e("default~calendar-calendar-module~completion-completion-module~dashboard-dashboard-module~home-home-m~870e2586"), __webpack_require__.e("default~calendar-calendar-module~dashboard-dashboard-module~home-home-module~order-history-order-his~d1646840"), __webpack_require__.e("default~dashboard-dashboard-module~home-home-module~modals-earning-sheet-earning-sheet-module~order-~813641e4"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null,
          /*! ./order-history/order-history.module */
          "./src/app/order-history/order-history.module.ts")).then(function (m) {
            return m.OrderHistoryPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_fcm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/fcm.service */
      "./src/app/services/fcm.service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, fcmService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.fcmService = fcmService;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide(); // Trigger the push setup


              _this.fcmService.initPush();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _services_fcm_service__WEBPACK_IMPORTED_MODULE_5__["FcmService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot(), _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__["MatBottomSheetModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/services/api-service.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/services/api-service.service.ts ***!
      \*************************************************/

    /*! exports provided: ApiServiceService */

    /***/
    function srcAppServicesApiServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiServiceService", function () {
        return ApiServiceService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _AppConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../AppConstants */
      "./src/app/AppConstants.ts");
      /* harmony import */


      var _session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./session.service */
      "./src/app/services/session.service.ts");

      var ApiServiceService = /*#__PURE__*/function () {
        function ApiServiceService(http, session) {
          _classCallCheck(this, ApiServiceService);

          this.http = http;
          this.session = session;
          this.setHeaders();
        }

        _createClass(ApiServiceService, [{
          key: "setHeaders",
          value: function setHeaders() {
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
            this.headers = this.headers.set('Authorization', 'Bearer ' + this.session.getToken());
            console.log('these are headers ', this.headers, 'Authorization', 'Bearer ' + this.session.getToken());
          }
        }, {
          key: "setToken",
          value: function setToken(token) {
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
            this.headers = this.headers.set('Authorization', 'Bearer ' + token);
          }
        }, {
          key: "getOrder",
          value: function getOrder(id) {
            return this.http.get(_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.All_ORDERS + '/' + id, {
              headers: this.headers
            });
          }
        }, {
          key: "getAllOrders",
          value: function getAllOrders(user) {
            return this.http.get(_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.All_ORDERS + '?user=' + user, {
              headers: this.headers
            });
          }
        }, {
          key: "login",
          value: function login(body) {
            return this.http.post(_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.LOGIN, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
          }
        }, {
          key: "getUser",
          value: function getUser(id) {
            console.log('Headers in users api', this.headers);
            return this.http.get(_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.All_USERS + '/' + id, {
              headers: this.headers
            });
          }
        }, {
          key: "updateUser",
          value: function updateUser(id, body) {
            return this.http.put(_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.All_USERS + '/' + id, body, {
              headers: this.headers
            });
          }
        }, {
          key: "getOrdersByDate",
          value: function getOrdersByDate(start, end, user) {
            return this.http.get(_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.All_ORDERS_BY_DATE + '?lte=' + end + '&gte=' + start + '&user=' + user, {
              headers: this.headers
            });
          }
        }, {
          key: "getReviewsByDate",
          value: function getReviewsByDate(start, end, user) {
            return this.http.get(_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.All_REVIEWS_BY_DATE + '?lte=' + end + '&gte=' + start + '&user=' + user, {
              headers: this.headers
            });
          }
        }, {
          key: "getPayoutByUser",
          value: function getPayoutByUser(user) {
            return this.http.get(_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.PAYOUT + '?user=' + user, {
              headers: this.headers
            });
          }
        }, {
          key: "postPayout",
          value: function postPayout(body) {
            return this.http.post(_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.PAYOUT + '/', body, {
              headers: this.headers
            });
          }
        }, {
          key: "updatePayout",
          value: function updatePayout(user, body) {
            return this.http.put(_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.PAYOUT + '/' + user, body, {
              headers: this.headers
            });
          }
        }, {
          key: "updateOrderStatus",
          value: function updateOrderStatus(id, body) {
            return this.http.put(_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.All_ORDERS + '/' + id, body, {
              headers: this.headers
            });
          }
        }, {
          key: "markAvailable",
          value: function markAvailable(id, body) {
            return this.http.put(_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.All_USERS + '/' + id, body, {
              headers: this.headers
            });
          }
        }, {
          key: "getAllSearchInExtras",
          value: function getAllSearchInExtras(body) {
            return this.http.post(_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.All_EXTRAS + '/search', body);
          }
        }, {
          key: "getQuestionsFromExtras",
          value: function getQuestionsFromExtras() {
            return this.http.get(_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.All_EXTRAS + '?type=question');
          } // Api call to update service man slot automatically

        }, {
          key: "updateOrderStat",
          value: function updateOrderStat(body) {
            return this.http.post(_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.UPDATE_ORDER_STATUS, body, {
              headers: this.headers
            });
          }
        }, {
          key: "updateOrder",
          value: function updateOrder(body, id) {
            return this.http.post(_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.All_ORDERS + '/' + id, body, {
              headers: this.headers
            });
          }
          /**
           * Used to set the token for FCM Notifications
           * @param id UserId
           * @param token FCM Token
           */

        }, {
          key: "setFCMToken",
          value: function setFCMToken(id, token) {
            console.log('URL : ' + _AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.UPDATE_TOKEN + id);
            console.log('Boy : ' + token);
            return this.http.post(_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API.UPDATE_TOKEN + id, {
              fcmToken: token
            }, {
              headers: this.headers
            });
          } // Error Handling

        }, {
          key: "handleError",
          value: function handleError(error) {
            var errorMessage;

            if (error.error instanceof ErrorEvent) {
              // Client-side errors
              errorMessage = "Error: ".concat(error.error.message);
            } else {
              // Server-side errors
              if (error.status === 401) {
                errorMessage = 'Your password id incorrect or you do not have access to this resource!'; // Now you can show error if you know about it already!
              } else {
                errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
              }
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
          }
        }]);

        return ApiServiceService;
      }();

      ApiServiceService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
        }];
      };

      ApiServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ApiServiceService);
      /***/
    },

    /***/
    "./src/app/services/auth-guard.ts":
    /*!****************************************!*\
      !*** ./src/app/services/auth-guard.ts ***!
      \****************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppServicesAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./session.service */
      "./src/app/services/session.service.ts");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(session, router) {
          _classCallCheck(this, AuthGuard);

          this.session = session;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route) {
            var _this2 = this;

            return this.session.auth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
              var isAuth = !!user;

              if (isAuth) {
                return true;
              } else {
                return _this2.router.createUrlTree(['/login']);
              }
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })
      /**
       * This service is the AuthGuard service and it is used to guards the routes
       * which are meant to be used only after Authentication. It uses SessionService internally
       * to decide whether session is authenticated or not.
       */
      ], AuthGuard);
      /***/
    },

    /***/
    "./src/app/services/fcm.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/services/fcm.service.ts ***!
      \*****************************************/

    /*! exports provided: FcmService */

    /***/
    function srcAppServicesFcmServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FcmService", function () {
        return FcmService;
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


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./api-service.service */
      "./src/app/services/api-service.service.ts");
      /* harmony import */


      var _session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./session.service */
      "./src/app/services/session.service.ts");
      /* harmony import */


      var _local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./local-storage.service */
      "./src/app/services/local-storage.service.ts");

      var PushNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].PushNotifications;

      var FcmService = /*#__PURE__*/function () {
        function FcmService(local, session, router, api) {
          _classCallCheck(this, FcmService);

          this.local = local;
          this.session = session;
          this.router = router;
          this.api = api;
        }

        _createClass(FcmService, [{
          key: "initPush",
          value: function initPush() {
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].platform !== 'web') {
              this.registerPush();
            }
          }
        }, {
          key: "registerPush",
          value: function registerPush() {
            var _this3 = this;

            PushNotifications.requestPermission().then(function (permission) {
              if (permission.granted) {
                // Register with Apple / Google to receive push via APNS/FCM
                PushNotifications.register();
              } else {// No permission for push granted
              }
            });
            PushNotifications.addListener('registration', function (token) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log('My token: ' + JSON.stringify(token));
                        _context.next = 3;
                        return this.local.setString('fcm_token', token.value);

                      case 3:
                        if (this.session.isLoggedIn) {
                          this.api.setFCMToken(this.session.getUser()._id, token.value).subscribe(function (data) {
                            console.log('All good', data);
                          });
                        }

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
            PushNotifications.addListener('registrationError', function (error) {
              console.log('Error: ' + JSON.stringify(error));
            });
            PushNotifications.addListener('pushNotificationReceived', function (notification) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        console.log('Push received: ' + JSON.stringify(notification));

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
            });
            PushNotifications.addListener('pushNotificationActionPerformed', function (notification) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var data;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        data = notification.notification.data;
                        console.log('Action performed: ' + JSON.stringify(notification.notification));

                        if (data.detailsId) {
                          this.router.navigateByUrl("/home/".concat(data.detailsId));
                        }

                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });
          }
        }]);

        return FcmService;
      }();

      FcmService.ctorParameters = function () {
        return [{
          type: _local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]
        }, {
          type: _session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"]
        }];
      };

      FcmService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FcmService);
      /***/
    },

    /***/
    "./src/app/services/local-storage.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/services/local-storage.service.ts ***!
      \***************************************************/

    /*! exports provided: LocalStorageService */

    /***/
    function srcAppServicesLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
        return LocalStorageService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var LocalStorageService = /*#__PURE__*/function () {
        function LocalStorageService(storage) {
          var _this4 = this;

          _classCallCheck(this, LocalStorageService);

          this.storage = storage;
          this.ready = false;
          /** This key can also set dynamically, per user to make encryption more stronger */

          this.SECRET_KEY = '';

          this.catchAsync = function (fn) {
            return function (req, res, next) {
              console.log('deleted****', fn);
              Promise.resolve(fn(req, res, next))["catch"](function (err) {
                return next(err);
              });
            };
          };

          this.storage.ready().then(function () {
            _this4.ready = true;
          });
        }
        /**
         * To be used to set boolean value in localstorage.
         * @param key - This is the key under which our value will be saved
         * @param value - This the value which we want to save in storage
         */


        _createClass(LocalStorageService, [{
          key: "setBoolean",
          value: function setBoolean(key, value) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.storage.set(key, value);

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
          /**
           * To be used to set objects in localstorage.
           * @param key - This is the key under which our value will be saved
           * @param value - This the value which we want to save in storage
           */

        }, {
          key: "setObject",
          value: function setObject(key, value) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var save;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.storage.set(key, JSON.stringify(value));

                    case 2:
                      save = _context5.sent;

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
          /**
           * To be used to set number in localstorage.
           * @param key - This is the key under which our value will be saved
           * @param value - This the value which we want to save in storage
           */

        }, {
          key: "setNumber",
          value: function setNumber(key, value) {
            var _this5 = this;

            this.catchAsync(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return this.storage.get(key);

                      case 2:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));
            });
          }
          /**
           * To be used to set string in localstorage.
           * @param key - This is the key under which our value will be saved
           * @param value - This the value which we want to save in storage
           */

        }, {
          key: "setString",
          value: function setString(key, value) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.storage.set(key, value);

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
          /**
           * To be used to get all values from localstorage except objects.
           * @param key - This is the key under which data is saved
           */

        }, {
          key: "getValue",
          value: function getValue(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      return _context8.abrupt("return", this.storage.get(key));

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
          /**
           * To be used to get object type values from localstorage.
           * @param key - This is the key under which data is saved
           */

        }, {
          key: "getObject",
          value: function getObject(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var obj;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.storage.get(key);

                    case 2:
                      obj = _context9.sent;
                      return _context9.abrupt("return", JSON.parse(obj));

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
          /**
           * To be used to get delete item from localstorage
           * @param key - This is the key under which data is saved
           */

        }, {
          key: "deleteObject",
          value: function deleteObject(key) {
            var _this6 = this;

            console.log('deleted****', key);
            this.catchAsync(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        _context10.next = 2;
                        return this.storage.remove(key);

                      case 2:
                        return _context10.abrupt("return", true);

                      case 3:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this);
              }));
            });
          }
        }, {
          key: "removeObject",
          value: function removeObject(key) {
            this.storage.remove(key);
          }
        }]);

        return LocalStorageService;
      }();

      LocalStorageService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      LocalStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })
      /**
       * This service is used to save the data into localstorage,
       * this service can also encrypt and decrypt on demand
       * Underneath this service uses Ionic LocalStorage To Save Data
       */
      ], LocalStorageService);
      /***/
    },

    /***/
    "./src/app/services/session.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/session.service.ts ***!
      \*********************************************/

    /*! exports provided: SessionService */

    /***/
    function srcAppServicesSessionServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionService", function () {
        return SessionService;
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


      var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var SessionService = /*#__PURE__*/function () {
        function SessionService(toast, storage, snackBar, router) {
          var _this7 = this;

          _classCallCheck(this, SessionService);

          this.toast = toast;
          this.storage = storage;
          this.snackBar = snackBar;
          this.router = router;
          this.isSessionReady = false;
          this.isLoggedIn = false; // public auth = new BehaviorSubject<boolean>(null);

          this.auth = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1); // Get all info from localstorage

          this.init().then(function () {
            _this7.isSessionReady = true;
            console.log('Session service is read!');
          })["catch"](function (e) {
            _this7.isSessionReady = true;
            console.log('Unable to init session service');
          });
        }
        /**
         * To be used to set token.
         * @param token - The token post received post login.
         */


        _createClass(SessionService, [{
          key: "setToken",
          value: function setToken(token) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      this.token = token;
                      _context11.next = 3;
                      return this.storage.setString('token', token);

                    case 3:
                      _context11.next = 5;
                      return this.storage.setBoolean('loggedIn', true);

                    case 5:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
          /**
           * To be used to set user.
           * @param user - The user object.
           */

        }, {
          key: "setUser",
          value: function setUser(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      this.user = user;
                      this.isLoggedIn = true;
                      _context12.next = 4;
                      return this.storage.setObject('user', user);

                    case 4:
                      console.log('Check usr', user);
                      this.auth.next(true);

                    case 6:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
          /** This function can be used to get token */

        }, {
          key: "getToken",
          value: function getToken() {
            return this.token;
          }
          /** This function can be used to get user */

        }, {
          key: "getUser",
          value: function getUser() {
            return this.user;
          }
          /** Logout current user */
          // logout() {
          //     this.isLoggedIn = false;
          //     this.storage.deleteObject('user');
          //     this.storage.deleteObject('token');
          //     this.token = '';
          //     this.isLoggedIn = false;
          //     this.auth.next(false);
          //     this.router.navigateByUrl('/login');
          // }

        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.prev = 0;
                      _context13.next = 3;
                      return this.storage.removeObject('user');

                    case 3:
                      _context13.next = 5;
                      return this.storage.removeObject('token');

                    case 5:
                      _context13.next = 7;
                      return this.storage.removeObject('loggedIn');

                    case 7:
                      this.token = '';
                      this.isLoggedIn = false;
                      this.auth.next(false);
                      this.router.navigateByUrl('/login');
                      _context13.next = 16;
                      break;

                    case 13:
                      _context13.prev = 13;
                      _context13.t0 = _context13["catch"](0);
                      console.log('An error occurred while loading user data', _context13.t0);

                    case 16:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this, [[0, 13]]);
            }));
          }
          /** This function is private and should not be used for anything else than init of session service */

        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var decoded, d;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      console.log('Init function is called in session');
                      _context14.next = 3;
                      return this.storage.getValue('loggedIn');

                    case 3:
                      this.isLoggedIn = _context14.sent;
                      _context14.next = 6;
                      return this.storage.getObject('user');

                    case 6:
                      this.user = _context14.sent;
                      _context14.next = 9;
                      return this.storage.getValue('token');

                    case 9:
                      this.token = _context14.sent;
                      decoded = atob(this.token.split('.')[1]);
                      d = new Date(0);
                      d.setUTCSeconds(JSON.parse(decoded).exp);

                      if (new Date() > d) {
                        // token is expired
                        this.openSnackBar('Your session is expired, please login again!');
                        this.router.navigate(['/login'], {
                          replaceUrl: true
                        });
                        this.auth.next(false); // if there is any refresh token api you can call it otherwise user will be logged out
                      } else {
                        console.log('Auth loaded is ', this.isLoggedIn);
                        console.log('User loaded is ', this.user);
                        this.isLoggedIn = !!this.user && this.isLoggedIn; // Remove this block if prod

                        console.log('Auth is ', this.isLoggedIn);
                        this.auth.next(this.isLoggedIn);
                      }

                    case 14:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar(message) {
            var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'OK';
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var toast;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.toast.create({
                        message: message,
                        duration: 2000
                      });

                    case 2:
                      toast = _context15.sent;
                      _context15.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }]);

        return SessionService;
      }();

      SessionService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: _local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      SessionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })
      /**
       * This service is used to keep the things related to Auth,
       * so user info, token and things like that can be kept here
       */
      ], SessionService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\ASUS\Projects\Litcode\Pianto\pianto-rider\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map