<template>
<div>
    <div class="feturedItem">
        <div class="feturedImgWrap">
            <div class="feturedBuy">
                <button>
                    <div><i class="fas fa-shopping-cart"></i> Add to Cart</div>
                </button>
            </div>
            <img class="feturedProduct" :src="item.productImg" alt="product1">
        </div>
        <div>
            <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                <div class="feturedItemName">{{ item.productName }}</div>
                <div class="feturedItemPrice">${{ item.productPrice }}</div>
                <button class="d-md-none">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    // props: ['item']
    props: {
        item: {
            type: Object,
            default: () => ({
                productName: 'DEFAULT',
                productPrice: 100500
            })
        }
    }
}
</script>

<style>

</style>
