<template>
  <div class="dropdown">
    <button
      class="btn-lg btn btn-secondary"
      type="button"
      @click=" show = !show"
    >My Account</button>
    <div class="dropdown-menu" v-show="show" @mouseleave="show = !show">
      <button class="dropdown-item" type="button">Action</button>
      <button class="dropdown-item" type="button">Another action</button>
      <button class="dropdown-item" type="button">Something else here</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
</style>