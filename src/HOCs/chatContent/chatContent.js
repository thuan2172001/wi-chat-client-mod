import template from './chatContent.html'
import { END_POINT_URL } from '../../constants/url'

const name = 'chatContent'
const urls = require('../../constants/url');
const ROOT =  END_POINT_URL || urls.dev;

controller.$inject = ['auth']
function controller(auth) {
    const self = this
    const IMG = 'image'
    const TEXT = 'text'
    const FILE = 'file'

    const lengthUrl = ROOT.length
    const token = auth.getToken()
    // self.$onInit = function() {////console.log(self.type)}

    self.isImage = () => self.type === IMG
    self.isText = () => self.type === TEXT
    self.isFile = () => self.type === FILE

    self.imgThumb = () => {
        let p = self.content.slice(lengthUrl);
        console.log({ p })
        return ROOT + '/api/thumb/' + p + '?token=' + token
    }

    self.imgDownload = () => {
        let p = self.content.slice(lengthUrl);
        return ROOT + '/api/download/' + p + '?token=' + token
    }

    self.imgGetImageOrigin = () => {
        let p = self.content.slice(lengthUrl);
        return ROOT + '/api/imageOrigin/' + p + '?token=' + token;
    }

    self.toFileString = () => {
        const str = self.content
        const separator = '(+07)'
        const str_separated = str.split(separator)
        // console.log({str_separated})
        return str_separated[str_separated.length - 1]
    }

    self.toDownloadableLink = () => {
        const token = auth.getToken()
        const path = self.content
        const p = path.slice(lengthUrl)
        console.log({ p })
        return ROOT + '/api/download/' + p + '?token=' + token
    }
}

export default {
    name,
    options: {
        bindings: {
            content: '<',
            type: '<',
            isReceivMessage: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
}
