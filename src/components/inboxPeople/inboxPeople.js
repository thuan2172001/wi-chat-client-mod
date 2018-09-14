import template from './inboxPeople.html'
// import './chatBoard.css'

const name = 'inboxPeople'

controller.$inject = ['dict']
function controller(dict) {
    const self = this
    let type = 'text'

    self.$onInit = function () {

        self.company = ''
        self.labelColor = ''

        dict.usernameToCompany(self.showName(), (name) => {
            self.company = name
            self.labelColor = strToColor(name)
        })
    }

    self.$onChanges = function ({ msgType }) {
        if (msgType) type = msgType.currentValue
    }

    self.showName = function () {
        const prefix = 'Help_Desk-'

        return self.peopleName.replace(prefix, '')
    }

    self.showMsg = function () {
        if (type === 'text') return displayTextMsg()
        if (type === 'image') return displayImageMsg()
        if (type === 'file') return displayFileMsg()
    }

    function limitStrLen(str, len) {
        const MIN = 3
        if (len < 3) len = 3

        if (str.length > len) return str.substr(0, len - 3) + '...'

        return str
    }

    function displayTextMsg() {
        const text = self.latestMesg || ''
        const br1 = '&ltbr&gt'
        const br2 = '&ltbr/&gt'
        const br3 = '\n'
        const LIMIT_LEN = 45


        const i1 = text.lastIndexOf(br1)
        const i2 = text.lastIndexOf(br2)
        const i3 = text.lastIndexOf(br3)
        let i = Math.max(i1, i2, i3)
        if (i === -1) i = 0
        // //console.log({latestMesg : self.latestMesg})

        // if(/\n/.test(text)) //console.log({i1, i2, i, 'str': text.substr(i)})
        ////console.log({text: text.substr(i).replace(new RegExp(`(${br1}|${br2}|${br3})`), '')})
        const result = text.substr(i).replace(new RegExp(`(${br1}|${br2}|${br3})`), '')
        return limitStrLen(result, LIMIT_LEN)
    }

    function displayImageMsg() {
        return 'Tin nhắn là một hình ảnh'
    }

    function displayFileMsg() {
        return 'Tin nhắn là một file'
    }

    function strToColor(str) {
        const colors = ['lightskyblue', 'coral', 'darkcyan', 'burlywood', 'cadetblue',
            'darkgray', 'darkkhaki', 'darksalmon', 'darkseagrenn', 'darkviolet', 'deepskyblue']

        // convert str to a suitable num
        const num = str.split('').reduce((acc, cur) => acc + Math.pow(cur.charCodeAt(0), 2), 0)
        return colors[num % colors.length]
        
    }
}

export default {
    name,
    options: {
        bindings: {
            isChosen: '<',
            peopleName: '<',
            latestMesg: '<',
            time: '<',
            isSeenYet: '<',
            msgType: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
}