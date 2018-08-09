const name = 'ui'

service.$inject = ['$rootScope']
function service($rootScope) {
    
    const FINISH_RECEIVE_MESSAGE = 'FINISH_RECEIVE_MESSAGE'

    function finishReceiveMessage() {
        $rootScope.$emit(FINISH_RECEIVE_MESSAGE)
    }

    function onFinishReceiveMessage(callback) {
        $rootScope.$on(FINISH_RECEIVE_MESSAGE, () => {
            callback()
        })
    }

    return {
        finishReceiveMessage,
        onFinishReceiveMessage
    }
}

export default {
    name,
    options: service
}