<template>
  <main>
    <!-------------------------------PRODUCT DETAILS START----------------------------->

    <div class="productDetailsAll container" id="basket2">
      <div class="productDetailsTitles">
        <div class="productDetailsTitlesLeft">Product Details</div>
        <div class="productDetailsTitlesRight">
          <div>unite Price</div>
          <div>quantity</div>
          <div>shipping</div>
          <div>Subtotal</div>
          <div>Action</div>
        </div>
      </div>
      <h1 v-show="hide">CART IS EMPTY</h1>
      <item
        v-for="item of this.$store.state.basketItems"
        :key="item.productId"
        :item="item"
        type="basketItem"
      />

      <div class="productDetailsButtons">
        <button @click="clearBasket">cLEAR SHOPPING CART</button>
        <button>cONTINUE sHOPPING</button>
      </div>
    </div>

    <!-------------------------------PRODUCT DETAILS END----------------------------->

    <div class="shipping container">
      <div class="shippingAdress">
        <div class="shippingTitles">Shipping Adress</div>
        <form>
          <select name id="country">
            <option value="Imagination">Imaginationland</option>
            <option value="AF">Afghanistan</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
          </select>
          <input type="text" placeholder="State" pattern="^[a-zA-Z_ ]*$" />
          <input type="text" placeholder="Postcode / Zip" pattern="^[0-9]+$" />
          <button>get a quote</button>
        </form>
      </div>
      <div class="couponDiscount">
        <div class="shippingTitles">coupon discount</div>
        <form>
          <div>Enter your coupon code if you have one</div>
          <input type="text" placeholder="State" pattern="^[a-zA-Z_ ]*$" />
          <button>Apply coupon</button>
        </form>
      </div>
      <div class="proceedToCheckout">
        <div>
          <div class="subTotal">
            sub total
            <span>&#36; {{basketTotal}}</span>
          </div>
          <div class="grandTotal">
            grand total
            <span>&#36; {{basketTotal}}</span>
          </div>
          <button>proceed to checkout</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import item from "../components/items/item.vue";

export default {
  components: { item },
 
  methods: {
    clearBasket() {
      this.$store.commit("clearBasketItem");
    },
  },
  computed: {
    basketTotal() {
      let sum = this.$store.state.basketItems.reduce((total, el) => {
        return (total += el.productPrice * el.amount);
      }, 0);
      return sum ? sum : 0;
    },
    hide() {
        if (this.$store.state.basketItems.length < 1) {
          return (this.show = true);
        } else {
          return (this.show = false);
        }
      },
    },
};
</script>

<style>
</style>