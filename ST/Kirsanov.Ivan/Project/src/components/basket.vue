<template>
    <div class="headerCartWrap ">
        <div class="headerCartWrapBlock"></div>
        <div class="headerCartWrapInAll" >
            
                <item 
                    v-for="item of items" 
                    :key="item.productId" 
                    type="basket"
                    :item ="item"
                />
            
            <div class="headerCartWrapTotalPrice">
                <div>total</div>
                <div>${{ totalSum }}</div>
            </div>

            <button type="button" class="productsButtonIndex">Checkout</button>
            <button type="button" class="productsButtonIndex">Go to cart</button>
        </div>
    </div>
</template>

<script>
import item from '../components/item.vue'
export default {
    components: { item },
     data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
        }
    },
    methods: {
        get(url) {
            return fetch(url)
            .then(d => d.json());
        },
    },
    mounted() {
        this.get(this.url).then(basket => {this.items = basket.content})
    },
    computed: {
            totalSum(){
              let sum = this.items.reduce((sum, item) => {sum += (item.productPrice * item.amount)
              return sum }, 0);
               return sum ? sum : 0
            }
        },

}
</script>

<style>

</style>