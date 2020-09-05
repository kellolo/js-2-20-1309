const app = new Vue({
  el: '#app',
  data: {
    catalogItems: [],
    catalogUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
    show: false,
  },
  methods: {
    get(url) {
      return fetch(url).then((d) => d.json());
    },
  },
  computed: {},
  watch: {},
  mounted() {
    this.get(this.catalogUrl).then((items) => {
      this.catalogItems = items;
    });
  },
});
