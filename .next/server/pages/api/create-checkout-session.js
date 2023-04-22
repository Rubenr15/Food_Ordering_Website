(function() {
var exports = {};
exports.id = 7352;
exports.ids = [7352,7641];
exports.modules = {

/***/ 779:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7641);


const stripe = __webpack_require__(464)(process.env.STRIPE_SECRET_KEY);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    items,
    email
  } = req.body;

  try {
    const client = await _util_mongodb__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z;
    const db = client.db("sample_data"); //await db.collection("temp").deleteMany({ user: email });
    //to delete temp doc in 56 days automatically. run only one time
    //await db.collection("temp").createIndex({ "createdAt": 1 }, { expireAfterSeconds:4838400 })

    const result = await db.collection("temp").insertOne({
      user: email,
      items,
      createdAt: new Date()
    });
    const transformedItems = items.map(item => ({
      // description: item.description,
      // quantity: item.qty,
      // price_data: {
      //   price: "INR",
      //   //unit_amount_decimal  insted to unit_amount for decimal
      //   unit_amount: item.price * 100,
      //   product_data: {
      //     name: item.title,
      //    // images: [item.image],
      //   },
      // },
      quantity: item.qty,
      price_data: {
        currency: "INR",
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          description: item.description
        }
      }
    }));

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_options: [{
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'INR'
            },
            display_name: 'Free shipping',
            delivery_estimate: {
              minimum: {
                unit: 'hour',
                value: 1
              },
              maximum: {
                unit: 'hour',
                value: 2
              }
            }
          }
        }],
        shipping_address_collection: {
          allowed_countries: ["GB", "US", "CA", "IN"]
        },
        line_items: transformedItems,
        mode: "payment",
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/cart`,
        metadata: {
          id: JSON.stringify(result.insertedId)
        }
      });
      return res.status(200).json({
        id: session.id
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        message: "Bad Request"
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      message: "Bad Request"
    });
  }
});

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

/***/ 7548:
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ }),

/***/ 464:
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(779));
module.exports = __webpack_exports__;

})();