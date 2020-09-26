<template>
    <div class="row" id="catalog"> 
        <item v-for="item of items" :key="item.productId" :item="item" @buy="buy" />
    </div>
</template>

<script>
import item from './item.vue';
import {
    get
} from '../utils/requests.js';

export default {
    components: { item },
    data() {
        return {
            items: [],
            //url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
            url: '/api/catalog'
        }
    },
    methods: {
        buy(item) {
            this.$store.commit('buy', item);
        },
    },
    mounted(){
        get(this.url)
        .then(items => {this.items = items});
    }
}
</script>

<style>

</style>