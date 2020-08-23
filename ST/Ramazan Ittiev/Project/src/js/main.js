import { basket } from './basket';
import { catalog } from './catalog';

export default () => {
  basket.init();
  catalog.init(basket);
};
