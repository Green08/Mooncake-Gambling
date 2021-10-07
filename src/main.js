import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'

Vue.config.productionTip = false

import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
