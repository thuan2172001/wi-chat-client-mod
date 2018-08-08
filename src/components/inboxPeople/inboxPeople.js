import template from './inboxPeople.html'
// import './chatBoard.css'

const name = 'inboxPeople'

function controller() {
    const self = this
    
    self.showName = function() {
        const prefix = 'Help_Desk-'

        return self.peopleName.replace(prefix, '')
    }
    
    self.showMsg = function() {
        const text = self.latestMesg || ''
        const br1 = '&ltbr&gt'
        const br2 = '&ltbr/&gt'
        const br3 = '\n'
        const i1 = text.lastIndexOf(br1)
        const i2 = text.lastIndexOf(br2)
        const i3 = text.lastIndexOf(br3)
        let i = Math.max(i1, i2, i3)
        if(i === -1) i = 0
        // console.log({latestMesg : self.latestMesg})
        
        // if(/\n/.test(text)) console.log({i1, i2, i, 'str': text.substr(i)})
        //console.log({text: text.substr(i).replace(new RegExp(`(${br1}|${br2}|${br3})`), '')})
        return text.substr(i).replace(new RegExp(`(${br1}|${br2}|${br3})`), '')
    }

    
}

export default {
    name,
    options: {
        bindings: {
            isChosen: '<',
            peopleName: '<',
            latestMesg: '<',
            time:'<',
            isSeenYet: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
}