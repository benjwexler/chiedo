webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CaseStudies/CaseStudies.js":
/*!***********************************************!*\
  !*** ./components/CaseStudies/CaseStudies.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaseStudies.css */ "./components/CaseStudies/CaseStudies.css");
/* harmony import */ var _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CaseStudies_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PortfolioItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PortfolioItem */ "./components/CaseStudies/PortfolioItem.js");
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/CaseStudies/CaseStudies.js";




var CaseStudies = function CaseStudies(props) {
  var portfolioItems = props.caseStudiesArray.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PortfolioItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: item.title.rendered,
      bgImgUrl: item._embedded["wp:featuredmedia"][0].source_url,
      linkToSite: item.meta_box.labs_linkdirectlytowebsiteurl,
      typeOfProduct: item._embedded["wp:term"][1],
      techUsedArray: item._embedded["wp:term"][0],
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1___default.a.sectionContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, portfolioItems);
};

/* harmony default export */ __webpack_exports__["default"] = (CaseStudies);

/***/ })

})
//# sourceMappingURL=index.js.37324a15d41198ed68c8.hot-update.js.map