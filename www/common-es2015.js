(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/earning-popup/earning-popup.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/earning-popup/earning-popup.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <div *ngIf=\"orderData\" class=\"container\">\r\n\r\n    <h6 class=\"text-center\">Order Details</h6>\r\n\r\n    <div>\r\n      <div class=\"o-detail-title d-flex justify-content-between\">\r\n        <span>#{{orderData._id}}</span>\r\n        <span>\r\n          <span>{{util.getHumanShortDate(orderData.date)}}</span>\r\n          <br>\r\n          <span>{{orderData.time}}</span>\r\n        </span>\r\n      </div>\r\n\r\n      <hr>\r\n\r\n      <div style=\"margin-top: 5px\" class=\"o-detail-title\">\r\n        <span class=\"icon\">\r\n          <ion-icon name=\"home\"></ion-icon>\r\n        </span>\r\n        <span>Address</span>\r\n      </div>\r\n\r\n      <div class=\"o-detail-info\">{{orderData.address}}</div>\r\n\r\n      <div style=\"margin-top: 5px\" class=\"o-detail-title\">\r\n        <span class=\"icon\">\r\n          <ion-icon name=\"call\"></ion-icon>\r\n        </span>\r\n        <span>Contact number</span>\r\n      </div>\r\n      <div class=\"o-detail-info\">{{orderData.phone}}</div>\r\n    </div>\r\n\r\n\r\n    <div>\r\n      <h6 class=\"text-center\">Piano Details</h6>\r\n\r\n      <div class=\"p-details\">\r\n        <div class=\"p-detail-title\">Piano name</div>\r\n        <div class=\"p-detail-info\">{{orderData.name}}</div>\r\n      </div>\r\n\r\n      <div class=\"p-details\">\r\n        <div class=\"p-detail-title\">Serial number</div>\r\n        <div class=\"p-detail-info\">{{orderData.serial? orderData.serial : 'Not added'}}</div>\r\n      </div>\r\n      <div class=\"p-details\">\r\n        <div class=\"p-detail-title\">Piano type</div>\r\n        <div class=\"p-detail-info\">{{orderData.type}}</div>\r\n      </div>\r\n      <div class=\"p-details\">\r\n        <div class=\"p-detail-title\">Last Service</div>\r\n        <div class=\"p-detail-info\">{{orderData.lastService}}</div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div >\r\n      <h6 class=\"text-center\">Services Ordered</h6>\r\n      <ul>\r\n        <li *ngFor=\"let service of orderData.service\">{{service.name}}</li>\r\n      </ul>\r\n    </div>\r\n    <div>\r\n\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/review-popup/review-popup.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/review-popup/review-popup.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\">\r\n\r\n  <div>\r\n    <div class=\"o-detail-title\" style=\"margin-bottom: 15px\">\r\n      <span>#{{reviewData.order}}</span>\r\n\r\n    </div>\r\n      <div class=\"d-flex justify-content-between\">\r\n\r\n          <span>\r\n          <ion-icon name=\"calendar-outline\"></ion-icon>\r\n            {{util.getHumanShortDate(reviewData.date)}}\r\n          </span>\r\n          <span>\r\n          <ion-icon name=\"time-outline\"></ion-icon>\r\n           {{util.getTime(reviewData.date)}}\r\n          </span>\r\n      </div>\r\n\r\n\r\n    <div class=\"o-detail-info\">\r\n      <span>{{reviewData.name}}</span>\r\n      <span>\r\n          <ion-icon name=\"star\" *ngFor=\"let i of reviewArray(reviewData.rating).fill(1)\"></ion-icon>\r\n\r\n        </span>\r\n    </div>\r\n  </div>\r\n\r\n  <hr>\r\n\r\n  <p style=\"color: #4d4d4d\">\r\n    {{reviewData.comment}}</p>\r\n\r\n<!--  <div >-->\r\n<!--    <div class=\"o-detail-title\"><span>Punctuality</span>-->\r\n<!--      <span>-->\r\n<!--          <ion-icon name=\"star\"></ion-icon>-->\r\n<!--          <ion-icon name=\"star\"></ion-icon>-->\r\n<!--          <ion-icon name=\"star\"></ion-icon>-->\r\n<!--        </span>-->\r\n<!--    </div>-->\r\n<!--  </div>-->\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/review-sheet/review-sheet.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/review-sheet/review-sheet.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container m-b-20\">\r\n        <div class=\"info\">\r\n            <div>\r\n                <ion-icon class=\"icon\" name=\"information-circle-outline\"></ion-icon>\r\n                {{'#' + reviewData.order}}\r\n            </div>\r\n            <div>\r\n                <ion-icon class=\"icon\" name=\"calendar-outline\"></ion-icon>\r\n                {{util.getHumanShortDate(reviewData.date)}}\r\n            </div>\r\n\r\n            <div>\r\n                <ion-icon  class=\"icon\" name=\"time-outline\"></ion-icon>\r\n                {{util.getTime(reviewData.date)}}\r\n            </div>\r\n\r\n            <div>\r\n                <ion-icon  class=\"icon\" name=\"person-outline\"></ion-icon>\r\n                <span>{{reviewData.name}}</span>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"text-center fs-16 m-t-15\">\r\n          Overall: <ion-icon *ngFor=\"let i of reviewArray(reviewData.rating).fill(1)\" name=\"star\"></ion-icon>\r\n        </div>\r\n\r\n    <hr>\r\n\r\n    <div class=\"fs-16\">\r\n        {{reviewData.comment === '' ? 'No Comment added' : reviewData.comment}}\r\n    </div>\r\n\r\n    <div class=\"m-t-20\">\r\n        <div *ngFor=\"let item of reviewData.attributes\" class=\"row fs-16\">\r\n            <div class=\"col-5\">\r\n                {{item.name}}\r\n            </div>\r\n            <div class=\"m-l-10 col-6\">\r\n                <ion-icon *ngFor=\"let i of reviewArray(item.rating).fill(1)\" name=\"star\"></ion-icon>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-history/order-history.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-history/order-history.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/modals/earning-popup/earning-popup.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/modals/earning-popup/earning-popup.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".p-details {\n  border: 1px solid #c4c4c4;\n  margin-top: 5px;\n  padding: 5px;\n}\n\n.p-detail-title {\n  color: #7d7d7d;\n  font-size: 10px;\n}\n\n.p-detail-info {\n  color: #0d0d0d;\n  font-size: 13px;\n}\n\n.o-detail-title {\n  color: #7d7d7d;\n  font-size: 13px;\n}\n\n.o-detail-info {\n  color: #0d0d0d;\n  font-size: 14px;\n  margin-left: 21px;\n}\n\nhr {\n  background: #7d7d7d;\n}\n\nh6 {\n  margin: 15px;\n}\n\n.icon {\n  font-size: 16px;\n  height: 100%;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2Vhcm5pbmctcG9wdXAvZWFybmluZy1wb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBRUY7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvZWFybmluZy1wb3B1cC9lYXJuaW5nLXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wLWRldGFpbHN7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ucC1kZXRhaWwtdGl0bGV7XHJcbiAgY29sb3I6ICM3ZDdkN2Q7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4ucC1kZXRhaWwtaW5mb3tcclxuICBjb2xvcjogIzBkMGQwZDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLm8tZGV0YWlsLXRpdGxle1xyXG4gIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbn1cclxuXHJcbi5vLWRldGFpbC1pbmZve1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogMjFweDtcclxufVxyXG5cclxuaHJ7XHJcbiAgYmFja2dyb3VuZDogIzdkN2Q3ZDtcclxufVxyXG5cclxuaDZ7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG59XHJcblxyXG5cclxuLmljb257XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modals/earning-popup/earning-popup.page.ts":
/*!************************************************************!*\
  !*** ./src/app/modals/earning-popup/earning-popup.page.ts ***!
  \************************************************************/
/*! exports provided: EarningPopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningPopupPage", function() { return EarningPopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/util.service */ "./src/app/services/util.service.ts");





let EarningPopupPage = class EarningPopupPage {
    constructor(dialogRef, data, api, util) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.api = api;
        this.util = util;
    }
    ngOnInit() {
        this.orderData = this.data.order;
        console.log('this is order data for popup', this.data.order);
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
EarningPopupPage.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }
];
EarningPopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-earning-popup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./earning-popup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/earning-popup/earning-popup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./earning-popup.page.scss */ "./src/app/modals/earning-popup/earning-popup.page.scss")).default]
    })
], EarningPopupPage);



