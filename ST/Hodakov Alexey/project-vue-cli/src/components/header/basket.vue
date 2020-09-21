<template>
  <div class="headerCart pr-4">
    <button id="basket-toggler" @click="invisible = !invisible"></button>
    <div class="headerCartWrap" v-show="invisible" id="basket">
      <div class="headerCartWrapBlock"></div>
      <div class="headerCartWrapInAll" @mouseleave="invisible = !invisible" >
        <div id="basket-items"></div>

        <item
          type="basket"
          v-for="item of this.$store.state.basketItems"
          :key="item.productId"
          :item="item"
        />

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
import item from "../items/item.vue";
import { get } from "../../utils/requests.js";

export default {
  components: { item },
  data() {
    return {
      invisible: false,
    };
  },
  methods: {
    find(item) {
      return this.items.find((el) => el.productId == item.productId);
    },
  },

  computed: {
    basketTotal() {
      let sum = this.$store.state.basketItems.reduce((total, el) => {
        return (total += el.productPrice * el.amount);
      }, 0);
      return sum ? sum : 0;
    },
  },

  mounted() {
    get(this.$store.state.basketUrl).then((item) => {
      this.$store.commit('addBasketItems', item);
    });
  },
};
</script>

<style>
</style>