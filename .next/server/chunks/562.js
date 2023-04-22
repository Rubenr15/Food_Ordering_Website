exports.id = 562;
exports.ids = [562];
exports.modules = {

/***/ 562:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Order_OrderDetails; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2470);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "react-currency-formatter"
var external_react_currency_formatter_ = __webpack_require__(9381);
var external_react_currency_formatter_default = /*#__PURE__*/__webpack_require__.n(external_react_currency_formatter_);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: external "react-loading-skeleton"
var external_react_loading_skeleton_ = __webpack_require__(1704);
var external_react_loading_skeleton_default = /*#__PURE__*/__webpack_require__.n(external_react_loading_skeleton_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/Order/OrderItem.js





function OrderItem({
  item
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex sm:flex-row flex-col-reverse my-4 text-sm text-gray-700 p-6 border border-gray-200 sm:justify-between gap-6",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "font-semibold capitalize",
        children: item === null || item === void 0 ? void 0 : item.title
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mt-2",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Quantity - "
          }), item === null || item === void 0 ? void 0 : item.qty]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "font-semibold",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "font-normal",
            children: "Price - "
          }), /*#__PURE__*/jsx_runtime_.jsx((external_react_currency_formatter_default()), {
            quantity: item === null || item === void 0 ? void 0 : item.price,
            currency: "INR"
          })]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "sm:mx-0 sm:ml-6 min-w-max my-auto mx-auto",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: item === null || item === void 0 ? void 0 : item.image,
        width: 120,
        height: 120,
        alt: "",
        objectFit: "contain"
      })
    })]
  });
}

/* harmony default export */ var Order_OrderItem = (OrderItem);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(8353);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/util/Toast/NormalToast.js
var NormalToast = __webpack_require__(401);
;// CONCATENATED MODULE: ./src/components/Order/OrderDetails.js













