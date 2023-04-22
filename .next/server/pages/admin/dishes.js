(function() {
var exports = {};
exports.id = 454;
exports.ids = [454,401];
exports.modules = {

/***/ 9666:
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
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7641);
/* harmony import */ var _util_getDishes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(234);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Dish_DishInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5045);









function Dishes(props) {
  var _ref;

  const {
    0: searchTerm,
    1: setSearchTerm
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    dishes,
    error
  } = (0,_util_getDishes__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(props === null || props === void 0 ? void 0 : props.dishes);
  const {
    0: searchResult,
    1: setSearchResult
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(dishes);
  const options = {
    keys: ["title", "description", "category"]
  };

  if (error) {
    console.error(error);
  }

  const searchDish = async e => {
    let term = e.target.value;
    setSearchTerm(term);
    term = term.toLowerCase(); // Dynamically load fuse.js

    const Fuse = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 8673, 23))).default;
    const fuse = new Fuse(dishes ? dishes : [], options);
    const result = fuse.search(term).map(({
      item: {
        _id,
        title,
        price,
        description,
        category,
        image
      }
    }) => ({
      _id,
      title,
      price,
      description,
      category,
      image
    }));
    setSearchResult(result);
  };

  const removeFromSearchResults = _id => {
    setSearchResult(dishes => dishes.filter(dish => dish._id !== _id));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "Zeal | Dishes"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "heightFixAdmin px-6 lg:py-20 sm:py-16 py-12",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mx-auto max-w-screen-xl",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
          className: "lg:text-4xl sm:text-3xl text-2xl  font-bold mb-6 ",
          children: "Dishes"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "py-2",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            className: "p-2 pl-6 h-full w-full outline-none cursor-pointer sm:text-base text-sm rounded-lg bg-gray-200",
            type: "text",
            value: searchTerm,
            placeholder: "Search a dish",
            onChange: searchDish
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "overflow-y-auto hideScrollBar h-96 p-1",
          children: (_ref = searchTerm ? searchResult : dishes) === null || _ref === void 0 ? void 0 : _ref.map(({
            _id,
            title,
            price,
            description,
            category,
            image
          }, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dish_DishInfo__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
            _id: _id,
            title: title,
            price: price,
            description: description,
            category: category,
            image: image,
            border: i + 1 !== (dishes === null || dishes === void 0 ? void 0 : dishes.length),
            removeFromSearchResults: removeFromSearchResults
          }, `dish-${_id}`))
        })]
      })
    })]
  });
}

Dishes.admin = true;
/* harmony default export */ __webpack_exports__["default"] = (Dishes);
const getStaticProps = async () => {
  const client = await _util_mongodb__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z;
  const db = client.db("sample_data");
  let dishes = await db.collection("dishes").find({}).toArray();
  dishes = JSON.parse(JSON.stringify(dishes));
  return {
    props: {
      dishes
    },
    revalidate: 1
  };
};

/***/ }),

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

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8673:
/***/ (function(module) {

"use strict";
module.exports = require("fuse.js");;

/***/ }),

/***/ 7548:
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 9381:
/***/ (function(module) {

"use strict";
module.exports = require("react-currency-formatter");;

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
var __webpack_exports__ = __webpack_require__.X(0, [2821,5675,4428], function() { return __webpack_exec__(9666); });
module.exports = __webpack_exports__;

})();