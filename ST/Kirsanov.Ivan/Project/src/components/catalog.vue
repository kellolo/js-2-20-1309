<template>
    <div class="row" id="catalog">
        <item   
            class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 col-lg-3 feturedItems"
            type = "catalog"
            v-for="item of items" :key="item.productId" :item ="item"
         />
    </div>
</template>

<script>
import item from '../components/item.vue';
export default {
    components: { item },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
        }
    },
    methods: {
        get(url) {
            return fetch(url)
            .then(d => d.json());
        },
    },
    mounted() {
        this.get(this.url).then(items => {this.items = items})
    }
}
</script>

<style>

</style>