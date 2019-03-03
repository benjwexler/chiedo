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

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      showMobileDropDown: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleMobileNav", function () {
      console.log("Mobile Nav");
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "render",
    value: function render() {
      var display;
      return (// const Navbar = props => (
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.OuterNavContainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "".concat(_Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navbar, " ").concat(_Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.regNav),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "About Us",
          url: "page/about/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Portfolio",
          url: "case-studies/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "What We Do",
          url: "#what-we-do",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Who We Serve",
          url: "#who-we-serve",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Contact Us",
          url: "page/contact/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          onClick: this.toggleMobileNav,
          className: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.hamburgerMenu,
          src: "https://labs.chiedo.com/wp-content/themes/chiedolabs/img/mob-trig.png",
          alt: "Mobile menu hamburger icon",
          title: "Mobile menu icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "".concat(_Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNav, " "),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "About Us",
          url: "page/about/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNavLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Portfolio",
          url: "case-studies/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNavLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "What We Do",
          url: "#what-we-do",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNavLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Who We Serve",
          url: "#who-we-serve",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNavLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Contact Us",
          url: "page/contact/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNavLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
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
//# sourceMappingURL=index.js.cd5cebaa1fee8b4e1293.hot-update.js.map