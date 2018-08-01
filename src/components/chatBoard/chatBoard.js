import template from './chatBoard.html'
// import './chatBoard.css'

const name = 'chatBoard'

controller.$inject = ['auth']
function controller(auth) {

    const self = this

    self.logout = function() {
        auth.logout()
    }

}

export default {
    name,
    options: {
        template,
        controller,
        controllerAs: 'self'
    }
}