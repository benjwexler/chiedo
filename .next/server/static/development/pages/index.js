module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button/Button.css":
/*!**************************************!*\
  !*** ./components/Button/Button.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"button": "button___4ZD5v"
};

/***/ }),

/***/ "./components/Button/Button.js":
/*!*************************************!*\
  !*** ./components/Button/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.css */ "./components/Button/Button.css");
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/Button/Button.js";




var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: props.style,
    className: _Button_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.text));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/CaseStudies/CaseStudies.css":
/*!************************************************!*\
  !*** ./components/CaseStudies/CaseStudies.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"sectionContainer": "sectionContainer___2Yayf",
	"itemContainer": "itemContainer___1vmTD",
	"textContainer": "textContainer___3eMX7",
	"techUsedContainer": "techUsedContainer___k8v3A",
	"itemTitle": "itemTitle___2Xvha"
};

/***/ }),

/***/ "./components/CaseStudies/CaseStudies.js":
/*!***********************************************!*\
  !*** ./components/CaseStudies/CaseStudies.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaseStudies.css */ "./components/CaseStudies/CaseStudies.css");
/* harmony import */ var _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CaseStudies_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/CaseStudies/CaseStudies.js";



var CaseStudies = function CaseStudies(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1___default.a.sectionContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (CaseStudies);

/***/ }),

/***/ "./components/CaseStudies/PortfolioItem.js":
/*!*************************************************!*\
  !*** ./components/CaseStudies/PortfolioItem.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaseStudies.css */ "./components/CaseStudies/CaseStudies.css");
/* harmony import */ var _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CaseStudies_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/CaseStudies/PortfolioItem.js";




var PortfolioItem = function PortfolioItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://www.husel.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    className: _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1___default.a.itemContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1___default.a.textContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1___default.a.itemTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "BirgeWate Collegeedeeeeeeeeeeeeeeeefrhnf8in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _CaseStudies_css__WEBPACK_IMPORTED_MODULE_1___default.a.techUsedContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "web-app"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "php")))));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioItem);

/***/ }),

/***/ "./components/FeaturedPost/FeaturedPost.css":
/*!**************************************************!*\
  !*** ./components/FeaturedPost/FeaturedPost.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "container___46xvv",
	"sectionTitle": "sectionTitle___1LSk1",
	"firstWord": "firstWord___VGujA",
	"articleTitleContainer": "articleTitleContainer___2dKQX"
};

/***/ }),

/***/ "./components/FeaturedPost/FeaturedPost.js":
/*!*************************************************!*\
  !*** ./components/FeaturedPost/FeaturedPost.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FeaturedPost_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeaturedPost.css */ "./components/FeaturedPost/FeaturedPost.css");
/* harmony import */ var _FeaturedPost_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FeaturedPost_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button.js */ "./components/Button/Button.js");
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/FeaturedPost/FeaturedPost.js";




var FeaturedPost = function FeaturedPost(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _FeaturedPost_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _FeaturedPost_css__WEBPACK_IMPORTED_MODULE_1___default.a.sectionTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _FeaturedPost_css__WEBPACK_IMPORTED_MODULE_1___default.a.firstWord,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "FEATURED"), " Post"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: _FeaturedPost_css__WEBPACK_IMPORTED_MODULE_1___default.a.articleTitleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.title));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedPost);

/***/ }),

/***/ "./components/FoundingWebDevs/FoundingWebDevs.css":
/*!********************************************************!*\
  !*** ./components/FoundingWebDevs/FoundingWebDevs.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"FoundingWebDevs": "FoundingWebDevs___3HVVq",
	"sectionTitle": "sectionTitle___Twqi3",
	"cardsContainer": "cardsContainer___39VkT"
};

/***/ }),

/***/ "./components/FoundingWebDevs/FoundingWebDevs.js":
/*!*******************************************************!*\
  !*** ./components/FoundingWebDevs/FoundingWebDevs.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FoundingWebDevs_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FoundingWebDevs.css */ "./components/FoundingWebDevs/FoundingWebDevs.css");
