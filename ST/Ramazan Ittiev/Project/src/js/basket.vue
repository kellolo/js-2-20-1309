<template>
  <div class="cart" id="basket">
    <div class="cart__item" id="basket-items" v-for="item of basketItems" :key="item.productId">
      <img
        class="cart__item-img"
        :src="item.productImg"
        alt="item.productName"
        width="80"
        height="80"
      />
      <div class="cart__item-info">
        <h4 class="cart__item-title">{{item.productName}}</h4>
        <span class="cart__item-price">
          1
          <span class="cart__item-ammount">x</span>
          ${{ item.productPrice }}
        </span>
        <button class="cart__item-remove" v-on:click="remove">
          <i class="fas fa-times-circle"></i>
        </button>
      </div>
    </div>

    <div class="cart__price">TOTAL</div>
    <footer class="cart__footer">
      <button class="cart__footer-checkout">Checkout</button>
      <button class="cart__footer-cart">Go to cart</button>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basketItems: [],
      basketAmmount: "",
      url:
        "https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json",
    };
  },
  methods: {
    get(url) {
      return fetch(url).then((d) => d.json());
    },

    remove(item) {
      if (item.amount > 1) {
        item.amount--;
      } else {
        this.basketItems.splice(this.basketItems.indexOf(find), 1);
      }
    },
  },
  mounted() {
    this.get(this.url).then((items) => {
      this.basketItems = items.content;
    });
    this.get(this.url).then((items) => {
      this.basketAmmount = items.amount;
    });
  },
};
</script>

<style>
</style>