import { basket } from './basket';
import { catalog } from './catalog';

export default () => {
    const basket = new Basket();
    const catalog = new Catalog();

    basket.init();
    catalog.init(basket);
}
