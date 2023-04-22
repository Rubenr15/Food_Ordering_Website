(function() {
var exports = {};
exports.id = "pages/api/dishes";
exports.ids = ["pages/api/dishes"];
exports.modules = {

/***/ "./src/pages/api/dishes.js":
/*!*********************************!*\
  !*** ./src/pages/api/dishes.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mongodb */ "./src/util/mongodb.js");
 //import dis from  "../../../dishes.json"

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    const client = await _util_mongodb__WEBPACK_IMPORTED_MODULE_0__.default;
    const db = await client.db("sample_data");
    let dishes = await db.collection("dishes").find({}).toArray();
    dishes = JSON.parse(JSON.stringify(dishes));
    return res.status(200).json(dishes);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
});
/*dis.forEach(async(itm)=>{
        await db.collection("dishes").insertOne(itm)
    })*/
//await db.collection("dishes").deleteMany({})

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/dishes.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWFsLy4vc3JjL3BhZ2VzL2FwaS9kaXNoZXMuanMiLCJ3ZWJwYWNrOi8vemVhbC8uL3NyYy91dGlsL21vbmdvZGIuanMiLCJ3ZWJwYWNrOi8vemVhbC9leHRlcm5hbCBcIm1vbmdvZGJcIiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZGIiLCJkaXNoZXMiLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJFcnJvciIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUVBLCtEQUFlLE9BQU9BLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxNQUFJO0FBQ0YsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLGtEQUFyQjtBQUNBLFVBQU1DLEVBQUUsR0FBRyxNQUFNRixNQUFNLENBQUNFLEVBQVAsQ0FBVSxhQUFWLENBQWpCO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFFBQWQsRUFBd0JDLElBQXhCLENBQTZCLEVBQTdCLEVBQWlDQyxPQUFqQyxFQUFuQjtBQUNBSCxVQUFNLEdBQUdJLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZU4sTUFBZixDQUFYLENBQVQ7QUFDQSxXQUFPSixHQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQlIsTUFBckIsQ0FBUDtBQUNELEdBTkQsQ0FNRSxPQUFPUyxHQUFQLEVBQVk7QUFDWkMsV0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDQSxXQUFPYixHQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFSSxhQUFPLEVBQUU7QUFBWCxLQUFyQixDQUFQO0FBQ0Q7QUFDRixDQVhEO0FBY0E7QUFDQTtBQUNBO0FBRUEsOEM7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUEsTUFBTUMsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUc7QUFDZEMsb0JBQWtCLEVBQUUsSUFETjtBQUVkQyxpQkFBZSxFQUFFO0FBRkgsQ0FBaEI7QUFLQSxJQUFJdEIsTUFBSjtBQUNBLElBQUlDLGFBQUo7O0FBRUEsSUFBSSxDQUFDZ0IsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQWpCLEVBQThCO0FBQzVCLFFBQU0sSUFBSUksS0FBSixDQUFVLHlDQUFWLENBQU47QUFDRDs7QUFFRCxJQUFJLE1BQXdDO0FBQzFDO0FBQ0E7QUFDQSxNQUFJLENBQUNDLE1BQU0sQ0FBQ0MsbUJBQVosRUFBaUM7QUFDL0J6QixVQUFNLEdBQUcsSUFBSTBCLGdEQUFKLENBQWdCVixHQUFoQixFQUFxQkksT0FBckIsQ0FBVDtBQUNBSSxVQUFNLENBQUNDLG1CQUFQLEdBQTZCekIsTUFBTSxDQUFDMkIsT0FBUCxFQUE3QjtBQUNEOztBQUNEMUIsZUFBYSxHQUFHdUIsTUFBTSxDQUFDQyxtQkFBdkI7QUFDRCxDQVJELE1BUU8sRSxDQU1QO0FBQ0E7OztBQUNBLCtEQUFleEIsYUFBZixFOzs7Ozs7Ozs7OztBQy9CQSxxQyIsImZpbGUiOiJwYWdlcy9hcGkvZGlzaGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uL3V0aWwvbW9uZ29kYlwiO1xyXG4vL2ltcG9ydCBkaXMgZnJvbSAgXCIuLi8uLi8uLi9kaXNoZXMuanNvblwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgY2xpZW50LmRiKFwic2FtcGxlX2RhdGFcIik7XHJcbiAgICBsZXQgZGlzaGVzID0gYXdhaXQgZGIuY29sbGVjdGlvbihcImRpc2hlc1wiKS5maW5kKHt9KS50b0FycmF5KCk7XHJcbiAgICBkaXNoZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRpc2hlcykpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRpc2hlcyk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiIH0pO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG4vKmRpcy5mb3JFYWNoKGFzeW5jKGl0bSk9PntcclxuICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiZGlzaGVzXCIpLmluc2VydE9uZShpdG0pXHJcbiAgICB9KSovXHJcblxyXG4vL2F3YWl0IGRiLmNvbGxlY3Rpb24oXCJkaXNoZXNcIikuZGVsZXRlTWFueSh7fSlcclxuIiwiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiXHJcblxyXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbn1cclxuXHJcbmxldCBjbGllbnRcclxubGV0IGNsaWVudFByb21pc2VcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWxcIilcclxufVxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcclxuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcclxuICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxyXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXHJcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXHJcbn0gZWxzZSB7XHJcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cclxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==