<template>
  <div>
    <!-- HEADER -->
    <pageHeader />

    <!-- CATALOG -->
    <section class="catalog container">
      <h2 class="catalog__title title">Fetured Items</h2>
      <h3 class="catalog__subtitle subtitle">Shop for items based on what we featured in this week</h3>
      <!-- items -->
      <catalog />

      <button class="catalog__button button">Browse All Product</button>
    </section>
  </div>
</template>

<script>
import catalog from "../js/catalog.vue";
import basket from "../js/basket.vue";
import pageHeader from "../js/pageHeader.vue";

export default {
  components: {
    catalog,
    basket,
    pageHeader,
  },
  methods: {
    find(item) {
      return this.basketItems.find((el) => {
        el.productId == item.productId;
      });
    },
  },
};
</script>

<style>
</style>