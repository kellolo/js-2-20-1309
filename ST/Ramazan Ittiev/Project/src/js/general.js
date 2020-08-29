import CatalogItem from './catalogItem.js';
import BasketItem from './basketItem.js';

export default class General {
  constructor(container, url, obj) {
    this.container = document.querySelector(container);
    this.obj = obj;
    this.items = [];
    this.url = url;
    this._init();
  }

  _init() {
    this._get(this.url)
      .then((obj) => {
        if (obj.hasOwnProperty('content')) {
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

  render() {
    let htmlStr = '';
    this.items.forEach((item) => {
      if (item.hasOwnProperty('amount')) {
        htmlStr += new BasketItem(item).render();
      } else {
        htmlStr += new CatalogItem(item).render();
      }
    });
    this.container.innerHTML = htmlStr;
  }

  _get(url) {
    return fetch(url).then((d) => d.json());
  }
}
