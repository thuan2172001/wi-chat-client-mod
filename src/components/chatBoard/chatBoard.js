import template from './chatBoard.html'
// import './chatBoard.css'

const name = 'chatBoard'

controller.$inject = ['auth', 'api']
function controller(auth, api) {

    const self = this

    self.$onInit = function () {
        preProcess()
    }

    self.$onChanges = function ({ listMessage, curConverId, thisUser }) {
        if (listMessage) self.listMessage = listMessage.currentValue
        if (curConverId) self.curConverId = curConverId.currentValue
        if (thisUser) self.thisUser = thisUser.currentValue

        console.log({ listMessage, curConverId, thisUser })

        // console.log(self.listMessage)
        // console.log(self.listMessage[0].User.username)
    }

    self.submitText = function () {
        checkSubmit(() => {
            const content = self.text.split('\n').join('<br/>');
            console.log({ content })
            // const idConversation = self
            let message = {
                content: preventXSS(content),
                type: 'text',
                idSender: self.thisUser.id,
                idConversation: self.curConverId,
                User: self.thisUser,
                sendAt: new Date((new Date()).getTime())
            };
            api.postMessage(message, auth.getToken(), function (res) {
                if(res) preProcess()
            });
        })

    }

    self.logout = function () {
        auth.logout()
    }

    function preProcess() {
        self.text = ''
    }

    function preventXSS(text) {
        const rule = {
            '<': {
                regex: /\</g,
                replaceStr: '&lt'
            },
            '>': {
                regex: /\>/g,
                replaceStr: '&gt'
            }
        };

        text = text.replace(rule['>'].regex, rule['>'].replaceStr);
        text = text.replace(rule['<'].regex, rule['<'].replaceStr);


        return text;

    }

    function checkSubmit(cb) {
        if (self.text) cb()
    }
}

export default {
    name,
    options: {
        bindings: {
            listMessage: '<',
            thisUser: '<',
            curConverId: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
}