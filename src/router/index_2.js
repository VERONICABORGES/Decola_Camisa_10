import Vue from 'vue'
import VueRouter from 'vue-router'
import JogosList from '../JogosList.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/jogoslist',
    component: JogosList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router