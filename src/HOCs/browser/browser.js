import template from './browser.html'
// import './app.scss'

const name = 'browser'

controller.$inject = ['auth']
function controller(auth) {
    const self = this
    
    self.$onInit = function() {
        preProcess()

        auth.onLoginSuccess(() => {
            self.isLogin = true
        })

        auth.onLogoutSuccess(() => {
            self.isLogin = false
        })

        auth.onJwtTokenExpired(() => {
            self.isLogin = false
        })
    }

    function preProcess() {
        self.isLogin = auth.isLogin()
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