import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AnimeList from '../AnimeList.vue'
import GameList from '../GamesList.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/animelist',
    component: AnimeList
  },
  {
    path: '/gamelist',
    component: GameList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