/* harmony import */ var _FoundingWebDevs_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FoundingWebDevs_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProfileCard_ProfileCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProfileCard/ProfileCard.js */ "./components/ProfileCard/ProfileCard.js");
/* harmony import */ var _Button_Button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/Button.js */ "./components/Button/Button.js");
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/FoundingWebDevs/FoundingWebDevs.js";





var FoundingWebDevs = function FoundingWebDevs(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _FoundingWebDevs_css__WEBPACK_IMPORTED_MODULE_1___default.a.FoundingWebDevs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _FoundingWebDevs_css__WEBPACK_IMPORTED_MODULE_1___default.a.sectionTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "OUR FOUNDING WEB DEVELOPERS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _FoundingWebDevs_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardsContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfileCard_ProfileCard_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Chiedo",
    jobDescription: "Founder, Solutions Architect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfileCard_ProfileCard_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Ricardo",
    jobDescription: "ReactJS / Front-End Master",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfileCard_ProfileCard_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Eric",
    jobDescription: "Ruby on Rails / Back-end Pro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfileCard_ProfileCard_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Don",
    jobDescription: "NodeJS / Full Stack Expert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "https://labs.chiedo.com/page/contact/",
    style: {
      background: "#3d4952",
      fontSize: "13px"
    },
    text: "Get A Quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FoundingWebDevs);

/***/ }),

/***/ "./components/Header/Header.css":
/*!**************************************!*\
  !*** ./components/Header/Header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"header": "header___2zG4F",
	"headerImage": "headerImage___39JUm"
};

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.css */ "./components/Header/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/Header/Header.js";




var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Header_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    id: "google-fonts-css",
    href: "//fonts.googleapis.com/css?family=Open+Sans%3A400%2C700%2C300%2C800&ver=5.0.3",
    type: "text/css",
    media: "all",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _Header_css__WEBPACK_IMPORTED_MODULE_2___default.a.headerImage,
    src: props.imageUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/HireOurTeam/HireOurTeam.css":
/*!************************************************!*\
  !*** ./components/HireOurTeam/HireOurTeam.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"FullWidth": "FullWidth___V7UDA",
	"hireOurTeam": "hireOurTeam___5oxrW",
	"sectionTitle": "sectionTitle___1698l",
	"listItem": "listItem___1z-w5",
	"listContainer": "listContainer___3ty9S"
};

/***/ }),

/***/ "./components/HireOurTeam/HireOurTeam.js":
/*!***********************************************!*\
  !*** ./components/HireOurTeam/HireOurTeam.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HireOurTeam_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HireOurTeam.css */ "./components/HireOurTeam/HireOurTeam.css");
/* harmony import */ var _HireOurTeam_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HireOurTeam_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _listItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listItem */ "./components/HireOurTeam/listItem.js");
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/HireOurTeam/HireOurTeam.js";




var HireOurTeam = function HireOurTeam(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.classNames,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    id: "google-fonts-css",
    href: "//fonts.googleapis.com/css?family=Open+Sans%3A400%2C700%2C300%2C800&ver=5.0.3",
    type: "text/css",
    media: "all",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _HireOurTeam_css__WEBPACK_IMPORTED_MODULE_1___default.a.sectionTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Hire our team to:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _HireOurTeam_css__WEBPACK_IMPORTED_MODULE_1___default.a.listContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_listItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Build and maintain:",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_listItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Web applications",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_listItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Web back-ends",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_listItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Web front-ends",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_listItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Custom websites",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HireOurTeam);

/***/ }),

/***/ "./components/HireOurTeam/listItem.js":
/*!********************************************!*\
  !*** ./components/HireOurTeam/listItem.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HireOurTeam_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HireOurTeam.css */ "./components/HireOurTeam/HireOurTeam.css");
/* harmony import */ var _HireOurTeam_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HireOurTeam_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/HireOurTeam/listItem.js";



var listItem = function listItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _HireOurTeam_css__WEBPACK_IMPORTED_MODULE_1___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.text);
};

/* harmony default export */ __webpack_exports__["default"] = (listItem);

/***/ }),

