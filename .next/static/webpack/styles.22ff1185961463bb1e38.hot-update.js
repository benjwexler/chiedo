webpackHotUpdate("styles",{

/***/ "./components/FeaturedPost/FeaturedPost.css":
/*!**************************************************!*\
  !*** ./components/FeaturedPost/FeaturedPost.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container___46xvv","sectionTitle":"sectionTitle___1LSk1","firstWord":"firstWord___VGujA","articleTitleContainer":"articleTitleContainer___2dKQX"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1551646572117");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.22ff1185961463bb1e38.hot-update.js.map