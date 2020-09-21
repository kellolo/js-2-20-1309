<template>
  <div>
    <header class="container px-0 my-4">
      <div class="row col-12 d-flex px-0 mx-0">
        <div
          class="logo d-flex justify-content-center px-0 col-7 col-xl-2 offset-xl-0 col-lg-2 offset-lg-0 col-md-3 offset-md-4 col-sm-4 offset-sm-4"
        >
          <a href="#" class="pr-2">
            <img src="../assets/imgs/logo.png" alt="logo" />
          </a>
          <a href="#" class="pr-3 pr-xl-3 pr-lg-0 pr-md-2 pr-sm-2 brand">
            bran
            <span>d</span>
          </a>
        </div>

        <search />

        <div
          class="row headerAccountAndCart d-none align-items-center col-12 offset-0 px-0 pt-3 mx-auto justify-content-center col-xl-2 offset-xl-3 mt-xl-0 col-lg-3 offset-lg-2 pt-lg-0 col-md-3 offset-md-2 mt-md-0 mr-md-0 d-md-flex col-sm-4 offset-sm-4 pt-sm-3 justify-content-sm-end"
        >
          <basket />
          <account />
        </div>
      </div>

      <div class="row mx-0 d-md-none pt-3 justify-content-between">
        <div class="burgermenu justify-content-between align-items-center col-2 pt-1 col-sm-6">
          <div class="dropdown">
            <button
              class="btn btn-secondary px-4 pt-2"
              type="button"
               @click=" show = !show"
            >
              <i class="burgerMenu fas fa-bars"></i>
            </button>
            <div class="dropdown-menu"  v-show="show" @mouseleave="show = !show">
              <a href="#" class="dropdown-item" type="button">home</a>
              <a href="#" class="dropdown-item" type="button">man</a>
              <a href="#" class="dropdown-item" type="button">women</a>
              <a href="#" class="dropdown-item" type="button">kids</a>
              <a href="#" class="dropdown-item" type="button">accessories</a>
              <a href="#" class="dropdown-item" type="button">featured</a>
              <a href="#" class="dropdown-item" type="button">hot deals</a>
            </div>
          </div>
        </div>

        <div
          class="headerAccountAndCart d-flex align-items-center justify-content-end col-2 pt-1 col-sm-6"
        >
          <basket />
          <account />
        </div>
      </div>
    </header>

    <div class="headerLine"></div>
    <navigation />
    <newArrivals />
  </div>
</template>

<script>
import newArrivals from "./header/newArrivals.vue";
import navigation from "./header/navigation.vue";
import account from "./header/account.vue";
import basket from "./header/basket.vue";
import search from "./header/search.vue";

export default {
  components: { search, basket, account, navigation, newArrivals },
   data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
</style>