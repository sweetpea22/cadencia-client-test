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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");


var _jsxFileName = "/Users/studiopreza/Desktop/cadencia/cadencia/web/components/balancer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query {\n    pools(first: 1000, orderBy: totalSwapVolume, orderDirection: desc) {\n      totalWeight\n      tokens {\n        name\n        symbol\n        balance\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var BALANCER_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());
var balancerQueryVars = {
  first: 10
};
function BalancerList() {
  var _this = this;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(BALANCER_QUERY, {
    variables: balancerQueryVars,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
    context: {
      dataSrc: "kyber"
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data,
      fetchMore = _useQuery.fetchMore,
      networkStatus = _useQuery.networkStatus;

  var loadingMorePosts = networkStatus === _apollo_client__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].fetchMore;

  var loadMorePosts = function loadMorePosts() {
    fetchMore({
      variables: {
        skip: pools.length
      }
    });
  };

  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, " Error");
  if (loading && !loadingMorePosts) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 44
    }
  }, "Loading");
  var pools = data.pools;
  pools = pools.map(function (pool) {
    if (pool.totalWeight > 1) {
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(pools), [pool]);
    } else {
      return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(pools);
    }
  }); // const renderAreaChart = (
  //   <AreaChart width={850} height={600} data={pools}>
  //     <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
  //     <YAxis domain={["10000000", "dataMax"]} dataKey="poolsCount" />
  //     <XAxis domain={["dataMin", "dataMax"]} />
  //     <Area
  //       type="monotone"
  //       dataKey="poolsCount"
  //       stroke="#9A00D7"
  //       fill="#CF86FA"
  //       strokeWidth={2}
  //     />
  //     <Tooltip />
  //   </AreaChart>
  // );

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
  }, "Balancer Pools"), __jsx("ol", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, pools.map(function (pool, index) {
    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }
    }, "Pool: ", index, ", total weight: ", pool.totalWeight);
  })));
} // <li key={index}>
//   Token Name: <strong>{token.name}</strong> Total Trade Volume:{" "}
//   {token.totalTradeVolume}
// </li>;

/***/ })

})
//# sourceMappingURL=index.js.575cadf0567bcd38c0ec.hot-update.js.map