/***/ }),

/***/ "./src/app/modals/review-popup/review-popup.page.scss":
/*!************************************************************!*\
  !*** ./src/app/modals/review-popup/review-popup.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".p-details {\n  border: 1px solid #c4c4c4;\n  margin-top: 5px;\n  padding: 5px;\n}\n\n.p-detail-title {\n  color: #7d7d7d;\n  font-size: 10px;\n}\n\n.p-detail-info {\n  color: #0d0d0d;\n  font-size: 13px;\n}\n\n.o-detail-title {\n  color: #7d7d7d;\n  display: flex;\n  justify-content: space-between;\n}\n\n.o-detail-info {\n  color: #0d0d0d;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n}\n\nhr {\n  background: #7d7d7d;\n}\n\nh6 {\n  margin: 15px;\n}\n\n.icon {\n  font-size: 16px;\n  height: 100%;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3Jldmlldy1wb3B1cC9yZXZpZXctcG9wdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9yZXZpZXctcG9wdXAvcmV2aWV3LXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wLWRldGFpbHN7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ucC1kZXRhaWwtdGl0bGV7XHJcbiAgY29sb3I6ICM3ZDdkN2Q7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4ucC1kZXRhaWwtaW5mb3tcclxuICBjb2xvcjogIzBkMGQwZDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLm8tZGV0YWlsLXRpdGxle1xyXG4gIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uby1kZXRhaWwtaW5mb3tcclxuICBjb2xvcjogIzBkMGQwZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG5ocntcclxuICBiYWNrZ3JvdW5kOiAjN2Q3ZDdkO1xyXG59XHJcblxyXG5oNntcclxuICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcblxyXG4uaWNvbntcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/modals/review-popup/review-popup.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/modals/review-popup/review-popup.page.ts ***!
  \**********************************************************/
