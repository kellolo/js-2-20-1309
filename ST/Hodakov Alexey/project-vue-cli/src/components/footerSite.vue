<template>
  <div>
    <subscribe />
    <footerComponent />
    <copyright />
  </div>
</template>

<script>
import footerComponent from "./footer/footer.vue";
import subscribe from "./footer/subscribe.vue";
import copyright from "./footer/copyrights.vue"

export default {
  components: { footerComponent, subscribe, copyright },
};
</script>

<style>
</style>