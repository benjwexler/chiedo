webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CaseStudies/PortfolioItem.js":
/*!*************************************************!*\
  !*** ./components/CaseStudies/PortfolioItem.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaseStudies.css */ "./components/CaseStudies/CaseStudies.css");
/* harmony import */ var _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CaseStudies_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/CaseStudies/PortfolioItem.js";




var PortfolioItem = function PortfolioItem(props) {
  var typeOfProduct = props.typeOfProduct.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, item.name);
  });
  var techUsedDivs = props.techUsedArray.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, item.name);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: props.linkToSite,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      background: "url(".concat(props.bgImgUrl, ") center no-repeat"),
      backgroundSize: "100%"
    },
    target: "_blank",
    className: _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1___default.a.itemContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1___default.a.textContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1___default.a.itemTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1___default.a.techUsedContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, typeOfProduct, techUsedDivs))));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioItem);

/***/ })

})
//# sourceMappingURL=index.js.6a8dbdebb9f51c0c3f41.hot-update.js.map