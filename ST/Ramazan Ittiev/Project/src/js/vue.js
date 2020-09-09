// const app = new Vue({
//   el: '#app',
//   data: {
//     catalogItems: [],
//     basketItems: [],
//     catalogUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
//     basketUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
//     show: false,
//     add: '',
//   },
//   methods: {
//     get(url) {
//       return fetch(url).then((d) => d.json());
//     },
//     add(item) {
//       let find = this.catalogItems.find((el) => el.productId == item.productId);
//       if (find) {
//         find.amount++;
//       } else {
//         this.items.push(item);
//       }
//     },

//     remove(id) {
//       let find = this.items.find((el) => el.productId == id);
//       if (find.amount > 1) {
//         find.amount--;
//       } else {
//         this.items.splice(this.items.indexOf(find), 1);
//       }
//     },
//   },
//   computed: {},
//   watch: {},
//   mounted() {
//     this.get(this.catalogUrl).then((items) => {
//       this.catalogItems = items;
//     });
//   },
// });
