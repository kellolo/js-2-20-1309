export default class CatalogItem {
    constructor(item) {
        this.item = item;
    }
    render() {
        return `
        <div class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 col-lg-3 feturedItems ">
            <div class="feturedItem">
                <div class="feturedImgWrap">
                    <div class="feturedBuy">
                        <button
                            name="add"
                            data-id="${this.item.productId}"
                            data-name="${this.item.productName}"
                            data-price="${this.item.productPrice}"
                            data-img="${this.item.productImg}"
                        >
                            <div><i class="fas fa-shopping-cart"></i> Add to Cart</div>
                        </button>
                    </div>
                    <img class="feturedProduct" src="${this.item.productImg}" alt="product1">
                </div>
                <div>
                    <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                        <div class="feturedItemName">${this.item.productName}</div>
                        <div class="feturedItemPrice">$${this.item.productPrice}</div>
                        <button 
                            class="d-md-none"
                            name="add"
                            data-id="${this.item.productId}"
                            data-name="${this.item.productName}"
                            data-price="${this.item.productPrice}"
                            data-img="${this.item.productImg}"
                        >
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>`
    }
}