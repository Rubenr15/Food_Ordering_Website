exports.id = 4428;
exports.ids = [4428,7641];
exports.modules = {

/***/ 5045:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9381);
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_Toast_NormalToast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(401);









function DishInfo({
  _id,
  title,
  price,
  description,
  category,
  image,
  border,
  removeFromSearchResults
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    0: disabled,
    1: setDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const deleteDish = _id => {
    setDisabled(true);
    axios__WEBPACK_IMPORTED_MODULE_5___default().post("/api/admin/delete-dish", {
      _id
    }).then(() => {
      (0,_util_Toast_NormalToast__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)("Dish deleted");
      removeFromSearchResults(_id);
      setDisabled(false);
    }).catch(err => {
      (0,_util_Toast_NormalToast__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)("Something went wrong", true);
      console.error(err);
      setDisabled(false);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: `flex sm:flex-row flex-col-reverse w-full my-4 text-sm text-gray-700 py-6 ${border ? "border-b border-gray-200" : ""} sm:justify-between gap-6`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "space-y-2",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "font-semibold text-base capitalize",
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-primary-light capitalize",
        children: category
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "text-gray-500 lg:text-sm text-xs",
        children: description
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
          className: "font-semibold",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "font-normal",
            children: "Price - "
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_currency_formatter__WEBPACK_IMPORTED_MODULE_2___default()), {
            quantity: price,
            currency: "INR"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center gap-4 pt-4",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          className: `button py-2 xxs:px-10 px-8 ${disabled ? "opacity-50" : ""}`,
          onClick: () => router.push(`/admin/update-dish/${_id}`),
          disabled: disabled,
          children: "Update"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          className: `button-red py-2 xxs:px-10 px-8 ${disabled ? "opacity-50" : ""}`,
          onClick: () => deleteDish(_id),
          disabled: disabled,
          children: "Delete"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "sm:mx-0 sm:ml-6 min-w-max  mx-auto my-auto",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__.default, {
        src: image,
        width: 120,
        height: 120,
        alt: "",
        objectFit: "contain"
      })
    })]
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (DishInfo);

/***/ }),

/***/ 234:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7749);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);


const getDishes = initialData => {
  let res;

  if (initialData) {
    res = swr__WEBPACK_IMPORTED_MODULE_0___default()("/api/dishes", {
      initialData
    });
  } else {
    res = swr__WEBPACK_IMPORTED_MODULE_0___default()("/api/dishes");
  }

  return {
    dishes: res.data,
    isLoading: !res.error && !res.data,
    error: res.error
  };
};

/* harmony default export */ __webpack_exports__["Z"] = (getDishes);

/***/ }),

/***/ 7641:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7548);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};
let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (false) {} else {
  // In production mode, it's best to not use a global variable.
  client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);
  clientPromise = client.connect();
} // Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.


/* harmony default export */ __webpack_exports__["Z"] = (clientPromise);

/***/ })

};
;