/***/ "./components/MainSection/MainSection.css":
/*!************************************************!*\
  !*** ./components/MainSection/MainSection.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"MainSection": "MainSection___1kg8l",
	"content": "content___1Wplj",
	"inner": "inner___1yiQk",
	"tagline": "tagline___2U3eU",
	"description": "description___2XfR4"
};

/***/ }),

/***/ "./components/MainSection/MainSection.js":
/*!***********************************************!*\
  !*** ./components/MainSection/MainSection.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainSection_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainSection.css */ "./components/MainSection/MainSection.css");
/* harmony import */ var _MainSection_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MainSection_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Video_Video_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Video/Video.js */ "./components/Video/Video.js");
/* harmony import */ var _Button_Button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/Button.js */ "./components/Button/Button.js");
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/MainSection/MainSection.js";





var MainSection = function MainSection(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MainSection_css__WEBPACK_IMPORTED_MODULE_1___default.a.MainSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Video_Video_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "https://labs.chiedo.com/wp-content/themes/chiedolabs/vid/promo.mp4?v=2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MainSection_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MainSection_css__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: _MainSection_css__WEBPACK_IMPORTED_MODULE_1___default.a.tagline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.tagline), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _MainSection_css__WEBPACK_IMPORTED_MODULE_1___default.a.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "https://labs.chiedo.com/page/contact/",
    text: "Get A Quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MainSection);

/***/ }),

/***/ "./components/Navbar/NavLink.js":
/*!**************************************!*\
  !*** ./components/Navbar/NavLink.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/Navbar/NavLink.js";



var NavLink = function NavLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://labs.chiedo.com/" + props.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: props.style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.name));
};

/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ }),

/***/ "./components/Navbar/Navbar.css":
/*!**************************************!*\
  !*** ./components/Navbar/Navbar.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"navbar": "navbar___1D1Io",
	"hamburgerMenu": "hamburgerMenu___3SwrA",
	"mobileNav": "mobileNav___3ZoxQ",
	"showMobileDropDown": "showMobileDropDown___b0Zg-",
	"showBorderBottom": "showBorderBottom___33mHM",
	"hideBorderBottom": "hideBorderBottom___2aUxy",
	"hideMobileDropDown": "hideMobileDropDown___3gYMS",
	"mobileNavLink": "mobileNavLink___1hbER",
	"navLink": "navLink___3yIhK"
};

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
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
        console.log("removing border!");

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
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          onClick: this.toggleMobileNav,
          className: "".concat(_Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navbar, " ").concat(_Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.regNav),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "About Us",
          url: "page/about/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Portfolio",
          url: "case-studies/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "What We Do",
          url: "#what-we-do",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Who We Serve",
          url: "#who-we-serve",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Contact Us",
          url: "page/contact/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.navLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          className: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.hamburgerMenu,
          src: "https://labs.chiedo.com/wp-content/themes/chiedolabs/img/mob-trig.png",
          alt: "Mobile menu hamburger icon",
          title: "Mobile menu icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          ref: this.myRef,
          onTransitionEnd: this.removeBorderBottom,
          className: "".concat(_Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNav, " \n          ").concat(this.state.showMobileDropDown ? _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.showMobileDropDown : _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.hideMobileDropDown, "\n          ").concat(this.state.showBorderBottom ? _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.showBorderBottom : _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.hideBorderBottom, "\n          "),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "About Us",
          url: "page/about/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNavLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Portfolio",
          url: "case-studies/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNavLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "What We Do",
          url: "#what-we-do",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNavLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Who We Serve",
          url: "#who-we-serve",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNavLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: "Contact Us",
          url: "page/contact/",
          style: _Navbar_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileNavLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        })))
      );
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/ProfileCard/ProfileCard.css":
/*!************************************************!*\
  !*** ./components/ProfileCard/ProfileCard.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"ProfileCard": "ProfileCard___1F_ap",
	"profilePic": "profilePic___3JgnL",
	"profileDescription": "profileDescription___1uw31",
	"profileName": "profileName___4-gG6",
	"jobDescription": "jobDescription___147gM"
};

/***/ }),

