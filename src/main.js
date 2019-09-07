import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from 'vue-router';

Vue.config.productionTip = false

Vue.use(router);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
