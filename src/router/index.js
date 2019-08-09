import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      name: 'Home',
      children: [{
        path: 'home',
        component: () => import('@/views/capeast')
      }]
    },
    // {
    //   path: '/about',
    //   component: Layout,
    //   redirect: '/about',
    //   name: 'about',
    //   children: [{
    //     path: '/',
    //     component: () => import('@/views/capeast/about')
    //   }]
    // },
    // {
    //   path: '/services',
    //   component: Layout,
    //   redirect: '/services',
    //   name: 'services',
    //   children: [{
    //     path: '/',
    //     component: () => import('@/views/capeast/services')
    //   }]
    // },
    // {
    //   path: '/contact',
    //   component: Layout,
    //   redirect: '/contact',
    //   name: 'contact',
    //   children: [{
    //     path: '/',
    //     component: () => import('@/views/capeast/contact')
    //   }]
    // },
    {
      path: '/paySuccess',
      component: Layout,
      redirect: '/paySuccess',
      name: 'paySuccess',
      children: [{
        path: '/',
        component: () => import('@/views/capeast/paySuccess')
      }]
    },
    {
      path: '/sMain',
      component: Layout,
      redirect: '/sMain',
      name: 'sMain',
      children: [{
        path: '/',
        component: () => import('@/views/services/sMain')
      }]
    },
    {
      path: '/phoneSimpleDemand',
      component: Layout,
      redirect: '/phoneSimpleDemand',
      name: 'phoneSimpleDemand',
      children: [{
        path: '/',
        component: () => import('@/views/services/phoneSimpleDemand')
      }]
    },
  ]
})
