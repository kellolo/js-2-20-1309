<template>
<div>
   <div id="nav">
      <router-link to="/">Main</router-link>
      <router-link to="/single-page">Single Page</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/shopping-cart">Shopping Cart</router-link>
      <router-link to="/checkout">Checkout</router-link>
    </div>
  <headerSite />
    <router-view />
  <div id="app"></div>
  <footerSite />
  </div>
</template>

<script>
import footerSite from "./components/footerSite.vue";
import headerSite from "./components/headerSite.vue";
import catalog from "./components/catalog.vue";

export default {
  components: { headerSite, catalog, footerSite },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {

  padding: 10px;
  display: flex;
  justify-content: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 15px;

    &.router-link-exact-active {
      color: #f16d7f;
    }
  }
}
</style>
