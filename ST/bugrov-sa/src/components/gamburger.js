class GamburgerItem {
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
                height="200" width="200">`
    }
}

class FillingItem {
    constructor(item) {
        this.item = item;
    }

    render() {
        return `<img class="filling-img" 
                src="${this.item.productImg}" 
                alt="${this.item.productName}" 
                data-id="${this.item.productId}"
                data-name="${this.item.productName}"
                data-price="${this.item.productPrice}"
                data-calories="${this.item.calories}"
                height="200" width="200">`
    }
}

class SpiceItem {
    constructor(item) {
        this.item = item;
    }

    render() {
        return `<img class="spice-img" 
                src="${this.item.productImg}" 
                alt="${this.item.productName}" 
                data-id="${this.item.productId}"
                data-name="${this.item.productName}"
                data-price="${this.item.productPrice}"
                data-calories="${this.item.calories}"
                height="200" width="200">`
    }
}

class Gamburger {
    constructor(container, url, price, calories) {
        this.items = [];
        this.container = document.querySelector(container);
        this.price = document.querySelector(price);
        this.calories = document.querySelector(calories);
        this.url = url;
        this.choose = null;
        this._get(url)
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

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += new GamburgerItem(item).render();
        });
        this.container.innerHTML = htmlStr;
    }

    _handleActions() {
        this.container.addEventListener('click', ev => {   
            if (ev.target.classList.contains('gamburger-img')) {
                if (this.choose === null) {
                    this.choose = ev.target;
                    this.choose.classList.add('select-item');
                } else if (this.choose === ev.target) {
                    this.choose.classList.remove('select-item');
                    this.choose = null; 
                } else {
                    this.choose.classList.remove('select-item');
                    this.choose = ev.target;
                    this.choose.classList.add('select-item');
                }
                this._calcTotalPrice();
            }
        })
    }

    _calcTotalPrice() {
        if (this.choose !== null) {
            this.price.innerHTML = this.choose.dataset.price;
            this.calories.innerHTML = this.choose.dataset.calories;
        }
    }
}

class Filling {
    constructor(container, url, price, calories) {
        this.items = [];
        this.container = document.querySelector(container);
        this.price = document.querySelector(price);
        this.calories = document.querySelector(calories);
        this.url = url;
        this.choose = null;
        this._get(url)
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

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += new FillingItem(item).render();
        });
        this.container.innerHTML = htmlStr;
    }

    _handleActions() {
        this.container.addEventListener('click', ev => {   
            if (ev.target.classList.contains('filling-img')) {
                if (this.choose === null) {
                    this.choose = ev.target;
                    this.choose.classList.add('select-item');
                } else if (this.choose === ev.target) {
                    this.choose.classList.remove('select-item');
                    this.choose = null; 
                } else {
                    this.choose.classList.remove('select-item');
                    this.choose = ev.target;
                    this.choose.classList.add('select-item');
                }
                this._calcTotalPrice();
            }
        })
    }

    _calcTotalPrice() {
        if (this.choose !== null) {
            this.price.innerHTML = this.choose.dataset.price;
            this.calories.innerHTML = this.choose.dataset.calories;
        }
    }
}

class Spice {
    constructor(container, url, price, calories) {
        this.items = [];
        this.container = document.querySelector(container);
        this.price = document.querySelector(price);
        this.calories = document.querySelector(calories);
        this.url = url;
        this.choose = null;
        this._get(url)
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

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += new SpiceItem(item).render();
        });
        this.container.innerHTML = htmlStr;
    }

    _handleActions() {
        this.container.addEventListener('click', ev => {   
            if (ev.target.classList.contains('spice-img')) {
                if (this.choose === null) {
                    this.choose = ev.target;
                    this.choose.classList.add('select-item');
                } else if (this.choose === ev.target) {
                    this.choose.classList.remove('select-item');
                    this.choose = null; 
                } else {
                    this.choose.classList.remove('select-item');
                    this.choose = ev.target;
                    this.choose.classList.add('select-item');
                }
                this._calcTotalPrice();
            }
        })
    }

    _calcTotalPrice() {
        if (this.choose !== null) {
            this.price.innerHTML = this.choose.dataset.price;
            this.calories.innerHTML = this.choose.dataset.calories;
        }
    }
}

let gamburger = new Gamburger('.gamburger-wrp', 'https://raw.githubusercontent.com/serzhkish/static/master/json/gamburger.json', '.total-price', '.total-cal');
let filling = new Filling('.filling-wrp', 'https://raw.githubusercontent.com/serzhkish/static/master/json/filling.json', '.total-price', '.total-cal');
let spice = new Spice('.spice-wrp', 'https://raw.githubusercontent.com/serzhkish/static/master/json/spice.json', '.total-price', '.total-cal');