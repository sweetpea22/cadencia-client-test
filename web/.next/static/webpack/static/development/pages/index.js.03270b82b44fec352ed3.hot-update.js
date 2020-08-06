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

var _jsxFileName = "/Users/studiopreza/Desktop/cadencia/cadencia/web/components/uniswap.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    tokens(\n      orderBy: txCount\n      orderDirection: desc\n      first: 1000\n      where: { txCount_gt: 3000 }\n    ) {\n      id\n      symbol\n      name\n      tradeVolume\n    }\n  }\n"]);

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
  var _this = this;

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
      lineNumber: 55,
      columnNumber: 21
    }
  }, " Error");
  if (loading && !loadingMorePosts) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 44
    }
  }, "Loading");
  var tokens = data.tokens;

  __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["BarChart"], {
    width: 500,
    height: 300,
    data: data,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 3
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["CartesianGrid"], {
    strokeDasharray: "3 3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["XAxis"], {
    dataKey: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["YAxis"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Legend"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Bar"], {
    dataKey: "pv",
    fill: "#8884d8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Bar"], {
    dataKey: "uv",
    fill: "#82ca9d",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }));

  var tokenNameMap = tokens.map(function (t) {
    return t.name;
  });
  return __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "Most Swapped Tokens on Uniswap"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["BarChart"], {
    width: 500,
    height: 300,
    data: tokens,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["CartesianGrid"], {
    strokeDasharray: "3 3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["XAxis"], {
    dataKey: function dataKey() {
      return tokenNameMap;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["YAxis"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }), tokens.map(function (token) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Bar"], {
      key: token.id,
      dataKey: token.name,
      fill: "#82ca9d",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 15
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 15
      }
    }));
  }))), __jsx("ol", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, tokens.map(function (token, index) {
    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }
    }, "Token Name: ", __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 25
      }
    }, token.name), " Total Trade Volume:", " ", token.tradeVolume);
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.03270b82b44fec352ed3.hot-update.js.map