webpackHotUpdate("styles",{

/***/ "./components/TitleTextPicButton/TitleTextPicButton.css":
/*!**************************************************************!*\
  !*** ./components/TitleTextPicButton/TitleTextPicButton.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container___2TzH0","image":"image___1QwgJ","tagline":"tagline___2d_N3","text":"text___VIAy3"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1551642330263");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.6964c2874b61a469a59b.hot-update.js.map