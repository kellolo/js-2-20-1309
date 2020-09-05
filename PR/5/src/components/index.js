// import { Basket, Catalog } from './LISTS';

// export default () => {
//     let basket = new Basket();
//     let catalog = new Catalog(basket);
// }

export default () => {
    const app = new Vue({
        el: '#app',
        data: {
            filter: '',
            filteredCatalogItems: [],
            catalogItems: [],
            catalogUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
            basketUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
            showBasket: true,
            basketItems: []
        },
        methods: {
            //методы компонента
            get(url) {
                return fetch(url).then(d => d.json())
            },
            filterCatalog() {
                this.filteredCatalogItems = this.catalogItems.filter(el => el.productName.match(new RegExp(this.filter, 'i')))
            },
            buy(item) {
                let find = this.basketItems.find(el => el.productId == item.productId);
                if (find) {
                    find.amount++;
                } else {
                    this.basketItems.push(Object.assign({}, item, { amount: 1 }))
                }
            },
            remove(id) {
                let find = this.basketItems.find(el => el.productId == id);
                if (find.amount > 1) {
                    find.amount--;
                } else {
                    this.basketItems.splice(this.basketItems.indexOf(find), 1);
                }
            }
        },
        watch: {
            filter() {
                this.filteredCatalogItems = this.catalogItems.filter(el => el.productName.match(new RegExp(this.filter, 'i')))
            }
        },
        mounted() {
            this.get(this.catalogUrl)
            .then(items => { 
                this.catalogItems = items;
                this.filteredCatalogItems = items;
            })

            this.get(this.basketUrl)
            .then(basket => { 
                this.basketItems = basket.content;
            })
        },
        computed: {
            total() {
                // console.log(this.basketItems)
                // let sum = this.basketItems.reduce((sum, item) => sum + (item.productPrice * item.amount));
                // return sum ? sum : 1500
            }
            
        },
    })
}