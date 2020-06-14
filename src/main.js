import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* Import main.scss */
import './assets/scss/main.scss';

/* Register BaseButton globally */
import BaseButton from './components/base/BaseButton.vue';
Vue.component('base-button', BaseButton);

/* Register the validation provider */
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
