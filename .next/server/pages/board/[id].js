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
exports.id = "pages/board/[id]";
exports.ids = ["pages/board/[id]"];
exports.modules = {

/***/ "./src/pages/board/task.module.scss":
/*!******************************************!*\
  !*** ./src/pages/board/task.module.scss ***!
  \******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"task_container__Krx06\",\n\t\"actions\": \"task_actions__WSXwN\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYm9hcmQvdGFzay5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamV0by8uL3NyYy9wYWdlcy9ib2FyZC90YXNrLm1vZHVsZS5zY3NzPzJkNzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwidGFza19jb250YWluZXJfX0tyeDA2XCIsXG5cdFwiYWN0aW9uc1wiOiBcInRhc2tfYWN0aW9uc19fV1NYd05cIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/board/task.module.scss\n");

/***/ }),

/***/ "./src/pages/board/[id].tsx":
/*!**********************************!*\
  !*** ./src/pages/board/[id].tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_firebaseConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebaseConnection */ \"./src/services/firebaseConnection.ts\");\n/* harmony import */ var _task_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task.module.scss */ \"./src/pages/board/task.module.scss\");\n/* harmony import */ var _task_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_task_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction Task({ data  }) {\n    const task = JSON.parse(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Detalhe da Tarefa\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\board\\\\[id].tsx\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\board\\\\[id].tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: (_task_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_task_module_scss__WEBPACK_IMPORTED_MODULE_6___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiCalendar, {\n                                    size: 30,\n                                    color: \"#FFB800\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\board\\\\[id].tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Data de cria\\xe7\\xe3o : \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\board\\\\[id].tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                    children: task.createdFormated\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\board\\\\[id].tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\board\\\\[id].tsx\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\board\\\\[id].tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: task.tarefa\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\board\\\\[id].tsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\board\\\\[id].tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\nconst getServerSideProps = async ({ req , params  })=>{\n    const { id  } = params;\n    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    if (!session?.vip) {\n        return {\n            redirect: {\n                destination: \"/board\",\n                permanent: false\n            }\n        };\n    }\n    const data = await _services_firebaseConnection__WEBPACK_IMPORTED_MODULE_3__[\"default\"].firestore().collection(\"tarefas\").doc(String(id)).get().then((snapshot)=>{\n        const data = {\n            id: snapshot.id,\n            created: snapshot.data().created,\n            createdFormated: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(snapshot.data().created.toDate(), \"dd MMMM yyyy\"),\n            tarefa: snapshot.data().tarefa,\n            userId: snapshot.data().userId,\n            name: snapshot.data().nome\n        };\n        return JSON.stringify(data);\n    }).catch(()=>{\n        return {};\n    });\n    if (Object.keys(data).length === 0) {\n        return {\n            redirect: {\n                destination: \"/board\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {\n            data\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7U0FDUDtLQUNKO0NBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLy4vc3JjL3BhZ2VzL2JvYXJkL1tpZF0udHN4P2UxM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIlxyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIlxyXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2FwaS11dGlsc1wiXHJcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9maXJlYmFzZUNvbm5lY3Rpb24nXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90YXNrLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IEZpQ2FsZW5kYXIgfSBmcm9tICdyZWFjdC1pY29ucy9maSdcclxuXHJcblxyXG5cclxudHlwZSBUYXNrID0ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGNyZWF0ZWQgOiBzdHJpbmcgfCBEYXRlO1xyXG4gICAgY3JlYXRlZEZvcm1hdGVkPzogc3RyaW5nO1xyXG4gICAgdGFyZWZhOiBzdHJpbmc7XHJcbiAgICB1c2VySWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZzsgXHJcbn1cclxuXHJcbmludGVyZmFjZSBUYXNrTGlzdFByb3Bze1xyXG4gZGF0YSA6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrKHtkYXRhfSA6IFRhc2tMaXN0UHJvcHMpe1xyXG4gICAgY29uc3QgdGFzayA9IEpTT04ucGFyc2UoZGF0YSkgYXMgVGFza1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPkRldGFsaGUgZGEgVGFyZWZhPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpQ2FsZW5kYXIgc2l6ZT17MzB9IGNvbG9yPScjRkZCODAwJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGF0YSBkZSBjcmlhw6fDo28gOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpbWU+e3Rhc2suY3JlYXRlZEZvcm1hdGVkfTwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxwPnt0YXNrLnRhcmVmYX08L3A+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG5cclxuXHJcbiAgICAgICBcclxuICAgICAgIDwvPlxyXG5cclxuXHJcbiAgICApICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoe3JlcSwgcGFyYW1zfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pXHJcblxyXG4gICAgaWYoIXNlc3Npb24/LnZpcCApe1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgcmVkaXJlY3Q6e1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246ICcvYm9hcmQnLFxyXG4gICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3RhcmVmYXMnKVxyXG4gICAgLmRvYyhTdHJpbmcoaWQpKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbihzbmFwc2hvdCA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBzbmFwc2hvdC5pZCxcclxuICAgICAgICAgICAgY3JlYXRlZDogc25hcHNob3QuZGF0YSgpLmNyZWF0ZWQsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRGb3JtYXRlZDogZm9ybWF0KHNuYXBzaG90LmRhdGEoKS5jcmVhdGVkLnRvRGF0ZSgpLCAnZGQgTU1NTSB5eXl5JyksXHJcbiAgICAgICAgICAgIHRhcmVmYTogc25hcHNob3QuZGF0YSgpLnRhcmVmYSxcclxuICAgICAgICAgICAgdXNlcklkIDogc25hcHNob3QuZGF0YSgpLnVzZXJJZCxcclxuICAgICAgICAgICAgbmFtZTogc25hcHNob3QuZGF0YSgpLm5vbWVcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goICgpID0+IHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBpZihPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgcmVkaXJlY3Q6e1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246ICcvYm9hcmQnLFxyXG4gICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwiZm9ybWF0IiwiZmlyZWJhc2UiLCJzdHlsZXMiLCJIZWFkIiwiRmlDYWxlbmRhciIsIlRhc2siLCJkYXRhIiwidGFzayIsIkpTT04iLCJwYXJzZSIsInRpdGxlIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImRpdiIsImFjdGlvbnMiLCJzaXplIiwiY29sb3IiLCJzcGFuIiwidGltZSIsImNyZWF0ZWRGb3JtYXRlZCIsInAiLCJ0YXJlZmEiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJwYXJhbXMiLCJpZCIsInNlc3Npb24iLCJ2aXAiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImRvYyIsIlN0cmluZyIsImdldCIsInRoZW4iLCJzbmFwc2hvdCIsImNyZWF0ZWQiLCJ0b0RhdGUiLCJ1c2VySWQiLCJuYW1lIiwibm9tZSIsInN0cmluZ2lmeSIsImNhdGNoIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/board/[id].tsx\n");

