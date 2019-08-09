// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import 'normalize.css/normalize.css'// A modern alternative to CSS resets
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import '@/styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
// import store from './store'
// import ws from './api/ws'

// import i18n from './lang'
// import '@/icons' // icon

import '@/permission' // permission control
// import global from '@/utils/globalAPI'
import basic from '@/api/basic'

/* eslint-disable */
// let Base64 = require('js-base64').Base64
/* esint-enable */

// Vue.use(ElementUI, {
//   size: 'medium', // set element-ui default size
//   // i18n: (key, value) => i18n.t(key, value)
// })

// Vue.use(VueVideoPlayer)
// Vue.prototype.$ws = ws

Vue.config.productionTip = false
// Vue.prototype.$global = global
Vue.prototype.$basic = basic
Vue.prototype.DOWN_API = process.env.DOWN_API
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    getRootValue1: 500
  },
  router,
  // store,
  // i18n,
  components: { App },
  template: '<App/>'
})