/***/ "./components/ProfileCard/ProfileCard.js":
/*!***********************************************!*\
  !*** ./components/ProfileCard/ProfileCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProfileCard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileCard.css */ "./components/ProfileCard/ProfileCard.css");
/* harmony import */ var _ProfileCard_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProfileCard_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/ProfileCard/ProfileCard.js";



var ProfileCard = function ProfileCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _ProfileCard_css__WEBPACK_IMPORTED_MODULE_1___default.a.ProfileCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _ProfileCard_css__WEBPACK_IMPORTED_MODULE_1___default.a.profilePic,
    src: "https://i1.sndcdn.com/artworks-000478704579-o7peaj-t500x500.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _ProfileCard_css__WEBPACK_IMPORTED_MODULE_1___default.a.profileDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _ProfileCard_css__WEBPACK_IMPORTED_MODULE_1___default.a.profileName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _ProfileCard_css__WEBPACK_IMPORTED_MODULE_1___default.a.jobDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.jobDescription)));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileCard);

/***/ }),

/***/ "./components/StartupCulture/StartupCulture.js":
/*!*****************************************************!*\
  !*** ./components/StartupCulture/StartupCulture.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TitleTextPicButton_TitleTextPicButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TitleTextPicButton/TitleTextPicButton.js */ "./components/TitleTextPicButton/TitleTextPicButton.js");
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/StartupCulture/StartupCulture.js";



var StartupCulture = function StartupCulture(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TitleTextPicButton_TitleTextPicButton_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    imgSrc: "https://i1.sndcdn.com/artworks-000478704579-o7peaj-t500x500.jpg",
    tagline: "Start-up Culture, Corporate-Grade Service.",
    text: "We create an atmosphere that fosters creativity and professionalism. In this way, we allow our team to hone your vision with our digital strategy and build realities that will take your business to the next level.",
    buttonHref: "https://labs.chiedo.com/page/contact/",
    buttonText: "Get A Quote",
    buttonStyle: {
      fontSize: "13px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (StartupCulture);

/***/ }),

/***/ "./components/TitleTextPicButton/TitleTextPicButton.css":
/*!**************************************************************!*\
  !*** ./components/TitleTextPicButton/TitleTextPicButton.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "container___2TzH0",
	"image": "image___1QwgJ",
	"tagline": "tagline___2d_N3",
	"text": "text___VIAy3"
};

/***/ }),

/***/ "./components/TitleTextPicButton/TitleTextPicButton.js":
/*!*************************************************************!*\
  !*** ./components/TitleTextPicButton/TitleTextPicButton.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TitleTextPicButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleTextPicButton.css */ "./components/TitleTextPicButton/TitleTextPicButton.css");
/* harmony import */ var _TitleTextPicButton_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TitleTextPicButton_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button.js */ "./components/Button/Button.js");
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/TitleTextPicButton/TitleTextPicButton.js";




var TitleTextPicButton = function TitleTextPicButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _TitleTextPicButton_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _TitleTextPicButton_css__WEBPACK_IMPORTED_MODULE_1___default.a.image,
    src: props.imgSrc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _TitleTextPicButton_css__WEBPACK_IMPORTED_MODULE_1___default.a.rightHalfContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _TitleTextPicButton_css__WEBPACK_IMPORTED_MODULE_1___default.a.tagline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.tagline), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _TitleTextPicButton_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: props.buttonHref,
    text: props.buttonText,
    style: props.buttonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TitleTextPicButton);

/***/ }),

/***/ "./components/TwoColumnEvenWithPic/TwoColumnEvenWithPic.css":
/*!******************************************************************!*\
  !*** ./components/TwoColumnEvenWithPic/TwoColumnEvenWithPic.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"WhatWeDo": "WhatWeDo___2vTr8",
	"flexReverse": "flexReverse___3Eyl9",
	"underline": "underline___3VqJa",
	"pic": "pic___2m8bn",
	"halfContainer": "halfContainer___3O4fV",
	"what": "what___1Cgkn",
	"sectionTitle": "sectionTitle___1zpzf",
	"paragraph": "paragraph___15buV",
	"flexNormal": "flexNormal___fEdA1",
	"highlightedWords": "highlightedWords___VrcVw"
};

/***/ }),

