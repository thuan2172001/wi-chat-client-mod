import toastr from 'toastr'
import template from './app.html'
import './app.scss'

const name = 'app'

controller.$inject = ['api', 'auth', 'io']
function controller(api, auth, io) {

    console.log(auth.getData());
    const self = this
    const token = auth.getToken()
    const {username} = auth.getData()
    const thisUser = auth.getThisUser()

    // a list get from server
    // it haven't filter the user without messages yet
    let _listPeople = []

    self.$onInit = function () {
        preProcess()
        init()


        io.onNewConversation((data) => {
            console.log({data})
            _listPeople.unshift({
                Messages:[],
                id:6,
                name:data.name
            })
            console.log({_listPeople})
            io.joinRoom({
                username,
                idConversation: data.id
            })
        })
    }

    self.chooseConversation = function(people) {

        // assign a function return isSent
        people.Messages.forEach(m => {
            m.isSent = () => m.user.username === username
            // console.log({m})
            return m
        })
        
        self.listMessage = people.Messages
        self.curConverName = people.name
        //console.log({'self.curConverName': self.curConverName})
        
        // self.listMessage = people.Messages.map(m => {
        //     m.isSent = () => m.User.username === username
            
        //     return m
        // })

        self.curConversationId = people.id
        seenMsg(people)
    }

    // self.sendMessageSuccess = function(data) {
    //     ////console.log({'self.listMessage': self.listMessage})
    //     //console.log({data})
    //     ++self.unseenMesgNum
    //     data.isSent = () => data.User.username === username
    //     // self.listMessage.push(data)

    //     console.log({data})
    //     console.log({_listPeople})
    //     const receivMsgConver = findInArr(self.listPeople, msg => msg.Messages[0].idConversation === data.idConversation)
    //     // console.log({receivMsgConver})
    //     if(receivMsgConver && receivMsgConver.Messages && receivMsgConver.Messages.length){
    //         receivMsgConver.Messages.push(data)
    //         decideSeenYetForConv(receivMsgConver)
            
    //         // sortPeopleByLatestMsg()
    //     }
    //     else {
    //         // toastr.warning('wait a few secs')
    //         console.log({receivMsgConverNewPerson:receivMsgConver})
            
    //         const newPeople = _listPeople.filter(p => (p.name === data.User.username ||
    //             p.name === 'Help_Desk-' + data.User.username))[0]
    //         if(newPeople) {

    //             newPeople.Messages.push(data)
    //             newPeople.isSeenMsgFrom = false
    //             console.log({'self.listPeople':self.listPeople})
    //             self.listPeople.unshift(newPeople)
    //             console.log({newPeople})
    //             console.log({'self.listPeople':self.listPeople})
    //         }
    //     }
        
    // }

    self.sendMessageSuccess = function(data) {
        ////console.log({'self.listMessage': self.listMessage})
        //console.log({data})
        ++self.unseenMesgNum
        data.isSent = () => data.user.username === username
        // self.listMessage.push(data)

        console.log({data})
        console.log({_listPeople})
        console.log('asdj')
        const receivMsgConver = findInArr(self.listPeople, msg => msg.Messages[0].idConversation === data.idConversation)
        // console.log({receivMsgConver})
        if(receivMsgConver && receivMsgConver.Messages && receivMsgConver.Messages.length){
            console.log('receive')
            receivMsgConver.Messages.push(data)
            decideSeenYetForConv(receivMsgConver)
            

            // sortPeopleByLatestMsg()
            
        } else {
            const newPeople = _listPeople.filter(p => (p.name === data.user.username ||
                p.name === 'Help_Desk-' + data.user.username))[0]
            if(newPeople) {

                newPeople.Messages.push(data)
                newPeople.isSeenMsgFrom = false
                console.log({'self.listPeople':self.listPeople})
                // self.listPeople.unshift(newPeople)
                self.listPeople = [newPeople].concat(self.listPeople)
                console.log({newPeople})
                console.log({'self.listPeople':self.listPeople})
            }
        }
    }



    function preProcess() {
        self.listPeople = []
        self.listMessage= []
        self.curConverName = ''
        self.thisUser = thisUser
        self.curConversationId = -1
        self.unseenMesgNum = 0

        ////console.log(auth.getThisUser())
    }
    

    function init() {
        // const token = auth.getToken()
        // const {username} = auth.getData()
        api.getListConversation(token, {username}, (resp) => {
            _listPeople = resp.list
            self.listPeople = resp.list
                .filter(p => p.Messages.length)
                .map(p => {
                    p.isSeenMsgFrom = !(p.lastMessFontWeight)
                    return p
                })
            // ////console.log({'self.listPeople' : self.listPeople})
            self.unseenMesgNum = resp.numNewMess

            io.connect()
            io.onConnect(() => {
                joinAllRoom(resp.list.map(el => el.id))
            })

            sortPeopleByLatestMsg()
            // console.log({'listPeople': self.listPeople})
            // console.log({'listMessage': self.listMessage})











            ///////////////test///////////

            // _listPeople.filter(p => p.name === 'Help_Desk-chat5')[0].Messages = []
            // self.listPeople = self.listPeople.filter(p => p.name !== 'Help_Desk-chat5')
            // const data = '{"content":"lalalala","type":"text","idSender":13,"idConversation":12,"User":{"id":13,"username":"chat5","password":"=========================","role":2,"color":"#46CC12"},"sendAt":"2018-08-10T09:46:31.302Z"}'
            // // const data = '{"content":"sadf","type":"text","idSender":13,"idConversation":13,"User":{"id":13,"username":"chat6","password":"=========================","role":2,"color":"#46CC12"},"sendAt":"2018-08-10T09:46:31.302Z"}'
            
            // self.sendMessageSuccess(JSON.parse(data))
        })
    }

    function joinAllRoom(listConver) {
        ////console.log({listConver})
        ////console.log({username})
        listConver.forEach(c => {
            io.joinRoom({
                username,
                idConversation: c
            })
        })
    }

    function findInArr(arr, predicate) {
        //console.log({arr})
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

        console.log({'self.listPeople':self.listPeople})
    }

    function seenMsg(people) {
        //console.log({"self.unseenMesgNum" :self.unseenMesgNum})
        console.log(!people.isSeenMsgFrom)
        console.log(self.unseenMesgNum > 0)
        if(!people.isSeenMsgFrom && self.unseenMesgNum > 0) {
            self.unseenMesgNum = self.unseenMesgNum -1
            people.isSeenMsgFrom = true

            //console.log(people.Messages[0].User.id)
            //console.log(people.name)
            //console.log({token: auth.getToken()})
            api.seenMessage({
                idUser:auth.getThisUser().id,
                nameConversation: people.name
            }, auth.getToken(), (resp) => {
                
                console.log('seen msg')
                console.log({'people.name': people.name})
                if(!resp) console.log('err')
                else console.log(resp)
            })
        }
    }

    function decideSeenYetForConv(receivMsgConver) {
        // console.log(receivMsgConver.name === self.curConverName)
        if(receivMsgConver.name === self.curConverName) {

            //simulate a people with name is that
            //just to pass this function 
            //src code is right above
            //just to make current conversation seen
            seenMsg({name:self.curConverName, isSeenMsgFrom:false})
        } else {
            receivMsgConver.isSeenMsgFrom = false
        }
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