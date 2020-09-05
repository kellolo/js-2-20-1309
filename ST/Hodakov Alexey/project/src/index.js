import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./layout/styles/styles.css";
import Vue from "vue";

import app from "./views/main.vue";
// app();
new Vue({
    render: h => h(app)
}).$mount("#app");
