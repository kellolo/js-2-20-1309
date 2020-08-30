import Item from './Item.js';

export class CatalogItem extends Item{}

export class BasketItem extends Item{
    constructor(item){
        super(item);
    }
    render(){
        return  `
        <div class="d-flex headerCartWrapIn mb-1 p-2">
                <img src="${this.item.productImg}" alt="" width="85" height="100>
                <div>
                    <div>${this.item.productName}</div>
                    <span>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </span>
                    <div class="headerCartWrapPrice">${this.item.amount} 
                        <span>x</span> $${this.item.productPrice}
                    </div>

            <button 
                class="fas fa-times-circle" 
                data-id="${this.item.productId}"
                name="remove"
            ></button>
        </div>
        `
    }
}