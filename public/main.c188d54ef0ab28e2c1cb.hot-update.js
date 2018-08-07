webpackHotUpdate("main",{

/***/ "./src/components/sidebar/sidebar.html":
/*!*********************************************!*\
  !*** ./src/components/sidebar/sidebar.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=sidebar> <div class=inbox_people> <div class=headind_srch> <div class=recent_heading> <h4>Recent <span class=button> <i class=\"fa fa-comments\"></i> <span ng-if=self.unseenMessNum class=button__badge ng-bind=self.unseenMessNum></span> <span ng-if=self.unseenMessNum class=button__badge ng-bind=self.unseenMessNum></span> </span> </h4> </div> <div class=srch_bar> <div class=stylish-input-group> <input type=text class=search-bar placeholder=Search> <span class=input-group-addon> <button type=button> <i class=\"fa fa-search\" aria-hidden=true></i> </button> </span> </div> </div> </div> <div class=inbox_chat style=height:92%> <inbox-people ng-repeat=\"people in self.listPeople track by $index\" is-chosen=people.isChosen people-name=people.name latest-mesg=people.getLatestMsg().content time=people.getLatestMsg().sendAt ng-click=self._chooseConversation(people) is-seen-yet=people.isSeenMsgFrom> </inbox-people> </div> </div> </div>";

/***/ })

})
//# sourceMappingURL=main.c188d54ef0ab28e2c1cb.hot-update.js.map