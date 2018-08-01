import template from './message.html'
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
        // self.sendMesg = $sce.trustAsHtml(sendMesg) 
        // self.receiveMesg = $sce.trustAsHtml(receiveMesg)
        //console.log({'time':self.time})
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