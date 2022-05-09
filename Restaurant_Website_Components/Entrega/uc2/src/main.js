import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import entregaHome from './components/entregaHome.vue'
import telaMapa from './components/telaMapa.vue'
import EsperaCliente from './components/esperaCliente.vue'

import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  base: __dirname, 
  mode: 'history', 
  routes: [
  { path: '/', component: entregaHome },
  { path: '/mapa/:num', name:"mapa", component: telaMapa },
  { path: '/espera/:num', name:"espera", component: EsperaCliente }
]})

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')