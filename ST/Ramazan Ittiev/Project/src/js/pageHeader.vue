<template>
  <header class="header container">
    <div class="header__input_wrapper">
      <a href="#" class="logo">
        <img :src="logo" alt="Brand-Logo" />
      </a>
      <button class="browse__dropdown">Browse</button>
      <input class="header__input" type="search" placeholder="Search for Item..." />
      <button class="search-btn"></button>
    </div>
    <div class="header__search_wrapper">
      <button class="cart__btn" id="basket-toggler" v-on:click="show = !show">
        <img :src="cart" alt="Cart" />
      </button>

      <!-- BASKET -->
      <basket ref="bask" v-show="show" />

      <button class="account__dropdown">My account</button>
    </div>
    <nav class="header__menu">
      <ul class="header__list">
        <li class="header__list-item">
          <a href="#" class="header__list-link" type="button">home</a>
        </li>
        <li class="header__list-item">
          <a href="#" class="header__list-link" type="button">man</a>
        </li>
        <li class="header__list-item">
          <a href="#" class="header__list-link" type="button">women</a>
        </li>
        <li class="header__list-item">
          <a href="#" class="header__list-link" type="button">women</a>
        </li>
        <li class="header__list-item">
          <a href="#" class="header__list-link" type="button">kids</a>
        </li>
        <li class="header__list-item">
          <a href="#" class="header__list-link" type="button">accessories</a>
        </li>
        <li class="header__list-item">
          <a href="#" class="header__list-link" type="button">featured</a>
        </li>
        <li class="header__list-item">
          <a href="#" class="header__list-link" type="button">hot deals</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import item from '../js/item.vue';

import basket from '../js/basket.vue';

import cart from '../img/cart.svg';
import logo from '../img/logo.png';

export default {
  data() {
    return {
      cart,
      logo,
      show: false,
    };
  },
  components: {
    basket,
  },
};
</script>

<style></style>