/*! exports provided: ReviewPopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPopupPage", function() { return ReviewPopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/util.service */ "./src/app/services/util.service.ts");





let ReviewPopupPage = class ReviewPopupPage {
    constructor(dialogRef, data, api, util) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.api = api;
        this.util = util;
        this.reviewArray = Array;
    }
    ngOnInit() {
        this.reviewData = this.data.review;
        console.log('this is order data for popup', this.data.review);
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
ReviewPopupPage.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }
];
ReviewPopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review-popup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./review-popup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/review-popup/review-popup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./review-popup.page.scss */ "./src/app/modals/review-popup/review-popup.page.scss")).default]
    })
], ReviewPopupPage);



/***/ }),

/***/ "./src/app/modals/review-sheet/review-sheet.page.scss":
/*!************************************************************!*\
  !*** ./src/app/modals/review-sheet/review-sheet.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".p-details {\n  border: 1px solid #c4c4c4;\n  margin-top: 5px;\n  padding: 5px;\n}\n\n.p-detail-title {\n  color: #7d7d7d;\n  font-size: 13px;\n}\n\n.p-detail-info {\n  color: #0d0d0d;\n  font-size: 16px;\n}\n\n.o-detail-title {\n  color: #7d7d7d;\n  font-size: 18px;\n}\n\n.info {\n  font-size: 16px;\n}\n\n.o-detail-info {\n  color: #0d0d0d;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n  font-size: 18px;\n}\n\nhr {\n  background: #7d7d7d;\n}\n\nh6 {\n  margin: 15px;\n}\n\n.icon {\n  font-size: 24px;\n  vertical-align: middle;\n  margin-right: 10px;\n  color: black;\n}\n\n.info > div {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3Jldmlldy1zaGVldC9yZXZpZXctc2hlZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9yZXZpZXctc2hlZXQvcmV2aWV3LXNoZWV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wLWRldGFpbHN7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ucC1kZXRhaWwtdGl0bGV7XHJcbiAgY29sb3I6ICM3ZDdkN2Q7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ucC1kZXRhaWwtaW5mb3tcclxuICBjb2xvcjogIzBkMGQwZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLm8tZGV0YWlsLXRpdGxle1xyXG4gIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbn1cclxuXHJcbi5pbmZve1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLm8tZGV0YWlsLWluZm97XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmhye1xyXG4gIGJhY2tncm91bmQ6ICM3ZDdkN2Q7XHJcbn1cclxuXHJcbmg2e1xyXG4gIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuXHJcbi5pY29ue1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5pbmZvID4gZGl2IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modals/review-sheet/review-sheet.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/modals/review-sheet/review-sheet.page.ts ***!
  \**********************************************************/
