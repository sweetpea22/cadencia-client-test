exports.ids = [0];
exports.modules = {

/***/ "./components/antd/index.js":
/*!**********************************!*\
  !*** ./components/antd/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in antd__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return antd__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./components/auth/InputField.jsx":
/*!****************************************!*\
  !*** ./components/auth/InputField.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../antd */ "./components/antd/index.js");
/* harmony import */ var _auth_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.module.css */ "./components/auth/auth.module.css");
/* harmony import */ var _auth_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/studiopreza/Desktop/cadencia/cadencia/web/components/auth/InputField.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const InputField = (_ref) => {
  let props = Object.assign({}, _ref);
  return __jsx(_antd__WEBPACK_IMPORTED_MODULE_1__["Input"], _extends({
    className: _auth_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.formInput
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "./components/auth/Register.jsx":
/*!**************************************!*\
  !*** ./components/auth/Register.jsx ***!
  \**************************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.module.css */ "./components/auth/auth.module.css");
/* harmony import */ var _auth_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputField */ "./components/auth/InputField.jsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/studiopreza/Desktop/cadencia/cadencia/web/components/auth/Register.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const REGISTER_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_4__["gql"]`
  mutation Register($data: RegisterInput!) {
    Register(data: $data) {
      id
      email
    }
  }
`;

const SignupForm = () => {
  const [register, {
    data
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(REGISTER_USER);
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormik"])({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    onSubmit: async data => {
      const response = await register({
        variables: {
          data: {
            email: formik.values.email,
            password: formik.values.password,
            confirmPassword: formik.values.confirmPassword
          }
        }
      });
      console.log(response);
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _auth_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.pageWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _auth_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.formPageHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Welcome back!"), __jsx("form", {
    onSubmit: formik.handleSubmit,
    className: _auth_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.formWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Email"), __jsx(_InputField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "email",
    name: "email",
    type: "text",
    onChange: formik.handleChange,
    value: formik.values.email,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx("label", {
    htmlFor: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, "Password"), __jsx(_InputField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "password",
    name: "password",
    type: "password",
    onChange: formik.handleChange,
    value: formik.values.password,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx("label", {
    htmlFor: "confirmPassword",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, "Confirm Password"), __jsx(_InputField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "confirmPassword",
    name: "confirmPassword",
    type: "password",
    onChange: formik.handleChange,
    value: formik.values.confirmPassword,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }), __jsx("button", {
    className: _auth_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.submitButton,
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, "Submit"))));
};

async function getStaticProps() {
  const apolloClient = initializeApollo();
  await apolloClient.mutation({
    mutation: REGISTER_USER
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

/***/ }),

/***/ "./components/auth/auth.module.css":
/*!*****************************************!*\
  !*** ./components/auth/auth.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"formWrapper": "auth_formWrapper__2F2Ad",
	"submitButton": "auth_submitButton__2frL9",
	"formInput": "auth_formInput__23ZEs",
	"pageWrapper": "auth_pageWrapper__1Jsdb"
};

/***/ })

};;
//# sourceMappingURL=0.js.map