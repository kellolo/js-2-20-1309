<template>    
    <div class="headerCartWrap" id="basket" v-show="this.$store.state.basketShow">
        <div class="headerCartWrapBlock"></div>
        <div class="headerCartWrapInAll">
            <div id="basket-items" class="headerCartWrapInAll">
                <item v-for="item of this.$store.state.basketItems" :key="item.productId" :item="item" type="basket" />
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
import { get } from '../utils/requests.js'

export default {    
    components: { item },
    mounted() {
        get(this.$store.state.basketUrl)
        .then(items => {this.$store.commit('addBasketItem', items)})
    },
    computed: {
        total() {
            let sum = this.$store.state.basketItems.reduce((sum, item) => (sum + item.productPrice * item.amount), 0);
            return sum ? sum : 0;
        }
    }
}
</script>

<style>

</style>