/*! exports provided: ReviewSheetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewSheetPage", function() { return ReviewSheetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/util.service */ "./src/app/services/util.service.ts");





let ReviewSheetPage = class ReviewSheetPage {
    constructor(bottomSheetRef, data, api, util) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
        this.api = api;
        this.util = util;
        this.reviewArray = Array;
    }
    // get data on initialisation
    ngOnInit() {
        this.reviewData = this.data.review;
        console.log('this is order data for popup', this.data.review);
    }
};
ReviewSheetPage.ctorParameters = () => [
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"],] }] },
    { type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }
];
ReviewSheetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review-sheet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./review-sheet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/review-sheet/review-sheet.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./review-sheet.page.scss */ "./src/app/modals/review-sheet/review-sheet.page.scss")).default]
    })
], ReviewSheetPage);



/***/ }),

/***/ "./src/app/order-history/order-history-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/order-history/order-history-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OrderHistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPageRoutingModule", function() { return OrderHistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-history.page */ "./src/app/order-history/order-history.page.ts");




const routes = [
    {
        path: '',
        component: _order_history_page__WEBPACK_IMPORTED_MODULE_3__["OrderHistoryPage"]
    }
];
let OrderHistoryPageRoutingModule = class OrderHistoryPageRoutingModule {
};
OrderHistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderHistoryPageRoutingModule);



/***/ }),

/***/ "./src/app/order-history/order-history.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/order-history/order-history.module.ts ***!
  \*******************************************************/
/*! exports provided: OrderHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPageModule", function() { return OrderHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _order_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-history-routing.module */ "./src/app/order-history/order-history-routing.module.ts");
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-history.page */ "./src/app/order-history/order-history.page.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");








let OrderHistoryPageModule = class OrderHistoryPageModule {
};
OrderHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryPageRoutingModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]
        ],
        exports: [
            _order_history_page__WEBPACK_IMPORTED_MODULE_6__["OrderHistoryPage"]
        ],
        declarations: [_order_history_page__WEBPACK_IMPORTED_MODULE_6__["OrderHistoryPage"]]
    })
], OrderHistoryPageModule);



/***/ }),

