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
exports.id = "pages/donate";
exports.ids = ["pages/donate"];
exports.modules = {

/***/ "./src/pages/donate/styles.module.scss":
/*!*********************************************!*\
  !*** ./src/pages/donate/styles.module.scss ***!
  \*********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"styles_container__koT0C\",\n\t\"vip\": \"styles_vip__CL8lx\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZG9uYXRlL3N0eWxlcy5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamV0by8uL3NyYy9wYWdlcy9kb25hdGUvc3R5bGVzLm1vZHVsZS5zY3NzPzQwMGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fa29UMENcIixcblx0XCJ2aXBcIjogXCJzdHlsZXNfdmlwX19DTDhseFwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/donate/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/donate/index.tsx":
/*!************************************!*\
  !*** ./src/pages/donate/index.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Donate),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/pages/donate/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @paypal/react-paypal-js */ \"@paypal/react-paypal-js\");\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_firebaseConnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebaseConnection */ \"./src/services/firebaseConnection.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction Donate({ user  }) {\n    const { 0: vip , 1: setVip  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    async function handleSaveDonate() {\n        await _services_firebaseConnection__WEBPACK_IMPORTED_MODULE_4__[\"default\"].firestore().collection(\"users\").doc(user.id).set({\n            donate: true,\n            lastDonate: new Date(),\n            image: user.image\n        }).then(()=>{\n            setVip(true);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Contribua Conosco!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\donate\\\\index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\donate\\\\index.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/rocket.svg\",\n                        alt: \"seja apoiador\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\donate\\\\index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    vip && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().vip),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: user.image,\n                                alt: \"novo apoiador\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\donate\\\\index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Parab\\xe9ns, voc\\xea \\xe9 um novo apoiador\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\donate\\\\index.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\donate\\\\index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Seja um apoiador desse projeto \\uD83C\\uDFC6\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\donate\\\\index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"Contribua com apenas \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"R$ 1.00\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\donate\\\\index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 42\n                            }, this),\n                            \" e desbloqueie fun\\xe7\\xf5es excluvivas !\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\donate\\\\index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_3__.PayPalButtons, {\n                        createOrder: (data, actions)=>{\n                            return actions.order.create({\n                                purchase_units: [\n                                    {\n                                        amount: {\n                                            value: \"1\"\n                                        }\n                                    }\n                                ]\n                            });\n                        },\n                        onApprove: (data, actions)=>{\n                            return actions.order.capture().then((details)=>{\n                                console.log(\"Compra Aprovada\" + details.payer.name.given_name);\n                                handleSaveDonate();\n                            });\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\donate\\\\index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\grans\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Estudo Nextjs\\\\React_Board\\\\src\\\\pages\\\\donate\\\\index.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\nconst getServerSideProps = async ({ req  })=>{\n    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.getSession)({\n        req\n    });\n    if (!session?.id) {\n        return {\n            redirect: {\n                destination: \"/board\",\n                permanent: false\n            }\n        };\n    }\n    const user = {\n        name: session?.user.name,\n        id: session?.id,\n        image: session?.user.image\n    };\n    return {\n        props: {\n            user\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxNQUFNOUMsSUFBSSxHQUFHO1FBQ1R1QyxJQUFJLEVBQUVJLE9BQU8sRUFBRTNDLElBQUksQ0FBQ3VDLElBQUk7UUFDeEJoQyxFQUFFLEVBQUVvQyxPQUFPLEVBQUVwQyxFQUFFO1FBQ2ZLLEtBQUssRUFBRStCLE9BQU8sRUFBRTNDLElBQUksQ0FBQ1ksS0FBSztLQUM3QjtJQUVELE9BQU07UUFDRm1DLEtBQUssRUFBQztZQUNKL0MsSUFBSTtTQUNMO0tBQ0o7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldG8vLi9zcmMvcGFnZXMvZG9uYXRlL2luZGV4LnRzeD85ODI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgc2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IFBheVBhbEJ1dHRvbnMgfSBmcm9tICdAcGF5cGFsL3JlYWN0LXBheXBhbC1qcydcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZpcmViYXNlQ29ubmVjdGlvbidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG4vLyBBVi1FVXlVajdvYmJWMzFmTmdIanVpSGVyWjBHUVZxSElPMGRrcEJnV2dvem9sWUllTVdQSUJua2wxbHQ4QllpX1JyelVPTktwWFdHSXFYSlxyXG4vLyA8c2NyaXB0IHNyYz1cImh0dHBzOi8vd3d3LnBheXBhbC5jb20vc2RrL2pzP2NsaWVudC1pZD1ZT1VSX0NMSUVOVF9JRFwiPjwvc2NyaXB0PlxyXG5cclxuaW50ZXJmYWNlIERvbmF0ZVByb3Bze1xyXG4gICAgdXNlcjp7XHJcbiAgICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGlkOiBzdHJpbmc7XHJcbiAgICAgICAgaW1hZ2U6IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb25hdGUoe3VzZXJ9IDogRG9uYXRlUHJvcHMpe1xyXG4gICAgY29uc3QgW3ZpcCwgc2V0VmlwXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTYXZlRG9uYXRlKCl7XHJcbiAgICAgICAgYXdhaXQgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigndXNlcnMnKVxyXG4gICAgICAgIC5kb2ModXNlci5pZClcclxuICAgICAgICAuc2V0KHtcclxuICAgICAgICAgICAgZG9uYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBsYXN0RG9uYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBpbWFnZTogdXNlci5pbWFnZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oICgpID0+IHtcclxuICAgICAgICAgICAgc2V0VmlwKHRydWUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q29udHJpYnVhIENvbm9zY28hPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9yb2NrZXQuc3ZnXCIgYWx0PSdzZWphIGFwb2lhZG9yJy8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHt2aXAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuaW1hZ2V9IGFsdD1cIm5vdm8gYXBvaWFkb3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QYXJhYsOpbnMsIHZvY8OqIMOpIHVtIG5vdm8gYXBvaWFkb3I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIDxoMT5TZWphIHVtIGFwb2lhZG9yIGRlc3NlIHByb2pldG8g8J+PhjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDM+Q29udHJpYnVhIGNvbSBhcGVuYXMgPHNwYW4+UiQgMS4wMDwvc3Bhbj4gZSBkZXNibG9xdWVpZSBmdW7Dp8O1ZXMgZXhjbHV2aXZhcyAhPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICA8UGF5UGFsQnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZU9yZGVyPXsgKGRhdGEsIGFjdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9ucy5vcmRlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZV91bml0czogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQXBwcm92ZSA9IHsoZGF0YSwgYWN0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9ucy5vcmRlci5jYXB0dXJlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oIGRldGFpbHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXByYSBBcHJvdmFkYScgKyBkZXRhaWxzLnBheWVyLm5hbWUuZ2l2ZW5fbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTYXZlRG9uYXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoe3JlcX0pID0+IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHtyZXF9KVxyXG5cclxuICAgIGlmKCFzZXNzaW9uPy5pZCl7XHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICByZWRpcmVjdDp7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy9ib2FyZCcsXHJcbiAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgbmFtZTogc2Vzc2lvbj8udXNlci5uYW1lLFxyXG4gICAgICAgIGlkOiBzZXNzaW9uPy5pZCxcclxuICAgICAgICBpbWFnZTogc2Vzc2lvbj8udXNlci5pbWFnZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICB1c2VyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkhlYWQiLCJnZXRTZXNzaW9uIiwiUGF5UGFsQnV0dG9ucyIsImZpcmViYXNlIiwidXNlU3RhdGUiLCJEb25hdGUiLCJ1c2VyIiwidmlwIiwic2V0VmlwIiwiaGFuZGxlU2F2ZURvbmF0ZSIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJpZCIsInNldCIsImRvbmF0ZSIsImxhc3REb25hdGUiLCJEYXRlIiwiaW1hZ2UiLCJ0aGVuIiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaW1nIiwic3JjIiwiYWx0IiwiZGl2Iiwic3BhbiIsImgxIiwiaDMiLCJjcmVhdGVPcmRlciIsImRhdGEiLCJhY3Rpb25zIiwib3JkZXIiLCJjcmVhdGUiLCJwdXJjaGFzZV91bml0cyIsImFtb3VudCIsInZhbHVlIiwib25BcHByb3ZlIiwiY2FwdHVyZSIsImRldGFpbHMiLCJjb25zb2xlIiwibG9nIiwicGF5ZXIiLCJuYW1lIiwiZ2l2ZW5fbmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcSIsInNlc3Npb24iLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/donate/index.tsx\n");

