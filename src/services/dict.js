const name = 'dict'

service.$inject = ['$rootScope', 'api', 'auth']
function service($rootScope, api, auth) {
    
    const FETCHING_DONE = 'FETCHING_DONE'
    const USERNAME_TO_COMPANY = 'USERNAME_TO_COMPANY'
    const dict = {}

    let users=[]
    let companies = []
    let isFetchingDone = false

    init()

    function init() {

        const token = auth.getToken()
        let fetchUserDone = false
        let fetchCompanyDone = false

        api.getAllUser(token, {token}, data => {
            users = data.body.content
            // console.log(data)
            // users = data.content
            fetchUserDone = true
            if(fetchCompanyDone) $rootScope.$emit(FETCHING_DONE)
        })


        api.getAllCompany(token, {token}, data => {
            // console.log(data)
            companies = data.body.content
            // companies = data.content
            fetchCompanyDone = true
            if(fetchUserDone) $rootScope.$emit(FETCHING_DONE)
        })
    }

    function getDataReady(cb) {
        if(isFetchingDone) cb()

        $rootScope.$on(FETCHING_DONE, (e, data) => {
            cb()
        })

    }

    function usernameToCompany(username, cb) {
        getDataReady(() => {
            const dictType = USERNAME_TO_COMPANY
            const _dict = {}

            if (dictType in dict) {
                return dict[dictType][username] && cb(dict[dictType][username])
            } 

            for (let u of users) {
                _dict[u.username] = companies.filter(c => c.idCompany === u.idCompany)[0].name
            }
            console.log(_dict[username])
            dict[dictType] = _dict
            _dict[username] && cb(_dict[username])
        })
    }

    return {
        usernameToCompany
    }
    
}

export default {
    name,
    options: service
}