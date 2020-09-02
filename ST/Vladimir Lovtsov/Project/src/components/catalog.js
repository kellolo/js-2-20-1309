import Parent from "./parent.js";

export default class Catalog extends Parent {
  /*constructor(container, url, basket) {
    super(container, url, basket);
    //this.basket = basket;
  }*/
 
  _handleActions() {
    this.container.addEventListener("click", (ev) => {
      if (ev.target.name == "add") {
        let dataset = ev.target.dataset;
        this.basket.add(this._createNewItem(dataset));
      }
    });
  }
  _createNewItem(dataset) {
    return {
      productId: dataset.id,
      productName: dataset.name,
      productImg: dataset.img,
      productPrice: +dataset.price,
      amount: 1,
    };
  }
}
