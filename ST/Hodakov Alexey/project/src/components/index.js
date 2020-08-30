import Basket from "./basket-container";
import Catalog from "./catalog-container";

export default () => {
  let userCatalogUrl =
    "https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json";
  let userBasketUrl =
    "https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json";

  let userBasket = new Basket("#basket", userBasketUrl);
  let userCatalog = new Catalog("#catalog", userCatalogUrl, userBasket);
};
