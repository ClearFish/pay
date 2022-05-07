import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index.vue'
import Login from "@/pages/login/index.vue"
import Register from "@/pages/register/index.vue"
import PrivacyPolicy from "@/pages/privacyPolicy/index.vue"
import Security from "@/pages/security/index.vue"
import Useragreement from "@/pages/useragreement/index.vue"
import Refund from "@/pages/refund/index.vue"

import Doc from "@/pages/doc/index.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/doc',
      name: 'Doc',
      component: Doc
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/PrivacyPolicy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy
    },
    {
      path: '/security',
      name: 'Security',
      component: Security
    },
    {
      path: '/useragreement',
      name: 'Useragreement',
      component: Useragreement
    },
    {
      path: '/refund',
      name: 'Refund',
      component: Refund
    },
  ]
})
