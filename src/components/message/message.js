import template from './message.html'
import './message.css'
// import sendMesg from './send-message.html'
// import receiveMesg from './receive-message.html'
// import './chatBoard.css'

const name = 'message'

controller.$inject = ['$sce']
function controller($sce) {

    const self = this

    self.$onInit = function () {
        preProcess()
    }

    self.$onChanges = function(obj) {
        // console.log({obj})
        if(obj.type && obj.type.currentValue) self.type = obj.type.currentValue
        preProcess()
    }

    function preProcess() {

        self.isImage = self.type === 'image'
        // if (self.type === 'text')
        //     self.text = breakLineText(self.text)
    }

    // // function breakLineText(str) {
    // //     const MAX_STR_LENGTH = 59
    // //     const SPECIAL_CHAR = [':', '|', '8']
    // //     const br = '<br>'
    // //     // const STR_LEN = str.length


    // //     let start = MAX_STR_LENGTH - 1
    // //     // console.log({str})
    // //     while (start < str.length) {

    // //         if (isAlphabetOrDigit(str[start]) || (!isAlphabetOrDigit(str[start]) && isAlphabetOrDigit(str[start + 1]))) {

    // //             const before = str.substring(0, start)
    // //             const after = str.substring(start, str.length)
    // //             // console.log({before, after})
    // //             str = before + br + after
    // //             start += MAX_STR_LENGTH + br.length
    // //         } else {
    // //             ++start
    // //         }

    // //     }

    // //     return str
    // // }

    // function isAlphabetOrDigit(c) {
    //     return /^([A-Z]|[0-9])$/i.test(c)
    // }

}

export default {
    name,
    options: {
        bindings: {
            userName:'<',
            avatar: '<',
            text: '<',
            time: '<',
            isSentMesg: '<',
            type: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
}