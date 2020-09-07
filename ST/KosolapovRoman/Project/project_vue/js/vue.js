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
        item.amount = 1;
        this.basketItems.push(item);
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

  computed: {},

  mounted() {
    this.get(this.catalogUrl).then((item) => (this.catalogItems = item));
    this.get(this.basketUrl).then((item) => (this.basketItems = item.content));
  },
});
