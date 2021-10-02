import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import AnimeList from '../views/AnimeList.vue'
import AnimeTable from '../views/AnimeTable.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/animelist',
    name: AnimeList,
    component: AnimeList
  },  
  {
    path: '/Inicio',
    name: Inicio,
    component: Inicio
  },
  {
    path: '/animeTable',
    name: AnimeTable,
    component: AnimeTable
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
