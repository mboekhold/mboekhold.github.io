import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import VueAnalytics from 'vue-analytics'
import router from './router';

Vue.use(VeeValidate);
Vue.use(VueAnalytics, {
  id: 'UA-138368011-1'
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
