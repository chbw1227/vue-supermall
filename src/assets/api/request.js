import axios from 'axios'
export function request(config, success, failure) {
    //  1. 创建axios实例
    const instance = axios.create({
        baseURL: 'http://106.54.54.237:8000/api/h8',
        timeout: 5000
    })
    //  2. axios拦截器
    // 请求拦截
    instance.interceptors.request.use(config => {
        // console.log(config)
        return config
    }, err => {

    })
    // 响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res)
        return res.data
    }, err => {

    })
    //  发送真正的网络请求
    return instance(config)
}