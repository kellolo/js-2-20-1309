<template>
  <div class="headerCart pr-4">
    <button id="basket-toggler" @click="invisible = !invisible"></button>
    <div class="headerCartWrap" v-show="invisible" id="basket">
      <div class="headerCartWrapBlock"></div>
      <div class="headerCartWrapInAll">
        <div id="basket-items"></div>

        <item v-for="item of basketItems" :key="item.productId" :item="item" />

        <div class="headerCartWrapTotalPrice">
          <div>total</div>
          <div>${{ basketTotal }}</div>
        </div>

        <button type="button" class="productsButtonIndex">Checkout</button>
        <button type="button" class="productsButtonIndex">Go to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import item from "../items/itemBasket.vue"

export default {
  components: { item},
  data() {
    return {
      invisible: false,
      basketItems: [],
      url:
        "https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json",
    };
  },
  methods: {
    get(url) {
      return fetch(url).then((d) => d.json());
    },
    find(item) {
      return this.basketItems.find((el) => el.productId == item.productId);
    },
    // removeBasketItem(item) {
    //   if (item.amount > 1) {
    //     item.amount--;
    //   } else {
    //     this.basketItems.splice(this.basketItems.indexOf(this.find(item)), 1);
    //   }
    // },
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
    this.get(this.url).then((item) => {
      this.basketItems = item.content;
    });
  },
};
</script>

<style>
</style>