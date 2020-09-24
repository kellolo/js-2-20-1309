<template>
  <div class="headerCart pr-4">
    <button id="basket-toggler" @click="invisible = !invisible"></button>
    <div class="headerCartWrap" v-show="invisible" id="basket">
      <div class="headerCartWrapBlock"></div>
      <div class="headerCartWrapInAll">
        <div id="basket-items"></div>

        <item
          type="basket"
          v-for="item of items"
          :key="item.productId"
          :item="item"
          @remove-item="removeBasketItem"
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
import { get, post, put, del } from "../../utils/requests.js";

export default {
  components: { item },
  data() {
    return {
      invisible: false,
      items: [],
      url: "/api/basket",
    };
  },
  methods: {
    find(item) {
      return this.items.find((el) => el.productId == item.productId);
    },

    removeBasketItem(item) {
      if (item.amount > 1) {
        put(`${this.url}/${item.productId}`, { amount: -1 }).then((s) => {
          if (s) {
            item.amount--;
          }
        });
      } else {
        del(`${this.url}/${item.productId}`).then((s) => {
          if (s) {
            this.items.splice(this.items.indexOf(this.find(item)), 1);
          }
        });
      }
    },

    addBasketItem(item) {
      if (this.find(item)) {
        put(`${this.url}/${item.productId}`, { amount: 1 }).then((s) => {
          if (s) {
            this.find(item).amount++;
          }
        });
      } else {
        let newItem = Object.assign({}, item, { amount: 1 });
        post(this.url, newItem).then((s) => {
          if (s) {
            this.items.push(newItem);
          }
        });
      }
    },
  },

  computed: {
    basketTotal() {
      let sum = this.items.reduce((total, el) => {
        return (total += el.productPrice * el.amount);
      }, 0);
      return sum ? sum : 0;
    },
  },

  mounted() {
    get(this.url).then((item) => {
      this.items = item.content;
    });
  },
};
</script>

<style>
</style>