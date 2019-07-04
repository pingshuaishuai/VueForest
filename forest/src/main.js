import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/css/base.css'

import './assets/js/font.js'

import router from './plugins/router.js'
import axios from './plugins/axios.js'

import store from './plugins/store'

Vue.prototype.baseUrl = require('../config/config').active

new Vue({
  // data:{
  //   bNav:false
  // },
  
  render: h => h(App),
  router,axios,store
}).$mount('#app')
