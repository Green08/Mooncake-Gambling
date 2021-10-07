import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import Game from '../views/Game.vue'
import Rule from '../views/Rule.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Game',
    name: 'Game',
    component: Game
  },
  {
    path: '/rule',
    name: 'Rule',
    component: Rule
  },
  {
    path: '/',
    name: 'Start',
    component: Start
  }
]

const router = new VueRouter({
  routes
})

export default router