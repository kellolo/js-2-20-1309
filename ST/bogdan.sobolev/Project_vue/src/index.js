import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/styles/styles.css';

import Vue from 'vue';

import store from './store';

import app from './views/mainpage.vue';


//app();
new Vue({
    store,
    render: h => h(app)
}).$mount('#app');