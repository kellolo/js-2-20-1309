import BasketItem from "./basket-component-catalogItem.js";
import CatalogItem from "./catalog-component-catalogItem.js";

export default class List {
  constructor(container, url, obj) {
    this.container = document.querySelector(container);
    this.items = [];
    this.obj = obj;
    this.url = url;
    this._init();
  }
  _init() {
    this._get(this.url)
      .then((obj) => {
        if (obj.hasOwnProperty("content")) {
          this.items = obj.content;
        } else {
          this.items = obj;
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
      if (item.hasOwnProperty("amount")) {
        htmlStr += new BasketItem(item).render();
      } else {
        htmlStr += new CatalogItem(item).render();
      }
    });
    this.container.innerHTML = htmlStr;
  }
}