/***/ "./components/TwoColumnEvenWithPic/TwoColumnEvenWithPic.js":
/*!*****************************************************************!*\
  !*** ./components/TwoColumnEvenWithPic/TwoColumnEvenWithPic.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwoColumnEvenWithPic.css */ "./components/TwoColumnEvenWithPic/TwoColumnEvenWithPic.css");
/* harmony import */ var _TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button.js */ "./components/Button/Button.js");
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/TwoColumnEvenWithPic/TwoColumnEvenWithPic.js";




var TwoColumnEvenWithPic = function TwoColumnEvenWithPic(props) {
  var backgroundImageCSS = {
    background: "url(".concat(props.picUrl, ")")
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: props.style,
    className: "".concat(_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_1___default.a.WhatWeDo, " ").concat(props.flexClass),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: backgroundImageCSS,
    className: _TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_1___default.a.pic,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_1___default.a.halfContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: _TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_1___default.a.sectionTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_1___default.a.what,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.titleFirstWord), " ", props.restOfTitle), props.restOfText, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "https://labs.chiedo.com/page/contact/",
    text: "Get A Quote",
    style: {
      fontSize: "13px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TwoColumnEvenWithPic);

/***/ }),

/***/ "./components/Video/Video.css":
/*!************************************!*\
  !*** ./components/Video/Video.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"video": "video___1Suik",
	"videoWrapper": "videoWrapper___ZtuaF"
};

/***/ }),

/***/ "./components/Video/Video.js":
/*!***********************************!*\
  !*** ./components/Video/Video.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Video_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Video.css */ "./components/Video/Video.css");
/* harmony import */ var _Video_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Video_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/Video/Video.js";

// import Link from "next/link";


var Video = function Video(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Video_css__WEBPACK_IMPORTED_MODULE_1___default.a.videoWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    className: _Video_css__WEBPACK_IMPORTED_MODULE_1___default.a.video,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    type: "video/mp4",
    src: props.src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ }),

/***/ "./components/WhatWeDo/WhatWeDo.js":
/*!*****************************************!*\
  !*** ./components/WhatWeDo/WhatWeDo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TwoColumnEvenWithPic_TwoColumnEvenWithPic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TwoColumnEvenWithPic/TwoColumnEvenWithPic.js */ "./components/TwoColumnEvenWithPic/TwoColumnEvenWithPic.js");
/* harmony import */ var _TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TwoColumnEvenWithPic/TwoColumnEvenWithPic.css */ "./components/TwoColumnEvenWithPic/TwoColumnEvenWithPic.css");
/* harmony import */ var _TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/WhatWeDo/WhatWeDo.js";

// import Link from "next/link";



var WhatWeDo = function WhatWeDo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TwoColumnEvenWithPic_TwoColumnEvenWithPic_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    picUrl: "https://i1.sndcdn.com/artworks-000478704579-o7peaj-t500x500.jpg",
    titleFirstWord: "WHAT",
    restOfTitle: "WE D0",
    flexClass: _TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2___default.a.flexNormal,
    restOfText: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2___default.a.paragraph,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "We build and maintain:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2___default.a.paragraph,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Web Front-ends"), " with HTML, CSS, and a library called React."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2___default.a.paragraph,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Web Back-ends"), " using NodeJS, Ruby on Rails, PHP, MySQL, AWS, and Heroku."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2___default.a.paragraph,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Custom Websites"), " from the ground up as opposed to using pre-existing templates.")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (WhatWeDo);

/***/ }),

/***/ "./components/WhoWeServe/WhoWeServe.js":
/*!*********************************************!*\
  !*** ./components/WhoWeServe/WhoWeServe.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TwoColumnEvenWithPic_TwoColumnEvenWithPic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TwoColumnEvenWithPic/TwoColumnEvenWithPic.js */ "./components/TwoColumnEvenWithPic/TwoColumnEvenWithPic.js");
/* harmony import */ var _TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TwoColumnEvenWithPic/TwoColumnEvenWithPic.css */ "./components/TwoColumnEvenWithPic/TwoColumnEvenWithPic.css");
/* harmony import */ var _TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/components/WhoWeServe/WhoWeServe.js";

