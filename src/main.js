import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import TabBar from './components/TabBar'
import ProductList from './components/ProductList'
import './utils/rem'
import './assets/css/reset.css'
import './assets/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
import LabelBar from './components/LabelBar.vue'
Vue.config.productionTip = false
Vue.use(api)
Vue.use(VueAwesomeSwiper)
Vue.component('TabBar', TabBar)
Vue.component('ProductList', ProductList)
Vue.component('LabelBar', LabelBar)
// Vue.prototype.$axios = service
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
