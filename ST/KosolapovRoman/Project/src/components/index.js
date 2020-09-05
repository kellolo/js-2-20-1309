import { Basket, Catalog } from "./LISTS.js";

export default () => {
  let userBasket = new Basket();
  let userCatalog = new Catalog(userBasket);
};
