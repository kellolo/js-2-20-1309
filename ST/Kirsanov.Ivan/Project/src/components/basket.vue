<template>
    <div class="headerCartWrap ">
        <div class="headerCartWrapBlock"></div>
        <div class="headerCartWrapInAll" >
            
                <!--item 
                    v-for="item of items" 
                    :key="item.productId" 
                    type="basket"
                    :item ="item"
                    :remove = "remove"
                /-->
                <item 
                    v-for="item of items" 
                    :key="item.productId" 
                    type="basket"
                    :item="item"
                    @del="remove"
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
import item from '../components/item.vue';
import { get } from '../utils/requests.js';
export default {
    components: { item },
     data() {
        return {
            items: [],
            //url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
            url: '/api/basket'
        }
    },
    methods: {
        addToBasket(item) {
            let find = this.items.find(el => el.productId == item.productId);
            if (find) {
                find.amount++;
            } else {
                this.items.push(Object.assign({}, item, {amount: 1}));
            }
        },
        remove(id) {
            let find = this.items.find(el => el.productId == id);
            if (find.amount > 1) {
                find.amount--;
            } else {
                this.items.splice(this.items.indexOf(find), 1);
            }
        } 
    },
    mounted() {
        get(this.url).then(basket => {this.items = basket.content})
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