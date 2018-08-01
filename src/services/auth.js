const name = 'auth'

function service() {
    const jwt_token = 'jwt-token'

    function isLogin() {
        return !!(localStorage.getItem(jwt_token))
    }

    return {
        isLogin
    }
}

export default {
    name,
    options: service
}