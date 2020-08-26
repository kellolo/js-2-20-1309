export default class GamburgerItem {
    constructor(item) {
        this.item = item;
    }

    render() {
        return `<img class="gamburger-img" 
                src="${this.item.productImg}" 
                alt="${this.item.productName}" 
                data-id="${this.item.productId}"
                data-name="${this.item.productName}"
                data-price="${this.item.productPrice}"
                data-calories="${this.item.calories}"
                height="100" width="100">`
    }
}