// import Link from "next/link";



var WhoWeServe = function WhoWeServe(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TwoColumnEvenWithPic_TwoColumnEvenWithPic_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    picUrl: "https://i1.sndcdn.com/artworks-000478704579-o7peaj-t500x500.jpg",
    titleFirstWord: "WHO",
    restOfTitle: "WE SERVE",
    flexClass: _TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2___default.a.flexReverse,
    restOfText: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2___default.a.paragraph,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2___default.a.highlightedWords,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Enterprise customers"), " hire us to build and maintain the web apps critical to their operations."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2___default.a.paragraph,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _TwoColumnEvenWithPic_TwoColumnEvenWithPic_css__WEBPACK_IMPORTED_MODULE_2___default.a.highlightedWords,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Tech startups"), " partner with us to build and maintain the web front-ends and back-ends at the core of their business.")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (WhoWeServe);

/***/ }),

/***/ "./css-miscellaneous/css-miscellaneous.css":
/*!*************************************************!*\
  !*** ./css-miscellaneous/css-miscellaneous.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"startupCultureFeaturedPostContainer": "startupCultureFeaturedPostContainer___2yCGT"
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar/Navbar */ "./components/Navbar/Navbar.js");
/* harmony import */ var _components_MainSection_MainSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MainSection/MainSection */ "./components/MainSection/MainSection.js");
/* harmony import */ var _components_HireOurTeam_HireOurTeam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HireOurTeam/HireOurTeam */ "./components/HireOurTeam/HireOurTeam.js");
/* harmony import */ var _components_HireOurTeam_HireOurTeam_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HireOurTeam/HireOurTeam.css */ "./components/HireOurTeam/HireOurTeam.css");
/* harmony import */ var _components_HireOurTeam_HireOurTeam_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_HireOurTeam_HireOurTeam_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_WhatWeDo_WhatWeDo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/WhatWeDo/WhatWeDo */ "./components/WhatWeDo/WhatWeDo.js");
/* harmony import */ var _components_WhoWeServe_WhoWeServe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/WhoWeServe/WhoWeServe */ "./components/WhoWeServe/WhoWeServe.js");
/* harmony import */ var _components_FoundingWebDevs_FoundingWebDevs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/FoundingWebDevs/FoundingWebDevs */ "./components/FoundingWebDevs/FoundingWebDevs.js");
/* harmony import */ var _components_StartupCulture_StartupCulture__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/StartupCulture/StartupCulture */ "./components/StartupCulture/StartupCulture.js");
/* harmony import */ var _components_FeaturedPost_FeaturedPost__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/FeaturedPost/FeaturedPost */ "./components/FeaturedPost/FeaturedPost.js");
/* harmony import */ var _css_miscellaneous_css_miscellaneous_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css-miscellaneous/css-miscellaneous.css */ "./css-miscellaneous/css-miscellaneous.css");
/* harmony import */ var _css_miscellaneous_css_miscellaneous_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_miscellaneous_css_miscellaneous_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_CaseStudies_CaseStudies__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/CaseStudies/CaseStudies */ "./components/CaseStudies/CaseStudies.js");
/* harmony import */ var _components_CaseStudies_PortfolioItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/CaseStudies/PortfolioItem */ "./components/CaseStudies/PortfolioItem.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "/Users/bwexler/Desktop/WDF/chiedoLabs/pages/index.js";

















