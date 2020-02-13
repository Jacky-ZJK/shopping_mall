import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import router from './router'
import { Icon } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Icon)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
