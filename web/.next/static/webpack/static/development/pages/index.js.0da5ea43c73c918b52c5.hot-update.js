webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/partials/Layout.js":
/*!***************************************!*\
  !*** ./components/partials/Layout.js ***!
  \***************************************/
/*! exports provided: siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.module.css */ "./components/partials/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/studiopreza/Desktop/cadencia/cadencia/web/components/partials/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var siteTitle = "Cadencia - Open Data Insights for Decentralized Web";
function Layout(_ref) {
  var children = _ref.children,
      home = _ref.home;
  return __jsx("div", {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "Open Data for Decentralized Financial Markets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "https://og-image.now.sh/".concat(encodeURI(siteTitle), ".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:title",
    content: siteTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, children));
}

/***/ }),

/***/ "./components/partials/Layout.module.css":
/*!***********************************************!*\
  !*** ./components/partials/Layout.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Layout.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/partials/Layout.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Layout.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/partials/Layout.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Layout.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/partials/Layout.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

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
      lineNumber: 56,
      columnNumber: 21
    }
  }, " Error");
  if (loading && !loadingMorePosts) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx("h1", {
    style: {
      marginTop: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["CartesianGrid"], {
    strokeDasharray: "5 5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Legend"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Bar"], {
    dataKey: "txCount",
    fill: "#7865cb",
    fillOpacity: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["XAxis"], {
    dataKey: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["YAxis"], {
    domain: [0, 3000000],
    dataKey: "txCount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/partials/Layout.module.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/partials/Layout.module.css ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Layout_container__33NKd {\n  max-width: 59rem;\n  padding: 0 1rem;\n  margin: 3rem auto 6rem;\n}\n\n.Layout_heading__2gcHA {\n  font-family: \"Arial\";\n}\n", "",{"version":3,"sources":["/Users/studiopreza/Desktop/cadencia/cadencia/web/components/partials/Layout.module.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;AACtB","file":"Layout.module.css","sourcesContent":[".container {\n  max-width: 59rem;\n  padding: 0 1rem;\n  margin: 3rem auto 6rem;\n}\n\n.heading {\n  font-family: \"Arial\";\n}\n"]}]);
// Exports
exports.locals = {
	"container": "Layout_container__33NKd",
	"heading": "Layout_heading__2gcHA"
};

/***/ })

})
//# sourceMappingURL=index.js.0da5ea43c73c918b52c5.hot-update.js.map