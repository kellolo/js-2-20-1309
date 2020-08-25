// const imgURL = 'https://raw.githubusercontent.com/kellolo/static/master/img/JS1_shop/';
// let NAMES = [
//     'MANGO PEOPLE T-SHIRT', 
//     'BANANA PEOPLE T-SHIRT', 
//     'STRAWBERRY PEOPLE T-SHIRT',
//     'ORANGE PEOPLE T-SHIRT',
//     'PUMKIN PEOPLE T-SHIRT',
//     'PINEAPPLE PEOPLE T-SHIRT',
//     'CUCUMBER PEOPLE T-SHIRT',
//     'TOMATO PEOPLE T-SHIRT'
// ];
// let PRICES = [52, 53, 55, 67, 69, 94, 23, 45];

// function getArrayOfObjects() {
//     let local = [];

//     for (let i = 0; i < NAMES.length; i++) {
//         local.push({
//             productName: NAMES[i],
//             productPrice: PRICES[i],
//             productImg: `${imgURL}featuredItem${i + 1}.jpg`,
//             productId: 'prod_' + i
//             //rates (звезды)
//         })
//     }
//     return local;
// }

// 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'

import CatalogItem from './catalogItem.js';
export default class Catalog {
    constructor(container, url, basket) {
        this.items = [];
        this.container = document.querySelector(container);
        this.url = url;
        this.basket = basket;
        this._init();
    }
    // container: null,
    // items: [],
    // basket: null,
    // url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
    _init() {
        // this.container = document.querySelector('#catalog');
        // this.basket = basket;
        this._get(this.url)
            .then(arr => {
                this.items = arr;
            })
            .finally(() => {
                this._render();
                this._handleActions();
            })
    }
    _get(url) {
        return fetch(url).then(d => d.json());
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

// catalog.init();

// let urlCatalog = 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json';
// export let catalog = new Catalog(urlCatalog);