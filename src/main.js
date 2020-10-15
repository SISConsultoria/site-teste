import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Blog from './components/Blog.vue'
import axios from 'axios'

window.axios = axios
axios.defaults.baseURL = "http://192.168.30.91:5555/"

Vue.config.productionTip = false

Vue.component('app-blog', Blog)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
