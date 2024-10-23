(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payout-method-payout-method-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/payout-method/payout-method.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payout-method/payout-method.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPayoutMethodPayoutMethodPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Payment Method</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"container\">\r\n  <mat-card class=\"payout-card mat-elevation-z3\">\r\n    <form [formGroup]=\"payment\">\r\n      <mat-form-field>\r\n        <mat-label>Account Holder Name</mat-label>\r\n        <input formControlName=\"name\" matInput type=\"text\">\r\n      </mat-form-field>\r\n\r\n<!--      <mat-form-field appearance=\"fill\">-->\r\n<!--        <mat-label>Cars</mat-label>-->\r\n<!--        <select matNativeControl required>-->\r\n<!--          <option value=\"volvo\">Volvo</option>-->\r\n<!--          <option value=\"saab\">Saab</option>-->\r\n<!--          <option value=\"mercedes\">Mercedes</option>-->\r\n<!--          <option value=\"audi\">Audi</option>-->\r\n<!--        </select>-->\r\n<!--      </mat-form-field>-->\r\n\r\n      <mat-form-field>\r\n        <mat-label>Account No.</mat-label>\r\n        <input formControlName=\"account\" matInput type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-label>Swift/BIC</mat-label>\r\n        <input formControlName=\"swift\" matInput type=\"text\">\r\n      </mat-form-field>\r\n\r\n    </form>\r\n  </mat-card>\r\n\r\n  <button class=\"save-btn\" mat-button (click)=\"exist ? updatePayoutMethod() : postPayoutMethod()\">Save</button>\r\n</div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/payout-method/payout-method-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/payout-method/payout-method-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: PayoutMethodPageRoutingModule */

    /***/
    function srcAppPayoutMethodPayoutMethodRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayoutMethodPageRoutingModule", function () {
        return PayoutMethodPageRoutingModule;
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


      var _payout_method_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payout-method.page */
      "./src/app/payout-method/payout-method.page.ts");

      var routes = [{
        path: '',
        component: _payout_method_page__WEBPACK_IMPORTED_MODULE_3__["PayoutMethodPage"]
      }];

      var PayoutMethodPageRoutingModule = function PayoutMethodPageRoutingModule() {
        _classCallCheck(this, PayoutMethodPageRoutingModule);
      };

      PayoutMethodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PayoutMethodPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/payout-method/payout-method.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/payout-method/payout-method.module.ts ***!
      \*******************************************************/

    /*! exports provided: PayoutMethodPageModule */

    /***/
    function srcAppPayoutMethodPayoutMethodModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayoutMethodPageModule", function () {
        return PayoutMethodPageModule;
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


      var _payout_method_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./payout-method-routing.module */
      "./src/app/payout-method/payout-method-routing.module.ts");
      /* harmony import */


      var _payout_method_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./payout-method.page */
      "./src/app/payout-method/payout-method.page.ts");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var PayoutMethodPageModule = function PayoutMethodPageModule() {
        _classCallCheck(this, PayoutMethodPageModule);
      };

      PayoutMethodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _payout_method_routing_module__WEBPACK_IMPORTED_MODULE_5__["PayoutMethodPageRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_payout_method_page__WEBPACK_IMPORTED_MODULE_6__["PayoutMethodPage"]]
      })], PayoutMethodPageModule);
      /***/
    },

    /***/
    "./src/app/payout-method/payout-method.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/payout-method/payout-method.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPayoutMethodPayoutMethodPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "mat-form-field {\n  width: 100%;\n}\n\n.payout-card {\n  margin-top: 20px;\n}\n\n.mat-card {\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5b3V0LW1ldGhvZC9wYXlvdXQtbWV0aG9kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvcGF5b3V0LW1ldGhvZC9wYXlvdXQtbWV0aG9kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wYXlvdXQtY2FyZHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmR7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/payout-method/payout-method.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/payout-method/payout-method.page.ts ***!
      \*****************************************************/

    /*! exports provided: PayoutMethodPage */

    /***/
    function srcAppPayoutMethodPayoutMethodPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayoutMethodPage", function () {
        return PayoutMethodPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/api-service.service */
      "./src/app/services/api-service.service.ts");
      /* harmony import */


      var _services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/session.service */
      "./src/app/services/session.service.ts");

      var PayoutMethodPage = /*#__PURE__*/function () {
        function PayoutMethodPage(formBuilder, api, session) {
          _classCallCheck(this, PayoutMethodPage);

          this.formBuilder = formBuilder;
          this.api = api;
          this.session = session;
        }

        _createClass(PayoutMethodPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.payment = this.formBuilder.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              account: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              swift: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            this.getPayoutMethod();
          }
        }, {
          key: "getPayoutMethod",
          value: function getPayoutMethod() {
            var _this = this;

            this.api.getPayoutByUser(this.session.getUser().id).subscribe(function (data) {
              _this.payoutData = data.results[0];

              _this.payment.patchValue({
                name: data.results[0].name,
                account: data.results[0].bank,
                swift: data.results[0].swift
              });

              _this.exist = true;
              console.log('this is payout method of user', data);
            }, function (error) {
              console.log('this is payout method of user', error);
              _this.exist = false;
            });
          }
        }, {
          key: "postPayoutMethod",
          value: function postPayoutMethod() {
            var body = {
              name: this.payment.value.name,
              bank: this.payment.value.account,
              swift: this.payment.value.swift,
              user: this.session.getUser().id,
              enable: true
            };
            this.api.postPayout(body).subscribe(function (data) {
              console.log('Payout method posted successfully', data);
            }, function (error) {
              console.log('An error occurred while posting payout method', error);
            });
          }
        }, {
          key: "updatePayoutMethod",
          value: function updatePayoutMethod() {
            console.log('this is payout data', this.payoutData);
            var body = {
              name: this.payment.value.name,
              bank: this.payment.value.account,
              swift: this.payment.value.swift
            };
            this.api.updatePayout(this.payoutData._id, body).subscribe(function (data) {
              console.log('Payout method posted successfully', data);
            }, function (error) {
              console.log('An error occurred while posting payout method', error);
            });
          }
        }]);

        return PayoutMethodPage;
      }();

      PayoutMethodPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"]
        }, {
          type: _services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }];
      };

      PayoutMethodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payout-method',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./payout-method.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/payout-method/payout-method.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./payout-method.page.scss */
        "./src/app/payout-method/payout-method.page.scss"))["default"]]
      })], PayoutMethodPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=payout-method-payout-method-module-es5.js.map