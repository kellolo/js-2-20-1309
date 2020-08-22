import { Basket } from './basket';
import { Catalog } from './catalog';

export default () => {
  const basket = new Basket();
  const catalog = new Catalog(Basket);
};
