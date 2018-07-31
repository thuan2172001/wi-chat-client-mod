import angular from 'angular';
import components from './components';
// import services from './services';

const appName = 'app';
let app = angular.module(appName, []);

assignAllService();
assignAllComponent();


function assignAllService() {
    // services.forEach(f => {
    //     app.factory(f.name, f.options);
    // })
}

function assignAllComponent() {


    components.forEach(c => {
        app.component(c.name, c.options)
    })
}

export default appName;