(function() {
var exports = {};
exports.id = 6538;
exports.ids = [6538];
exports.modules = {

/***/ 3873:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": function() { return /* binding */ config; },
  "default": function() { return /* binding */ webhook; }
});

// EXTERNAL MODULE: external "bson"
var external_bson_ = __webpack_require__(61);
;// CONCATENATED MODULE: external "micro"
var external_micro_namespaceObject = require("micro");;
// EXTERNAL MODULE: ./src/util/mongodb.js
var mongodb = __webpack_require__(7641);
;// CONCATENATED MODULE: ./src/pages/api/webhook.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 //Establish connection to Stripe

const stripe = __webpack_require__(464)(process.env.STRIPE_SECRET_KEY);

const endpointSecret = "whsec_c078441cf8ff6244447f05d19b8387ad6f93bf04d546dd004e2302f28a8e1a1b";

const fulfillOrder = async session => {
  try {
    const client = await mongodb/* default */.Z;
    const db = await client.db("sample_data");
    let result = await db.collection("temp").findOne({
      _id: (0,external_bson_.ObjectId)(JSON.parse(session.metadata.id))
    });
    console.log(result);
    delete result._id;
    const ord_status = {
      status: "shipping soon",
      timestamp: new Date()
    };
    await db.collection("orders").insertOne(_objectSpread(_objectSpread(_objectSpread({
      order_status: {
        current: ord_status,
        info: [ord_status]
      }
    }, result), session), {}, {
      timestamp: new Date()
    }));
    console.log(`SUCCESS: Order ${session.id} has been added to the DB`);
  } catch (err) {
    console.error(err);
  }
};

/* harmony default export */ var webhook = (async (req, res) => {
  console.log(req.method);

  if (req.method === "POST") {
    const requestBuffer = await (0,external_micro_namespaceObject.buffer)(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];
    console.log(requestBuffer);
    console.log(payload);
    console.log(sig);
    let event; //Verify that the EVENT posted came from stripe

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
      console.log(event);
    } catch (err) {
      console.error(err.message);
      return res.status(400).json({
        message: err.message
      });
    } //Handle the checkout.session.completed event


    if (event.type === "checkout.session.completed") {
      const session = event.data.object; //Fulfill the order

      return fulfillOrder(session).then(() => res.status(200).json({
        message: "success"
      })).catch(err => {
        console.error(err);
        return res.status(400).json({
          message: err.message
        });
      });
    }
  }
});
const config = {
  api: {
    bodyParser: false,
    externalResolver: true
  }
};

/***/ }),

/***/ 61:
/***/ (function(module) {

"use strict";
module.exports = require("bson");;

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
var __webpack_exports__ = __webpack_require__.X(0, [7641], function() { return __webpack_exec__(3873); });
module.exports = __webpack_exports__;

})();