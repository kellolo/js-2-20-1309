import BasketItem from '../components/basketItem';
import Catalog from './catalog';

export default class Basket extends Catalog{
    constructor(container, url){
        super(items,container,url,init());
        this.containerItems=document.querySelector('#basket-items');
        this.shown=false;
    }
    _init() {
        this._get(this.url)
            .then(basket => {
                this.items = basket.content;
            })
            .finally(() => {
                this._render();
                this._handleActions();
            })
    };
    _get(url) {
        super._get(url);
    };
    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += new BasketItem(item).render();
        });
        this.containerItems.innerHTML = htmlStr;
    };
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
    };
    add(item) {
        let find = this.items.find(el => el.productId == item.productId);
        if (find) {
            find.amount++;
        } else {
            this.items.push(item);
        }
        this._render();
    };
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