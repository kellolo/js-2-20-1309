import { Basket, Catalog} from './Lists.js'

export default () => {
    let basket = new Basket();
    let catalog = new Catalog(basket);
}
