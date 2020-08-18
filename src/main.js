import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Blog from './components/Blog.vue'

Vue.config.productionTip = false

Vue.component('app-blog', Blog)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
