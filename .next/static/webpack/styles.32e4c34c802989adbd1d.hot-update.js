webpackHotUpdate("styles",{

/***/ "./components/MainSection/MainSection.css":
/*!************************************************!*\
  !*** ./components/MainSection/MainSection.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"MainSection":"MainSection___1kg8l","content":"content___1Wplj","inner":"inner___1yiQk","tagline":"tagline___2U3eU","description":"description___2XfR4","button":"button___3n12J"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1551428148441");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.32e4c34c802989adbd1d.hot-update.js.map