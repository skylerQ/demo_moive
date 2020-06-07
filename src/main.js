//vue的入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
