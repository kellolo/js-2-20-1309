import BasketItems from './basketItem.js'
import ParentContent from './parentContent.js'

export default class Basket extends ParentContent {
    constructor(basket, basketItems, url) {
        super(basket, url);
        this.containerItems = document.querySelector(basketItems);
        this.shown = false;
        this._get(url)
            .then(basket => {
                this.items = basket.content;
            })
            .finally(() => {
                this._render();
                this._handleActions();
            })
    }

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += new BasketItems(item).render();
        });
        this.container.innerHTML = htmlStr;
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