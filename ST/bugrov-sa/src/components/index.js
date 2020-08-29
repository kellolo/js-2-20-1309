import Basket from './basket'
import Catalog from './catalog'

export default () => {
    let basket = new Basket('#basket', '#basket-items', 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json');
    let catalog = new Catalog('#catalog', basket, 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json');
}