/***/ "./src/app/order-history/order-history.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/order-history/order-history.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".details-container {\n  display: flex;\n  flex-direction: row;\n  /* make main axis horizontal (default setting) */\n  justify-content: space-between;\n  /* center items horizontally, in this case */\n  align-items: center;\n  /* center items vertically, in this case */\n}\n\nhr {\n  background-color: #dbdbdb;\n}\n\n.rating-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.no-order-icon {\n  text-align: center;\n  font-size: 60px;\n  color: #767676;\n}\n\n.no-order-text {\n  text-align: center;\n  font-size: 18px;\n  color: #767676;\n}\n\n.mat-card {\n  border-radius: 12px;\n}\n\n.no-order {\n  text-align: center;\n  color: #7d7d7d;\n}\n\n.empty-icon {\n  color: #7d7d7d;\n  text-align: center;\n  font-size: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUF5QixnREFBQTtFQUN6Qiw4QkFBQTtFQUFnQyw0Q0FBQTtFQUNoQyxtQkFBQTtFQUF5QiwwQ0FBQTtBQUkzQjs7QUFEQTtFQUNFLHlCQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFJRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFLRjs7QUFGQTtFQUNFLG1CQUFBO0FBS0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFJRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFJRiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWhpc3Rvcnkvb3JkZXItaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscy1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93OyAgICAgLyogbWFrZSBtYWluIGF4aXMgaG9yaXpvbnRhbCAoZGVmYXVsdCBzZXR0aW5nKSAqL1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogY2VudGVyIGl0ZW1zIGhvcml6b250YWxseSwgaW4gdGhpcyBjYXNlICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgIC8qIGNlbnRlciBpdGVtcyB2ZXJ0aWNhbGx5LCBpbiB0aGlzIGNhc2UgKi9cclxufVxyXG5cclxuaHJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcclxufVxyXG5cclxuLnJhdGluZy1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5uby1vcmRlci1pY29ue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgY29sb3I6ICM3Njc2NzY7XHJcbn1cclxuLm5vLW9yZGVyLXRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzc2NzY3NjtcclxufVxyXG5cclxuLm1hdC1jYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG59XHJcblxyXG4ubm8tb3JkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjN2Q3ZDdkO1xyXG59XHJcblxyXG4uZW1wdHktaWNvbntcclxuICBjb2xvcjogIzdkN2Q3ZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/order-history/order-history.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/order-history/order-history.page.ts ***!
  \*****************************************************/
/*! exports provided: OrderHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPage", function() { return OrderHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _modals_earning_sheet_earning_sheet_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/earning-sheet/earning-sheet.page */ "./src/app/modals/earning-sheet/earning-sheet.page.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let OrderHistoryPage = class OrderHistoryPage {
    constructor(api, session, bottomSheet, util) {
        this.api = api;
        this.session = session;
        this.bottomSheet = bottomSheet;
        this.util = util;
        this.orders = [];
    }
    ngOnInit() {
        this.getOrders();
    }
    getOrders() {
        this.api.getOrdersByDate(moment__WEBPACK_IMPORTED_MODULE_8__().startOf('day').toDate().toISOString(), moment__WEBPACK_IMPORTED_MODULE_8__().add('365', 'days').toDate().toISOString(), this.session.getUser().id).subscribe(data => {
            // this.weekOrders = data;
            // this.orders = _.filter(data, {status: 'COMPLETED'});
            this.orders = data;
            this.orders = lodash__WEBPACK_IMPORTED_MODULE_7__["sortBy"](this.orders, 'date', 'time');
        }, error => {
            console.log('an error occurred while fetching weekly order data', error);
        });
    }
    // Open Earning Bottom sheet
    openEarningBottomSheet(order) {
        this.bottomSheet.open(_modals_earning_sheet_earning_sheet_page__WEBPACK_IMPORTED_MODULE_4__["EarningSheetPage"], {
            data: { order },
        });
    }
    getHumanShortDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format('DD-MMM');
    }
};
OrderHistoryPage.ctorParameters = () => [
    { type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheet"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
];
OrderHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-history/order-history.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-history.page.scss */ "./src/app/order-history/order-history.page.scss")).default]
    })
], OrderHistoryPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map