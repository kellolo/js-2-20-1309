import Vue from "vue";
import Vuex from "vuex";
import { get, post, put, del } from "../utils/requests.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basketUrl:"/api/basket",
    basketItems: [],
    catalogUrl: "/api/catalog",
    catalogItems: [],
    catalogAlsoUrl: "/api/catalogalso",
    catalogAlsoItems: [],
    productsUrl: "/api/products",
    productsItems: [],

  },
  mutations: {
    addCatalogItems(state, items) {
      state.catalogItems = items;
    },
    addBasketItems(state, items) {
      state.basketItems = items.content;
    },
    addCatalogAlsoItems(state, items) {
      state.catalogAlsoItems = items;
    },
    addProductsItems(state, items){
      state.productsItems = items;
    },
  
    removeBasketItem(state, item) {
      let find = state.basketItems.find((el) => el.productId == item.productId);

      if (item.amount > 1) {
        put(`${state.basketUrl}/${item.productId}`, { amount: -1 }).then((s) => {
          if (s) {
            item.amount--;
          }
        });
      } else {
        del(`${state.basketUrl}/${item.productId}`).then((s) => {
          if (s) {
            state.basketItems.splice(state.basketItems.indexOf(find), 1);
          }
        });
      }
    },

    deleteBasketItem(state, item){
      let find = state.basketItems.find((el) => el.productId == item.productId);

      del(`${state.basketUrl}/${item.productId}`).then((s) => {
        if (s) {
          state.basketItems.splice(state.basketItems.indexOf(find), 1);
        }
     });
    },

    clearBasketItem(state){
      del(`/api/clear`).then((s) => {
        if (s) {
          state.basketItems=[];
        }
     });
    },
    

    addBasketItem(state, item) {
      let find = state.basketItems.find((el) => el.productId == item.productId);

      if (find) {
        put(`${state.basketUrl}/${item.productId}`, { amount: 1 }).then((s) => {
          if (s) {
            find.amount++;
          }
        });
      } else {
        let newItem = Object.assign({}, item, { amount: 1 });
        post(state.basketUrl, newItem).then((s) => {
          if (s) {
            state.basketItems.push(newItem);
          }
        });
      }
    },

  },

  actions: {

  },
  modules: {},
});
