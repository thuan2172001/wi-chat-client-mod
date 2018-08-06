import {SEND_MESSAGE, JOIN_ROOM} from '../constants/socketEvent'
import {ROOT} from '../constants/url'
import io from 'socket.io-client'

const name = 'io'


service.$inject = ['$timeout', '$rootScope']
function service($timeout, $rootScope) {

    const SOCKET_CONNECT = 'SOCKET_CONNECT'
    let socket

    function connect() {
        socket = io(ROOT)
        socket.on('connect', () => {
            //console.log('socket is connected')
            $rootScope.$emit(SOCKET_CONNECT)
        })
    }

    function onConnect(cb) {
        $rootScope.$on(SOCKET_CONNECT, (e, data) => {
            cb()
        })
    }

    function onSendMessage(cb) {
        socket.on(SEND_MESSAGE, function(data) {
            //console.log('send')
            $timeout(function() {
                // //console.log(data);
                // self.listConver.filter(function(conver) { return conver.id==data.idConversation; })[0].Messages.push(data);
                // $timeout(function(){
                //     listMessage.scrollTop(listMessage[0].scrollHeight);
                // }, 500);
                cb(data)
            })
        });
    }

    function joinRoom(data) {
        //console.log('join room')
        socket.emit(JOIN_ROOM, data)
    }

    return {
        onSendMessage,
        connect,
        joinRoom,
        onConnect
    }

}

export default {
    name,
    options: service
}