<template>
<div class="headerCartWrap" id="basket">
    <div class="headerCartWrapBlock"></div>
    <div class="headerCartWrapInAll">
        <div id="basket-items" class="headerCartWrapInAll">
            <!--item type="basket" v-for="item of items" :item="item" :key="item.productId" :remove="remove" /-->
            <item type="basket" v-for="item of items" :item="item" :key="item.productId" @del="remove" />
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
import item from './item.vue';
import {
    get
} from '../utils/requests.js';
export default {
    components: {
        item
    },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
        }
    },
    methods: {
        buy(item) {
            let find = this.items.find(el => el.productId == item.productId);
            if (find) {
                find.amount++;
            } else {
                this.items.push(Object.assign({}, item, {
                    amount: 1
                }))
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
        get(this.url)
            .then(basket => {
                this.items = basket.content
            })
    }
}
</script>

<style>

</style>
