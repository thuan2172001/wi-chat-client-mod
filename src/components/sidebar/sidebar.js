import template from './sidebar.html'
// import './sidebar.css'

const name = 'sidebar'

controller.$inject = ['api', 'auth']
function controller(api, auth) {

    const self = this

    self.$onInit = function () {
        preProcess()
        init()
    }


    function preProcess() {
        self.listPeople = []
    }

    function init() {
        const token = auth.getToken()
        const {username} = auth.getData()
        api.getListConversation(token, {username}, (resp) => {
            self.listPeople = resp.list
                .filter(p => p.Messages.length)
                .map((people, i) => {
                    if(i) people.isChosen = true
                    else people.isChosen = false

                    people.getLatestMsg = () => people.Messages[people.Messages.length - 1]

                    return people
                })
            // console.log({'self.listPeople' : self.listPeople})
        })
        // console.log(auth.getData())
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