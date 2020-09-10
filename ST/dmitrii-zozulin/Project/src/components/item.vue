<template>
  <div :class="type == 'catalog' ? 'feturedItem' : 'd-flex headerCartWrapIn mb-1 p-2'">
    <template v-if="type == 'catalog'">
      <div class="feturedImgWrap">
        <div class="feturedBuy">
          <button @click="buy(item)">
            <div><i class="fas fa-shopping-cart"></i> Add to Cart</div>
          </button>
        </div>
        <img class="feturedProduct" :src="item.productImg" alt="product1" />
      </div>
      <div>
        <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
          <div class="feturedItemName">{{ item.productName }}</div>
          <div class="feturedItemPrice">${{ item.productPrice }}</div>
        </div>
      </div>
    </template>
    <template v-if="type == 'basket'">
      <img :src="item.productImg" alt="" width="85" height="100" />
      <div>
        <div>{{ item.productName }}</div>
        <span>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </span>
        <div class="headerCartWrapPrice">{{ item.amount }} <span>x</span> ${{ item.productPrice }}</div>

        <button class="fas fa-times-circle" @click="remove(item.productId)">x</button>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default: () => ({
          productName: 'DEFAULT',
          productPrice: 100500,
        }),
      },
      type: {
        type: String,
        default: 'catalog',
      },
    },
    methods: {
      buy(item) {
        this.$store.commit('basket/add', item);
      },
      remove(id) {
        this.$store.commit('basket/remove', id);
      },
    },
  };
</script>

<style></style>
