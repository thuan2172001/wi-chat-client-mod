webpackHotUpdate("main",{

/***/ "./src/components/imgPreview/imgPreview.html":
/*!***************************************************!*\
  !*** ./src/components/imgPreview/imgPreview.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=stylesheet> <div class=img-preview> <img class=main-img ng-src={{self.smallImgLink}} alt=\"failed to load image\" style=width:100%;max-width:300px;z-index:1002 ng-click=self.imgOnclick()> <div id={{self._modal}} class=modal> <span class=close ng-click=self.closeOnClick()>&times;</span> <span class=close style=right:70px ng-click=self.downloadOnClick()> <a href={{self.downloadLink}}> <i style=font-size:31px class=\"material-icons large\">cloud_download</i> </a> </span> <span class=close style=right:109px ng-click=self.zoomByMouseToggle()> <a style=cursor:pointer> <i style=font-size:31px class=\"material-icons large\">search</i> </a> </span> <figure class=zoom id={{self._zoomBackground}}> <img ng-src={{self.fullImgLink}} class=modal-content id={{self._modalImg}}> </figure> </div> </div> ";

/***/ })

})
//# sourceMappingURL=main.a58f6bc435e3ae52b2ea.hot-update.js.map