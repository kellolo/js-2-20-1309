import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/main.min.css';

import Vue from 'vue';
// import store from './store/store.js';
import app from './views/main.vue';

new Vue({
  // store,
  render: (h) => h(app),
}).$mount('#app');
