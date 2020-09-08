<template>
    <div>
        <div v-if="isCatalog">
            <div class="feturedItem">
                <div class="feturedImgWrap">
                    <div class="feturedBuy">
                        <button @click="buy(item)">
                            <div><i class="fas fa-shopping-cart"></i> Add to Cart</div>
                        </button>
                    </div>
                    <img class="feturedProduct" :src="item.productImg" alt="product1">
                </div>
                <div>
                    <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                        <div class="feturedItemName">{{ item.productName }}</div>
                        <div class="feturedItemPrice">${{ item.productPrice }}</div>
                        <button class="d-md-none" @click="buy(item)">
                            <i class="fas fa-shopping-  cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="!isCatalog">
            <div 
                class="d-flex headerCartWrapIn mb-1 p-2"
            >
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

                    <button class="fas fa-times-circle"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => ({
                productName: 'DEFAULT',
                producrPrice: 0
            })
        },
        isCatalog: {
            type: Boolean,
            default: () => true,
        },
        buy: {
            type: Function,
        }
    }
}
</script>

<style>

</style>