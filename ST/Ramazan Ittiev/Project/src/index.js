import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/main.min.css';

import Vue from 'vue';
import app from './views/main.vue';

// app();
new Vue({
  render: (h) => h(app),
}).$mount('#app');
