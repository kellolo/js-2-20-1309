import BasketItem from "./basketItem.js";
import CatalogItem from "./catalogItem.js";

export default class Parent {
  constructor(container, url, basket = false) {
    this.items = [];
    this.container = document.querySelector(container);
    this.basket = basket;
    this.url = url;
    this._init();
  }

  _init() {
    this._get(this.url)
      .then((data) => {
        if (!this.basket) {
          this.items = data.content;
        } 
        else {
          this.items = data;
        }
      })
      .finally(() => {
        this.render();
        this._handleActions();
      });
  }

  _get(url) {
    return fetch(url).then((d) => d.json());
  }
  
  render() {
    let htmlStr = "";
    this.items.forEach((item) => {
      if (!this.basket)  {
        htmlStr += new BasketItem(item).render();
      } 
      else {
        htmlStr += new CatalogItem(item).render();
      }
    });
    this.container.innerHTML = htmlStr;
  }
}
