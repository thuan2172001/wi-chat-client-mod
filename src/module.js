import angular from 'angular';
import 'ng-file-upload'


import components from './components';
import services from './services';
import pages from './pages';
import HOCs from './HOCs';


const appName = 'app';
let app = angular.module(appName, ['ngFileUpload']);

assignAllService();
assignAllComponent();
assignAllPage();
assignAllHOC();

function assignAllService() {
    services.forEach(f => {
        app.factory(f.name, f.options);
    })
}

function assignAllComponent() {


    components.forEach(c => {
        app.component(c.name, c.options)
    })
}

function assignAllPage() {
    pages.forEach(p => {
        app.component(p.name, p.options)
    })
}

function assignAllHOC() {
    HOCs.forEach(h => {
        app.component(h.name, h.options)
    })
}


export default appName;