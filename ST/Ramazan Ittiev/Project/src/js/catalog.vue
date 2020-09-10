<template>
  <div class="catalog__wrapper" id="catalog">
    <a class="item" v-for="item of catalogItems" :key="item.productId" :item="item">
      <div class="item__overlay">
        <button class="item__button" v-on:click="add">Add to Cart</button>
      </div>
      <img class="item__img" :src="item.productImg" alt="#" width="260" height="280" />
      <footer class="item__footer">
        <h4 class="item__title">{{ item.productName }}</h4>
        <span class="item__price">{{ item.productPrice }}</span>
      </footer>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({
        productName: "DEFAULT",
        productPrice: 100500,
      }),
    },
  },
  data() {
    return {
      catalogItems: [],
      url:
        "https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json",
    };
  },
  methods: {
    get(url) {
      return fetch(url).then((d) => d.json());
    },
  },

  mounted() {
    this.get(this.url).then((items) => {
      this.catalogItems = items;
    });
  },
};
</script>

<style>
</style>