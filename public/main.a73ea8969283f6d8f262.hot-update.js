webpackHotUpdate("main",{

/***/ "./src/components/chatText/chatText.js":
/*!*********************************************!*\
  !*** ./src/components/chatText/chatText.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _rules = __webpack_require__(/*! ./rules.json */ "./src/components/chatText/rules.json");

var _rules2 = _interopRequireDefault(_rules);

__webpack_require__(/*! ./chatText.css */ "./src/components/chatText/chatText.css");

var _png = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './png.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _png2 = _interopRequireDefault(_png);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
// const iconTextRules = require('./rules');
// require('../chatText/chatText.css');

var name = 'chatText';

controller.$inject = [];
function controller() {
    var self = this;

    var rules = Object.entries(_rules2.default);
    var regex = toRegex();
    // const regex = /(\:\)\))|(\:\-\))/g;

    self.$onInit = function () {
        preProcess();
    };

    function preProcess() {
        self.text = replaceText(self.text);
        // console.log({'self.text': self.text})
    }

    //change str -> regexable str
    function preRegex(str) {
        //console.log({str})
        return str.split('') //to list char
        .reduce(function (pre, cur) {
            return pre + '\\' + cur;
        }, ''); //to string with \ attach to each char
    }

    function toRegex() {

        var listIcon = rules.reduce(function (pre, cur) {

            // if(!pre.length) return cur[1];


            // const preIcons = pre[1]["text-replace"];
            var curIcons = cur[1]["text-replace"];

            // //console.log({pre, cur, curIcons});

            return [].concat(_toConsumableArray(pre), _toConsumableArray(curIcons));
        }, []);
        //console.log({listIcon});
        var regexStr = listIcon.reduce(function (pre, cur, i) {
            // //console.log({pre, cur, i})
            var cur_regex_str = preRegex(cur);

            if (i === 0) return pre + cur_regex_str;

            var str = pre + '|' + cur_regex_str;

            if (i === listIcon.length - 1) str += ')';

            return str;
        }, '(');

        // const regexStr = listIcon
        //     .reduce((pre, cur, i) => {
        //         // //console.log({pre, cur, i})
        //         const cur_regex_str = `(${preRegex(cur)})`;

        //         if (i === 0) return pre + cur_regex_str;

        //         let str = `${pre}|${cur_regex_str}`;

        //         if (i === listIcon.length - 1) str += ')';

        //         return str;

        //     }, '(')

        //console.log({regexStr});
        return new RegExp(regexStr, 'g');
    }

    // function findStr(icon) {
    //     const obj = rules.find(o => o[1].icon === icon);

    //     if (obj) return obj["text-replace"];

    //     return null;
    // }

    function findIcon(text) {
        //console.log('===findIcon==');

        var obj = rules.filter(function (o) {
            var listIcons = o[1]["text-replace"];
            // //console.log({'o[1][text-replace]': o[1]["text-replace"]});

            return !!listIcons.filter(function (i) {
                return i === text;
            }).length;
        })[0];

        // //console.log({text});
        // //console.log({rules});
        //console.log('obj');
        //console.log();

        //console.log('XXXX findIcon XXXX');

        if (obj) return obj[1].icon;
        return null;
    }

    //without html
    // function replaceText(str) {
    //     const listIconsVerbose = str.match(regex);
    //     //console.log({listIconsVerbose});
    //     //remove duplicate
    //     const listIcons = listIconsVerbose.filter((val, i) => listIconsVerbose.indexOf(val) === i);

    //     //console.log({listIcons});

    //     let result = str;
    //     for (let icon of listIcons) {
    //         const _regex = new RegExp(preRegex(icon));
    //         const replaceIcon = findIcon(icon);
    //         //console.log({replaceIcon});
    //         if(replaceIcon) result = result.replace(_regex, replaceIcon);
    //     }

    //     return result;
    // }

    function replaceText(str) {
        var listIconsVerbose = str.match(regex);
        //console.log({listIconsVerbose});
        //remove duplicate
        if (!listIconsVerbose || !listIconsVerbose.length) return str;

        var listIcons = listIconsVerbose.filter(function (val, i) {
            return listIconsVerbose.indexOf(val) === i;
        });

        //console.log({listIcons});

        var result = str;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = listIcons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var icon = _step.value;

                var _regex = new RegExp(preRegex(icon));
                var replaceIcon = findIcon(icon);
                var iconHtml = toHtmlWithIcon(replaceIcon);
                //console.log({replaceIcon});
                if (replaceIcon) result = result.replace(_regex, iconHtml);
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

        return result;
    }

    function toHtmlWithIcon(className) {
        return '<div class="' + className + '"></div>';
    }
}

exports.default = {
    name: name,
    options: {
        bindings: {
            text: '<'
        },
        template: template,
        controller: controller,
        controllerAs: 'self'
    }
};

/***/ })

})
//# sourceMappingURL=main.a73ea8969283f6d8f262.hot-update.js.map