webpackHotUpdate("static/development/pages/compare.js",{

/***/ "./pages/compare.js":
/*!**************************!*\
  !*** ./pages/compare.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_defiDashboard_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/defiDashboard/Heading */ "./components/defiDashboard/Heading.jsx");
/* harmony import */ var _components_defiDashboard_DefiTile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/defiDashboard/DefiTile */ "./components/defiDashboard/DefiTile.jsx");
/* harmony import */ var _components_partials_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/partials/Layout */ "./components/partials/Layout.js");
/* harmony import */ var _components_partials_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/partials/Navbar */ "./components/partials/Navbar.js");
/* harmony import */ var _components_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/antd */ "./components/antd/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);



var _this = undefined,
    _jsxFileName = "/Users/studiopreza/Desktop/cadencia/cadencia/web/pages/compare.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      selectedData = _React$useState2[0],
      setSelectedData = _React$useState2[1];

  var addToBundle = function addToBundle(name) {
    setSelectedData(function (name) {
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedData), [name]);
    });
    console.log(selectedData);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_partials_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(_components_partials_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_components_antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "Upload Your Own Dataset")), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "To compare data, please select at least one organization."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, selectedData.length < 1 ? 0 : selectedData.length, " datasets selected", " ", __jsx("span", {
    style: {
      marginLeft: "3rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx(_components_antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/graphed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "Compare"))))), __jsx(_components_defiDashboard_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Most Swapped Tokens",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      display: "flex",
      marginBottom: "2rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_components_antd__WEBPACK_IMPORTED_MODULE_7__["Badge"].Ribbon, {
    text: "Verified",
    color: "geekblue",
    style: {
      marginRight: ".8rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(_components_defiDashboard_DefiTile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imgSrc: "https://whatever12-team-bucket.storage.fleek.co/uniswap-03.png",
    handleClick: function handleClick() {
      return addToBundle("uniswap");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  })), __jsx(_components_defiDashboard_DefiTile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imgSrc: "https://whatever12-team-bucket.storage.fleek.co/dex%20logos-07.png",
    handleClick: function handleClick() {
      return addToBundle("balancer");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx(_components_defiDashboard_DefiTile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imgSrc: "https://whatever12-team-bucket.storage.fleek.co/futureswap.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), __jsx(_components_antd__WEBPACK_IMPORTED_MODULE_7__["Badge"].Ribbon, {
    text: "Verified",
    color: "geekblue",
    style: {
      marginRight: ".8rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx(_components_defiDashboard_DefiTile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imgSrc: "https://whatever12-team-bucket.storage.fleek.co/aave.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }))), __jsx(_components_defiDashboard_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Total Debt Volume",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      display: "flex",
      marginBottom: "2rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(_components_antd__WEBPACK_IMPORTED_MODULE_7__["Badge"].Ribbon, {
    text: "Verified",
    color: "geekblue",
    style: {
      marginRight: ".8rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx(_components_defiDashboard_DefiTile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imgSrc: "https://whatever12-team-bucket.storage.fleek.co/kyber.png",
    name: "kyber",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  })), __jsx(_components_defiDashboard_DefiTile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imgSrc: "https://whatever12-team-bucket.storage.fleek.co/curve.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }), __jsx(_components_defiDashboard_DefiTile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imgSrc: "https://whatever12-team-bucket.storage.fleek.co/bancor.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), __jsx(_components_defiDashboard_DefiTile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imgSrc: "https://whatever12-team-bucket.storage.fleek.co/dex%20logos-07.png",
    handleClick: function handleClick() {
      return addToBundle("balancer");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  })), __jsx(_components_defiDashboard_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Current Liquidity Volume",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      display: "flex",
      marginBottom: "2rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(_components_antd__WEBPACK_IMPORTED_MODULE_7__["Badge"].Ribbon, {
    text: "Verified",
    color: "geekblue",
    style: {
      marginRight: ".8rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(_components_defiDashboard_DefiTile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imgSrc: "https://whatever12-team-bucket.storage.fleek.co/1024px-Seal_of_the_United_States_Federal_Reserve_System.svg.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  })), __jsx(_components_antd__WEBPACK_IMPORTED_MODULE_7__["Badge"].Ribbon, {
    text: "Verified",
    color: "geekblue",
    style: {
      marginRight: ".8rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx(_components_defiDashboard_DefiTile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imgSrc: "https://whatever12-team-bucket.storage.fleek.co/etherscan-logo-circle.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  })), __jsx(_components_antd__WEBPACK_IMPORTED_MODULE_7__["Badge"].Ribbon, {
    text: "Verified",
    color: "geekblue",
    style: {
      marginRight: ".8rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx(_components_defiDashboard_DefiTile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imgSrc: "https://whatever12-team-bucket.storage.fleek.co/uniswap-03.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  })), __jsx(_components_antd__WEBPACK_IMPORTED_MODULE_7__["Badge"].Ribbon, {
    text: "Verified",
    color: "geekblue",
    style: {
      marginRight: ".8rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx(_components_defiDashboard_DefiTile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imgSrc: "https://whatever12-team-bucket.storage.fleek.co/Screen%20Shot%202020-08-04%20at%209.47.43%20PM.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  })))));
});

/***/ })

})
//# sourceMappingURL=compare.js.5524ccad905384b72171.hot-update.js.map