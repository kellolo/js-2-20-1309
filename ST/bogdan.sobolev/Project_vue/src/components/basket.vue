<template>
    <div class="headerCartWrap" id="basket">
        <div class="headerCartWrapBlock"></div>
        <div class="headerCartWrapInAll" >



            <div id="basket-items" class="basket-items">
                <basketitem v-for="item of items" :key="item.productId" :item="item" />
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

export default {
    components: { basketitem },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
        }
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        },
        remove(id){
            let itemBasket = this.items.find(el => el.productId == id);
            if (itemBasket.amount > 1){
                itemBasket.amount--;
            } else {
                this.items.splice(this.items.indexOf(itemBasket), 1);
            }
        },
    },
    mounted(){
        this.get(this.url)
        .then(items => {this.items = items.content});
    }
}
</script>

<style>

</style>