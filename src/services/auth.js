const name = 'auth'

service.$inject = ['$rootScope', '$http', 'io']
function service($rootScope, $http, io) {
    const jwt_token = 'jwt-token'
    const data_user = 'data_user'
    const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
    const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
    const TOKEN_EXPIRED = 'Failed to authenticate'

    function isLogin() {
        return !!(localStorage.getItem(jwt_token))
    }

    function loginSubmit(data, cb) {

        let urls = require('../constants/url');
        // const URL = urls[(process.env.NODE_ENV || '').trim()] || urls.dev;
        // const URL = 'http://chat.dev.i2g.cloud';
        // const URL = 'https://chat.i2g.cloud';
        // const URL = 'http://localhost:3001';
        const URL = 'http://localhost:4200/api';
        // const URL = 'http://api.chat.dev.i2g.cloud/'
        // const URL = 'http://127.0.0.1:5001';
        // const URL = 'http://192.168.11.109:5001';
        // const URL = 'http://localhost:5001';
        const url = URL + '/login';

        $http({
            method: 'POST',
            url: url,
            data: data
        }).then(function successCallback(response) {
            console.log(response)
            if (response.data.code != 200) {
                //console.error(response.data.reason);
                cb();
            } else {
                // const { token, user } = response.data.content
                const { token, user } = response.data.data
                console.log({token})
                loginSuccess(token, user);
                cb(token);

            }
        }, function errorCallback(response) {
            // //console.error(response);
            // if(toastr) toastr.error(response);
            cb();
        });
    }

    function logout() {
        localStorage.removeItem(jwt_token)
        $rootScope.$emit(LOGOUT_SUCCESS)
        io.disconnect()
    }

    function onLoginSuccess(cb) {
        $rootScope.$on(LOGIN_SUCCESS, (e, data) => {
            cb()
        })
    }

    function onLogoutSuccess(cb) {
        $rootScope.$on(LOGOUT_SUCCESS, (e, data) => {
            cb()
        })
    }

    function onJwtTokenExpired(cb) {
        $rootScope.$on(TOKEN_EXPIRED, (e, data) => {
            cb()
        })
    }


    function loginSuccess(token, user) {
        console.log({token, user})
        $rootScope.$emit(LOGIN_SUCCESS)
        localStorage.setItem(jwt_token, token)
        localStorage.setItem(data_user, JSON.stringify(user))
    }

    function getToken() {
        return localStorage.getItem(jwt_token)
    }

    function getData() {
        const token = getToken()
        console.log({token})
        const data = atob(token.split('.')[1])
        console.log({data})
        return JSON.parse(data).user
    }

    function getThisUser() {
        return JSON.parse(localStorage.getItem(data_user))
    }

    return {
        isLogin,
        loginSubmit,
        onLoginSuccess,
        logout,
        onLogoutSuccess,
        getToken,
        getData,
        getThisUser,
        onJwtTokenExpired
    }
}

export default {
    name,
    options: service
}
