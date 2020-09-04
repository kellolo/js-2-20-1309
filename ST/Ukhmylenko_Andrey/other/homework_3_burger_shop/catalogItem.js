export default class CatalogItem {
    constructor(item) {
        this.item = item;
    }
    render() {
        return `
        <div class="catalog-item">
            <img src="${this.item.img}" width="200" height="200" alt="${this.item.name}"
                class="catalog-item-image">
            <h3 class="catalog-item-title">${this.item.name}</h3>
            <div class="catalog-item-description">
                <p class="catalog-item-price"><b>Цена: </b>${this.item.price} рублей</p>
                <p class="catalog-item-callories"><b>Каллории: </b>${this.item.callories} каллорий</p>
            </div>
        </div>
        `
    }
}