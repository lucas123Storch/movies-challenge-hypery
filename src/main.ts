import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router'


Vue.use(VueCompositionApi);
Vue.use(router);


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
