exports.id = 401;
exports.ids = [401];
exports.modules = {

/***/ 401:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);



const NormalToast = (msg, error) => {
  (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "font-medium",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: `${error ? "text-red-500" : ""}`,
      children: msg
    })
  }), {
    position: "top-right",
    autoClose: 4000,
    style: {
      background: "white",
      color: "#1f2937",
      fontFamily: "Poppins, sans-serif",
      height: "auto"
    },
    hideProgressBar: true,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 25
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (NormalToast);

/***/ })

};
;