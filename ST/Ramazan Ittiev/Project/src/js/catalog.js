import General from './general.js';

export default class Catalog extends General {
  constructor(container, url, basket) {
    super(container, url);
    this.basket = basket;
  }
  _handleActions() {
    this.container.addEventListener('click', (ev) => {
      if (ev.target.name == 'add') {
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
