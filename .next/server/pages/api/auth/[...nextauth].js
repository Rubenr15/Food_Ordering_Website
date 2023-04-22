(function() {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ "next-auth/providers/google");
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ "@next-auth/mongodb-adapter");
/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/mongodb */ "./src/util/mongodb.js");




/* harmony default export */ __webpack_exports__["default"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
  // Configure one or more authentication providers
  adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_util_mongodb__WEBPACK_IMPORTED_MODULE_3__.default),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }) // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session(session) {
      session.admin = false;
      const client = await _util_mongodb__WEBPACK_IMPORTED_MODULE_3__.default;
      const db = client.db("sample_data");
      const result = await db.collection("admins").findOne({
        email: session.user.email
      });

      if (result) {
        session.admin = true;
      }

      return session;
    }

  },
  theme: "dark"
}));

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

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@next-auth/mongodb-adapter");;

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth");;

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/providers/google");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWFsLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMiLCJ3ZWJwYWNrOi8vemVhbC8uL3NyYy91dGlsL21vbmdvZGIuanMiLCJ3ZWJwYWNrOi8vemVhbC9leHRlcm5hbCBcIkBuZXh0LWF1dGgvbW9uZ29kYi1hZGFwdGVyXCIiLCJ3ZWJwYWNrOi8vemVhbC9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly96ZWFsL2V4dGVybmFsIFwibmV4dC1hdXRoXCIiLCJ3ZWJwYWNrOi8vemVhbC9leHRlcm5hbCBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCIiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhZGFwdGVyIiwiTW9uZ29EQkFkYXB0ZXIiLCJjbGllbnRQcm9taXNlIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsInByb3ZpZGVycyIsIkdvb2dsZVByb3ZpZGVyIiwiY2xpZW50SWQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwiYWRtaW4iLCJjbGllbnQiLCJkYiIsInJlc3VsdCIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiZW1haWwiLCJ1c2VyIiwidGhlbWUiLCJ1cmkiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJFcnJvciIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsK0RBQWVBLGdEQUFRLENBQUM7QUFDdEI7QUFDQUMsU0FBTyxFQUFDQywwRUFBYyxDQUFDQyxrREFBRCxDQUZBO0FBR3RCQyxRQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxlQUhFO0FBSXRCQyxXQUFTLEVBQUUsQ0FDVEMsaUVBQWMsQ0FBQztBQUNiQyxZQUFRLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxnQkFEVDtBQUViQyxnQkFBWSxFQUFFUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU87QUFGYixHQUFELENBREwsQ0FLVDtBQUxTLEdBSlc7QUFZdEJULFFBQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGVBWkU7QUFjdEJPLFdBQVMsRUFBRTtBQUNULFVBQU1DLE9BQU4sQ0FBY0EsT0FBZCxFQUF1QjtBQUNyQkEsYUFBTyxDQUFDQyxLQUFSLEdBQWdCLEtBQWhCO0FBQ0EsWUFBTUMsTUFBTSxHQUFHLE1BQU1kLGtEQUFyQjtBQUNBLFlBQU1lLEVBQUUsR0FBR0QsTUFBTSxDQUFDQyxFQUFQLENBQVUsYUFBVixDQUFYO0FBQ0EsWUFBTUMsTUFBTSxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFFBQWQsRUFBd0JDLE9BQXhCLENBQWdDO0FBQUVDLGFBQUssRUFBRVAsT0FBTyxDQUFDUSxJQUFSLENBQWFEO0FBQXRCLE9BQWhDLENBQXJCOztBQUNBLFVBQUlILE1BQUosRUFBWTtBQUNWSixlQUFPLENBQUNDLEtBQVIsR0FBZ0IsSUFBaEI7QUFDRDs7QUFDRCxhQUFPRCxPQUFQO0FBQ0Q7O0FBVlEsR0FkVztBQTBCdEJTLE9BQUssRUFBQztBQTFCZ0IsQ0FBRCxDQUF2QixFOzs7Ozs7Ozs7Ozs7OztBQ0xBO0FBRUEsTUFBTUMsR0FBRyxHQUFHcEIsT0FBTyxDQUFDQyxHQUFSLENBQVlvQixXQUF4QjtBQUNBLE1BQU1DLE9BQU8sR0FBRztBQUNkQyxvQkFBa0IsRUFBRSxJQUROO0FBRWRDLGlCQUFlLEVBQUU7QUFGSCxDQUFoQjtBQUtBLElBQUlaLE1BQUo7QUFDQSxJQUFJZCxhQUFKOztBQUVBLElBQUksQ0FBQ0UsT0FBTyxDQUFDQyxHQUFSLENBQVlvQixXQUFqQixFQUE4QjtBQUM1QixRQUFNLElBQUlJLEtBQUosQ0FBVSx5Q0FBVixDQUFOO0FBQ0Q7O0FBRUQsSUFBSSxNQUF3QztBQUMxQztBQUNBO0FBQ0EsTUFBSSxDQUFDQyxNQUFNLENBQUNDLG1CQUFaLEVBQWlDO0FBQy9CZixVQUFNLEdBQUcsSUFBSWdCLGdEQUFKLENBQWdCUixHQUFoQixFQUFxQkUsT0FBckIsQ0FBVDtBQUNBSSxVQUFNLENBQUNDLG1CQUFQLEdBQTZCZixNQUFNLENBQUNpQixPQUFQLEVBQTdCO0FBQ0Q7O0FBQ0QvQixlQUFhLEdBQUc0QixNQUFNLENBQUNDLG1CQUF2QjtBQUNELENBUkQsTUFRTyxFLENBTVA7QUFDQTs7O0FBQ0EsK0RBQWU3QixhQUFmLEU7Ozs7Ozs7Ozs7O0FDL0JBLHdEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHdEIiwiZmlsZSI6InBhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9tb25nb2RiLWFkYXB0ZXJcIjtcclxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uLy4uL3V0aWwvbW9uZ29kYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcclxuICBhZGFwdGVyOk1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVFxyXG4gICAgfSksXHJcbiAgICAvLyAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZVxyXG4gIF0sXHJcblxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG5cclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIHNlc3Npb24oc2Vzc2lvbikge1xyXG4gICAgICBzZXNzaW9uLmFkbWluID0gZmFsc2U7XHJcbiAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcbiAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKFwic2FtcGxlX2RhdGFcIik7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJhZG1pbnNcIikuZmluZE9uZSh7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSk7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBzZXNzaW9uLmFkbWluID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aGVtZTpcImRhcmtcIixcclxufSkiLCJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCJcclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxufVxyXG5cclxubGV0IGNsaWVudFxyXG5sZXQgY2xpZW50UHJvbWlzZVxyXG5cclxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbFwiKVxyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxyXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXHJcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG4gIH1cclxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2VcclxufSBlbHNlIHtcclxuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxufVxyXG5cclxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcclxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmV4dC1hdXRoL21vbmdvZGItYWRhcHRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==