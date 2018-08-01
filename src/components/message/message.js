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

    function preProcess() {
        
        self.isImage = self.type === 'image'
        if(self.type === 'text')
            self.text = breakLineText(self.text)
    }

    function breakLineText(str) {
        const MAX_STR_LENGTH = 65
        const SPECIAL_CHAR = [':', '|', '8']
        const br = '<br>'
        const strLen = str.length

        return str
    }

    function isAlphabetOrDigit(c) {
        return /^([A-Z]|[0-9])$/i.test(c)
    }
    
}

export default {
    name,
    options: {
        bindings: {
            avatar: '<',
            text: '<',
            time: '<',
            isSentMesg:'<',
            type: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
}