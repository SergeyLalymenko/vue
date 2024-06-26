// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Vuelidate } from 'vuelidate';

Vue.config.productionTip = false

export const eventEmitter = new Vue();

Vue.use(Vuelidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
