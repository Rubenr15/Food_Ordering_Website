(function() {
var exports = {};
exports.id = "pages/api/admin/active-orders";
exports.ids = ["pages/api/admin/active-orders"];
exports.modules = {

/***/ "./src/pages/api/admin/active-orders.js":
/*!**********************************************!*\
  !*** ./src/pages/api/admin/active-orders.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ "next-auth/react");
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/mongodb */ "./src/util/mongodb.js");


/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({
      req
    });

    if (session && session.admin) {
      const client = await _util_mongodb__WEBPACK_IMPORTED_MODULE_1__.default;
      const db = await client.db("sample_data");
      let orders = await db.collection("orders").find({
        payment_status: "paid",
        "order_status.current.status": {
          $in: ["shipping soon", "shipped", "out for delivery"]
        }
      }).sort({
        timestamp: -1
      }).toArray();
      orders = JSON.parse(JSON.stringify(orders));
      return res.status(200).json(orders);
    } else {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
});

/***/ }),

/***/ "./src/util/mongodb.js":
/*!*****************************!*\
  !*** ./src/util/mongodb.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
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

if (true) {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }

  clientPromise = global._mongoClientPromise;
} else {} // Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.


/* harmony default export */ __webpack_exports__["default"] = (clientPromise);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/admin/active-orders.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWFsLy4vc3JjL3BhZ2VzL2FwaS9hZG1pbi9hY3RpdmUtb3JkZXJzLmpzIiwid2VicGFjazovL3plYWwvLi9zcmMvdXRpbC9tb25nb2RiLmpzIiwid2VicGFjazovL3plYWwvZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vemVhbC9leHRlcm5hbCBcIm5leHQtYXV0aC9yZWFjdFwiIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwiYWRtaW4iLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZGIiLCJvcmRlcnMiLCJjb2xsZWN0aW9uIiwiZmluZCIsInBheW1lbnRfc3RhdHVzIiwiJGluIiwic29ydCIsInRpbWVzdGFtcCIsInRvQXJyYXkiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJFcnJvciIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLCtEQUFlLE9BQU9BLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixNQUFJO0FBQ0EsVUFBTUMsT0FBTyxHQUFHLE1BQU1DLDJEQUFVLENBQUM7QUFBRUg7QUFBRixLQUFELENBQWhDOztBQUNBLFFBQUlFLE9BQU8sSUFBSUEsT0FBTyxDQUFDRSxLQUF2QixFQUE4QjtBQUMxQixZQUFNQyxNQUFNLEdBQUcsTUFBTUMsa0RBQXJCO0FBQ0EsWUFBTUMsRUFBRSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0UsRUFBUCxDQUFVLGFBQVYsQ0FBakI7QUFDQSxVQUFJQyxNQUFNLEdBQUcsTUFBTUQsRUFBRSxDQUNoQkUsVUFEYyxDQUNILFFBREcsRUFFZEMsSUFGYyxDQUVUO0FBQ0ZDLHNCQUFjLEVBQUUsTUFEZDtBQUVGLHVDQUErQjtBQUMzQkMsYUFBRyxFQUFFLENBQUMsZUFBRCxFQUFrQixTQUFsQixFQUE2QixrQkFBN0I7QUFEc0I7QUFGN0IsT0FGUyxFQVFkQyxJQVJjLENBUVQ7QUFBRUMsaUJBQVMsRUFBRSxDQUFDO0FBQWQsT0FSUyxFQVNkQyxPQVRjLEVBQW5CO0FBVUFQLFlBQU0sR0FBR1EsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlVixNQUFmLENBQVgsQ0FBVDtBQUNBLGFBQU9QLEdBQUcsQ0FBQ2tCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQlosTUFBckIsQ0FBUDtBQUNILEtBZkQsTUFlTztBQUNILGFBQU9QLEdBQUcsQ0FBQ2tCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFyQixDQUFQO0FBQ0g7QUFDSixHQXBCRCxDQW9CRSxPQUFPQyxHQUFQLEVBQVk7QUFDVkMsV0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDQSxXQUFPckIsR0FBRyxDQUFDa0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDSDtBQUNKLENBekJELEU7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFFQSxNQUFNSSxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUF4QjtBQUNBLE1BQU1DLE9BQU8sR0FBRztBQUNkQyxvQkFBa0IsRUFBRSxJQUROO0FBRWRDLGlCQUFlLEVBQUU7QUFGSCxDQUFoQjtBQUtBLElBQUkxQixNQUFKO0FBQ0EsSUFBSUMsYUFBSjs7QUFFQSxJQUFJLENBQUNvQixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBakIsRUFBOEI7QUFDNUIsUUFBTSxJQUFJSSxLQUFKLENBQVUseUNBQVYsQ0FBTjtBQUNEOztBQUVELElBQUksTUFBd0M7QUFDMUM7QUFDQTtBQUNBLE1BQUksQ0FBQ0MsTUFBTSxDQUFDQyxtQkFBWixFQUFpQztBQUMvQjdCLFVBQU0sR0FBRyxJQUFJOEIsZ0RBQUosQ0FBZ0JWLEdBQWhCLEVBQXFCSSxPQUFyQixDQUFUO0FBQ0FJLFVBQU0sQ0FBQ0MsbUJBQVAsR0FBNkI3QixNQUFNLENBQUMrQixPQUFQLEVBQTdCO0FBQ0Q7O0FBQ0Q5QixlQUFhLEdBQUcyQixNQUFNLENBQUNDLG1CQUF2QjtBQUNELENBUkQsTUFRTyxFLENBTVA7QUFDQTs7O0FBQ0EsK0RBQWU1QixhQUFmLEU7Ozs7Ozs7Ozs7O0FDL0JBLHFDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2FwaS9hZG1pbi9hY3RpdmUtb3JkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uLy4uL3V0aWwvbW9uZ29kYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xyXG4gICAgICAgIGlmIChzZXNzaW9uICYmIHNlc3Npb24uYWRtaW4pIHtcclxuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcclxuICAgICAgICAgICAgY29uc3QgZGIgPSBhd2FpdCBjbGllbnQuZGIoXCJzYW1wbGVfZGF0YVwiKTtcclxuICAgICAgICAgICAgbGV0IG9yZGVycyA9IGF3YWl0IGRiXHJcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihcIm9yZGVyc1wiKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRfc3RhdHVzOiBcInBhaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm9yZGVyX3N0YXR1cy5jdXJyZW50LnN0YXR1c1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbjogW1wic2hpcHBpbmcgc29vblwiLCBcInNoaXBwZWRcIiwgXCJvdXQgZm9yIGRlbGl2ZXJ5XCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnNvcnQoeyB0aW1lc3RhbXA6IC0xIH0pXHJcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpO1xyXG4gICAgICAgICAgICBvcmRlcnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9yZGVycykpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ob3JkZXJzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiIH0pO1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCJcclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxufVxyXG5cclxubGV0IGNsaWVudFxyXG5sZXQgY2xpZW50UHJvbWlzZVxyXG5cclxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbFwiKVxyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxyXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXHJcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG4gIH1cclxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2VcclxufSBlbHNlIHtcclxuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxufVxyXG5cclxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcclxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=