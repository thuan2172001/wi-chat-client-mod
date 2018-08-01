import template from './chatBoard.html'
// import './chatBoard.css'

const name = 'chatBoard'

controller.$inject = ['auth']
function controller(auth) {

    const self = this

    self.$onChanges = function({listMessage}){
        self.listMessage = listMessage.currentValue
        // console.log(self.listMessage)
    }

    self.logout = function() {
        auth.logout()
    }
    
}

export default {
    name,
    options: {
        bindings: {
            listMessage: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
}