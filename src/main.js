import Vue from 'vue'
import VueYoutube from 'vue-youtube'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

Vue.use(VueYoutube)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
