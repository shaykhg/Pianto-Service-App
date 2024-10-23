(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboarding-onboarding-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/onboarding.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/onboarding.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOnboardingOnboardingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n    <ion-slide>\r\n      <h1>Onboarding Screen 1</h1>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <h1>Onboarding Screen 2</h1>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n\r\n      <div>\r\n        <h1 style=\"width: 100%\">Onboarding Screen 3</h1>\r\n        <div style=\"width: 100%; margin-top: 30%\"><button mat-raised-button color=\"primary\" (click)=\"onBoardingDone()\">Let's Go</button></div>\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/onboarding/onboarding-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/onboarding/onboarding-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: OnboardingPageRoutingModule */

    /***/
    function srcAppOnboardingOnboardingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingPageRoutingModule", function () {
        return OnboardingPageRoutingModule;
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


      var _onboarding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./onboarding.page */
      "./src/app/onboarding/onboarding.page.ts");

      var routes = [{
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingPage"]
      }];

      var OnboardingPageRoutingModule = function OnboardingPageRoutingModule() {
        _classCallCheck(this, OnboardingPageRoutingModule);
      };

      OnboardingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OnboardingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/onboarding/onboarding.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/onboarding/onboarding.module.ts ***!
      \*************************************************/

    /*! exports provided: OnboardingPageModule */

    /***/
    function srcAppOnboardingOnboardingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function () {
        return OnboardingPageModule;
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


      var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./onboarding-routing.module */
      "./src/app/onboarding/onboarding-routing.module.ts");
      /* harmony import */


      var _onboarding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./onboarding.page */
      "./src/app/onboarding/onboarding.page.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var OnboardingPageModule = function OnboardingPageModule() {
        _classCallCheck(this, OnboardingPageModule);
      };

      OnboardingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnboardingPageRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]],
        declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_6__["OnboardingPage"]]
      })], OnboardingPageModule);
      /***/
    },

    /***/
    "./src/app/onboarding/onboarding.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/onboarding/onboarding.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOnboardingOnboardingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-slides {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25ib2FyZGluZy9vbmJvYXJkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmRpbmcvb25ib2FyZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/onboarding/onboarding.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/onboarding/onboarding.page.ts ***!
      \***********************************************/

    /*! exports provided: OnboardingPage */

    /***/
    function srcAppOnboardingOnboardingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingPage", function () {
        return OnboardingPage;
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


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");

      var OnboardingPage = /*#__PURE__*/function () {
        function OnboardingPage(router, storage) {
          _classCallCheck(this, OnboardingPage);

          this.router = router;
          this.storage = storage;
          this.slideOpts = {
            initialSlide: 0,
            speed: 400
          };
        }

        _createClass(OnboardingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onBoardingDone",
          value: function onBoardingDone() {
            var _this = this;

            this.storage.setBoolean('first', true).then(function (login) {
              _this.router.navigate(['/login'], {
                replaceUrl: true,
                queryParams: {
                  first: true
                }
              });
            });
          }
        }]);

        return OnboardingPage;
      }();

      OnboardingPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
        }];
      };

      OnboardingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-onboarding',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./onboarding.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/onboarding.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./onboarding.page.scss */
        "./src/app/onboarding/onboarding.page.scss"))["default"]]
      })], OnboardingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=onboarding-onboarding-module-es5.js.map