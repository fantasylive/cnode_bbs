import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

// 引入element-ui，传入全局配置对象
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
