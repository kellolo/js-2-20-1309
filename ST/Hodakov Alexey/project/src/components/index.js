export default () => {
  const app = new Vue({
    el: "#app",
    data: {
      catalogUrl:
        "https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json",
      basketUrl:
        "https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json",
      catalogItems: [],
      basketItems: [],
      invisible: false,
    },

    methods: {
      get(url) {
        return fetch(url).then((d) => d.json());
      },
      find(item) {
        return this.basketItems.find((el) => el.productId == item.productId);
      },
      addBasketItem(item) {
        if (this.find(item)) {
          this.find(item).amount++;
        } else {
          this.basketItems.push(Object.assign({}, item, { amount: 1 }));
        }
      },

      removeBasketItem(item) {
        if (item.amount > 1) {
          item.amount--;
        } else {
          this.basketItems.splice(this.basketItems.indexOf(this.find(item)), 1);
        }
      },
    },

    computed: {
      basketTotal() {
        let sum = this.basketItems.reduce((total, el) => {
          return (total += el.productPrice * el.amount);
        }, 0);
        return sum ? sum : 0;
      },
    },

    mounted() {
      this.get(this.catalogUrl).then((item) => (this.catalogItems = item));
      this.get(this.basketUrl).then(
        (item) => (this.basketItems = item.content)
      );
    },
  });
};
