import Basket from './basket';
import Catalog from './catalog';
export default()=>{
    let basketUrl='https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json';
    let basket=new Basket('#basket', basketUrl);
    let catalogUrl='https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json';
    let catalog=new Catalog('#catalog', catalogUrl, basket);
}