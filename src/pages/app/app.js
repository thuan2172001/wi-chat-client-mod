import template from './app.html'
import './app.scss'

const name = 'app'

controller.$inject = ['api', 'auth']
function controller(api, auth) {

    const self = this
    const token = auth.getToken()
    const {username} = auth.getData()
    const thisUser = auth.getThisUser()

    self.$onInit = function () {
        preProcess()
        init()
    }

    self.chooseConversation = function(people) {
        self.listMessage = people.Messages.map(m => {
            m.isSent = () => m.User.username === username
            
            return m
        })

        self.curConversationId = people.id
    }

    function preProcess() {
        self.listPeople = []
        self.listMessage= []
        self.thisUser = thisUser
        self.curConversationId = -1

        console.log(auth.getThisUser())
    }

    function init() {
        // const token = auth.getToken()
        // const {username} = auth.getData()
        api.getListConversation(token, {username}, (resp) => {
            self.listPeople = resp.list
                .filter(p => p.Messages.length)
            // console.log({'self.listPeople' : self.listPeople})
        })
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