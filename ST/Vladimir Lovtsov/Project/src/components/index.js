import Basket from './basket';
import Catalog from './catalog';

export default () => {
    let catalogurl = 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json';
    let basketurl = 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json';
    let basket = new Basket('#basket', basketurl);
    let catalog = new Catalog('#catalog', catalogurl, basket);
    
}