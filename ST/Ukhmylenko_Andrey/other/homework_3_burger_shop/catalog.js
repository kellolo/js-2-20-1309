import CatalogItem from './catalogItem.js'

export default class Catalog {
    constructor(items) {
        this.items = items;
        this.container = document.querySelector('.catalog-content');
        this._render();
    }

    _render() {
        let htmlStr = '';

        this.items.forEach(item => {
            htmlStr += new CatalogItem(item).render();
        });

        this.container.innerHTML = htmlStr;
    }
}