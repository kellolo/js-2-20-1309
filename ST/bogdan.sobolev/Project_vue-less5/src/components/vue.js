export const app = new Vue({
    el: '#app',
    data: {
        //внутрикомпонентные реактивные данные // state (React)
        //filter: '',
        //filteredCatalogItems: [],
        catalogItems: [],
        basketItems:[],
        catalogUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
        basketUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
        showBasket: true
        // basketItems: [],
    },
    methods: {
        //методы компонента
        get(url) {
            return fetch(url).then(d => d.json())
        },
        // filterCatalog() {
        //     this.filteredCatalogItems = this.catalogItems.filter(el => el.productName.match(new RegExp(this.filter, 'i')))
        // },
        buy(item) {
            let itemBasket = this.basketItems.find(el => el.productId == item.productId);
            if(itemBasket){
                itemBasket.amount++;
            } else {
                this.basketItems.push(Object.assign({}, item, {amount: 1}));
            }
        },

        remove(id){
            let itemBasket = this.basketItems.find(el => el.productId == id);
            if (itemBasket.amount > 1){
                itemBasket.amount--;
            } else {
                this.basketItems.splice(this.basketItems.indexOf(itemBasket), 1);
            }
        },
    },
    // computed: {
    //     //вычисляемые свойства компонента
    //     // btnText() {
    //     //     return this.show ? 'Hide' : 'Show'
    //     // }
    // },
    watch: {
        // вотчеры
        // filter() {
        //     this.filteredCatalogItems = this.catalogItems.filter(el => el.productName.match(new RegExp(this.filter, 'i')))
        // }
    },
    // ХУКИ - события жизненного цикла компонента
    mounted() {
        this.get(this.catalogUrl)
        .then(items => { 
            this.catalogItems = items;
            //this.filteredCatalogItems = items;
        });
        this.get(this.basketUrl)
        .then(basket => { 
            this.basketItems = basket.content;
            //this.filteredCatalogItems = items;
        });
        //самый используемый
    }
});