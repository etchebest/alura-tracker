import Vue from 'vue';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.min.css';

Vue.config.productionTip = false;

new Vue({
  render: (h:any) => h(App),
}).$mount('#app');
