import template from './inboxPeople.html'
// import './chatBoard.css'

const name = 'inboxPeople'

function controller() {
    const self = this

    
}

export default {
    name,
    options: {
        bindings: {
            isChosen: '<',
            peopleName: '<',
            latestMesg: '<',
            date:'<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
}