// import axios from 'axios'
// import { Message } from 'element-ui'
// import { Message, MessageBox } from 'element-ui'
// import store from '../store'
// import { getToken } from '@/utils/auth'

// 创建axios实例
let _baseURL = process.env.BASE_API
if (process.env.NODE_ENV === 'development') {
  _baseURL = ''
}
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  baseURL: _baseURL, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
// service.interceptors.request.use(config => {
//   // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//   if (store.getters.token) {
//     config.headers['Token'] = getToken()
//   }
//   return config
// }, error => {
//   // Do something with request error
//   console.log(error) // for debug
//   Promise.reject(error)
// })

// -------------------------------------------
// * -1    系统错误
// * 0     成功处理
// * 1     用户token失效
// * 2     请求：参数错误
// * 3     请求：业务逻辑异常 已逐步遗弃，因有sub_code来代码，来详细具体的每个业务逻辑异常，再由调用方决定处理。
// * 4     请求：socket向网关发起请求时异常 - 如404，400等
// * 5     权限校验失败
// * 6     服务调用失败
// -------------------------------------------

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.c !== 0) {
      if (res.c === 1) {
        // MessageBox.confirm('TOKEN已失效，请重新登录', 'TOKEN无效', {
        //   confirmButtonText: '重新登录',
        //   // cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   store.dispatch('FedLogOut').then(() => {
        //     location.reload()// 为了重新实例化vue-router对象 避免bug
        //   })
        // })
      } else if (res.c === 2) {
        var msg = ''
        for (const key in res.d) {
          msg += `${res.d[key].p}:${res.d[key].m}; `
        }
        $message({
          message: msg,
          type: 'error',
          showClose: true,
          duration: 10 * 1000
        })
      } else if (res.c === 5) {
        $message({
          message: '没有权限访问',
          type: 'error',
          duration: 5 * 1000
        })
      } else if (res.c === -1 || res.c === 3 || res.c === 4 || res.c === 6) {
        $message({
          message: '系统异常，请稍后重试',
          type: 'error',
          duration: 5 * 1000
        })
      }
      return Promise.reject('error')
    } else if (res.c === 0 && res.b !== '0') {
      $message({
        message: res.sm || res.m,
        type: 'error',
        showClose: true,
        duration: 10 * 1000
      })
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    $message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
