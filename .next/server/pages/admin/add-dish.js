(function() {
var exports = {};
exports.id = 7281;
exports.ids = [7281,7641];
exports.modules = {

/***/ 6641:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_Toast_NormalToast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(401);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7641);
/* harmony import */ var _util_getCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7173);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);










function AddDish(props) {
  var _props$categories$;

  const {
    0: title,
    1: setTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: description,
    1: setDescription
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: price,
    1: setPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: image,
    1: setImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: category,
    1: setCategory
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props === null || props === void 0 ? void 0 : (_props$categories$ = props.categories[0]) === null || _props$categories$ === void 0 ? void 0 : _props$categories$.name);
  const {
    categories,
    error
  } = (0,_util_getCategories__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(props === null || props === void 0 ? void 0 : props.categories);
  const {
    0: disabled,
    1: setDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  if (error) {
    console.error(error);
  }

  const formHandler = e => {
    e.preventDefault();
    setDisabled(true);
    axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/admin/add-dish", {
      title,
      category,
      description,
      price,
      image
    }).then(res => {
      (0,_util_Toast_NormalToast__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)("Dish added successfully");
      setTitle("");
      setDescription("");
      setPrice("");
      setImage("");
      setCategory("");
      setDisabled(false);
    }).catch(err => {
      (0,_util_Toast_NormalToast__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)("Something went wrong", true);
      console.error(err);
      setDisabled(false);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "Zeal | Add Dish"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "heightFixAdmin px-6 lg:py-20 sm:py-16 py-12",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mx-auto max-w-screen-sm sm:text-base  text-sm ",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
          className: "lg:text-4xl sm:text-3xl text-2xl  font-bold mb-6",
          children: "Add Dish"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
          onSubmit: formHandler,
          className: "flex flex-col gap-4",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: "text",
            required: true,
            value: title,
            placeholder: "Title",
            className: "bg-gray-100 py-2 px-4 rounded-md outline-none border border-gray-200",
            onChange: e => setTitle(e.target.value),
            disabled: disabled
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
            required: true,
            className: "bg-gray-100 py-2 px-4 rounded-md outline-none border border-gray-200 capitalize",
            onChange: e => setCategory(e.target.value),
            disabled: disabled,
            children: categories === null || categories === void 0 ? void 0 : categories.map(category => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
              value: category === null || category === void 0 ? void 0 : category.name,
              children: category === null || category === void 0 ? void 0 : category.name
            }, `option-${category === null || category === void 0 ? void 0 : category._id}`))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
            required: true,
            placeholder: "Description",
            className: "bg-gray-100 border border-gray-200 py-2 px-4 rounded-md resize-none h-24 outline-none",
            value: description,
            onChange: e => setDescription(e.target.value),
            cols: "25",
            rows: "10",
            disabled: disabled
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: "number",
            required: true,
            placeholder: "Price",
            className: "bg-gray-100 border py-2 px-4 rounded-md outline-none border-gray-200",
            value: price,
            onChange: e => setPrice(e.target.value),
            disabled: disabled
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: "text",
            required: true,
            placeholder: "Image Url",
            className: "bg-gray-100 py-2 px-4 border rounded-md outline-none border-gray-200",
            value: image,
            onChange: e => setImage(e.target.value),
            disabled: disabled
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            type: "submit",
            className: `button py-2 px-10 sm:text-base text-sm mt-4 ${disabled ? "opacity-50" : ""}`,
            disabled: disabled,
            children: "Submit"
          })]
        })]
      })
    })]
  });
}

AddDish.admin = true;
/* harmony default export */ __webpack_exports__["default"] = (AddDish);
const getStaticProps = async () => {
  const client = await _util_mongodb__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z;
  const db = await client.db("sample_data");
  let categories = await db.collection("categories").find({}).toArray();
  categories = JSON.parse(JSON.stringify(categories));
  return {
    props: {
      categories
    },
    revalidate: 1
  };
};

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

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 7548:
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 7749:
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
var __webpack_exports__ = __webpack_require__.X(0, [1572], function() { return __webpack_exec__(6641); });
module.exports = __webpack_exports__;

})();