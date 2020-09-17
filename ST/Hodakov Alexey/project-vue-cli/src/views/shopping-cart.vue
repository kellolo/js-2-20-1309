<template>
  <main>

    <!-------------------------------PRODUCT DETAILS START----------------------------->

    <div class="productDetailsAll container" id="basket2">
        <div class="productDetailsTitles">
            <div class="productDetailsTitlesLeft">Product Details</div>
            <div class="productDetailsTitlesRight">
                <div>unite Price</div>
                <div>quantity</div>
                <div>shipping</div>
                <div>Subtotal</div>
                <div>Action</div>
            </div>
        </div>

        <div class="productDetailsProduct">
            <div class="productDetailsDescription">
                <img src="https://raw.githubusercontent.com/kellolo/static/master/img/JS1_shop/ProductDetails1.jpg" alt="Product1">
                <div class="productDescription">
                    <div class="productDescriptionTitle">Mango  People  T-shirt</div>
                    <div>
                        <div class="productDescriptionFeature">Color: <span>Red</span></div>
                        <div class="productDescriptionFeature">Size: <span>Xll</span></div>
                    </div>
                </div>
            </div>
            <div class="productDetailsRight">
                <div class="productDetailsPrice">&#36; 150</div>
                <div class="productDetailsQuantity">
                    <form>
                        <input type="number" min="0" max="9999" value="1">
                    </form>
                </div>
                <div class="productDetailsShipping">Free</div>
                <div class="productDetailsSubtotal">&#36; 300</div>
                <div class="productDetailsAction"><i class="fas fa-times-circle"></i></div>
            </div>
        </div>

        <div class="productDetailsProduct">
            <div class="productDetailsDescription">
                <img src="https://raw.githubusercontent.com/kellolo/static/master/img/JS1_shop/ProductDetails2.jpg" alt="Product2">
                <div class="productDescription">
                    <div class="productDescriptionTitle">Mango  People  T-shirt</div>
                    <div>
                        <div class="productDescriptionFeature">Color: <span>Red</span></div>
                        <div class="productDescriptionFeature">Size: <span>Xll</span></div>
                    </div>
                </div>
            </div>
            <div class="productDetailsRight">
                <div class="productDetailsPrice">&#36; 150</div>
                <div class="productDetailsQuantity">
                    <form>
                        <input type="number" min="0" max="9999" value="1">
                    </form>
                </div>
                <div class="productDetailsShipping">Free</div>
                <div class="productDetailsSubtotal">&#36; 300</div>
                <div class="productDetailsAction"><i class="fas fa-times-circle"></i></div>
            </div>
        </div>

        <div class="productDetailsProduct">
            <div class="productDetailsDescription">
                <img src="https://raw.githubusercontent.com/kellolo/static/master/img/JS1_shop/ProductDetails3.jpg" alt="Product3">
                <div class="productDescription">
                    <div class="productDescriptionTitle">Mango  People  T-shirt</div>
                    <div>
                        <div class="productDescriptionFeature">Color: <span>Red</span></div>
                        <div class="productDescriptionFeature">Size: <span>Xll</span></div>
                    </div>
                </div>
            </div>
            <div class="productDetailsRight">
                <div class="productDetailsPrice">&#36; 150</div>
                <div class="productDetailsQuantity">
                    <form>
                        <input type="number" min="0" max="9999" value="1">
                    </form>
                </div>
                <div class="productDetailsShipping">Free</div>
                <div class="productDetailsSubtotal">&#36; 300</div>
                <div class="productDetailsAction"><i class="fas fa-times-circle"></i></div>
            </div>
        </div>
        <div class="productDetailsButtons">
            <button>cLEAR SHOPPING CART</button>
            <button>cONTINUE sHOPPING</button>
        </div>
    </div>

    <!-------------------------------PRODUCT DETAILS END----------------------------->

    <div class="shipping container">
        <div class="shippingAdress">
            <div class="shippingTitles">Shipping Adress</div>
            <form>
                <select name="" id="country">
                    <option value="Imagination">Imaginationland</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                </select>
                <input type="text" placeholder="State" pattern = '^[a-zA-Z_ ]*$'>
                <input type="text" placeholder="Postcode / Zip" pattern = '^[0-9]+$'>
                <button>get a quote</button>
            </form>
        </div>
        <div class="couponDiscount">
            <div class="shippingTitles">coupon  discount</div>
            <form>
                <div>Enter your coupon code if you have one</div>
                <input type="text" placeholder="State" pattern = '^[a-zA-Z_ ]*$'>
                <button>Apply coupon</button>
            </form>
        </div>
        <div class="proceedToCheckout">
            <div>
                <div class="subTotal">sub total <span>&#36;900</span></div>
                <div class="grandTotal">grand total <span>&#36;900</span></div>
                <button>proceed to checkout</button>
            </div>
        </div>
    </div>

</main>
</template>

<script>
export default {

}
</script>

<style>

</style>