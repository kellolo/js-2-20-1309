import { Basket, Catalog } from './LISTS.js'

export default () => {
    let basket = new Basket();
    let catalog = new Catalog(basket);
}