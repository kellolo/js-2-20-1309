import CatalogItem from './catalogItem.js'
import ParentContent from './parentContent.js'

export default class Catalog extends ParentContent {
    constructor(catalog, basket, url) {
        super(catalog, url);
        this.basket = basket;
        this._get(url)
            .then(arr => {
                this.items = arr;
            })
            .finally(() => {
                this._render();
                this._handleActions();
            })
    }

    _fillCatalog() { //Инкапсуляция (условная для JS)
        this.items = getArrayOfObjects();
    }

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += new CatalogItem(item).render();
        });
        this.container.innerHTML = htmlStr;
    }

    _handleActions() {
        this.container.addEventListener('click', ev => {
            if (ev.target.parentElement.name == 'add') {
                let dataset = ev.target.parentElement.dataset;
                this.basket.add(this._createNewItem(dataset)); 
            }
            if (ev.target.parentElement.parentElement.name == 'add') {
                let dataset = ev.target.parentElement.parentElement.dataset;
                this.basket.add(this._createNewItem(dataset)); 
            }
            if (ev.target.name == 'add') {
                let dataset = ev.target.dataset;
                this.basket.add(this._createNewItem(dataset));                
            }
        })
    }
    
    _createNewItem(dataset) {
        return {
            productId: dataset.id,
            productName: dataset.name,
            productImg: dataset.img,
            productPrice: +dataset.price,
            amount: 1
        }
    }
}