<template>
<div class="row" id="catalog">
    <item v-for="item of items" :key="item.productId" :item="item" />
</div>
</template>

<script>
import item from './item.vue';
import { get } from '../utils/requests.js';
export default {
    components: { item },
    data() {
        return {
            items: [],
            url: '/api/catalog'
        }
    },
    methods: {
       
    },
    mounted() {
        get(this.url)
            .then(items => {
                this.items = items
            })
    },
}
</script>

<style>

</style>