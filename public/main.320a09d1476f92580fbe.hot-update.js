webpackHotUpdate("main",{

/***/ "./src/components/imgPreview/imgPreview.html":
/*!***************************************************!*\
  !*** ./src/components/imgPreview/imgPreview.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=stylesheet> <div class=img-preview> <img class=main-img ng-src={{imgPreview.smallImgLink}} alt=\"failed to load image\" style=width:100%;max-width:300px;z-index:1002 ng-click=imgPreview.imgOnclick()> <div id={{imgPreview._modal}} class=modal> <span class=close ng-click=imgPreview.closeOnClick()>&times;</span> <span class=close style=right:70px ng-click=imgPreview.downloadOnClick()> <a href={{imgPreview.downloadLink}}> <i style=font-size:31px class=\"material-icons large\">cloud_download</i> </a> </span> <span class=close style=right:109px ng-click=imgPreview.zoomByMouseToggle()> <a style=cursor:pointer> <i style=font-size:31px class=\"material-icons large\">search</i> </a> </span> <figure class=zoom id={{imgPreview._zoomBackground}}> <img ng-src={{imgPreview.fullImgLink}} class=modal-content id={{imgPreview._modalImg}}> </figure> </div> </div> ";

/***/ })

})
//# sourceMappingURL=main.320a09d1476f92580fbe.hot-update.js.map