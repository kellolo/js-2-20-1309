<template> 
    <div>
        <div class="d-flex headerCartWrapIn">
            <a href="#" class="d-flex ">
                <img :src="item.productImg" alt="" height="60" width="50"> 
                <div>
                    <div>{{ item.productName }}</div> 
                    <span>
                        <i aria-hidden="true" class="fas fa-star"></i> 
                        <i aria-hidden="true" class="fas fa-star"></i> 
                        <i aria-hidden="true" class="fas fa-star"></i> 
                        <i aria-hidden="true" class="fas fa-star"></i> 
                        <i aria-hidden="true" class="fas fa-star-half-alt"></i>
                        </span> 
                        <div class="headerCartWrapPrice">4
                            <span>x</span> ${{ item.productPrice }}
                        </div>
                            </div>
                            </a> 
                            <a href="#">
                                <i aria-hidden="true" class="fas fa-times-circle"></i>
                            </a>
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
                productPrice: null
            })
        }
    }
}
</script>

<style>

</style>