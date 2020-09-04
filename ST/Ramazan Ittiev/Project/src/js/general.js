// import { CatalogItem, BasketItem } from './renderList';

// let classes = {
//   Catalog: CatalogItem,
//   Basket: BasketItem,
// };
// export default class General {
//   constructor(url, container, obj) {
//     this.container = document.querySelector(container);
//     this.obj = obj;
//     this.items = [];
//     this.url = url;
//     this._init();
//   }

//   _init() {
//     this._get(this.url)
//       .then((obj) => {
//         if (obj.hasOwnProperty('content')) {
//           this.items = obj.content;
//         } else {
//           this.items = obj;
//         }
//       })
//       .finally(() => {
//         this.render();
//         this._handleActions();
//       });
//   }

//   render() {
//     let htmlStr = '';
//     this.items.forEach((item) => {
//       htmlStr += new classes[this.constructor.name](item).render();
//     });
//     this.container.innerHTML = htmlStr;
//   }

//   _get(url) {
//     return fetch(url).then((d) => d.json());
//   }
// }
