exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 8961:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Xq": function() { return /* binding */ addToCart; },
  "ZP": function() { return /* binding */ slices_cartSlice; },
  "UY": function() { return /* binding */ emptyCart; },
  "ZB": function() { return /* binding */ hydrate; },
  "h2": function() { return /* binding */ removeFromCart; },
  "a1": function() { return /* binding */ selectItems; },
  "mS": function() { return /* binding */ selectTotal; },
  "PE": function() { return /* binding */ updateQty; }
});

// UNUSED EXPORTS: cartSlice

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(6049);
;// CONCATENATED MODULE: ./src/util/Toast/addedToCartToast.js







const addedToCartToast = (image, title) => {
  (0,external_react_toastify_.toast)( /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex text-gray-800 gap-4",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-3/12 my-auto",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: image,
        width: 40,
        height: 40,
        alt: "",
        objectFit: "cover",
        className: "min-w-max"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "w-full",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "font-bold",
        children: "Added to cart"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "text-sm mb-2 capitalize",
        children: [title.slice(0, 22), title.length > 22 ? "…" : ""]
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/cart",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          className: "px-8 py-2 w-full flex items-center justify-center button",
          children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* CreditCardIcon */.ciH, {
            className: "w-4"
          }), " \xA0Checkout"]
        })
      })]
    })]
  }), {
    position: "top-right",
    autoClose: 6000,
    style: {
      backgroundColor: "white",
      color: "#1f2937",
      fontFamily: "Poppins, sans-serif",
      height: "auto"
    },
    hideProgressBar: false,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 25
  });
};

/* harmony default export */ var Toast_addedToCartToast = (addedToCartToast);
;// CONCATENATED MODULE: ./src/slices/cartSlice.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  items: []
};
const cartSlice = (0,toolkit_.createSlice)({
  name: "cart",
  initialState,
  reducers: {
    //Actions
    hydrate: (state, action) => {
      return action.payload;
    },
    //Add item to cart
    addToCart: (state, action) => {
      const index = state.items.findIndex(cartItem => cartItem._id === action.payload._id);

      if (index >= 0) {
        let newCart = [...state.items];
        newCart[index] = _objectSpread(_objectSpread({}, newCart[index]), {}, {
          qty: newCart[index].qty + 1
        });
        state.items = newCart;
      } else {
        let item = _objectSpread({}, action.payload);

        delete item.toast;
        state.items = [...state.items, item];
      } //Toast to indicate item added to cart


      if (action.payload.toast) {
        Toast_addedToCartToast(action.payload.image, action.payload.title);
      }
    },
    //Update the quantity of item in cart
    updateQty: (state, action) => {
      let newCart = [...state.items];
      const index = state.items.findIndex(cartItem => cartItem._id === action.payload._id);

      if (index >= 0) {
        if (action.payload.qty >= 1) {
          newCart[index] = action.payload;
          state.items = newCart;
        } else {
          newCart.splice(index, 1);
          state.items = newCart;
        }
      } else {
        console.warn("Dish not present in the cart!");
      }
    },
    //Remove a item from cart
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(cartItem => cartItem._id === action.payload._id);
      let newBastek = [...state.items];

      if (index >= 0) {
        newBastek.splice(index, 1);
      } else {
        console.warn(`Can't remove dish (_id:${action.payload._id}) as its not in the cart`);
      }

      state.items = newBastek;
    },
    //Empty the cart
    emptyCart: (state, action) => {
      state.items = [];
    }
  }
});
const {
  addToCart,
  removeFromCart,
  updateQty,
  hydrate,
  emptyCart
} = cartSlice.actions; // Selectors - This is how we pull information from the Global store slice

const selectItems = state => state.cart.items;
const selectTotal = state => state.cart.items.reduce((total, item) => total + item.price * item.qty, 0);
/* harmony default export */ var slices_cartSlice = (cartSlice.reducer);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;