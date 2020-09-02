import Component from './component.js';
import CatalogItem from './catalogItem.js';

export default class Catalog extends Component {
    constructor(container, url, basket) {
        super(container, url);
        this.basket = basket;
        this.ViewItem = CatalogItem;
        this.containerItems = this.container;
    }

    _getContentLink(link){
        return link;
    }

    _fillCatalog() { //Инкапсуляция (условная для JS)
        this.items = getArrayOfObjects();
    }
    _handleActions() {
        this.container.addEventListener('click', ev => {
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