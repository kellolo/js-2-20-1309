// import Vue from 'vue';
// import Vuex from 'vuex';
// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     basketItems: [
//       {
//         productName: 'ORANGE PEOPLE T-SHIRT',
//         productPrice: 67,
//         productImg:
//           'https://raw.githubusercontent.com/kellolo/static/master/img/JS1_shop/featuredItem4.jpg',
//         productId: 'prod_3',
//         amount: 2,
//       },
//       {
//         productName: 'PUMKIN PEOPLE T-SHIRT',
//         productPrice: 69,
//         productImg:
//           'https://raw.githubusercontent.com/kellolo/static/master/img/JS1_shop/featuredItem5.jpg',
//         productId: 'prod_4',
//         amount: 1,
//       },
//     ],
//     // url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
//   },

//   mutations: {
//     // Add item to cart
//     addItemToCart(state, payload) {
//       state.basketItems.push(payload);
//     },
//     // Clear items in the cart
//     emtpyCart(state) {
//       state.basketItems = [];
//     },
//   },

//   actions: {
//     checkout({ commit }, requestObject) {
//       Vue.http
//         .post('submit', requestObject)
//         .then((response) => {
//           console.log(response);
//           commit('emptyCart');
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     },
//   },
//   getters: {
//     // Fetch the total number of items in the cart
//     // totalNumberOfCartItems: (state) => {
//     //   return state.basketItems.length;
//     // },
//     // get(url) {
//     //   return fetch(url)
//     //     .then((d) => d.json())
//     //     .then((items) => {
//     //       this.state.basketItems = items.content;
//     //     });
//     // },
//     // pushToCart() {
//     //   this.get(this.url).then((items) => {
//     //     basketItems = items.content;
//     //   });
//     // },
//   },
// });
