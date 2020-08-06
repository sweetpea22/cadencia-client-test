webpackHotUpdate("static/development/pages/graphed.js",{

/***/ "./components/partials/Navbar.js":
/*!***************************************!*\
  !*** ./components/partials/Navbar.js ***!
  \***************************************/
/*! exports provided: Navbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navbar.module.css */ "./components/partials/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "/Users/studiopreza/Desktop/cadencia/cadencia/web/components/partials/Navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Navbar = function Navbar(_ref) {
  var onFilecoinPage = _ref.onFilecoinPage;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var onMapPage = router.pathname === "/map";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.navWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.linkWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/compare",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Browse Datasets")), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.divider,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/filecoin-dashboard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Search on Filecoin")), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.divider,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/filecoin-dashboard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Filecoin Data Network Stats")), __jsx("span", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.divider,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), onFilecoinPage ? __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.fcButtonWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    disabled: onMapPage ? false : true,
    key: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }
  }, "Network Stats"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    disabled: onMapPage,
    key: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/map",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  }, "Map View")))) : null, !onFilecoinPage ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
    size: "large",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 23
      }
    }),
    style: {
      position: "absolute",
      right: "5%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DownOutlined"], {
    style: {
      marginTop: ".7rem",
      marginLeft: ".3rem",
      color: "darkgray",
      position: "absolute",
      right: "%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  })) : null)));
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=graphed.js.e85519951bfd2e04cc4c.hot-update.js.map