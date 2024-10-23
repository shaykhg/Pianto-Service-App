(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~calendar-calendar-module~home-home-module~modals-details-sheet-details-sheet-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/details-sheet/details-sheet.page.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/details-sheet/details-sheet.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModalsDetailsSheetDetailsSheetPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<div *ngIf=\"orderData\" class=\"container p-b-10\">\r\n\r\n  <h5 class=\"text-center\">Order Details</h5>\r\n\r\n  <div>\r\n    <div class=\"o-detail-title\">\r\n      <div>#{{orderData._id}}</div>\r\n      <span [style.color]=\"getStatusColor(orderData.status)\" class=\"status\">  ({{getStatus(orderData.status)}})</span>\r\n\r\n      <div>\r\n          <span>Date: {{util.getHumanShortDate(orderData.date)}}</span>\r\n          <br>\r\n          <span>Time: {{orderData.time}}</span>\r\n        </div>\r\n    </div>\r\n\r\n    <hr>\r\n\r\n\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>Customer Name</mat-label>\r\n      <input matInput [value]=\"orderData.name\" readonly>\r\n      <mat-icon matPrefix class=\"m-r-4\">person</mat-icon>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>Customer Email</mat-label>\r\n      <input matInput [value]=\"orderData.email\" readonly>\r\n      <mat-icon matPrefix class=\"m-r-4\">mail</mat-icon>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>Customer Address</mat-label>\r\n      <input matInput [value]=\"orderData.address\" readonly>\r\n      <mat-icon matPrefix class=\"m-r-4\">home</mat-icon>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>City</mat-label>\r\n      <input matInput [value]=\"orderData.city\" readonly>\r\n      <mat-icon matPrefix class=\"m-r-4\">location_city</mat-icon>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>Postcode</mat-label>\r\n      <input matInput [value]=\"orderData.postcode\" readonly>\r\n      <mat-icon matPrefix class=\"m-r-4\">map</mat-icon>\r\n    </mat-form-field>\r\n\r\n\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>Contact Number</mat-label>\r\n      <input matInput [value]=\"orderData.phone\" readonly>\r\n      <mat-icon matPrefix  class=\"m-r-4\">phone</mat-icon>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n\r\n  <div>\r\n    <h5 class=\"text-center\">Piano Details</h5>\r\n\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>Piano Name</mat-label>\r\n      <input matInput [value]=\"orderData.pianoName\" readonly>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>Serial number</mat-label>\r\n      <input matInput [value]=\"orderData.serial? orderData.serial : 'Not added'\" readonly>\r\n    </mat-form-field>\r\n\r\n\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>Piano Type</mat-label>\r\n      <input matInput [value]=\"orderData.type\" readonly>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>Last Service</mat-label>\r\n      <input matInput [value]=\"orderData.lastService\" readonly>\r\n    </mat-form-field>\r\n\r\n\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>Notes</mat-label>\r\n      <input matInput [value]=\"orderData.notes ?  orderData.notes : 'No notes added'\" readonly>\r\n    </mat-form-field>\r\n\r\n\r\n  </div>\r\n  <div >\r\n    <h5 class=\"text-center\">Services Ordered</h5>\r\n    <ul>\r\n      <li *ngFor=\"let service of orderData.service\">{{service.name}}</li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"fs-16\" *ngIf=\"orderData.extended\">\r\n    <h5 class=\"m-t-30\">Edited Order Details</h5>\r\n    <hr>\r\n\r\n      <div class=\"p-details\">\r\n        <div class=\"p-detail-title\"> Booking Id</div>\r\n        <div class=\"p-detail-info\">{{orderData._id}}</div>\r\n      </div>\r\n\r\n      <div class=\"p-details\">\r\n        <div class=\"p-detail-title\">Status</div>\r\n        <div class=\"p-detail-info\">{{orderData.additional.status}}</div>\r\n      </div>\r\n\r\n\r\n      <div class=\"p-details\">\r\n        <div class=\"p-detail-title\">Total</div>\r\n        <div class=\"p-detail-info\">{{orderData.additional.total}}</div>\r\n      </div>\r\n\r\n\r\n    <h6 class=\"m-t-20\">New Services</h6>\r\n    <ul>\r\n      <li *ngFor=\"let service of orderData.additional.services\">{{service.name}}</li>\r\n    </ul>\r\n  </div>\r\n\r\n\r\n<!--  <div *ngIf=\"orderData.status === 'PAYMENT_CONFIRMED'\" class=\"d-flex justify-content-around\">-->\r\n<!--    <hr>-->\r\n\r\n<!--    <button (click)=\"changeStatus(1)\" class=\"cancel-btn\" mat-flat-button>Reject</button>-->\r\n<!--    <button (click)=\"changeStatus(2)\" class=\"comp-btn\"  mat-flat-button  >Confirm</button>-->\r\n<!--  </div>-->\r\n\r\n<!--  <div *ngIf=\"orderData.status === 'COMPLETE' || orderData.status === 'BOOKING_CONFIRMED' || orderData.status === 'CANCELLED'\" class=\"d-flex justify-content-around\">-->\r\n\r\n\r\n  <div class=\"d-flex justify-content-around\">\r\n    <hr>\r\n    <button *ngIf=\"!(orderData.status === 'CANCELLED' || orderData.status === 'COMPLETED' || orderData.status === 'REJECTED')\" class=\"cancel-btn\"\r\n            (click)=\"changeStatus(3)\"     mat-flat-button>Cancel\r\n    </button>\r\n    <button  *ngIf=\"!(orderData.status === 'CANCELLED' || orderData.status === 'COMPLETED' || orderData.status === 'REJECTED')\" class=\"comp-btn\"\r\n             (click)=\"changeStatus(4)\" mat-flat-button>Complete\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n";
      /***/
    },

    /***/
    "./src/app/modals/details-sheet/details-sheet.page.scss":
    /*!**************************************************************!*\
      !*** ./src/app/modals/details-sheet/details-sheet.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModalsDetailsSheetDetailsSheetPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".p-details {\n  border: 1px solid #c4c4c4;\n  margin-top: 5px;\n  padding: 5px;\n}\n\n.p-detail-title {\n  color: #7d7d7d;\n  font-size: 13px;\n}\n\n.p-detail-info {\n  color: #0d0d0d;\n  font-size: 16px;\n}\n\n.o-detail-title {\n  color: #7d7d7d;\n  font-size: 16px;\n  margin-top: 5px;\n}\n\n.o-detail-info {\n  color: #0d0d0d;\n  font-size: 18px;\n  margin-left: 21px;\n}\n\nhr {\n  background: #7d7d7d;\n}\n\nh6 {\n  margin: 15px;\n}\n\n.icon {\n  font-size: 16px;\n  height: 100%;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n\n.comp-btn {\n  background: teal;\n  color: white;\n  padding: 1px 7px;\n  margin-left: 10px;\n}\n\n.cancel-btn {\n  background: orangered;\n  color: white;\n  padding: 1px 7px;\n}\n\nmat-icon {\n  color: #8a2be2;\n}\n\nh5 {\n  color: #8a2be2;\n}\n\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #8a2be2 !important;\n}\n\n.mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: #8a2be2 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2RldGFpbHMtc2hlZXQvZGV0YWlscy1zaGVldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQURGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFJQTtFQUNFLHlCQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL2RldGFpbHMtc2hlZXQvZGV0YWlscy1zaGVldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucC1kZXRhaWxze1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnAtZGV0YWlsLXRpdGxle1xyXG4gIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnAtZGV0YWlsLWluZm97XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5vLWRldGFpbC10aXRsZXtcclxuICBjb2xvcjogIzdkN2Q3ZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG5cclxufVxyXG5cclxuLm8tZGV0YWlsLWluZm97XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMXB4O1xyXG59XHJcblxyXG5ocntcclxuICBiYWNrZ3JvdW5kOiAjN2Q3ZDdkO1xyXG59XHJcblxyXG5oNntcclxuICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcblxyXG4uaWNvbntcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcblxyXG4uY29tcC1idG57XHJcbiAgYmFja2dyb3VuZDogdGVhbDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMXB4IDdweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uY2FuY2VsLWJ0bntcclxuICBiYWNrZ3JvdW5kOiBvcmFuZ2VyZWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDFweCA3cHg7XHJcbn1cclxuXHJcbm1hdC1pY29ue1xyXG4gIGNvbG9yOiAjOGEyYmUyO1xyXG59XHJcblxyXG5oNXtcclxuICBjb2xvcjogIzhhMmJlMjtcclxufVxyXG5cclxuXHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gIGNvbG9yOiAjOGEyYmUyIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgY29sb3I6ICM4YTJiZTIhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/modals/details-sheet/details-sheet.page.ts":
    /*!************************************************************!*\
      !*** ./src/app/modals/details-sheet/details-sheet.page.ts ***!
      \************************************************************/

    /*! exports provided: DetailsSheetPage */

    /***/
    function srcAppModalsDetailsSheetDetailsSheetPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsSheetPage", function () {
        return DetailsSheetPage;
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


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/util.service */
      "./src/app/services/util.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/api-service.service */
      "./src/app/services/api-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var DetailsSheetPage = /*#__PURE__*/function () {
        function DetailsSheetPage(api, alertController, bottomSheetRef, data, util, router) {
          _classCallCheck(this, DetailsSheetPage);

          this.api = api;
          this.alertController = alertController;
          this.bottomSheetRef = bottomSheetRef;
          this.data = data;
          this.util = util;
          this.router = router;
        }

        _createClass(DetailsSheetPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.orderData = this.data.order;
            console.log('this is order data for popup', this.data.order);
          }
        }, {
          key: "getStatus",
          value: function getStatus(status) {
            var mWord = status.toLowerCase();
            mWord = mWord.replace('_', ' ');
            return mWord[0].toUpperCase() + mWord.substr(1).toLowerCase();
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
          } // show alert if service man rejects or cancel booking and change status accordingly

        }, {
          key: "presentAlertCancel",
          value: function presentAlertCancel(status) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // close bottom sheet and open alert
                      this.bottomSheetRef.dismiss();
                      _context.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        // header: 'Confirm!',
                        message: status === 1 ? 'Are you sure you want to reject this booking!!!' : 'Are you sure you want to cancel this booking!!!',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Cancel: blah***********');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            if (status === 1) {
                              // add api call to reject booking
                              var body = {
                                id: _this.orderData._id,
                                status: 'REJECTED'
                              };

                              _this.api.updateOrderStat(body).subscribe(function (data) {
                                _this.util.orderUpdate.next(true);

                                console.log('this is data after rejection', data);

                                _this.util.openSnackBar('Booking was rejected', '');
                              }, function (error) {
                                _this.util.openSnackBar('An error occurred while rejecting booking', '');

                                console.log('this is error occurred', error);
                              });
                            } else if (status === 3) {// add api call to cancel booking
                              // const body = {
                              //   id : this.orderData._id,
                              //   status: 'CANCELLED_BY_SERVICE'
                              // };
                              // this.api.updateOrderStat(body).subscribe( data => {
                              //   console.log('this is data after updation', data);
                              //   this.util.openSnackBar('Booking was cancelled', '');
                              // }, error => {
                              //   this.util.openSnackBar('An error occurred while cancelling booking', '');
                              //   console.log('this is error occurred', error);
                              // });
                            }
                          }
                        }]
                      });

                    case 3:
                      alert = _context.sent;
                      _context.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // Change status of booking and available slot based on service man response

        }, {
          key: "changeStatus",
          value: function changeStatus(status) {
            var _this2 = this;

            // status 1 means REJECTED
            if (status === 1) {
              this.presentAlertCancel(1);
            } // status 2 means BOOKING_CONFIRMED
            else if (status === 2) {
                var body = {
                  id: this.orderData._id,
                  status: 'BOOKING_CONFIRMED'
                };
                this.api.updateOrderStat(body).subscribe(function (data) {
                  _this2.util.orderUpdate.next(true);

                  console.log('this is data after updation', data);

                  _this2.util.openSnackBar('Booking accepted', '');
                }, function (error) {
                  _this2.util.openSnackBar('An error occurred while accepting booking', '');

                  console.log('this is error occurred', error);
                });
              } // status 3 means CANCELLED_BY_SERVICE
              else if (status === 3) {
                  // this.presentAlertCancel(3);
                  this.presentAlertPrompt();
                } // status 4 means COMPLETED
                else if (status === 4) {
                    this.bottomSheetRef.dismiss();
                    this.router.navigateByUrl('/completion/' + this.orderData._id);
                  } else {}
          }
        }, {
          key: "presentAlertPrompt",
          value: function presentAlertPrompt() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.bottomSheetRef.dismiss();
                      _context2.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Cancellation!',
                        inputs: [// multiline input.
                        {
                          name: 'note',
                          id: 'note',
                          type: 'textarea',
                          placeholder: 'Enter Cancellation note'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler(alertData) {
                            if (alertData.note === '') {
                              _this3.util.openSnackBar('Please enter cancellation note to cancel', 'ok');
                            } else {
                              var body = {
                                id: _this3.orderData._id,
                                status: 'REJECTED',
                                notes: alertData.note
                              };

                              _this3.api.updateOrderStat(body).subscribe(function (data) {
                                _this3.util.orderUpdate.next(true);

                                console.log('this is data after updation', data);

                                _this3.util.openSnackBar('Booking was cancelled', '');
                              }, function (error) {
                                _this3.util.openSnackBar('An error occurred while cancelling booking', '');

                                console.log('this is error occurred', error);
                              });
                            }
                          }
                        }]
                      });

                    case 3:
                      alert = _context2.sent;
                      _context2.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return DetailsSheetPage;
      }();

      DetailsSheetPage.ctorParameters = function () {
        return [{
          type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"]]
          }]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      DetailsSheetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-sheet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./details-sheet.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/details-sheet/details-sheet.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./details-sheet.page.scss */
        "./src/app/modals/details-sheet/details-sheet.page.scss"))["default"]]
      })], DetailsSheetPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~calendar-calendar-module~home-home-module~modals-details-sheet-details-sheet-module-es5.js.map