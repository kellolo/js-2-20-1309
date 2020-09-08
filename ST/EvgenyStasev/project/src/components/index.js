import {basket} from './basket';
import {catalog} from './catalog';

export default()=>{
    let catalogUrl ='https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
    let basketUrl='https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
    
    let catalog = new Catalog ('#catalog', catalogUrl);
    let basket = new basket ('#basket', basketUrl, basket);