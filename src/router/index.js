import Vue from 'vue'
import Router from 'vue-router'
import LoginView from '../views/LoginView'
import PageView from '../views/PageView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/page'
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/page',
      name: 'PageView',
      component: PageView
    }
  ]
})
