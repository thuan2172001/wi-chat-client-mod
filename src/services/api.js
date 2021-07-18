import { END_POINT_URL } from '../constants/url'

const urls = require('../constants/url');
const name = 'api';
const URL = END_POINT_URL || urls.dev;
const REGISTER = URL + '/api/register';
const GET_LIST_CONVERSATION = URL + '/api/conversation/list/admin';
const GET_CONVERSATION = URL + '/api/conversation';
const POST_MESSAGE = URL + '/api/message/new';
const SEEN_MESSAGE = URL + '/api/message/seen'
const UPLOAD = URL + '/api/upload';
const THUMB = URL + '/api/thumb';
const LIST_COMPANY = URL + '/api/company/list'
const LIST_USER = URL + '/api/user/list'

service.$inject = ['$http', 'Upload', '$rootScope']
function service($http, Upload, $rootScope) {
    const doPost = (URL, token, data, cb) => {
        $http({
            method: 'POST',
            url: URL,
            headers: {
                'Authorization': token
            },
            data: data
        }).then(function successCallback(response) {
            if (response.data.code != 200) {
                cb();
            } else {
                console.log(response.data)
                cb(response.data.data);
            }
        }, function errorCallback(response) {
            //console.error(response);
            // if(toastr) toastr.error(response);

            //token expired
            const TOKEN_EXPIRED = 'Failed to authenticate'
            if (response.data && response.data.code === 401) {

                // localStorage.removeItem('jwt-token');
                // $rootScope.$emit(TOKEN_EXPIRED);
                return
            }

            cb();
        });
    }

    this.register = function (data, cb) {
        $http({
            method: 'POST',
            url: REGISTER,
            data: data
        }).then(function successCallback(response) {
            if (response.data.code != 200) {
                cb();
            } else {
                cb(response.data.content);
            }
        }, function errorCallback(response) {
            if (toastr) toastr.error(response);
            cb();
        });
    }

    this.getConversation = function (token, data, cb) {
        doPost(GET_CONVERSATION, token, data, cb);
        console.log({ END_POINT_URL })
    }

    this.getListConversation = function (token, data, cb) {
        doPost(GET_LIST_CONVERSATION, token, data, cb);
    }

    this.postMessage = (data, token, cb) => {
        doPost(POST_MESSAGE, token, data, cb);
        console.log({ END_POINT_URL })
    }

    this.seenMessage = (data, token, cb) => {
        doPost(SEEN_MESSAGE, token, data, cb);
    }

    this.upload = (data, token, cb) => {
        Upload.upload({
            url: UPLOAD,
            headers: {
                'Authorization': token
            },
            file: data.file,
            fields: data.fields
        }).then(
            (response) => {
                console.log({ response })
                if (response.data.code != 200) {
                    //console.error(response.data.reason);
                    cb();
                } else {
                    cb(response.data.data.content);
                }
            },
            (error) => {
                //console.error(error);
                cb();
            });
    }

    this.thumb = (data, token, cb) => {
        doPost(THUMB, token, data, cb);
    };

    this.getAllUser = (token, data, cb) => {
        doPost(LIST_USER, token, data, cb)
    }

    this.getAllCompany = (token, data, cb) => {
        doPost(LIST_COMPANY, token, data, cb)
    }

    return this;
}

export default {
    name,
    options: service
}
