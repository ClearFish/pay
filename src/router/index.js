import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index.vue'
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
      path: '/doc',
      name: 'Doc',
      component: Doc
    },
  ]
})
