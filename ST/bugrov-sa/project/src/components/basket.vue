<template>
    <div class="headerCartWrap" id="basket" v-show="showBasket">
        <div class="headerCartWrapBlock"></div>
        <div class="headerCartWrapInAll">
            <div id="basket-items" class="headerCartWrapInAll">
                <item v-for="item of items" :key="item.productId" :item="item" :isCatalog="false" />
            </div>
            <div class="headerCartWrapTotalPrice">
                <div>total</div>
                <div>${{ total }}</div>
            </div>

            <button type="button" class="productsButtonIndex">Checkout</button>
            <button type="button" class="productsButtonIndex">Go to cart</button>
        </div>
    </div>
</template>

<script>
import item from './item.vue';

export default {    
    components: { item },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
            showBasket: true,
        }
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json());
        },
    },
    mounted() {
        this.get(this.url)
        .then(items => {this.items = items.content})
    },
    computed: {
        total() {
            let sum = this.items.reduce((sum, item) => (sum + item.productPrice * item.amount), 0);
            return sum ? sum : 0;
        }
    }
}
</script>

<style>

</style>