<template>
  <div class="row" id="catalog">
    <item v-for="item of this.$store.state.productsItems" :key="item.productId" :item="item"  />
  </div>
</template>

<script>
import item from "./items/item.vue";
import { get } from "../utils/requests.js";

export default {
  components: { item },

  methods: {},
  mounted() {
    get(this.$store.state.productsUrl).then((items) => {
      this.$store.commit("addProductsItems", items);
    });
  },
};
</script>

<style>
</style>
