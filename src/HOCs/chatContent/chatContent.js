import template from './chatContent.html'
import {ROOT} from '../../constants/url'
// import './app.scss'

const name = 'chatContent'

controller.$inject = ['auth']
function controller(auth) {
    const self = this
    const IMG = 'image'
    const TEXT= 'text'
    const FILE = 'file'

    const lengthUrl = ROOT.length
    const token = auth.getToken()
    // self.$onInit = function() {console.log(self.type)}

    self.isImage = () => self.type === IMG
    self.isText = () => self.type === TEXT
    self.isFile = () => self.type === FILE

    self.imgThumb = () =>  {
        let p = self.content.slice(lengthUrl+1);
        return ROOT + '/api/thumb/'+p+'?token='+token
    }

    self.imgDownload = () => {
        let p = self.content.slice(lengthUrl+1);
        return ROOT +'/api/download/'+p+'?token='+token
    }

    self.imgGetImageOrigin = () => {
        let p = self.content.slice(lengthUrl+1);
        return ROOT + '/api/imageOrigin/'+p+'?token='+token;
    }
}

export default {
    name,
    options: {
        bindings: {
            content: '<',
            type: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
}