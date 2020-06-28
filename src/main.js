import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/index.css';

import _ from 'lodash' ;

Vue.config.productionTip = false
Vue.use(ElementUI);


Vue.prototype.$_ = _;



new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