/***/ }),

/***/ "./src/services/firebaseConnection.ts":
/*!********************************************!*\
  !*** ./src/services/firebaseConnection.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet firebaseConfig = {\n    apiKey: \"AIzaSyC2OFWlFLcXuYP_y7-PrlUjqjlEpjo1Ph4\",\n    authDomain: \"nextboard-7c278.firebaseapp.com\",\n    projectId: \"nextboard-7c278\",\n    storageBucket: \"nextboard-7c278.appspot.com\",\n    messagingSenderId: \"326824482338\",\n    appId: \"1:326824482338:web:2ff71e6f92f6e04a7d1c7b\"\n};\n// Initialize Firebase\nif (!(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n    firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((firebase__WEBPACK_IMPORTED_MODULE_0___default()));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmlyZWJhc2VDb25uZWN0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ0w7QUFFM0IsSUFBSUMsY0FBYyxHQUFHO0lBQ25CQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsaUNBQWlDO0lBQzdDQyxTQUFTLEVBQUUsaUJBQWlCO0lBQzVCQyxhQUFhLEVBQUUsNkJBQTZCO0lBQzVDQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0NBQ25EO0FBRUQsc0JBQXNCO0FBQ3RCLElBQUcsQ0FBQ1AsNkRBQW9CLEVBQUM7SUFDdkJBLDZEQUFzQixDQUFDQyxjQUFjLENBQUMsQ0FBQztDQUN4QztBQUVELGlFQUFlRCxpREFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamV0by8uL3NyYy9zZXJ2aWNlcy9maXJlYmFzZUNvbm5lY3Rpb24udHM/YmUyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xyXG5cclxubGV0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lDMk9GV2xGTGNYdVlQX3k3LVBybFVqcWpsRXBqbzFQaDRcIixcclxuICBhdXRoRG9tYWluOiBcIm5leHRib2FyZC03YzI3OC5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwibmV4dGJvYXJkLTdjMjc4XCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJuZXh0Ym9hcmQtN2MyNzguYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzMjY4MjQ0ODIzMzhcIixcclxuICBhcHBJZDogXCIxOjMyNjgyNDQ4MjMzODp3ZWI6MmZmNzFlNmY5MmY2ZTA0YTdkMWM3YlwiXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmlmKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCl7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlOyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/firebaseConnection.ts\n");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/firestore");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/board/[id].tsx"));
module.exports = __webpack_exports__;

})();