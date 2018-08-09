import { SEND_MESSAGE, JOIN_ROOM, NEW_CONVERSATION } from '../constants/socketEvent'
import { ROOT } from '../constants/url'
import io from 'socket.io-client'
import toastr from 'toastr'

const name = 'io'


service.$inject = ['$timeout', '$rootScope', 'auth']
function service($timeout, $rootScope, auth) {

    const SOCKET_CONNECT = 'SOCKET_CONNECT'
    let socket

    function connect() {
        socket = io(ROOT)
        socket.on('connect', () => {
            ////console.log('socket is connected')
            $rootScope.$emit(SOCKET_CONNECT)
            console.log('socket connected')
        })

        socket.on(SEND_MESSAGE, function (data) {
            ////console.log('send')
            $timeout(function () {
                // ////console.log(data);
                // self.listConver.filter(function(conver) { return conver.id==data.idConversation; })[0].Messages.push(data);
                // $timeout(function(){
                //     listMessage.scrollTop(listMessage[0].scrollHeight);
                // }, 500);
                const thisUsr = auth.getThisUser()
                const isSendMsg = thisUsr.id === data.User.id
                if (!isSendMsg) toastr.success('Receive a new message')
                _emit(SEND_MESSAGE, {data, isSendMsg})
                // cb(data, isSendMsg)
            })
        });

        socket.on(NEW_CONVERSATION, data => {
            // cb(data)
            // toastr.success('Receive a new message')
            _emit(NEW_CONVERSATION, data)
        })
    }

    function onConnect(cb) {
        $rootScope.$on(SOCKET_CONNECT, (e, data) => {
            cb()
        })
    }

    function onSendMessage(cb) {
        onConnect(() => {
            _on(SEND_MESSAGE, (data) => {
                // const {data, isSendMsg} = data
                cb(data.data, data.isSendMsg)
            })
        })
    }

    function joinRoom(data) {
        ////console.log('join room')
        socket.emit(JOIN_ROOM, data)
    }

    function onNewConversation(cb) {
        onConnect(() => {
            _on(NEW_CONVERSATION, (data) => {
                cb(data)
            })
        })
    }

    function _emit(event, data) {
        $rootScope.$emit(makeEvent(event), data)
    }

    function _on(event, cb) {
        $rootScope.$on(makeEvent(event), (e, data) => {
            cb(data)
        })
    }

    function makeEvent(event, on) {
        const prefix = '_IO_SERVICE'
        if(on) return prefix + on + event
        
        return prefix + event
    }

    return {
        onSendMessage,
        connect,
        joinRoom,
        onConnect,
        onNewConversation
    }

}

export default {
    name,
    options: service
}