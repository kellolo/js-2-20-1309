import List from './List.js';

export class Catalog extends List {
    constructor(basket, container = '#catalog', url = '/catalog.json') {
        super(container, url);
        this.basket = basket;
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

export class Basket extends List {
    constructor(container = '#basket', url = '/basket.json') {
        super(container, url);
        this.containerItems = document.querySelector('#basket-items');
        this.shown = false;
    }

    _handleActions() {
        document.querySelector('#basket-toggler').addEventListener('click', () => {
            this.container.classList.toggle('invisible');
            this.shown = !this.shown;
        })

        this.container.addEventListener('click', ev => {
            if (ev.target.name == 'remove') {
                this._remove(ev.target.dataset.id);
            }
        })
    }

    add(item) {
        let find = this.items.find(el => el.productId == item.productId);
        if (find) {
            find.amount++;
        } else {
            this.items.push(item);
        }
        this._render();
    }

    _remove(id) {
        let find = this.items.find(el => el.productId == id);
        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
    }
}