import Basket from './basket';
import Catalog from './catalog';

export default () => {
  let catalogUrl = 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json';
  let basketgUrl = 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json';

  let basket = new Basket('#basket', basketgUrl);
  let catalog = new Catalog('#catalog', catalogUrl, basket);
  // basket.init();
  // catalog.init(basket); 
}