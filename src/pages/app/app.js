import template from './app.html'
import './app.scss'

const name = 'app'

controller.$inject = ['api', 'auth', 'io']
function controller(api, auth, io) {

    const self = this
    const token = auth.getToken()
    const {username} = auth.getData()
    const thisUser = auth.getThisUser()

    self.$onInit = function () {
        preProcess()
        init()
    }

    self.chooseConversation = function(people) {

        // assign a function return isSent
        people.Messages.forEach(m => {
            m.isSent = () => m.User.username === username
            
            return m
        })

        self.listMessage = people.Messages

        // self.listMessage = people.Messages.map(m => {
        //     m.isSent = () => m.User.username === username
            
        //     return m
        // })

        self.curConversationId = people.id
    }

    self.sendMessageSuccess = function(data) {
        //console.log({'self.listMessage': self.listMessage})
        console.log({data})
        data.isSent = () => data.User.username === username
        // self.listMessage.push(data)

        const receivMsgConver = findInArr(self.listPeople, msg => msg.Messages[0].idConversation === data.idConversation)
        console.log({receivMsgConver})
        if(receivMsgConver) receivMsgConver.Messages.push(data)
        else setTimeout(() => init(), 2000)
        sortPeopleByLatestMsg()
    }

    function preProcess() {
        self.listPeople = []
        self.listMessage= []
        self.thisUser = thisUser
        self.curConversationId = -1

        //console.log(auth.getThisUser())
    }
    

    function init() {
        // const token = auth.getToken()
        // const {username} = auth.getData()
        api.getListConversation(token, {username}, (resp) => {
            self.listPeople = resp.list
                .filter(p => p.Messages.length)
            // //console.log({'self.listPeople' : self.listPeople})

            io.connect()
            io.onConnect(() => {
                joinAllRoom(resp.list.map(el => el.id))
            })

            sortPeopleByLatestMsg()
        })

        
    }

    function joinAllRoom(listConver) {
        //console.log({listConver})
        //console.log({username})
        listConver.forEach(c => {
            io.joinRoom({
                username,
                idConversation: c
            })
        })
    }

    function findInArr(arr, predicate) {
        console.log({arr})
        for (let i of arr) {
            if(predicate(i)) return i
        }

        return null
    }


    //use after filter people with message
    function sortPeopleByLatestMsg() {
        self.listPeople.sort((a, b) => {
            const lastMsgSendAtA = a.Messages[a.Messages.length - 1]
            const lastMsgSendAtB = b.Messages[b.Messages.length - 1]

            return  new Date(lastMsgSendAtB.sendAt) - new Date(lastMsgSendAtA.sendAt) 
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