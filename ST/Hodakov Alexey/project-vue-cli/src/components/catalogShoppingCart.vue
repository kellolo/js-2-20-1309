<template>
  <div>
    <item
      v-for="item of this.$store.state.basketItems"
      :key="item.productId"
      :item="item"
      type="basketItem"
    />
  </div>
</template>

<script>
import item from "./items/item.vue";

export default {
  components: { item },
  methods: {},
  mounted() {},
};
</script>

<style>
</style>