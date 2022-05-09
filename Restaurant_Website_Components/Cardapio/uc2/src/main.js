import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({base: __dirname, mode: 'history',})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')