<template>
    <div class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 col-lg-3 feturedItems ">
        <div class="feturedItem">
            <div class="feturedImgWrap">
                <div class="feturedBuy">
                    <button name="add" @click="$emit('buy', item)">
                        <div><i class="fas fa-shopping-cart"></i> Add to Cart </div>
                    </button>
                </div>
                <img :src="item.productImg" class="feturedProduct" alt="product1">
            </div>
            <div>
                <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                    <div class="feturedItemName">{{ item.productName }}</div>
                    <div class="feturedItemPrice">${{ item.productPrice }}</div>
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
                productPrice: 100500,
            })
        }
    },
    methods: {
        test(){
            console.log(this);
        },
        increment() {
            this.$store.commit('increment')
            console.log(this.$store.state.count)
        }
    },
}
</script>

<style>

</style>