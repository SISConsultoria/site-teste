import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Blog from './components/Blog.vue'
import Testemonial from './components/Testemonial.vue'

import axios from 'axios'

window.axios = axios
axios.defaults.baseURL = "http://192.168.30.91:5555/"
// axios.defaults.baseURL = "https://localhost:44360/"

Vue.config.productionTip = false

Vue.component('app-blog', Blog)
Vue.component('app-testemonial', Testemonial)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