function OrderDetails({
  id,
  admin
}) {
  var _order$items, _order$order_status, _order$order_status$c, _order$order_status2, _order$order_status2$, _order$order_status3, _order$order_status3$, _order$order_status4, _order$order_status5, _order$order_status5$, _order$order_status6, _order$order_status6$, _order$customer_detai, _order$shipping_detai, _order$shipping_detai2, _order$shipping_detai3, _order$shipping_detai4, _order$shipping_detai5, _order$shipping_detai6, _order$shipping_detai7, _order$shipping_detai8, _order$shipping_detai9, _order$shipping_detai10, _order$shipping_detai11, _order$shipping_detai12, _order$shipping_detai13, _order$total_details, _order$items2, _order$order_status7, _order$order_status7$, _order$order_status8, _order$order_status8$, _order$order_status9, _order$order_status9$;

  const {
    data: session,
    status
  } = (0,react_.useSession)();
  const loading = status === "loading";
  const {
    0: disabled,
    1: setDisabled
  } = (0,external_react_.useState)(false);
  const {
    data: order,
    error
  } = external_swr_default()(!loading && session ? `/api/order-details/${id}` : null);

  if (error) {
    console.error(error);
  }

  const updateStatus = e => {
    setDisabled(true);
    external_axios_default().post("/api/admin/update-order-status", {
      status: e.target.value,
      _id: id
    }).then(() => {
      setDisabled(false);
    }).catch(err => {
      setDisabled(false);
      console.error(err);
    });
  };

  const cancelOrder = () => {
    setDisabled(true);
    external_axios_default().post("/api/cancel-order", {
      status: "cancelled",
      _id: id
    }).then(() => {
      (0,NormalToast/* default */.Z)("Order cancelled");
      setDisabled(false);
    }).catch(err => {
      console.error(err);
      (0,NormalToast/* default */.Z)("Something went wrong", true);
      setDisabled(false);
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "heightFix sm:px-6",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "border rounded-md max-w-screen-xl  mx-auto md:my-20 my-12 shadow-sm",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center p-5 bg-gray-100 text-sm text-gray-700",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "sm:text-2xl text-xl font-semibold mb-2",
            children: "Order Details"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "xs:text-sm text-xs",
            children: order ? external_moment_default()(order === null || order === void 0 ? void 0 : order.timestamp).format("llll") : /*#__PURE__*/jsx_runtime_.jsx((external_react_loading_skeleton_default()), {})
          })]
        }), order && /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "lg:text-xl md:text-lg text-base font-medium whitespace-nowrap  self-end flex-1 text-right text-blue-500",
          children: [order === null || order === void 0 ? void 0 : (_order$items = order.items) === null || _order$items === void 0 ? void 0 : _order$items.length, " items"]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "p-5 md:p-10 sm:p-8",
        children: order ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [admin && session !== null && session !== void 0 && session.admin && (order === null || order === void 0 ? void 0 : (_order$order_status = order.order_status) === null || _order$order_status === void 0 ? void 0 : (_order$order_status$c = _order$order_status.current) === null || _order$order_status$c === void 0 ? void 0 : _order$order_status$c.status) !== "cancelled" && (order === null || order === void 0 ? void 0 : (_order$order_status2 = order.order_status) === null || _order$order_status2 === void 0 ? void 0 : (_order$order_status2$ = _order$order_status2.current) === null || _order$order_status2$ === void 0 ? void 0 : _order$order_status2$.status) !== "delivered" ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
            className: "shadow leading-tight focus:outline-none focus:shadow-outline border xs:text-sm text-xs p-2 rounded bg-blue-500 text-white capitalize",
            disabled: disabled,
            onChange: updateStatus,
            children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
              value: "shipping_details soon",
              children: "Shipping_details soon"
            }), /*#__PURE__*/jsx_runtime_.jsx("option", {
              value: "shipped",
              children: "Shipped"
            }), /*#__PURE__*/jsx_runtime_.jsx("option", {
              value: "out for delivery",
              children: "Out for delivery"
            }), /*#__PURE__*/jsx_runtime_.jsx("option", {
              value: "delivered",
              children: "Delivered"
            })]
          }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "space-y-6 lg:text-lg sm:text-base text-sm",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `my-2 p-4 border-2 ${(order === null || order === void 0 ? void 0 : (_order$order_status3 = order.order_status) === null || _order$order_status3 === void 0 ? void 0 : (_order$order_status3$ = _order$order_status3.current) === null || _order$order_status3$ === void 0 ? void 0 : _order$order_status3$.status) === "cancelled" ? "text-red-500 border-red-500 bg-red-100" : (order === null || order === void 0 ? void 0 : (_order$order_status4 = order.order_status) === null || _order$order_status4 === void 0 ? void 0 : _order$order_status4.current.status) === "delivered" ? "text-green-500 border-green-500 bg-green-100" : "text-blue-500 border-blue-500 bg-blue-100"}  rounded-md`,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                className: "font-semibold mb-4",
                children: "Order Status"
              }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                className: "space-y-2",
                children: order === null || order === void 0 ? void 0 : (_order$order_status5 = order.order_status) === null || _order$order_status5 === void 0 ? void 0 : (_order$order_status5$ = _order$order_status5.info) === null || _order$order_status5$ === void 0 ? void 0 : _order$order_status5$.map(({
                  status,
                  timestamp
                }, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: "flex sm:items-center sm:justify-between sm:flex-row flex-col",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "sm:text-sm text-xs font-medium capitalize",
                    children: status
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "sm:text-sm text-xs",
                    children: external_moment_default()(timestamp).format("llll")
                  })]
                }, `orderStatus-${i}`))
              })]
            }), (order === null || order === void 0 ? void 0 : (_order$order_status6 = order.order_status) === null || _order$order_status6 === void 0 ? void 0 : (_order$order_status6$ = _order$order_status6.current) === null || _order$order_status6$ === void 0 ? void 0 : _order$order_status6$.status) === "cancelled" ? /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "my-2 text-xs xs:text-sm text-red-500",
              children: "* Money will be refunded within 24 hour"
            }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: "whitespace-nowrap font-semibold overflow-x-auto hideScrollBar",
              children: ["ORDER ID -", /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "text-green-500 font-medium ml-2",
                children: order === null || order === void 0 ? void 0 : order.id
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: "font-semibold whitespace-nowrap overflow-x-auto hideScrollBar flex items-center",
              children: ["EMAIL -", /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "text-sm font-normal ml-2",
                children: order === null || order === void 0 ? void 0 : (_order$customer_detai = order.customer_details) === null || _order$customer_detai === void 0 ? void 0 : _order$customer_detai.email
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "font-semibold mb-2 uppercase",
                children: "Address "
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "text-sm text-gray-700",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "font-semibold",
                    children: " Name - "
                  }), order === null || order === void 0 ? void 0 : (_order$shipping_detai = order.shipping_details) === null || _order$shipping_detai === void 0 ? void 0 : _order$shipping_detai.name]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "font-semibold",
                    children: "City - "
                  }), order === null || order === void 0 ? void 0 : (_order$shipping_detai2 = order.shipping_details) === null || _order$shipping_detai2 === void 0 ? void 0 : (_order$shipping_detai3 = _order$shipping_detai2.address) === null || _order$shipping_detai3 === void 0 ? void 0 : _order$shipping_detai3.city]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "font-semibold",
                    children: "Country - "
                  }), order === null || order === void 0 ? void 0 : (_order$shipping_detai4 = order.shipping_details) === null || _order$shipping_detai4 === void 0 ? void 0 : (_order$shipping_detai5 = _order$shipping_detai4.address) === null || _order$shipping_detai5 === void 0 ? void 0 : _order$shipping_detai5.country]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "font-semibold",
                    children: "Line 1 - "
                  }), order === null || order === void 0 ? void 0 : (_order$shipping_detai6 = order.shipping_details) === null || _order$shipping_detai6 === void 0 ? void 0 : (_order$shipping_detai7 = _order$shipping_detai6.address) === null || _order$shipping_detai7 === void 0 ? void 0 : _order$shipping_detai7.line1, ","]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "font-semibold",
                    children: "Line 2 - "
                  }), order === null || order === void 0 ? void 0 : (_order$shipping_detai8 = order.shipping_details) === null || _order$shipping_detai8 === void 0 ? void 0 : (_order$shipping_detai9 = _order$shipping_detai8.address) === null || _order$shipping_detai9 === void 0 ? void 0 : _order$shipping_detai9.line2]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "font-semibold",
                    children: "Postal Code - "
                  }), order === null || order === void 0 ? void 0 : (_order$shipping_detai10 = order.shipping_details) === null || _order$shipping_detai10 === void 0 ? void 0 : (_order$shipping_detai11 = _order$shipping_detai10.address) === null || _order$shipping_detai11 === void 0 ? void 0 : _order$shipping_detai11.postal_code]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "font-semibold",
                    children: "State - "
                  }), order === null || order === void 0 ? void 0 : (_order$shipping_detai12 = order.shipping_details) === null || _order$shipping_detai12 === void 0 ? void 0 : (_order$shipping_detai13 = _order$shipping_detai12.address) === null || _order$shipping_detai13 === void 0 ? void 0 : _order$shipping_detai13.state]
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "font-semibold mb-2  uppercase",
                children: "Amount"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "text-sm text-gray-700",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "font-semibold",
                    children: "Subtotal - "
                  }), /*#__PURE__*/jsx_runtime_.jsx((external_react_currency_formatter_default()), {
                    quantity: (order === null || order === void 0 ? void 0 : order.amount_subtotal) / 100,
                    currency: "INR"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  className: "text-green-500 font-semibold",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Shipping_details - "
                  }), /*#__PURE__*/jsx_runtime_.jsx((external_react_currency_formatter_default()), {
                    quantity: (order === null || order === void 0 ? void 0 : (_order$total_details = order.total_details) === null || _order$total_details === void 0 ? void 0 : _order$total_details.amount_shipping_details) / 100,
                    currency: "INR"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  className: "font-bold text-red-500",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "font-semibold",
                    children: "Total - "
                  }), /*#__PURE__*/jsx_runtime_.jsx((external_react_currency_formatter_default()), {
                    quantity: (order === null || order === void 0 ? void 0 : order.amount_total) / 100,
                    currency: "INR"
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "font-semibold mb-2  uppercase",
                children: "Items"
              }), order === null || order === void 0 ? void 0 : (_order$items2 = order.items) === null || _order$items2 === void 0 ? void 0 : _order$items2.map(item => /*#__PURE__*/jsx_runtime_.jsx(Order_OrderItem, {
                item: item
              }, `order-item-${item === null || item === void 0 ? void 0 : item._id}`))]
            }), order !== null && order !== void 0 && (_order$order_status7 = order.order_status) !== null && _order$order_status7 !== void 0 && (_order$order_status7$ = _order$order_status7.current) !== null && _order$order_status7$ !== void 0 && _order$order_status7$.status && (order === null || order === void 0 ? void 0 : (_order$order_status8 = order.order_status) === null || _order$order_status8 === void 0 ? void 0 : (_order$order_status8$ = _order$order_status8.current) === null || _order$order_status8$ === void 0 ? void 0 : _order$order_status8$.status) !== "cancelled" && (order === null || order === void 0 ? void 0 : (_order$order_status9 = order.order_status) === null || _order$order_status9 === void 0 ? void 0 : (_order$order_status9$ = _order$order_status9.current) === null || _order$order_status9$ === void 0 ? void 0 : _order$order_status9$.status) !== "delivered" ? /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "py-4",
              children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: `button-red py-2 px-12 capitalize w-full sm:text-base text-sm ${disabled ? "opacity-50" : ""}`,
                onClick: cancelOrder,
                disabled: disabled,
                children: "Cancel Order"
              })
            }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})]
          })]
        }) : /*#__PURE__*/jsx_runtime_.jsx((external_react_loading_skeleton_default()), {
          count: 30
        })
      })]
    })
  });
}

/* harmony default export */ var Order_OrderDetails = (OrderDetails);

/***/ })

};
;