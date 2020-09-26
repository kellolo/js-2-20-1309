<template>
<div :class="type == 'catalog' ? 'feturedItem' : 'd-flex headerCartWrapIn mb-1 p-2'">
    <template v-if="type == 'catalog'">
        <div class="feturedImgWrap">
            <div class="feturedBuy">
                <button @click="$parent.$parent.$refs.bask.buy(item)">
                    <div><i class="fas fa-shopping-cart"></i> Add to Cart</div>
                </button>
            </div>
            <img class="feturedProduct" :src="item.productImg" alt="product1">
        </div>
        <div>
                    <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                        <div class="feturedItemName">{{item.productName}}</div>
                        <div class="feturedItemPrice">${{item.productPrice}}</div>
                        <button 
                            class="d-md-none"
                            name="add"
                        >
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
    </template>
    <template v-if="type == 'basket'">
        <img :src="item.productImg" alt="" width="85" height="100">
        <div>
            <div>{{ item.productName }}</div>
            <span>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </span>
            <div class="headerCartWrapPrice">{{ item.amount }}
                <span>x</span> ${{ item.productPrice }}
            </div>

            <button class="fas fa-times-circle" @click="$emit('del', item.productId)">x</button>
        </div>
    </template>
</div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => ({ 
                productName: 'DEFAULT', 
                productPrice: 123 })
        },
        type: {
            type: String,
            default: 'catalog'
        }
    }
}
</script>

<style>

</style>