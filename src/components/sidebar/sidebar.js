import template from './sidebar.html'
// import './sidebar.css'

const name = 'sidebar'

controller.$inject = ['api']
function controller(api) {

    const self = this

    self.$onInit = function () {
        preProcess()
        init()
    }


    function preProcess() {
        self.listPeople = []
    }

    function init() {
        api.getListConversation()
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