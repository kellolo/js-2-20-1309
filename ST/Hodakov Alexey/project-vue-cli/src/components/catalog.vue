<template>
  <div class="row" id="catalog">
    <item v-for="item of this.$store.state.catalogItems" :key="item.productId" :item="item" />
  </div>
</template>

<script>
import item from "./items/item.vue";
import { get } from "../utils/requests.js";

export default {
  components: { item },

  methods: {},
  mounted() {
    get(this.$store.state.catalogUrl).then((items) => {
      this.$store.commit("addCatalogItems", items);
    });
  },
};
</script>

<style>
</style>