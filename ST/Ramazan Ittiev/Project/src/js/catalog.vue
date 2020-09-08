<template>
  <div class="catalog__wrapper" id="catalog">
    <item type="catalog" v-for="item of catalogItems" :key="item.productId" :item="item" />
  </div>
</template>

<script>
import item from '../js/item.vue';
import { get } from '../utils/requests.js';

export default {
  data() {
    return {
      catalogItems: [],
      // url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
      url: '/api/catalog',
    };
  },
  components: {
    item,
  },
  methods: {},

  mounted() {
    get(this.url).then((items) => {
      this.catalogItems = items;
    });
  },
};
</script>

<style></style>
