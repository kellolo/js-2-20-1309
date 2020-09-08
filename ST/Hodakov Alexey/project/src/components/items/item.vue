<template>
  <div class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 col-lg-3 feturedItems">
    <div class="feturedItem">
      <div class="feturedImgWrap">
        <div class="feturedBuy">
          <button>
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
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({ product: "DEFAULT", productPrice: 0 }),
    },
  },
};
</script>

<style>
</style>