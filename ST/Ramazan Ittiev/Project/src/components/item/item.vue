<template>
  <div :class="type == 'catalog' ? 'item' : 'cart__item'">
    <template v-if="type == 'catalog'">
      <a class="item">
        <div class="item__overlay">
          <button class="item__button" @click="$parent.$parent.$children[0].$refs.bask.buy(item)">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
        <img class="item__img" :src="item.productImg" alt="#" width="260" height="280" />
        <footer class="item__footer">
          <h4 class="item__title">{{ item.productName }}</h4>
          <span class="item__price">{{ item.productPrice }}</span>
        </footer>
      </a>
    </template>
    <template v-if="type == 'basket'">
      <div class="cart__item" id="basket-items">
        <img
          class="cart__item-img"
          :src="item.productImg"
          alt="item.productName"
          width="80"
          height="80"
        />
        <div class="cart__item-info">
          <h4 class="cart__item-title">{{ item.productName }}</h4>
          <span class="cart__item-price">
            {{ item.amount }}
            <span class="cart__item-ammount">x</span>
            ${{ item.productPrice }}
          </span>
          <button class="cart__item-remove" @click="$emit('del', item.productId)">
            <i class="fas fa-times-circle"></i>
          </button>
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
};
</script>

<style></style>
