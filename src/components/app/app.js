import template from './app.html'
import './app.css'

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