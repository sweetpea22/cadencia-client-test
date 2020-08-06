webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_uniswap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/uniswap */ "./components/uniswap.js");
/* harmony import */ var _components_balancer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/balancer */ "./components/balancer.js");
/* harmony import */ var _components_partials_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/partials/Layout */ "./components/partials/Layout.js");
/* harmony import */ var _components_partials_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/partials/Navbar */ "./components/partials/Navbar.js");
var _this = undefined,
    _jsxFileName = "/Users/studiopreza/Desktop/cadencia/cadencia/web/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var BalancerComponentWithNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../components/balancer */ "./components/balancer.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/balancer */ "./components/balancer.js")];
    },
    modules: ["../components/balancer"]
  }
});
var UniswapComponentWithNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../components/uniswap */ "./components/uniswap.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/uniswap */ "./components/uniswap.js")];
    },
    modules: ["../components/uniswap"]
  }
});

var IndexPage = function IndexPage() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 3
    }
  }, __jsx("div", {
    style: {
      display: "flex"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(UniswapComponentWithNoSSR, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx(BalancerComponentWithNoSSR, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  })));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.1b656d09920037e5dc68.hot-update.js.map