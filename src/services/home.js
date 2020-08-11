import R from './request'
// 首页 api

export default {
    getList() {
        R.post('/api/v2/topics')
    }
}