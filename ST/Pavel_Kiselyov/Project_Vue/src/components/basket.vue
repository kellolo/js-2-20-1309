<template>
        <div id="basket" class="headerCartWrap">
                <item v-for="item of items" :key="item.productId" :item="item" />
        <div class="headerCartWrapInAll"> 
            <div class="headerCartWrapTotalPrice">
                <div>total</div> 
                <div>$0</div>
            </div> 
            <button type="button" class="productsButtonIndex">Checkout</button> 
            <button type="button" class="productsButtonIndex">Go to cart</button>
        </div>
    </div>
</template>

<script>
import item from './itemBasket.vue';
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
                this.items = items;
            })
    }
}
</script>

<style>

</style>
