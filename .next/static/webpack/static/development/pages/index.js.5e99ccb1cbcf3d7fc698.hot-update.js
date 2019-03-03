webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navbar/Navbar.js":
/*!*************************************!*\
  !*** ./components/Navbar/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Navbar.css */ "./components/Navbar/Navbar.css");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Navbar_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavLink */ "./components/Navbar/NavLink.js");







var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/Navbar/Navbar.js";
// import Link from "next/link";




var Navbar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navbar, _Component);

  function Navbar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      showMobileDropDown: false,
      showBorderBottom: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleMobileNav", function () {
      console.log("Mobile Nav");

      if (!_this.state.showMobileDropDown) {
        _this.setState({
          showBorderBottom: true
        });
      }

      _this.setState({
        showMobileDropDown: !_this.state.showMobileDropDown
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "removeBorderBottom", function () {
      if (!_this.state.showMobileDropDown) {
        _this.setState({
          showBorderBottom: false
        });
      }
    });

    _this.myRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "render",
    value: function render() {
      return (// const Navbar = props => (
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.OuterNavContainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          onClick: this.toggleMobileNav,
          className: "".concat(_Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navbar, " ").concat(_Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.regNav),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "About Us",
          url: "page/about/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Portfolio",
          url: "case-studies/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "What We Do",
          url: "#what-we-do",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Who We Serve",
          url: "#who-we-serve",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Contact Us",
          url: "page/contact/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          className: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.hamburgerMenu,
          src: "https://labs.chiedo.com/wp-content/themes/chiedolabs/img/mob-trig.png",
          alt: "Mobile menu hamburger icon",
          title: "Mobile menu icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          ref: this.myRef,
          onTransitionEnd: this.removeBorderBottom,
          className: "".concat(_Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNav, " \n          ").concat(this.state.showMobileDropDown ? _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.showMobileDropDown : _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.hideMobileDropDown, "\n          ").concat(this.state.showBorderBottom ? _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.showBorderBottom : _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.hideBorderBottom, "\n          "),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "About Us",
          url: "page/about/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNavLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Portfolio",
          url: "case-studies/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNavLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "What We Do",
          url: "#what-we-do",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNavLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Who We Serve",
          url: "#who-we-serve",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNavLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Contact Us",
          url: "page/contact/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNavLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        })))
      );
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.5e99ccb1cbcf3d7fc698.hot-update.js.map