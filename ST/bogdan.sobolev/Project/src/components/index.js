// import{ basket } from './basket';
// import{ catalog } from './catalog';

// export default () => {
//     basket.init();
//     catalog.init(basket);
// }

import{ Basket } from './Basket';
import{ Catalog } from './Catalog';

export default () => {
    const basket = new Basket();
    const catalog = new Catalog();

    basket.init();
    catalog.init(basket);
}