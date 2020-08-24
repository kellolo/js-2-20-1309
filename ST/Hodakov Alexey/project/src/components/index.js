import { Basket } from "./basket";
import { Catalog } from "./catalog";

export default () => {
  const userBasket = new Basket();
  const userCatalog = new Catalog();

  userBasket.init();
  userCatalog.init(userBasket);
};