var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-850852382",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-850852382",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Chiedo Labs: Custom Web Development - Node.js | React | Rails | PHP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no",
    className: "jsx-850852382",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "https://labs.chiedo.com/wp-content/themes/chiedolabs/favicon.ico?v=2",
    className: "jsx-850852382",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css",
    integrity: "sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",
    crossorigin: "anonymous",
    className: "jsx-850852382",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "850852382",
    __self: this
  }, "body{font-family:\"Open Sans\",sans-serif;color:#2c343b;background-color:#f2f2f2;box-sizing:\"border-box\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9id2V4bGVyL0Rlc2t0b3AvV0RGL2NoaWVkb0xhYnMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0N1QixBQUc2QyxtQ0FDdEIsY0FDVyx5QkFDRCx3QkFDMUIiLCJmaWxlIjoiL1VzZXJzL2J3ZXhsZXIvRGVza3RvcC9XREYvY2hpZWRvTGFicy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyXCI7XG5pbXBvcnQgTWFpblNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpblNlY3Rpb24vTWFpblNlY3Rpb25cIjtcbmltcG9ydCBIaXJlT3VyVGVhbSBmcm9tIFwiLi4vY29tcG9uZW50cy9IaXJlT3VyVGVhbS9IaXJlT3VyVGVhbVwiO1xuaW1wb3J0IEhpcmVPdXJUZWFtQ3NzIGZyb20gXCIuLi9jb21wb25lbnRzL0hpcmVPdXJUZWFtL0hpcmVPdXJUZWFtLmNzc1wiO1xuaW1wb3J0IFdoYXRXZURvIGZyb20gXCIuLi9jb21wb25lbnRzL1doYXRXZURvL1doYXRXZURvXCI7XG5pbXBvcnQgV2hvV2VTZXJ2ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9XaG9XZVNlcnZlL1dob1dlU2VydmVcIjtcbmltcG9ydCBGb3VuZGluZ1dlYkRldnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm91bmRpbmdXZWJEZXZzL0ZvdW5kaW5nV2ViRGV2c1wiO1xuaW1wb3J0IFN0YXJ0dXBDdWx0dXJlIGZyb20gXCIuLi9jb21wb25lbnRzL1N0YXJ0dXBDdWx0dXJlL1N0YXJ0dXBDdWx0dXJlXCI7XG5pbXBvcnQgRmVhdHVyZWRQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL0ZlYXR1cmVkUG9zdC9GZWF0dXJlZFBvc3RcIjtcbmltcG9ydCBjc3NNaXNjZWxsYW5lb3VzIGZyb20gXCIuLi9jc3MtbWlzY2VsbGFuZW91cy9jc3MtbWlzY2VsbGFuZW91cy5jc3NcIjtcbmltcG9ydCBDYXNlU3R1ZGllcyBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXNlU3R1ZGllcy9DYXNlU3R1ZGllc1wiO1xuaW1wb3J0IFBvcnRmb2xpb0l0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FzZVN0dWRpZXMvUG9ydGZvbGlvSXRlbVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5cbiAgICAgICAgQ2hpZWRvIExhYnM6IEN1c3RvbSBXZWIgRGV2ZWxvcG1lbnQgLSBOb2RlLmpzIHwgUmVhY3QgfCBSYWlscyB8IFBIUFxuICAgICAgPC90aXRsZT5cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoLCBzaHJpbmstdG8tZml0PW5vXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vbGFicy5jaGllZG8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL2NoaWVkb2xhYnMvZmF2aWNvbi5pY28/dj0yXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS43LjIvY3NzL2FsbC5jc3NcIlxuICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtZm5tT0NxYlRsV0lsajhMeVRqbzdtT1VTdGpzS0M0cE9wUWJxeWk3UnJoTjd1ZGk5UndoS2tNSHB2TGJIRzlTclwiXG4gICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgIC8+XG4gICAgPC9IZWFkPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBib2R5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiAjMmMzNDNiO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICBib3gtc2l6aW5nOiBcImJvcmRlci1ib3hcIjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPEhlYWRlciBpbWFnZVVybD1cImh0dHBzOi8vbGFicy5jaGllZG8uY29tL3dwLWNvbnRlbnQvdGhlbWVzL2NoaWVkb2xhYnMvaW1nL2ItbG9nby13aGl0ZS5wbmc/dmVyPTEuMTFcIiAvPlxuXG4gICAgPE5hdmJhciAvPlxuICAgIDxNYWluU2VjdGlvblxuICAgICAgdGFnbGluZT17XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgWW91ciBOZXdcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBXZWIgRGV2ZWxvcGVyc1xuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICAgIGRlc2NyaXB0aW9uPVwiV2XigJlyZSBhIHRlYW0gb2Ygd2ViIGRldmVsb3BlcnMgcGFzc2lvbmF0ZSBhYm91dCBidWlsZGluZyBzdGFibGUsIG1haW50YWluYWJsZSBzb2Z0d2FyZSBmb3IgdGVjaCBzdGFydHVwcyBhbmQgZW50ZXJwcmlzZSBjdXN0b21lcnMuXCJcbiAgICAvPlxuICAgIDxIaXJlT3VyVGVhbVxuICAgICAgY2xhc3NOYW1lcz17YCR7SGlyZU91clRlYW1Dc3MuRnVsbFdpZHRofSAke0hpcmVPdXJUZWFtQ3NzLmhpcmVPdXJUZWFtfWB9XG4gICAgLz5cbiAgICA8V2hhdFdlRG8gLz5cbiAgICA8Rm91bmRpbmdXZWJEZXZzIC8+XG4gICAgPFdob1dlU2VydmUgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzTWlzY2VsbGFuZW91cy5zdGFydHVwQ3VsdHVyZUZlYXR1cmVkUG9zdENvbnRhaW5lcn0+XG4gICAgICA8U3RhcnR1cEN1bHR1cmUgLz5cbiAgICAgIDxGZWF0dXJlZFBvc3QgdGl0bGU9XCJIb3cgdG8gVXBncmFkZSBQSFAgaW4gYSBNQU1QIEVudmlyb25tZW50XCIgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxDYXNlU3R1ZGllcz5cbiAgICAgIDxQb3J0Zm9saW9JdGVtIC8+XG4gICAgICA8UG9ydGZvbGlvSXRlbSAvPlxuICAgICAgPFBvcnRmb2xpb0l0ZW0gLz5cbiAgICAgIDxQb3J0Zm9saW9JdGVtIC8+XG4gICAgICA8UG9ydGZvbGlvSXRlbSAvPlxuICAgICAgPFBvcnRmb2xpb0l0ZW0gLz5cbiAgICAgIDxQb3J0Zm9saW9JdGVtIC8+XG4gICAgICA8UG9ydGZvbGlvSXRlbSAvPlxuICAgICAgPFBvcnRmb2xpb0l0ZW0gLz5cbiAgICAgIDxQb3J0Zm9saW9JdGVtIC8+XG4gICAgPC9DYXNlU3R1ZGllcz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/bwexler/Desktop/WDF/chiedoLabs/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imageUrl: "https://labs.chiedo.com/wp-content/themes/chiedolabs/img/b-logo-white.png?ver=1.11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainSection_MainSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    tagline: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-850852382",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Your New", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-850852382",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), "Web Developers"),
    description: "We\u2019re a team of web developers passionate about building stable, maintainable software for tech startups and enterprise customers.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_HireOurTeam_HireOurTeam__WEBPACK_IMPORTED_MODULE_5__["default"], {
    classNames: "".concat(_components_HireOurTeam_HireOurTeam_css__WEBPACK_IMPORTED_MODULE_6___default.a.FullWidth, " ").concat(_components_HireOurTeam_HireOurTeam_css__WEBPACK_IMPORTED_MODULE_6___default.a.hireOurTeam),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_WhatWeDo_WhatWeDo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FoundingWebDevs_FoundingWebDevs__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_WhoWeServe_WhoWeServe__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-850852382" + " " + (_css_miscellaneous_css_miscellaneous_css__WEBPACK_IMPORTED_MODULE_12___default.a.startupCultureFeaturedPostContainer || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_StartupCulture_StartupCulture__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeaturedPost_FeaturedPost__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: "How to Upgrade PHP in a MAMP Environment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CaseStudies_CaseStudies__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CaseStudies_PortfolioItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CaseStudies_PortfolioItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CaseStudies_PortfolioItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CaseStudies_PortfolioItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CaseStudies_PortfolioItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CaseStudies_PortfolioItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CaseStudies_PortfolioItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CaseStudies_PortfolioItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CaseStudies_PortfolioItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CaseStudies_PortfolioItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bwexler/Desktop/WDF/chiedoLabs/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map