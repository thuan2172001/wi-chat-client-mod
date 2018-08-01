import template from './inboxPeople.html'
// import './chatBoard.css'

const name = 'inboxPeople'

function controller() {
    const self = this
    
    self.showName = function() {
        const prefix = 'Help_Desk-'

        return self.peopleName.replace(prefix, '')
    }
    
}

export default {
    name,
    options: {
        bindings: {
            isChosen: '<',
            peopleName: '<',
            latestMesg: '<',
            time:'<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
}