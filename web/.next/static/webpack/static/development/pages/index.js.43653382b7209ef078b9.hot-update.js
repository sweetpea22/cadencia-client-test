webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/uniswap.js":
/*!*******************************!*\
  !*** ./components/uniswap.js ***!
  \*******************************/
/*! exports provided: UNISWAP_QUERY, uniswapQueryVars, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNISWAP_QUERY", function() { return UNISWAP_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniswapQueryVars", function() { return uniswapQueryVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UniswapList; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _partials_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partials/Layout */ "./components/partials/Layout.js");
/* harmony import */ var _partials_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partials/Navbar */ "./components/partials/Navbar.js");

var _jsxFileName = "/Users/studiopreza/Desktop/cadencia/cadencia/web/components/uniswap.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    tokens(\n      orderBy: txCount\n      orderDirection: desc\n      first: 4\n      where: { txCount_gt: 3000 }\n    ) {\n      id\n      symbol\n      name\n      txCount\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var UNISWAP_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());
var uniswapQueryVars = {
  first: 10
};
function UniswapList() {
  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(UNISWAP_QUERY, {
    variables: uniswapQueryVars,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
    context: {
      clientName: "uniswap"
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data,
      fetchMore = _useQuery.fetchMore,
      networkStatus = _useQuery.networkStatus;

  var loadingMorePosts = networkStatus === _apollo_client__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].fetchMore;

  var loadMorePosts = function loadMorePosts() {
    fetchMore({
      variables: {
        skip: tokens.length
      }
    });
  };

  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, " Error");
  if (loading && !loadingMorePosts) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 44
    }
  }, "Loading");
  var tokens = data.tokens;
  var keys = [];
  tokens.map(function (t, i) {
    return keys.push(parseInt(t.tradeVolume));
  });
  console.log(keys);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    style: {
      marginTop: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("h1", {
    style: {
      marginTop: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "Top Swapped Tokens (TxCount)"), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["BarChart"], {
    instanceId: "uniswapChart",
    width: 900,
    height: 600,
    data: tokens,
    margin: {
      top: 5,
      right: 30,
      left: 80,
      bottom: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["CartesianGrid"], {
    strokeDasharray: "5 5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Legend"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Bar"], {
    dataKey: "txCount",
    fill: "#7865cb",
    fillOpacity: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["XAxis"], {
    dataKey: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["YAxis"], {
    domain: [0, 3000000],
    dataKey: "txCount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }))));
}

/***/ }),

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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_partials_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), __jsx(_components_partials_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      display: "flex"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(UniswapComponentWithNoSSR, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx(BalancerComponentWithNoSSR, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  })))));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.43653382b7209ef078b9.hot-update.js.map