<template>
  <div>
    <!-- HEADER -->
    <pageHeader />

    <!-- PROMO -->
    <promo />

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
import pageHeader from "../components/header/pageHeader.vue";
import promo from "../components/promo/promo.vue";
import basket from "../components/header/basket.vue";
import catalog from "../components/catalog/catalog.vue";
// 
export default {
  components: {
    pageHeader,
    promo,
    catalog,
    basket,
  },
};
</script>

<style></style>
