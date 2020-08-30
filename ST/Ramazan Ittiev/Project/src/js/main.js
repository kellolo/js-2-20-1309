import Basket from './basket';
import Catalog from './catalog';

let urlBasket = 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json';
let urlCatalog = 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json';

export default () => {
  let basket = new Basket('#basket-items', urlBasket, '#basket');
  let catalog = new Catalog('#catalog', urlCatalog, basket);
};
