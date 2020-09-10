import Vue from 'vue';
import Vuex from 'vuex';

import basketStore from './basket.store';
import catalogStore from './catalog.store';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    basket: basketStore,
    catalog: catalogStore,
  },
});

export default store;
