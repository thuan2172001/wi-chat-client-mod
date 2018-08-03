import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free'

import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import'@fortawesome/fontawesome-free/js/all'

import './module'

// const login = '<login></login>'

const browser = '<browser></browser>'

render(browser, document.getElementById('app-root'))

function render(component, locatedEl) {
    locatedEl.innerHTML = component
}