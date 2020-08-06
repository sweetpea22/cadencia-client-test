webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/balancer.js":
/*!********************************!*\
  !*** ./components/balancer.js ***!
  \********************************/
/*! exports provided: BALANCER_QUERY, balancerQueryVars, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BALANCER_QUERY", function() { return BALANCER_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balancerQueryVars", function() { return balancerQueryVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BalancerList; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./antd */ "./components/antd/index.js");

var _jsxFileName = "/Users/studiopreza/Desktop/cadencia/cadencia/web/components/balancer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    pools(first: 10, orderBy: swapsCount, orderDirection: desc) {\n      id\n      totalWeight\n      tokens {\n        id\n        name\n        symbol\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var BALANCER_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());
var balancerQueryVars = {
  first: 10
};
function BalancerList() {
  var _this = this;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(BALANCER_QUERY, {
    variables: balancerQueryVars,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
    context: {
      clientName: "balancer"
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data,
      fetchMore = _useQuery.fetchMore,
      networkStatus = _useQuery.networkStatus; // const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;
  // const loadMorePosts = () => {
  //   fetchMore({
  //     variables: {
  //       skip: pools.length,
  //     },
  //   });
  // };


  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, " Error");
  if (loading && !loadingMorePosts) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 44
    }
  }, "Loading");
  var pools = data.pools;
  var tokens = pools.map(function (pool) {
    var tokens = pool.tokens;
    tokens.map(function (token) {
      return token.name;
    });
    return {
      pool: pool.id,
      tokens: pool.tokens
    };
  });
  var columns = [{
    title: "Pool Id",
    dataIndex: "pool",
    render: function render(pool) {
      return __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }, pool.substring(0, 7), "...", pool.substring(37, 42));
    }
  }, {
    title: "Holdings",
    dataIndex: "tokens",
    render: function render(tokens) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, tokens.map(function (t, index) {
        var colors = ["volcano", "geekblue", "cyan", "purple", "magenta"];
        var color = index;

        if (t.symbol === "WETH") {
          color = "volcano";
        }

        return __jsx(_antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
          color: color,
          key: t.id,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }
        }, t.symbol);
      }));
    }
  }];
  return __jsx("section", {
    style: {
      marginTop: "2rem",
      marginLeft: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, "What the biggest Balancer Pools are holding"), __jsx(_antd__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    columns: columns,
    dataSource: tokens,
    pagination: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.0bccfa26e36d81acb521.hot-update.js.map