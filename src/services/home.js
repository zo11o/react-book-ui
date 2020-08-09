import R from './request'
// 首页 api

export default {
    getList() {
        R.get('/home/getList')
    }
}