(function() {
var exports = {};
exports.id = "pages/api/admin/categories";
exports.ids = ["pages/api/admin/categories"];
exports.modules = {

/***/ "./src/pages/api/admin/categories.js":
/*!*******************************************!*\
  !*** ./src/pages/api/admin/categories.js ***!
  \*******************************************/
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
      const db = client.db("sample_data");
      let categories = await db.collection("categories").find({}).toArray();
      categories = JSON.parse(JSON.stringify(categories));
      return res.status(200).json(categories);
    } else {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }
  } catch (err) {
    console.log(err);
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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/admin/categories.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWFsLy4vc3JjL3BhZ2VzL2FwaS9hZG1pbi9jYXRlZ29yaWVzLmpzIiwid2VicGFjazovL3plYWwvLi9zcmMvdXRpbC9tb25nb2RiLmpzIiwid2VicGFjazovL3plYWwvZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vemVhbC9leHRlcm5hbCBcIm5leHQtYXV0aC9yZWFjdFwiIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwiYWRtaW4iLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZGIiLCJjYXRlZ29yaWVzIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwib3B0aW9ucyIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZU5ld1VybFBhcnNlciIsIkVycm9yIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsK0RBQWUsT0FBT0EsR0FBUCxFQUFXQyxHQUFYLEtBQW1CO0FBQzlCLE1BQUc7QUFDQyxVQUFNQyxPQUFPLEdBQUcsTUFBTUMsMkRBQVUsQ0FBQztBQUFDSDtBQUFELEtBQUQsQ0FBaEM7O0FBQ0EsUUFBR0UsT0FBTyxJQUFJQSxPQUFPLENBQUNFLEtBQXRCLEVBQTRCO0FBQ3hCLFlBQU1DLE1BQU0sR0FBRyxNQUFNQyxrREFBckI7QUFDQSxZQUFNQyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0UsRUFBUCxDQUFVLGFBQVYsQ0FBWDtBQUNBLFVBQUlDLFVBQVUsR0FBRyxNQUFNRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxZQUFkLEVBQTRCQyxJQUE1QixDQUFpQyxFQUFqQyxFQUFxQ0MsT0FBckMsRUFBdkI7QUFDQUgsZ0JBQVUsR0FBR0ksSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlTixVQUFmLENBQVgsQ0FBYjtBQUNBLGFBQU9QLEdBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCUixVQUFyQixDQUFQO0FBQ0gsS0FORCxNQU9JO0FBQ0EsYUFBT1AsR0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsZUFBTyxFQUFDO0FBQVQsT0FBckIsQ0FBUDtBQUNIO0FBQ0osR0FaRCxDQVlDLE9BQU1DLEdBQU4sRUFBVTtBQUNQQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLFdBQU9qQixHQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxhQUFPLEVBQUM7QUFBVCxLQUFyQixDQUFQO0FBQ0g7QUFDSixDQWpCRCxFOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBRUEsTUFBTUksR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUc7QUFDZEMsb0JBQWtCLEVBQUUsSUFETjtBQUVkQyxpQkFBZSxFQUFFO0FBRkgsQ0FBaEI7QUFLQSxJQUFJdEIsTUFBSjtBQUNBLElBQUlDLGFBQUo7O0FBRUEsSUFBSSxDQUFDZ0IsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQWpCLEVBQThCO0FBQzVCLFFBQU0sSUFBSUksS0FBSixDQUFVLHlDQUFWLENBQU47QUFDRDs7QUFFRCxJQUFJLE1BQXdDO0FBQzFDO0FBQ0E7QUFDQSxNQUFJLENBQUNDLE1BQU0sQ0FBQ0MsbUJBQVosRUFBaUM7QUFDL0J6QixVQUFNLEdBQUcsSUFBSTBCLGdEQUFKLENBQWdCVixHQUFoQixFQUFxQkksT0FBckIsQ0FBVDtBQUNBSSxVQUFNLENBQUNDLG1CQUFQLEdBQTZCekIsTUFBTSxDQUFDMkIsT0FBUCxFQUE3QjtBQUNEOztBQUNEMUIsZUFBYSxHQUFHdUIsTUFBTSxDQUFDQyxtQkFBdkI7QUFDRCxDQVJELE1BUU8sRSxDQU1QO0FBQ0E7OztBQUNBLCtEQUFleEIsYUFBZixFOzs7Ozs7Ozs7OztBQy9CQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9hcGkvYWRtaW4vY2F0ZWdvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0U2Vzc2lvbn0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnLi4vLi4vLi4vdXRpbC9tb25nb2RiJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEscmVzKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oe3JlcX0pO1xyXG4gICAgICAgIGlmKHNlc3Npb24gJiYgc2Vzc2lvbi5hZG1pbil7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKFwic2FtcGxlX2RhdGFcIik7XHJcbiAgICAgICAgICAgIGxldCBjYXRlZ29yaWVzID0gYXdhaXQgZGIuY29sbGVjdGlvbihcImNhdGVnb3JpZXNcIikuZmluZCh7fSkudG9BcnJheSgpO1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjYXRlZ29yaWVzKSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihjYXRlZ29yaWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHttZXNzYWdlOlwiVW5hdXRob3JpemVkXCJ9KTtcclxuICAgICAgICB9XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7bWVzc2FnZTpcIkludGVybmFsIFNlcnZlciBFcnJvclwifSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCJcclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxufVxyXG5cclxubGV0IGNsaWVudFxyXG5sZXQgY2xpZW50UHJvbWlzZVxyXG5cclxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbFwiKVxyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxyXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXHJcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG4gIH1cclxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2VcclxufSBlbHNlIHtcclxuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxufVxyXG5cclxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcclxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=