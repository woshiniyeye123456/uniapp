import apiUrl from './apiUrl.js'   // 这个是调接口时的域名配置

const headers = {}
    
const request = (options) => {
    const url = apiUrl.baseUrl + options.url
    return uni.request({
        url: url,
        method: options.methods || 'GET',
        data: options.data,
        header: {
            ...headers,
            token: uni.getStorageSync('token'),
            ...options.headers
        }
    }).then(res => {
        const _res = res[1]
        if (_res.statusCode === 200) {
            if ((_res.data.msg + '').indexOf('路由鉴权未通过') > -1) {
                uni.showModal({
                    title: '登录异常',
                    content: `${_res.data.msg}，请重新登录`,
                    confirmText: '重新登录',
                    success: function (__res) {
                        if (__res.confirm) {
                            uni.reLaunch({
                                url: '/pages/login/index'
                            })
                        } else if (__res.cancel) {
                            console.log('用户点击取消');
                        }
                    }
            })
                
                return
            }
            if (_res.data.code === 9999) {
                uni.showToast({
                    icon: 'none',
                    title: _res.data.msg,
                })
            }
            return _res.data
        } else{
            uni.showToast({
                icon: 'none',
                title: _res.data.msg,
            })
            throw _res.data
        }
    }).catch(err => {
        console.log(err)
        switch (err.code) {
            case 401:
            uni.clearStorageSync()
            break
            default:
            uni.showToast({
                title: err.message,
                icon: 'none',
            })
            return Promise.reject()
            break
        }
    })
} 

export default request