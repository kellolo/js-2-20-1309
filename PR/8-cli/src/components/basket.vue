<template>
<div class="headerCartWrap" id="basket">
    <div class="headerCartWrapBlock"></div>
    <div class="headerCartWrapInAll">
        <div 
            id="basket-items" 
            class="headerCartWrapInAll"
        >
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
import { get, post, put, del } from '../utils/requests.js';
export default {
    components: {
        item
    },
    data() {
        return {
            items: [],
            url: '/api/basket'
        }
    },
    methods: {
        buy(item) {
            let find = this.items.find(el => el.productId == item.productId);
            if (find) {
                put(`${this.url}/${item.productId}`, { amount: 1 }) // id == '123' >>> /api/basket/123
                    .then(s => {
                        if (s) {
                            find.amount++;
                        }
                    })
            } else {
                let newItem = Object.assign({}, item, { amount: 1 });
                post(this.url, newItem)
                    .then(s => {
                        if (s) {
                            this.items.push(newItem)
                        }
                    })
            }
        },
        remove(id) {
            let find = this.items.find(el => el.productId == id);
            if (find.amount > 1) {
                put(`${this.url}/${id}`, { amount: -1 })
                    .then(s => {
                        if (s) {
                            find.amount--;
                        }
                    })
            } else {
                del(`${this.url}/${id}`)
                    .then(s => {
                        if (s) {
                            this.items.splice(this.items.indexOf(find), 1);
                        }
                    })
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
