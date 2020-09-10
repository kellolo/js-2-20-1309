import { Offer, Cart} from "./items.js";

export default () => {
  let cart = new Cart();
  let offer = new Offer(cart);
};
