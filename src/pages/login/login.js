import template from './login.html'
import './login.scss'

const name = 'login'

controller.$inject = ['auth']
function controller(auth) {
    const self = this

    self.$onInit = function() {
        preProcess()
    }

    self.submit = function( ) {
        checkSubmit(() => {
            const {username, password} = self
            const data = {username, password}
            //////console.log({data})
            auth.loginSubmit(data, (token) => {
                if(!token) self.errorMesg = 'wrong username or password'
                else preProcess()
            })
        })
    }

    function checkSubmit (cb) {
        if(!self.username) {
            self.errorMesg = 'username is required'
        } else if (!self.password) {
            self.errorMesg = 'password is required'
        } else {
            cb()
        }
    }

    function preProcess() {
        self.username = ''
        self.password = ''


        self.errorMesg = ''
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