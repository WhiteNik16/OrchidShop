import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
// import 'material-design-icons-iconfont'
import store from "./vuex/store";



Vue.config.productionTip = false


new Vue({

  render: h => h(App),
  router,
  store



}).$mount('#app')
