"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("firebase");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_firebaseConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/firebaseConnection */ \"(api)/./src/services/firebaseConnection.ts\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().GitHub({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            scope: \"read:user\"\n        })\n    ],\n    callbacks: {\n        async session (session, profile) {\n            try {\n                const lastDonate = await _services_firebaseConnection__WEBPACK_IMPORTED_MODULE_2__[\"default\"].firestore().collection(\"users\").doc(String(profile.sub)).get().then((snapshot)=>{\n                    if (snapshot.exists) {\n                        return snapshot.data().lastDonate.toDate();\n                    } else {\n                        return null;\n                    }\n                });\n                return {\n                    ...session,\n                    id: profile.sub,\n                    vip: lastDonate ? true : false,\n                    lastDonate: lastDonate\n                };\n            } catch  {\n                return {\n                    ...session,\n                    id: null,\n                    vip: false,\n                    lastDonate: null\n                };\n            }\n        },\n        async signIn (user, account, profile) {\n            const { email  } = user;\n            try {\n                return true;\n            } catch (err) {\n                console.log(err);\n                return false;\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFDVztBQUNnQjtBQUMzRCxpRUFBZUEsZ0RBQVEsQ0FBQztJQUN0QixpREFBaUQ7SUFDakRHLFNBQVMsRUFBRTtRQUNWRixpRUFBZ0IsQ0FBQztZQUNkSSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLG9CQUFvQjtZQUM5Q0MsS0FBSyxFQUFFLFdBQVc7U0FDbkIsQ0FBQztLQUVIO0lBQ0RDLFNBQVMsRUFBQztRQUNSLE1BQU1DLE9BQU8sRUFBQ0EsT0FBTyxFQUFFQyxPQUFPLEVBQUM7WUFDN0IsSUFBRztnQkFDRCxNQUFNQyxVQUFVLEdBQUcsTUFBTWIsOEVBQWtCLEVBQUUsQ0FBQ2UsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUNoRUMsR0FBRyxDQUFDQyxNQUFNLENBQUNMLE9BQU8sQ0FBQ00sR0FBRyxDQUFDLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQzlCQyxJQUFJLENBQUNDLENBQUFBLFFBQVEsR0FBSTtvQkFDaEIsSUFBSUEsUUFBUSxDQUFDQyxNQUFNLEVBQUM7d0JBQ2xCLE9BQU9ELFFBQVEsQ0FBQ0UsSUFBSSxFQUFFLENBQUNWLFVBQVUsQ0FBQ1csTUFBTSxFQUFFO3FCQUMzQyxNQUFJO3dCQUNILE9BQU8sSUFBSTtxQkFDWjtpQkFDRixDQUFDO2dCQUNGLE9BQU07b0JBQ0osR0FBR2IsT0FBTztvQkFDVmMsRUFBRSxFQUFFYixPQUFPLENBQUNNLEdBQUc7b0JBQ2ZRLEdBQUcsRUFBRWIsVUFBVSxHQUFHLElBQUksR0FBRyxLQUFLO29CQUM5QkEsVUFBVSxFQUFFQSxVQUFVO2lCQUN2QjthQUVGLFFBQUs7Z0JBQ0wsT0FBTTtvQkFDTCxHQUFHRixPQUFPO29CQUNWYyxFQUFFLEVBQUUsSUFBSTtvQkFDUkMsR0FBRyxFQUFFLEtBQUs7b0JBQ1ZiLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjthQUNBO1NBQ0Y7UUFDRCxNQUFNYyxNQUFNLEVBQUNDLElBQUksRUFBRUMsT0FBTyxFQUFFakIsT0FBTyxFQUFDO1lBQ2xDLE1BQUssRUFBRWtCLEtBQUssR0FBRSxHQUFHRixJQUFJO1lBQ3JCLElBQUc7Z0JBQ0QsT0FBTyxJQUFJO2FBQ1osUUFBTUcsR0FBRyxFQUFDO2dCQUNUQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLE9BQU8sS0FBSzthQUNiO1NBQ0Y7S0FDRjtDQUdGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXHJcbmltcG9ydCBQcm92aWRlcnMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnNcIlxyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmlyZWJhc2VDb25uZWN0aW9uJ1xyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICBQcm92aWRlcnMuR2l0SHViKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXHJcbiAgICAgIHNjb3BlOiAncmVhZDp1c2VyJ1xyXG4gICAgfSksXHJcbiAgICAvLyAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZVxyXG4gIF0sXHJcbiAgY2FsbGJhY2tzOntcclxuICAgIGFzeW5jIHNlc3Npb24oc2Vzc2lvbiwgcHJvZmlsZSl7XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBsYXN0RG9uYXRlID0gYXdhaXQgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigndXNlcnMnKVxyXG4gICAgICAgIC5kb2MoU3RyaW5nKHByb2ZpbGUuc3ViKSkuZ2V0KClcclxuICAgICAgICAudGhlbihzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgICBpZiAoc25hcHNob3QuZXhpc3RzKXtcclxuICAgICAgICAgICAgcmV0dXJuIHNuYXBzaG90LmRhdGEoKS5sYXN0RG9uYXRlLnRvRGF0ZSgpIFxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAuLi5zZXNzaW9uLFxyXG4gICAgICAgICAgaWQ6IHByb2ZpbGUuc3ViLFxyXG4gICAgICAgICAgdmlwOiBsYXN0RG9uYXRlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgbGFzdERvbmF0ZTogbGFzdERvbmF0ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfWNhdGNoe1xyXG4gICAgICAgcmV0dXJue1xyXG4gICAgICAgIC4uLnNlc3Npb24sXHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgdmlwOiBmYWxzZSxcclxuICAgICAgICBsYXN0RG9uYXRlOiBudWxsXHJcbiAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFzeW5jIHNpZ25Jbih1c2VyLCBhY2NvdW50LCBwcm9maWxlKXtcclxuICAgICAgY29uc3R7IGVtYWlsIH0gPSB1c2VyO1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59KSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIlByb3ZpZGVycyIsImZpcmViYXNlIiwicHJvdmlkZXJzIiwiR2l0SHViIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwic2NvcGUiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwicHJvZmlsZSIsImxhc3REb25hdGUiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwiU3RyaW5nIiwic3ViIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwiZXhpc3RzIiwiZGF0YSIsInRvRGF0ZSIsImlkIiwidmlwIiwic2lnbkluIiwidXNlciIsImFjY291bnQiLCJlbWFpbCIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/services/firebaseConnection.ts":
/*!********************************************!*\
  !*** ./src/services/firebaseConnection.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet firebaseConfig = {\n    apiKey: \"AIzaSyC2OFWlFLcXuYP_y7-PrlUjqjlEpjo1Ph4\",\n    authDomain: \"nextboard-7c278.firebaseapp.com\",\n    projectId: \"nextboard-7c278\",\n    storageBucket: \"nextboard-7c278.appspot.com\",\n    messagingSenderId: \"326824482338\",\n    appId: \"1:326824482338:web:2ff71e6f92f6e04a7d1c7b\"\n};\n// Initialize Firebase\nif (!(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n    firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((firebase__WEBPACK_IMPORTED_MODULE_0___default()));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvZmlyZWJhc2VDb25uZWN0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ0w7QUFFM0IsSUFBSUMsY0FBYyxHQUFHO0lBQ25CQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsaUNBQWlDO0lBQzdDQyxTQUFTLEVBQUUsaUJBQWlCO0lBQzVCQyxhQUFhLEVBQUUsNkJBQTZCO0lBQzVDQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0NBQ25EO0FBRUQsc0JBQXNCO0FBQ3RCLElBQUcsQ0FBQ1AsNkRBQW9CLEVBQUM7SUFDdkJBLDZEQUFzQixDQUFDQyxjQUFjLENBQUMsQ0FBQztDQUN4QztBQUVELGlFQUFlRCxpREFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamV0by8uL3NyYy9zZXJ2aWNlcy9maXJlYmFzZUNvbm5lY3Rpb24udHM/YmUyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xyXG5cclxubGV0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lDMk9GV2xGTGNYdVlQX3k3LVBybFVqcWpsRXBqbzFQaDRcIixcclxuICBhdXRoRG9tYWluOiBcIm5leHRib2FyZC03YzI3OC5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwibmV4dGJvYXJkLTdjMjc4XCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJuZXh0Ym9hcmQtN2MyNzguYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzMjY4MjQ0ODIzMzhcIixcclxuICBhcHBJZDogXCIxOjMyNjgyNDQ4MjMzODp3ZWI6MmZmNzFlNmY5MmY2ZTA0YTdkMWM3YlwiXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmlmKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCl7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlOyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/services/firebaseConnection.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();