webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/pages/app/app.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/pages/app/app.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body, #app-root, .messaging, .inbox_msg, .inbox_people, .inbox_chat, .mesgs, .msg_history {\n  height: 100%; }\n\n.app .container {\n  max-width: 1170px;\n  margin: auto;\n  padding: 0 20px; }\n\n.app img {\n  max-width: 100%; }\n\n.app .inbox_people {\n  background: #f8f8f8 none repeat scroll 0 0;\n  float: left;\n  overflow: hidden;\n  width: 30%;\n  border-right: 1px solid #c4c4c4; }\n\n.app .inbox_msg {\n  border: 1px solid #c4c4c4;\n  clear: both;\n  overflow: hidden; }\n\n.app .top_spac {\n  margin: 20px 0 0; }\n\n.app .recent_heading {\n  float: left;\n  width: 40%; }\n\n.app .srch_bar {\n  display: inline-block;\n  text-align: right;\n  width: 60%; }\n\n.app .headind_srch {\n  padding: 10px 29px 10px 20px;\n  overflow: hidden;\n  border-bottom: 1px solid #c4c4c4; }\n\n.app .recent_heading h4 {\n  color: #05728f;\n  font-size: 21px;\n  margin: auto; }\n\n.app .srch_bar input {\n  border: 1px solid #cdcdcd;\n  border-width: 0 0 1px 0;\n  width: 80%;\n  padding: 2px 0 4px 6px;\n  background: none; }\n\n.app .srch_bar .input-group-addon button {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  padding: 0;\n  color: #707070;\n  font-size: 18px; }\n\n.app .srch_bar .input-group-addon {\n  margin: 0 0 0 -27px; }\n\n.app .chat_ib h5 {\n  font-size: 15px;\n  color: #464646;\n  margin: 0 0 8px 0; }\n\n.app .chat_ib h5 span {\n  font-size: 13px;\n  float: right; }\n\n.app .chat_ib p {\n  font-size: 14px;\n  color: #989898;\n  margin: auto; }\n\n.app .chat_img {\n  float: left;\n  width: 11%; }\n\n.app .chat_ib {\n  float: left;\n  padding: 0 0 0 15px;\n  width: 88%; }\n\n.app .chat_people {\n  overflow: hidden;\n  clear: both; }\n\n.app .chat_list {\n  border-bottom: 1px solid #c4c4c4;\n  margin: 0;\n  padding: 18px 16px 10px; }\n\n.app .inbox_chat {\n  height: 550px;\n  overflow-y: scroll; }\n\n.app .active_chat {\n  background: #ebebeb; }\n\n.app .incoming_msg_img {\n  display: inline-block;\n  width: 6%; }\n\n.app .received_msg {\n  display: inline-block;\n  padding: 0 0 0 10px;\n  vertical-align: top;\n  width: 92%; }\n\n.app .received_withd_msg p {\n  background: #ebebeb none repeat scroll 0 0;\n  border-radius: 3px;\n  color: #646464;\n  font-size: 14px;\n  margin: 0;\n  padding: 5px 10px 5px 12px;\n  width: 100%; }\n\n.app .time_date {\n  color: #747474;\n  display: block;\n  font-size: 12px;\n  margin: 8px 0 0; }\n\n.app .received_withd_msg {\n  width: 57%; }\n\n.app .mesgs {\n  float: left;\n  padding: 0px 0px 0 25px;\n  width: 70%;\n  margin-top: 5px; }\n\n.app .sent_msg p {\n  background: #05728f none repeat scroll 0 0;\n  border-radius: 3px;\n  font-size: 14px;\n  margin: 0;\n  color: #fff;\n  padding: 5px 10px 5px 12px;\n  width: 100%; }\n\n.app .outgoing_msg {\n  overflow: hidden;\n  margin: 26px 0 26px; }\n\n.app .sent_msg {\n  float: right;\n  width: 46%; }\n\n.app .input_msg_write textarea {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  color: #4c4c4c;\n  font-size: 15px;\n  min-height: 48px;\n  width: 100%; }\n\n.app .type_msg {\n  border-top: 1px solid #c4c4c4;\n  position: relative;\n  margin-right: 16px; }\n\n.app .msg_send_btn {\n  background: #05728f none repeat scroll 0 0;\n  border: medium none;\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n  font-size: 17px;\n  height: 33px;\n  position: absolute;\n  right: 0;\n  top: 11px;\n  width: 33px; }\n\n.app .messaging {\n  /* padding: 0 0 50px 0; */ }\n\n.app .msg_history {\n  height: 516px;\n  overflow-y: auto; }\n", ""]);

// exports


/***/ }),

