import Vue from 'vue'
import VueRouter from 'vue-router'
import ServiceHome from '../views/ServiceHome/ServiceHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'ServiceHome',
    redirect: '/serviceHome',
    // component: ServiceHome,

  },
  {
    path: '/serviceDetail',
    name: 'ServiceDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/ServiceDetail/ServiceDetail.vue')
  },
  {
    path: '/serviceHome',
    name: 'ServiceHome',
    component: ServiceHome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
