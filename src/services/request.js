import axios from 'axios';

const baseURL = 'http://localhost:7001';

axios.interceptors.request.use(function(config) {
    console.log(config);
    return config;
}, function (error) {
    return Promise.reject(error);
})

axios.interceptors.response.use(function(response) {
    console.log(response);
    return response;
}, function(error) {
    return Promise.reject(error);
})

// 封装 axios 请求
var R = {
    get: function(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(`${baseURL}${url}`, params)
                .then((response) => {
                    resolve(resolve);
                })
                .catch((error) =>{
                    reject(error);
                })
        })
    },
    post: function(url, params, config) {
        return new Promise((resolve, reject) => {
            axios.post(`${baseURL}${url}`, params)
                .then((response) => {
                    resolve(resolve);
                })
                .catch((error) =>{
                    reject(error);
                })
        })
    },
    delete: function () {

    }
}

export default R