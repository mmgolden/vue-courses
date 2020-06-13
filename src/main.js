import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* Import main.scss */
import './assets/scss/main.scss';

/* Register BaseButton globally */
import BaseButton from './components/base/BaseButton.vue';
Vue.component('base-button', BaseButton);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
