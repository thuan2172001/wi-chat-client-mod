import template from './app.html'
import './app.scss'

const name = 'app'

function controller() {

}

export default {
    name,
    options: {
        template,
        controller,
        controllerAs: 'self'
    }
}