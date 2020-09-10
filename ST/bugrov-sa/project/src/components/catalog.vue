<template>
    <div class="row" id="catalog">
        <item v-for="item of this.$store.state.catalogItems" :key="item.productId" :item="item" />
    </div>
</template>

<script>
import item from './item.vue';
import { get } from '../utils/requests.js'

export default {
    components: { item },
    mounted() {
        get(this.$store.state.catalogUrl)
        .then(items => {this.$store.commit('addCatalogItem', items)});
        console.log(this.$store.state.catalogUrl);
    }
}
</script>

<style>

</style>