import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Bootstrap
import { BootstrapVue } from 'bootstrap-vue'
import '@/sass/_custom.scss'
Vue.use(BootstrapVue)

// Vue Scrool
Vue.prototype.$scrollToTop = (() => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, 100)
}) 


// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    AOS.init()
  }
}).$mount('#app')
