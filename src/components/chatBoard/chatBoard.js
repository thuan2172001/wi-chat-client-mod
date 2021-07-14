import toastr from 'toastr'
import template from './chatBoard.html'
// import './chatBoard.css'

const name = 'chatBoard'

controller.$inject = ['auth', 'api', 'io', 'ui']
function controller(auth, api, io, ui) {

    const self = this

    self.$onInit = function () {
        preProcess()

        io.onSendMessage((data, isSendMsg) => {

            // ////console.log('send')
            // self
            //     .listMessage
            //     .filter(function (conver) {
            //         return conver.id == data.idConversation;
            //     })[0].Messages.push(data);
            // ////console.log({data})
            // ////console.log({'self.listMesg' : self.listMessage})
            self.sendMessageSuccess(data)
            ui.finishReceiveMessage()
            ////console.log({data})
            //scroll to bottom
            scroll()
        })

        enableEnterSubmit()
        // console.log({converName: self.converName})
    }

    self.$onChanges = function ({ listMessage, curConverId, thisUser }) {
        if (listMessage) self.listMessage = listMessage.currentValue
        if (curConverId) self.curConverId = curConverId.currentValue
        if (thisUser) self.thisUser = thisUser.currentValue
        scroll()
    }

    self.submitText = function () {
        checkSubmit(() => {
            const content = self.text.split('\n').join('<br/>');
            // ////console.log({ content })
            // const idConversation = self
            let message = {
                content: preventXSS(content),
                type: 'text',
                idSender: self.thisUser._id,
                idConversation: self.curConverId,
                user: self.thisUser,
                sendAt: new Date((new Date()).getTime())
            };
            api.postMessage(message, auth.getToken(), function (res) {
                console.log(res)
                if (res) preProcess()
            });
        })

    }

    self.logout = function () {
        auth.logout()
    }

    self.showConverName = function() {
        const prefix = 'Help_Desk-'
        
        return self.converName.replace(prefix, '').toUpperCase()
    }

    self.upload = function (files) {

        const WIDTH_IMAGE_THUMB = 130
        const user = auth.getThisUser()
        const token = auth.getToken()
        files.forEach((file, i) => {
            {
                let type = file.type.substring(0, 5);
                api.upload({
                    file: file,
                    fields: { 'name': self.converName, 'width': WIDTH_IMAGE_THUMB }
                }, token, (res) => {
                    if (res) {
                        console.log(res);
                        let message = {
                            content: res,
                            type: type == 'image' ? 'image' : 'file',
                            idSender: user.id,
                            idConversation: self.curConverId,
                            user: user,
                            sendAt: new Date((new Date()).getTime())
                        }
                        api.postMessage(message, token, (res) => {
                            // _done();
                            console.log('success')
                            console.log({res})
                        });
                    } else {
                        console.log('UPLOAD FAIL');
                    }
                })
            }
        })


    }

    self.isShowAvatar = function(i) {
        if(!self.listMessage || !self.listMessage.length) return false
        if(i === 0) return true
        // console.log({'self.listMessage':self.listMessage})
        return self.listMessage[i].user._id !== self.listMessage[i-1].user._id
        
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

    function scroll() {
        setTimeout(() => {
            const chatBoard = document.querySelector('.msg_history')
            chatBoard.scrollTo(0, chatBoard.scrollHeight)
        }, 100)
    }

    function checkSubmit(cb) {
        if(!self.converName) {
            toastr.error('No conversation is chosen')
        }
        else if (self.text) {
            cb()
        }
    }

    function enableEnterSubmit() {

        document.querySelector('textarea').addEventListener('keydown', function(e) {
            if(e.keyCode === 13 && !e.shiftKey) e.preventDefault()
        })

        document.querySelector('.mesgs').addEventListener('keyup', function(e) {
            const submitBtn = document.querySelector('#chat-board-submit')
            e.preventDefault()
            if(e.keyCode === 13) {
                if(!e.shiftKey) submitBtn.click()
            }
        })
    }
}

export default {
    name,
    options: {
        bindings: {
            listMessage: '<',
            thisUser: '<',
            curConverId: '<',
            sendMessageSuccess: '<',
            converName: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
}