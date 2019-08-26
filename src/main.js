import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import jquery from 'jquery'
import   './assets/tanchuqen.js'
Vue.config.productionTip = false
//自定义全局属性
axios.defaults.withCredentials=true //跨域访问session同步

Vue.prototype.$axios=axios

Vue.prototype.$jquery=jquery


Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
