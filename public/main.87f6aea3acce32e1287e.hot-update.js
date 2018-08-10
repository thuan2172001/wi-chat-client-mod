webpackHotUpdate("main",{

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


            ///test


            var data = '{"content":"sadf","type":"text","idSender":13,"idConversation":12,"User":{"id":13,"username":"chat5","password":"=========================","role":2,"color":"#46CC12"},"sendAt":"2018-08-10T09:46:31.302Z"}';
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

/***/ })

})
//# sourceMappingURL=main.87f6aea3acce32e1287e.hot-update.js.map