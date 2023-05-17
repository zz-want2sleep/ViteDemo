import request from './index'

// 请求接口封装
export default {
    base: {
        demo: data => request('get', '/demo', data)
    }
}