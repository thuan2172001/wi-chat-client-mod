import { SEND_MESSAGE, JOIN_ROOM, NEW_CONVERSATION } from '../constants/socketEvent'
import { END_POINT_URL } from '../constants/url'
import io from 'socket.io-client'
import toastr from 'toastr'

const name = 'io'
const urls = require('../constants/url');
const ROOT =  END_POINT_URL || urls.dev;


service.$inject = ['$timeout', '$rootScope']
function service($timeout, $rootScope) {

    const SOCKET_CONNECT = 'SOCKET_CONNECT'
    let socket

    // connect()


    function connect() {
        socket = io(ROOT)
        socket.on('connect', () => {
            ////console.log('socket is connected')
            $rootScope.$emit(SOCKET_CONNECT)
            console.log('socket connected')
        })

        socket.on(SEND_MESSAGE, function (data) {
            console.log('send')
            $timeout(function () {
                try {
                    const thisUsr = JSON.parse(localStorage.getItem('data_user'))
                    console.log({thisUsr})
                    console.log({data})
                    const isSendMsg = thisUsr._id === data.user._id
                    if (!isSendMsg) toastr.success('Receive a new message')
                    _emit(SEND_MESSAGE, {data, isSendMsg})
                } catch (e) {
                    console.log(e)
                }
            })
        });

        socket.on(NEW_CONVERSATION, data => {
            toastr.success('New conver')
            _emit(NEW_CONVERSATION, data)
        })
    }

    function disconnect() {
        socket.disconnect()
    }

    function onConnect(cb) {
        $rootScope.$on(SOCKET_CONNECT, (e, data) => {
            cb()
        })
    }

    function onSendMessage(cb) {
        console.log(65)
        onConnect(() => {
            _on(SEND_MESSAGE, (data) => {
                // console.log({data})
                cb(data.data, data.isSendMsg)
            })
        })
    }

    function joinRoom(data) {
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
        onNewConversation,
        disconnect
    }

}

export default {
    name,
    options: service
}
