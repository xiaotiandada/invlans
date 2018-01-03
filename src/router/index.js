import Vue from 'vue'
import Router from 'vue-router'
import Userlist from '@/components/userlist'
import Home from '@/components/home'
import Adminlist from '@/components/adminlist'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/userlist',
      name: 'userlist',
      component: Userlist
    },
    {
      path: '/adminlist',
      name: 'adminlist',
      component: Adminlist
    }
  ]
})
