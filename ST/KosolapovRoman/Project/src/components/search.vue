<template>
  <div class="input-group">
    <input
      type="text"
      class="form-control"
      placeholder="Search for Item..."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      v-model.lazy="searchLine"
    />
    <div class="input-group-append" @click="search">
      <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchLine: '',
      };
    },
    methods: {
      search() {
        this.$store.commit('catalog/search', this.searchLine);
      },
    },
  };
</script>

<style></style>
