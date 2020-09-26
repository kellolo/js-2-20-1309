import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/styles/styles.css'
import Vue from 'vue';
import Vuex from 'vuex';

import app from './views/mainpage.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      basketItems: [],
      //basketUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
      basketUrl: 'api/basket',
      basketShow: true,
      catalogItems: [],
      //catalogUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
      catalogUrl: 'api/catalog',
    },
    mutations: {
        addCatalogItem(state, items) {
            state.catalogItems = items;
        },
        addBasketItem(state, items) {
            state.basketItems = items.content;
        },
        buy(state, item) {
            let find = state.basketItems.find(el => el.productId == item.productId);
            if (find) {
                find.amount++;
            } else {
                state.basketItems.push(Object.assign({}, item, { amount: 1 }));
            }
        },
        remove(state, id) {
            let find = state.basketItems.find(el => el.productId == id);
            if (find.amount > 1) {
                find.amount--;
            } else {
                state.basketItems.splice(state.basketItems.indexOf(find), 1);
            }
        },
        basketShowfn(state) {
            state.basketShow = !state.basketShow;
        }
    }
})

new Vue({
    render: h => h(app),
    store,
}).$mount('#app');