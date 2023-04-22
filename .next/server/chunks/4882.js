exports.id = 4882;
exports.ids = [4882];
exports.modules = {

/***/ 1165:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8353);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9381);
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_Toast_NormalToast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(401);











function Order({
  _id,
  id,
  amount_total,
  timestamp,
  items,
  Status,
  admin
}) {
  const {
    data: session,
    status
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();
  const loading = status === "laoding";
  const {
    0: disabled,
    1: setDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);

  const updateStatus = e => {
    setDisabled(true);
    axios__WEBPACK_IMPORTED_MODULE_5___default().post("/api/admin/update-order-Status", {
      Status: e.target.value,
      _id: _id
    }).then(() => {
      setDisabled(false);
    }).catch(err => {
      console.error(err);
      setDisabled(false);
    });
  };

  const cancelOrder = () => {
    setDisabled(true);
    axios__WEBPACK_IMPORTED_MODULE_5___default().post("/api/cancel-order", {
      Status: "cancelled",
      _id: _id
    }).then(() => {
      (0,_util_Toast_NormalToast__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)("Order cancelled");
      setDisabled(false);
    }).catch(err => {
      console.error(err);
      (0,_util_Toast_NormalToast__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)("Something went wrong", true);
      setDisabled(false);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "w-full space-x-2",
      children: [admin ? Status && !loading && session && session !== null && session !== void 0 && session.admin ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
        className: "shadow leading-tight focus:outline-none focus:shadow-outline border xs:text-sm text-xs p-2  bg-blue-500 text-white capitalize border-b-0 rounded-t-md",
        value: Status,
        disabled: disabled,
        onChange: updateStatus,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
          value: "shipping soon",
          children: "Shipping soon"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
          value: "shipped",
          children: "Shipped"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
          value: "out for delivery",
          children: "Out for delivery"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
          value: "delivered",
          children: "Delivered"
        })]
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : Status ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `border border-b-0 xs:text-sm text-xs px-4 py-2 rounded-t-md  ${Status === "cancelled" ? "bg-red-500" : Status !== "delivered" ? "bg-blue-500" : "bg-green-500"} text-white inline-block capitalize`,
        children: Status
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}), Status && Status !== "cancelled" && Status !== "delivered" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `button-red border border-b-0 xs:text-sm text-xs px-4 py-2 rounded-t-md rounded-b-none  inline-block  capitalize ${disabled ? "opacity-50" : ""}`,
        onClick: cancelOrder,
        disabled: disabled,
        children: "Cancel order"
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
      href: `/${admin && session !== null && session !== void 0 && session.admin ? "admin/" : ""}order-details/${_id}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `relative border rounded-md rounded-tl-none cursor-pointer hover:shadow-sm bg-white overflow-hidden ${Status && Status === "cancelled" ? "opacity-70" : ""}`,
        title: "Click to view order details",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "sm:p-6 p-4 bg-gray-100 sm:text-sm text-xs text-gray-600",
          children: [Status && Status === "cancelled" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "mb-2 text-red-500",
            children: "* Money will be refunded within 24 hour"
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: "sm:absolute sm:top-2 sm:right-2 sm:w-56 lg:w-72 truncate text-xs whitespace-nowrap sm:mb-0 mb-2 font-medium",
            children: ["ORDER # ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              className: "text-green-500",
              children: id
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex sm:items-center sm:gap-6 gap-1 sm:flex-row flex-col",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "flex items-center sm:gap-6 gap-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: "font-bold text-xs",
                  children: "ORDER PLACED"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  children: moment__WEBPACK_IMPORTED_MODULE_1___default()(timestamp).format("DD MMM YYYY")
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: "text-xs font-bold",
                  children: "TOTAL"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: "text-xs font-bold text-red-500",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default()), {
                    quantity: amount_total,
                    currency: "INR"
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
              className: "lg:text-xl md:text-lg sm:text-base text-sm font-medium  whitespace-nowrap  self-end flex-1 text-right text-blue-500",
              children: [items === null || items === void 0 ? void 0 : items.length, " items"]
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "sm:p-6 p-4",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex space-x-6 overflow-x-auto py-4 hideScrollBar",
            children: items === null || items === void 0 ? void 0 : items.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              className: "h-20 object-contain sm:h-32",
              src: item === null || item === void 0 ? void 0 : item.image,
              alt: "",
              loading: "lazy"
            }, `item-img-${item === null || item === void 0 ? void 0 : item._id}`))
          })
        })]
      })
    })]
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (Order);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;