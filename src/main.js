import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';
import VueAnalytics from 'vue-analytics';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileDownload }  from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFileDownload)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VeeValidate);
Vue.use(VueAnalytics, {
  id: 'UA-138368011-1',
  router
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
