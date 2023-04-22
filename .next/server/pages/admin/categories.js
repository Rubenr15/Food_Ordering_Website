(function() {
var exports = {};
exports.id = "pages/admin/categories";
exports.ids = ["pages/admin/categories"];
exports.modules = {

/***/ "./src/pages/admin/categories.js":
/*!***************************************!*\
  !*** ./src/pages/admin/categories.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ "next-auth/react");
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\Zeal\\src\\pages\\admin\\categories.js";






const Categories = () => {
  const {
    data: session,
    status
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(); //const loading = status = "loading";

  const {
    data: categories,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_4___default()(session && session.admin ? "/api/admin/categories" : null);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Zeal | categoriess"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "heightFixAdmin bg-gray-100 py-10 md:px-6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "max-w-screen-xl mx-auto bg-white  shadow rounded-md my-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col md:p-8  p-6  bg-white gap-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "sm:text-2xl text-xl  font-semibold border-b-2 border-gray-200 pb-4 text-gray-700",
            children: "Categories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "space-y-4 overflow-auto flex-grow hideScrollBar",
            children: !error && !categories ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
              count: 10
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 17
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
              className: "w-full sm:text-base text-sm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    className: "text-left w-2/5 py-4 px-4 font-semibold",
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
                className: "sm:text-sm text-xs",
                children: categories === null || categories === void 0 ? void 0 : categories.map(categories => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    className: "table_col px-4",
                    children: categories === null || categories === void 0 ? void 0 : categories.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 33,
                    columnNumber: 25
                  }, undefined)
                }, `categories-${categories === null || categories === void 0 ? void 0 : categories._id}`, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 23
                }, undefined))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

Categories.admin = true;
/* harmony default export */ __webpack_exports__["default"] = (Categories);

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/react");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-loading-skeleton":
/*!*****************************************!*\
  !*** external "react-loading-skeleton" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-loading-skeleton");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/admin/categories.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWFsLy4vc3JjL3BhZ2VzL2FkbWluL2NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vemVhbC9leHRlcm5hbCBcIm5leHQtYXV0aC9yZWFjdFwiIiwid2VicGFjazovL3plYWwvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly96ZWFsL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly96ZWFsL2V4dGVybmFsIFwicmVhY3QtbG9hZGluZy1za2VsZXRvblwiIiwid2VicGFjazovL3plYWwvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly96ZWFsL2V4dGVybmFsIFwic3dyXCIiXSwibmFtZXMiOlsiQ2F0ZWdvcmllcyIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwidXNlU2Vzc2lvbiIsImNhdGVnb3JpZXMiLCJlcnJvciIsInVzZVNXUiIsImFkbWluIiwibWFwIiwibmFtZSIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLE1BQU07QUFDckIsUUFBTTtBQUFDQyxRQUFJLEVBQUNDLE9BQU47QUFBY0M7QUFBZCxNQUF3QkMsMkRBQVUsRUFBeEMsQ0FEcUIsQ0FFckI7O0FBQ0EsUUFBTTtBQUFDSCxRQUFJLEVBQUVJLFVBQVA7QUFBa0JDO0FBQWxCLE1BQTJCQywwQ0FBTSxDQUFDTCxPQUFPLElBQUlBLE9BQU8sQ0FBQ00sS0FBbkIsR0FBMkIsdUJBQTNCLEdBQXFELElBQXRELENBQXZDO0FBQ0Ysc0JBQ0U7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDZCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlFO0FBQUssZUFBUyxFQUFDLDBDQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLDBEQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLDJDQUFmO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLGtGQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFDLGlEQUFmO0FBQUEsc0JBQ0csQ0FBQ0YsS0FBRCxJQUFVLENBQUNELFVBQVgsZ0JBQ0MsOERBQUMsK0RBQUQ7QUFBVSxtQkFBSyxFQUFFO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQsZ0JBR0M7QUFBTyx1QkFBUyxFQUFDLDZCQUFqQjtBQUFBLHNDQUNFO0FBQUEsdUNBQ0U7QUFBQSx5Q0FDRTtBQUFJLDZCQUFTLEVBQUMseUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQU1FO0FBQU8seUJBQVMsRUFBQyxvQkFBakI7QUFBQSwwQkFDR0EsVUFESCxhQUNHQSxVQURILHVCQUNHQSxVQUFVLENBQUVJLEdBQVosQ0FBaUJKLFVBQUQsaUJBQ2Y7QUFBQSx5Q0FDRTtBQUFJLDZCQUFTLEVBQUMsZ0JBQWQ7QUFBQSw4QkFBZ0NBLFVBQWhDLGFBQWdDQSxVQUFoQyx1QkFBZ0NBLFVBQVUsQ0FBRUs7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQUFVLGNBQWFMLFVBQWQsYUFBY0EsVUFBZCx1QkFBY0EsVUFBVSxDQUFFTSxHQUFJLEVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFtQ0QsQ0F2Q0Q7O0FBeUNBWCxVQUFVLENBQUNRLEtBQVgsR0FBbUIsSUFBbkI7QUFDQSwrREFBZVIsVUFBZixFOzs7Ozs7Ozs7OztBQ2hEQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9hZG1pbi9jYXRlZ29yaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSBcInJlYWN0LWxvYWRpbmctc2tlbGV0b25cIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmNvbnN0IENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7ZGF0YTpzZXNzaW9uLHN0YXR1c30gPSB1c2VTZXNzaW9uKCk7XHJcbiAgICAvL2NvbnN0IGxvYWRpbmcgPSBzdGF0dXMgPSBcImxvYWRpbmdcIjtcclxuICAgIGNvbnN0IHtkYXRhOiBjYXRlZ29yaWVzLGVycm9yfSA9IHVzZVNXUihzZXNzaW9uICYmIHNlc3Npb24uYWRtaW4gPyBcIi9hcGkvYWRtaW4vY2F0ZWdvcmllc1wiIDogbnVsbCk7IFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5aZWFsIHwgY2F0ZWdvcmllc3M8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVpZ2h0Rml4QWRtaW4gYmctZ3JheS0xMDAgcHktMTAgbWQ6cHgtNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLXhsIG14LWF1dG8gYmctd2hpdGUgIHNoYWRvdyByb3VuZGVkLW1kIG15LTZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpwLTggIHAtNiAgYmctd2hpdGUgZ2FwLTJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNtOnRleHQtMnhsIHRleHQteGwgIGZvbnQtc2VtaWJvbGQgYm9yZGVyLWItMiBib3JkZXItZ3JheS0yMDAgcGItNCB0ZXh0LWdyYXktNzAwXCI+Q2F0ZWdvcmllczwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IG92ZXJmbG93LWF1dG8gZmxleC1ncm93IGhpZGVTY3JvbGxCYXJcIj5cclxuICAgICAgICAgICAgICB7IWVycm9yICYmICFjYXRlZ29yaWVzID8gKFxyXG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIGNvdW50PXsxMH0gLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCBzbTp0ZXh0LWJhc2UgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtbGVmdCB3LTIvNSBweS00IHB4LTQgZm9udC1zZW1pYm9sZFwiPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJzbTp0ZXh0LXNtIHRleHQteHNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcz8ubWFwKChjYXRlZ29yaWVzKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgY2F0ZWdvcmllcy0ke2NhdGVnb3JpZXM/Ll9pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlX2NvbCBweC00XCI+e2NhdGVnb3JpZXM/Lm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuQ2F0ZWdvcmllcy5hZG1pbiA9IHRydWU7XHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGluZy1za2VsZXRvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=