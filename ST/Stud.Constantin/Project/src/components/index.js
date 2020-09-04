import {Basket, Catalog} from './LISTS';

export default () => {
   let basket = new Basket();
   let catalog = new Catalog(basket);
}