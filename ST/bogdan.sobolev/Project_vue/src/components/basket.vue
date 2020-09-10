<template>
    <div class="headerCartWrap" id="basket">
        <div class="headerCartWrapBlock"></div>
        <div class="headerCartWrapInAll" >



            <div id="basket-items" class="basket-items">
                <basketitem v-for="item of this.$store.state.basket.items" :key="item.productId" :item="item" @remove="remove" />
            </div>




            <div class="headerCartWrapTotalPrice">
                <div>total</div>
                <div>$500.00</div>
            </div>

            <button type="button" class="productsButtonIndex">Checkout</button>
            <button type="button" class="productsButtonIndex">Go to cart</button>
        </div>
    </div>
</template>

<script>
import basketitem from './basketItem.vue';
import {
    get
} from '../utils/requests.js';

export default {
    components: { basketitem },
    data() {
        return {
        }
    },
    methods: {
        

        remove(id){
            this.$store.commit('remove', id);
        }
    },
    mounted(){
        this.$store.commit('mountedBasket');
    }
}
</script>

<style>

</style>