/***/ }),

/***/ "./src/services/firebaseConnection.ts":
/*!********************************************!*\
  !*** ./src/services/firebaseConnection.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet firebaseConfig = {\n    apiKey: \"AIzaSyC2OFWlFLcXuYP_y7-PrlUjqjlEpjo1Ph4\",\n    authDomain: \"nextboard-7c278.firebaseapp.com\",\n    projectId: \"nextboard-7c278\",\n    storageBucket: \"nextboard-7c278.appspot.com\",\n    messagingSenderId: \"326824482338\",\n    appId: \"1:326824482338:web:2ff71e6f92f6e04a7d1c7b\"\n};\n// Initialize Firebase\nif (!(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n    firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((firebase__WEBPACK_IMPORTED_MODULE_0___default()));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmlyZWJhc2VDb25uZWN0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ0w7QUFFM0IsSUFBSUMsY0FBYyxHQUFHO0lBQ25CQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsaUNBQWlDO0lBQzdDQyxTQUFTLEVBQUUsaUJBQWlCO0lBQzVCQyxhQUFhLEVBQUUsNkJBQTZCO0lBQzVDQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0NBQ25EO0FBRUQsc0JBQXNCO0FBQ3RCLElBQUcsQ0FBQ1AsNkRBQW9CLEVBQUM7SUFDdkJBLDZEQUFzQixDQUFDQyxjQUFjLENBQUMsQ0FBQztDQUN4QztBQUVELGlFQUFlRCxpREFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamV0by8uL3NyYy9zZXJ2aWNlcy9maXJlYmFzZUNvbm5lY3Rpb24udHM/YmUyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xyXG5cclxubGV0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lDMk9GV2xGTGNYdVlQX3k3LVBybFVqcWpsRXBqbzFQaDRcIixcclxuICBhdXRoRG9tYWluOiBcIm5leHRib2FyZC03YzI3OC5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwibmV4dGJvYXJkLTdjMjc4XCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJuZXh0Ym9hcmQtN2MyNzguYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzMjY4MjQ0ODIzMzhcIixcclxuICBhcHBJZDogXCIxOjMyNjgyNDQ4MjMzODp3ZWI6MmZmNzFlNmY5MmY2ZTA0YTdkMWM3YlwiXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmlmKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCl7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlOyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/firebaseConnection.ts\n");

/***/ }),

/***/ "@paypal/react-paypal-js":
/*!******************************************!*\
  !*** external "@paypal/react-paypal-js" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@paypal/react-paypal-js");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/donate/index.tsx"));
module.exports = __webpack_exports__;

})();