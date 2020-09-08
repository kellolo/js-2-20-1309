<template>
<div class="row" id="catalog">
    <item v-for="item of items" :key="item.productId" :item="item" />
</div>
</template>

<script>
import item from './item.vue';
export default {
    components: {
        item
    },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
        }
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        },
    },
    mounted() {
        this.get(this.url)
            .then(items => {
                this.items = items
            })
    }
}
</script>

<style>

</style>