/***/ "./src/pages/app/app.html":
/*!********************************!*\
  !*** ./src/pages/app/app.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=app style=height:100%> <div style=height:100%> <div class=messaging> <div class=inbox_msg> <sidebar list-people=self.listPeople choose-conversation=self.chooseConversation unseen-mess-num=self.unseenMesgNum> </sidebar> <chat-board list-message=self.listMessage this-user=self.thisUser cur-conver-id=self.curConversationId send-message-success=self.sendMessageSuccess conver-name=self.curConverName> </chat-board> </div> </div> </div> </div>";

/***/ }),

/***/ "./src/pages/app/app.js":
/*!******************************!*\
  !*** ./src/pages/app/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toastr = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");

var _toastr2 = _interopRequireDefault(_toastr);

var _app = __webpack_require__(/*! ./app.html */ "./src/pages/app/app.html");

var _app2 = _interopRequireDefault(_app);

__webpack_require__(/*! ./app.scss */ "./src/pages/app/app.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = 'app';

controller.$inject = ['api', 'auth', 'io'];
function controller(api, auth, io) {

    var self = this;
    var token = auth.getToken();

    var _auth$getData = auth.getData(),
        username = _auth$getData.username;

    var thisUser = auth.getThisUser();

    // a list get from server
    // it haven't filter the user without messages yet
    var _listPeople = [];

    self.$onInit = function () {
        preProcess();
        init();

        io.onNewConversation(function (data) {
            console.log({ data: data });
            _listPeople.unshift({
                Messages: [],
                id: 6,
                name: data.name
            });
            console.log({ _listPeople: _listPeople });
            io.joinRoom({
                username: username,
                idConversation: data.id
            });
        });
    };

    self.chooseConversation = function (people) {

        // assign a function return isSent
        people.Messages.forEach(function (m) {
            m.isSent = function () {
                return m.User.username === username;
            };

            return m;
        });

        self.listMessage = people.Messages;
        self.curConverName = people.name;
        //console.log({'self.curConverName': self.curConverName})

        // self.listMessage = people.Messages.map(m => {
        //     m.isSent = () => m.User.username === username

        //     return m
        // })

        self.curConversationId = people.id;
        seenMsg(people);
    };

    // self.sendMessageSuccess = function(data) {
    //     ////console.log({'self.listMessage': self.listMessage})
    //     //console.log({data})
    //     ++self.unseenMesgNum
    //     data.isSent = () => data.User.username === username
    //     // self.listMessage.push(data)

    //     console.log({data})
    //     console.log({_listPeople})
    //     const receivMsgConver = findInArr(self.listPeople, msg => msg.Messages[0].idConversation === data.idConversation)
    //     // console.log({receivMsgConver})
    //     if(receivMsgConver && receivMsgConver.Messages && receivMsgConver.Messages.length){
    //         receivMsgConver.Messages.push(data)
    //         decideSeenYetForConv(receivMsgConver)

    //         // sortPeopleByLatestMsg()
    //     }
    //     else {
    //         // toastr.warning('wait a few secs')
    //         console.log({receivMsgConverNewPerson:receivMsgConver})

    //         const newPeople = _listPeople.filter(p => (p.name === data.User.username ||
    //             p.name === 'Help_Desk-' + data.User.username))[0]
    //         if(newPeople) {

    //             newPeople.Messages.push(data)
    //             newPeople.isSeenMsgFrom = false
    //             console.log({'self.listPeople':self.listPeople})
    //             self.listPeople.unshift(newPeople)
    //             console.log({newPeople})
    //             console.log({'self.listPeople':self.listPeople})
    //         }
    //     }

    // }

    self.sendMessageSuccess = function (data) {
        ////console.log({'self.listMessage': self.listMessage})
        //console.log({data})
        ++self.unseenMesgNum;
        data.isSent = function () {
            return data.User.username === username;
        };
        // self.listMessage.push(data)

        console.log({ data: data });
        console.log({ _listPeople: _listPeople });
        console.log('asdj');
        var receivMsgConver = findInArr(self.listPeople, function (msg) {
            return msg.Messages[0].idConversation === data.idConversation;
        });
        // console.log({receivMsgConver})
        if (receivMsgConver && receivMsgConver.Messages && receivMsgConver.Messages.length) {
            console.log('receive');
            receivMsgConver.Messages.push(data);
            decideSeenYetForConv(receivMsgConver);

            // sortPeopleByLatestMsg()
        } else {
            var newPeople = _listPeople.filter(function (p) {
                return p.name === data.User.username || p.name === 'Help_Desk-' + data.User.username;
            })[0];
            if (newPeople) {

                newPeople.Messages.push(data);
                newPeople.isSeenMsgFrom = false;
                console.log({ 'self.listPeople': self.listPeople });
                self.listPeople.unshift(newPeople);
                console.log({ newPeople: newPeople });
                console.log({ 'self.listPeople': self.listPeople });
            }
        }
    };

    function preProcess() {
        self.listPeople = [];
        self.listMessage = [];
        self.curConverName = '';
        self.thisUser = thisUser;
        self.curConversationId = -1;
        self.unseenMesgNum = 0;

        ////console.log(auth.getThisUser())
    }

    function init() {
        // const token = auth.getToken()
        // const {username} = auth.getData()
        api.getListConversation(token, { username: username }, function (resp) {
            _listPeople = resp.list;
            self.listPeople = resp.list.filter(function (p) {
                return p.Messages.length;
            }).map(function (p) {
                p.isSeenMsgFrom = !p.lastMessFontWeight;
                return p;
            });
            // ////console.log({'self.listPeople' : self.listPeople})
            self.unseenMesgNum = resp.numNewMess;

            io.connect();
            io.onConnect(function () {
                joinAllRoom(resp.list.map(function (el) {
                    return el.id;
                }));
            });

            sortPeopleByLatestMsg();
            // console.log({'listPeople': self.listPeople})
            // console.log({'listMessage': self.listMessage})


            ///////////////test///////////

            _listPeople.filter(function (p) {
                return p.name === 'Help_Desk-chat5';
            })[0].Messages = [];
            self.listPeople = self.listPeople.filter(function (p) {
                return p.name !== 'Help_Desk-chat5';
            });
            var data = '{"content":"lalalala","type":"text","idSender":13,"idConversation":12,"User":{"id":13,"username":"chat5","password":"=========================","role":2,"color":"#46CC12"},"sendAt":"2018-08-10T09:46:31.302Z"}';
            // const data = '{"content":"sadf","type":"text","idSender":13,"idConversation":13,"User":{"id":13,"username":"chat6","password":"=========================","role":2,"color":"#46CC12"},"sendAt":"2018-08-10T09:46:31.302Z"}'

            self.sendMessageSuccess(JSON.parse(data));
        });
    }

    function joinAllRoom(listConver) {
        ////console.log({listConver})
        ////console.log({username})
        listConver.forEach(function (c) {
            io.joinRoom({
                username: username,
                idConversation: c
            });
        });
    }

    function findInArr(arr, predicate) {
        //console.log({arr})
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var i = _step.value;

                if (predicate(i)) return i;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return null;
    }

    //use after filter people with message
    function sortPeopleByLatestMsg() {
        self.listPeople.sort(function (a, b) {
            var lastMsgSendAtA = a.Messages[a.Messages.length - 1];
            var lastMsgSendAtB = b.Messages[b.Messages.length - 1];

            return new Date(lastMsgSendAtB.sendAt) - new Date(lastMsgSendAtA.sendAt);
        });

        console.log({ 'self.listPeople': self.listPeople });
    }

    function seenMsg(people) {
        //console.log({"self.unseenMesgNum" :self.unseenMesgNum})
        console.log(!people.isSeenMsgFrom);
        console.log(self.unseenMesgNum > 0);
        if (!people.isSeenMsgFrom && self.unseenMesgNum > 0) {
            self.unseenMesgNum = self.unseenMesgNum - 1;
            people.isSeenMsgFrom = true;

            //console.log(people.Messages[0].User.id)
            //console.log(people.name)
            //console.log({token: auth.getToken()})
            api.seenMessage({
                idUser: auth.getThisUser().id,
                nameConversation: people.name
            }, auth.getToken(), function (resp) {

                console.log('seen msg');
                console.log({ 'people.name': people.name });
                if (!resp) console.log('err');else console.log(resp);
            });
        }
    }

    function decideSeenYetForConv(receivMsgConver) {
        // console.log(receivMsgConver.name === self.curConverName)
        if (receivMsgConver.name === self.curConverName) {

            //simulate a people with name is that
            //just to pass this function 
            //src code is right above
            //just to make current conversation seen
            seenMsg({ name: self.curConverName, isSeenMsgFrom: false });
        } else {
            receivMsgConver.isSeenMsgFrom = false;
        }
    }
}

exports.default = {
    name: name,
    options: {
        template: _app2.default,
        controller: controller,
        controllerAs: 'self'
    }
};

/***/ }),

/***/ "./src/pages/app/app.scss":
/*!********************************!*\
  !*** ./src/pages/app/app.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./app.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/pages/app/app.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./app.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/pages/app/app.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./app.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/pages/app/app.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ })

})
//# sourceMappingURL=main.666500e0b93936296445.hot-update.js.map