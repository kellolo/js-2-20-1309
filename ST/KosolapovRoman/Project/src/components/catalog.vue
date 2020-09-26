<template>
  <div class="row" id="catalog">
    <item v-for="item of filteredItems" :key="item.productId" :item="item" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import item from './item.vue';
  import { get } from '../utils/requests.js';
  export default {
    components: {
      item,
    },
    data() {
      return {
        items: this.$store.state.catalog.items,
        filteredItems: this.$store.state.catalog.items,
        searchLine: this.$store.state.catalog.searchLine,
        url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
      };
    },
    watch: {
      searchLine: () => {
        this.filteredItems = this.items.filter(item => item.productName.match(new RegExp(this.searchLine, 'i')));
      },
    },
    mounted() {
      get(this.url).then(items => {
        items.forEach(item => {
          this.$store.commit('catalog/add', item);
        });
      });
    },
  };
</script>

<style></style>
