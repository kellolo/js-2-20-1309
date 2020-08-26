import Basket from './basket';
import Catalog from './catalog';

export default () => {
    let urlBasket = 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json';
    let urlCatalog = 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json';

    let basket = new Basket ('#basket', urlBasket);
    let catalog = new Catalog ('#catalog', basket, urlCatalog)
}