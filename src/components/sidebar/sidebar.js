import template from './sidebar.html'
import './sidebar.scss'

const name = 'sidebar'

controller.$inject = []
function controller() {

    const self = this

    self.$onInit = function () {
        preProcess()
    }

    self.$onChanges = function({listPeople}) {
        if(listPeople) {
            self.listPeople = listPeople.currentValue
            preProcess()
        }
    }

    self._chooseConversation = function(people) {
        // api.seenMessage({}, auth.getToken(), ())
        self.chooseConversation(people)
        self.listPeople = self.listPeople.map(p => {
            if(p.name === people.name) p.isChosen = true
            else p.isChosen = false


            return p
        })
        
    }


    function preProcess() {

        //search
        self.filterPeople = {
            name: ''
        }

        self.listPeople = self.listPeople.map((people, i) => {
            // if (i) people.isChosen = true
            // else people.isChosen = false


            people.isChosen = false
            people.getLatestMsg = () => people.Messages[people.Messages.length - 1]

            return people
        })

        
    }


}

export default {
    name,
    options: {
        bindings: {
            listPeople: '<',
            chooseConversation: '<',
            unseenMessNum: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
}