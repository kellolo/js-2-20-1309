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

let catalog = {
    container: null,
    items: [],
    basket: null,
    url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
    init() {
        this.container = document.querySelector('#catalog');
        this.basket = basket;
        this._get(this.url)
            .then(arr => {
                this.items = arr;
            })
            .finally(() => {
                this._render();
                this._handleActions();
            })
    },
    _get(url) {
        return fetch(url).then(d => d.json());
    },
    _fillCatalog() { //Инкапсуляция (условная для JS)
        this.items = getArrayOfObjects();
    },
    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += `<div class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 col-lg-3 feturedItems ">
                            <div class="feturedItem">
                                <div class="feturedImgWrap">
                                    <div class="feturedBuy">
                                        <button
                                            name="add"
                                            data-id="${item.productId}"
                                            data-name="${item.productName}"
                                            data-price="${item.productPrice}"
                                            data-img="${item.productImg}"
                                        >
                                            <div><i class="fas fa-shopping-cart"></i> Add to Cart</div>
                                        </button>
                                    </div>
                                    <img class="feturedProduct" src="${item.productImg}" alt="product1">
                                </div>
                                <div>
                                    <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                                        <div class="feturedItemName">${item.productName}</div>
                                        <div class="feturedItemPrice">$${item.productPrice}</div>
                                        <button 
                                            class="d-md-none"
                                            name="add"
                                            data-id="${item.productId}"
                                            data-name="${item.productName}"
                                            data-price="${item.productPrice}"
                                            data-img="${item.productImg}"
                                        >
                                            <i class="fas fa-shopping-cart"></i> Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>`
        });
        this.container.innerHTML = htmlStr;
    },
    _handleActions() {
        this.container.addEventListener('click', ev => {
            if (ev.target.name == 'add') {
                let dataset = ev.target.dataset;
                this.basket.add(this._createNewItem(dataset));
            }
        })
    },
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

catalog.init();