//import Product from "./product"
import Offer from "./offer"
import Cart from "./cart"
import Product from "./product";

export default () =>{
let userCart = new Cart();
let userProduct = [];
let offerToUser = new Offer("https://raw.githubusercontent.com/AHodakov/js-2-20-1309/hodakov-lesson3/ST/Hodakov%20Alexey/other/export/json/offers.json", userProduct, userCart);
}