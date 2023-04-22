(function() {
var exports = {};
exports.id = "pages/api/categories";
exports.ids = ["pages/api/categories"];
exports.modules = {

/***/ "./src/pages/api/categories.js":
/*!*************************************!*\
  !*** ./src/pages/api/categories.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mongodb */ "./src/util/mongodb.js");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    const client = await _util_mongodb__WEBPACK_IMPORTED_MODULE_0__.default;
    const db = await client.db("sample_data");
    let categories = await db.collection("categories").find({}).toArray();
    categories = JSON.parse(JSON.stringify(categories));
    return res.status(200).json(categories);
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/categories.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWFsLy4vc3JjL3BhZ2VzL2FwaS9jYXRlZ29yaWVzLmpzIiwid2VicGFjazovL3plYWwvLi9zcmMvdXRpbC9tb25nb2RiLmpzIiwid2VicGFjazovL3plYWwvZXh0ZXJuYWwgXCJtb25nb2RiXCIiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImRiIiwiY2F0ZWdvcmllcyIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwib3B0aW9ucyIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZU5ld1VybFBhcnNlciIsIkVycm9yIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSwrREFBZSxPQUFPQSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDL0IsTUFBSTtBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFNQyxrREFBckI7QUFDQSxVQUFNQyxFQUFFLEdBQUcsTUFBTUYsTUFBTSxDQUFDRSxFQUFQLENBQVUsYUFBVixDQUFqQjtBQUNBLFFBQUlDLFVBQVUsR0FBRyxNQUFNRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxZQUFkLEVBQTRCQyxJQUE1QixDQUFpQyxFQUFqQyxFQUFxQ0MsT0FBckMsRUFBdkI7QUFDQUgsY0FBVSxHQUFHSSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWVOLFVBQWYsQ0FBWCxDQUFiO0FBQ0EsV0FBT0osR0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJSLFVBQXJCLENBQVA7QUFDSCxHQU5ELENBTUUsT0FBT1MsR0FBUCxFQUFZO0FBQ1ZDLFdBQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQ0EsV0FBT2IsR0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUksYUFBTyxFQUFFO0FBQVgsS0FBckIsQ0FBUDtBQUNIO0FBQ0osQ0FYRCxFOzs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBRUEsTUFBTUMsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUc7QUFDZEMsb0JBQWtCLEVBQUUsSUFETjtBQUVkQyxpQkFBZSxFQUFFO0FBRkgsQ0FBaEI7QUFLQSxJQUFJdEIsTUFBSjtBQUNBLElBQUlDLGFBQUo7O0FBRUEsSUFBSSxDQUFDZ0IsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQWpCLEVBQThCO0FBQzVCLFFBQU0sSUFBSUksS0FBSixDQUFVLHlDQUFWLENBQU47QUFDRDs7QUFFRCxJQUFJLE1BQXdDO0FBQzFDO0FBQ0E7QUFDQSxNQUFJLENBQUNDLE1BQU0sQ0FBQ0MsbUJBQVosRUFBaUM7QUFDL0J6QixVQUFNLEdBQUcsSUFBSTBCLGdEQUFKLENBQWdCVixHQUFoQixFQUFxQkksT0FBckIsQ0FBVDtBQUNBSSxVQUFNLENBQUNDLG1CQUFQLEdBQTZCekIsTUFBTSxDQUFDMkIsT0FBUCxFQUE3QjtBQUNEOztBQUNEMUIsZUFBYSxHQUFHdUIsTUFBTSxDQUFDQyxtQkFBdkI7QUFDRCxDQVJELE1BUU8sRSxDQU1QO0FBQ0E7OztBQUNBLCtEQUFleEIsYUFBZixFOzs7Ozs7Ozs7OztBQy9CQSxxQyIsImZpbGUiOiJwYWdlcy9hcGkvY2F0ZWdvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi91dGlsL21vbmdvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgY2xpZW50LmRiKFwic2FtcGxlX2RhdGFcIik7XHJcbiAgICAgICAgbGV0IGNhdGVnb3JpZXMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiY2F0ZWdvcmllc1wiKS5maW5kKHt9KS50b0FycmF5KCk7XHJcbiAgICAgICAgY2F0ZWdvcmllcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcykpO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihjYXRlZ29yaWVzKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiIH0pO1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCJcclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxufVxyXG5cclxubGV0IGNsaWVudFxyXG5sZXQgY2xpZW50UHJvbWlzZVxyXG5cclxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbFwiKVxyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxyXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXHJcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG4gIH1cclxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2VcclxufSBlbHNlIHtcclxuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxufVxyXG5cclxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcclxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9