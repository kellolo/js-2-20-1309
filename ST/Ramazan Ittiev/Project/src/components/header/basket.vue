<template>
  <div class="cart" id="basket">
    <item
      type="basket"
      v-for="item of basketItems"
      :item="item"
      :key="item.productId"
      @del="remove"
    />
    <!-- <p>Total Number of Items: {{totalNumberOfCartItems}}</p> -->

    <div class="cart__price">
      <span>TOTAL</span>
      <span>${{ total }}</span>
    </div>
    <footer class="cart__footer">
      <button class="cart__footer-checkout">Checkout</button>
      <button class="cart__footer-cart">Go to cart</button>
    </footer>
  </div>
</template>

<script>
import item from "../item/item.vue";
// import store from "../store/store.js";
import { get } from "../../utils/requests.js";

export default {
  data() {
    return {
      basketItems: [],
      // url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
      url: "/api/basket",
    };
  },
  components: {
    item,
  },
  methods: {
    buy(item) {
      let find = this.basketItems.find((el) => el.productId == item.productId);
      if (find) {
        find.amount++;
      } else {
        this.basketItems.push(
          Object.assign({}, item, {
            amount: 1,
          })
        );
      }
    },
    remove(id) {
      let find = this.basketItems.find((el) => el.productId == id);
      if (find.amount > 1) {
        find.amount--;
      } else {
        this.basketItems.splice(this.basketItems.indexOf(find), 1);
      }
    },
  },
  mounted() {
    get(this.url).then((items) => {
      this.basketItems = items.content;
    });
  },
  computed: {
    total() {
      let total = this.basketItems.reduce((sum, nextItem) => {
        return (sum += nextItem.amount * nextItem.productPrice);
      }, 0);
      return total;
    },
    // totalNumberOfCartItems() {
    //   return this.$store.getters.totalNumberOfCartItems;
    // },
  },
};
</script>

<style></style>
