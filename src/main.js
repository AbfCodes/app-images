import Vue from 'vue';
import App from './App.vue';

//Store
import store from './store';

//routes
import router from './router/routes';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
