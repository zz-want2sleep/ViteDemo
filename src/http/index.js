import axios from 'axios'
import config from './axios.config'
import { setInterceptors } from './axios.interceptors.config'
const axiosInstance = axios.create(config)

setInterceptors(axiosInstance)
const request = (
    methods = 'post',
    apiName = '',
    paramsObj = {},
    timeout = 30000,
    contentType = 'application/json') => {
        return new Promise((resolve, reject) => {
            const method = methods.toLowerCase();
    
            let dataName = 'data';
            if (method === 'get') {
                dataName = 'params';
            }
            axiosInstance({
                method,
                url: `/dicp-gateway${apiName}`,
                [dataName]: paramsObj,
                responseType: 'json',
                timeout,
                withCredentials: true,
                headers: {
                    'Content-Type': `${contentType}`,
                    'X-Requested-With': 'XMLHttpRequest',
                    // token: util.getSessionStorage('loginInfo') ? util.getSessionStorage('loginInfo').sessionId : ''
                }
            })
            .then((res) => {
                    let resdata = res.data;
                    if (!resdata) {
                        resdata = {
                            msg: '服务器 Data 数据出错！'
                        };
                        return reject(resdata);
                    }
                    return resolve(resdata);
                })
                .catch((error) => {
                    let res = {};
                    if (error.msgInfo) {
                        res = {
                            msg: error.msgInfo
                        };
                    } else if (error.response || error.message) {
                        const errText = `，${(error.response
                    && error.response.status)
                    || error.message}`;
                        res = {
                            msg: `服务器出问题了${errText}！`
                        };
                    } else {
                        res = {
                            msg: error
                        };
                    }
                    return reject(res);
                });
        })
}
export default request