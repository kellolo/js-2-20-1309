<template>
  <div class="headerCartWrap" id="basket">
    <div class="headerCartWrapBlock"></div>
    <div class="headerCartWrapInAll">
      <div id="basket-items" class="headerCartWrapInAll">
        <item type="basket" v-for="item of items" :item="item" :key="item.productId" />
      </div>

      <div class="headerCartWrapTotalPrice">
        <div>total</div>
        <div>${{ totalPrice }}</div>
      </div>

      <button type="button" class="productsButtonIndex">Checkout</button>
      <button type="button" class="productsButtonIndex">Go to cart</button>
    </div>
  </div>
</template>

<script>
  import item from './item.vue';
  import { get } from '../utils/requests.js';
  export default {
    components: {
      item,
    },
    data() {
      return {
        items: this.$store.state.basket.items,
        url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
      };
    },
    computed: {
      totalPrice() {
        return this.$store.getters['basket/totalPrice'];
      },
    },
    mounted() {
      get(this.url).then(basket => {
        basket.content.forEach(element => {
          this.$store.commit('basket/add', element);
        });
      });
    },
  };
</script>

<style></style>
