<template>
  <div :class="containerType">
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
            <div class="feturedItemName d-flex justify-content-center w-100">{{item.productName}}</div>
            <div class="feturedItemPrice d-flex justify-content-center w-100">${{item.productPrice}}</div>
            <button class="d-md-none" @click="add(item)">
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
                <i class="w-70 fas fa-shopping-cart"></i>
                ${{item.productPrice}}
              </div>
            </button>
          </div>
          <img class="feturedProduct" :src="item.productImg" alt="product" />
        </div>
        <div>
          <div
            class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start"
          >
            <div class="feturedItemName d-flex justify-content-center w-100">{{item.productName}}</div>
            <button class="d-md-none" @click="add(item)">
              <i class="fas fa-shopping-cart"></i>
              $ {{item.productPrice}}
            </button>
          </div>
        </div>
      </div>
    </template>

    <template v-if="type == 'basketItem'">
      <div class="productDetailsDescription">
        <img :src="item.productImg" alt="ProductCart" width="100px" />
        <div class="productDescription">
          <div class="productDescriptionTitle">Mango People T-shirt</div>
          <div>
            <div class="productDescriptionFeature">
              Color:
              <span>Red</span>
            </div>
            <div class="productDescriptionFeature">
              Size:
              <span>Xll</span>
            </div>
          </div>
        </div>
      </div>
      <div class="productDetailsRight">
        <div class="productDetailsPrice">&#36; {{item.productPrice}}</div>
        <div class="productDetailsQuantity">{{item.amount}}</div>
        <div class="productDetailsShipping">Free</div>
        <div class="productDetailsSubtotal">&#36; {{item.productPrice * item.amount}}</div>
        <div class="productDetailsAction"  @click="delItem(item)">
          <i class="fas fa-times-circle"></i>
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
  computed: {
    containerType() {
      switch (this.type) {
        case "basket":
          return "d-flex headerCartWrapIn mb-1 p-2";
        case "catalog":
          return "col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 col-lg-3 feturedItems";
        case "catalogalso":
          return "col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 col-lg-3 feturedItems";
        case "basketItem":
          return "productDetailsProduct";
      }
    },
  },
  methods: {
    remove(item) {
      this.$store.commit("removeBasketItem", item);
    },
    add(item) {
      this.$store.commit("addBasketItem", item);
    },
    delItem(item) {
      this.$store.commit("deleteBasketItem", item);
    },
  },
};
</script>

<style>
</style>