<template>
  <div
    :class="type == 'catalog'? 'col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 col-lg-3 feturedItems': 'd-flex headerCartWrapIn mb-1 p-2' "
  >
    <template v-if="type == 'catalog'">
      <div class="feturedItem">
        <div class="feturedImgWrap">
          <div class="feturedBuy">
             <button @click="add(item)">
              <div>
                <i class="fas fa-shopping-cart"></i> Add to Cart
              </div>
            </button>
          </div>
          <img class="feturedProduct" :src="item.productImg" alt="product" />
        </div>
        <div>
          <div
            class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start"
          >
            <div class="feturedItemName">{{item.productName}}</div>
            <div class="feturedItemPrice">${{item.productPrice}}</div>
            <button class="d-md-none" name="add">
              <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </template>

    <template v-if="type == 'basket'">
      <img :src="item.productImg" alt width="85" height="100" />
      <div>
        <div>{{item.productName}}</div>
        <span>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </span>
        <div class="headerCartWrapPrice">
          {{item.amount}}
          <span>x</span>
          ${{item.productPrice}}
        </div>
      </div>
      <button class="fas fa-times-circle" @click="remove(item)"></button>
    </template>

    <template v-if="type == 'catalogalso'">
      <div class="feturedItem">
        <div class="feturedImgWrap">
          <div class="feturedBuy">
             <button @click="add(item)">
              <div>
                <i class="fas fa-shopping-cart"></i> Add to Cart
              </div>
            </button>
          </div>
          <img class="feturedProduct" :src="item.productImg" alt="product" />
        </div>
        <div>
          <div
            class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start"
          >
            <div class="feturedItemName">{{item.productName}}</div>
            <div class="feturedItemPrice">${{item.productPrice}}</div>
            <button class="d-md-none" name="add">
              <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({ product: "DEFAULT", productPrice: 0 }),
    },
    type: {
      type: String,
      default: "catalog",
    },
  },
  methods: {
    remove(item){
      this.$store.commit("removeBasketItem", item)
    },
    add(item){
      this.$store.commit("addBasketItem", item)
    }
  }
};
</script>

<style>
</style>