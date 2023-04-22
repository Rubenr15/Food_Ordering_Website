(function() {
var exports = {};
exports.id = 4326;
exports.ids = [4326];
exports.modules = {

/***/ 7590:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bson__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8353);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7641);



/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({
      req
    });

    if (session) {
      const client = await _util_mongodb__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z;
      const db = client.db("sample_data");
      let order;

      try {
        if (session.admin) {
          order = await db.collection("orders").findOne({
            _id: (0,bson__WEBPACK_IMPORTED_MODULE_0__.ObjectId)(req.query.id)
          });
        } else {
          order = await db.collection("orders").findOne({
            user: session.user.email,
            _id: (0,bson__WEBPACK_IMPORTED_MODULE_0__.ObjectId)(req.query.id)
          });
        }
      } catch (err) {
        console.error(err);
        return res.status(400).json({
          message: "Bad Request"
        });
      }

      if (!order) {
        return res.status(404).json({
          message: "Not Found"
        });
      }

      order = JSON.parse(JSON.stringify(order));
      return res.status(200).json(order);
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

/***/ 8353:
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
var __webpack_exports__ = __webpack_require__.X(0, [7641], function() { return __webpack_exec__(7590); });
module.exports = __webpack_exports__;

})();