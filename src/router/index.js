import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import Game from '../views/Game.vue'
import Rule from '../views/Rule.vue'
import Mode from '../views/Mode.vue'
import Grzx from '../views/Grzx.vue'
import Setting from '../views/Setting.vue'
import Help from '../views/Help.vue'

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
    path: '/mode',
    name: 'Mode',
    component: Mode
  },
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/grzx',
    name: 'Grzx',
    component: Grzx
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  }
]

const router = new VueRouter({
  routes
})

export default router
