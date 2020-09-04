// import General from './general';

// export class Catalog extends General {
//   constructor(url, basket, container = '#catalog') {
//     super(url, container);
//     this.basket = basket;
//   }
//   _handleActions() {
//     this.container.addEventListener('click', (ev) => {
//       if (ev.target.name == 'add') {
//         let dataset = ev.target.dataset;
//         this.basket.add(this._createNewItem(dataset));
//       }
//     });
//   }
//   _createNewItem(dataset) {
//     return {
//       productId: dataset.id,
//       productName: dataset.name,
//       productImg: dataset.img,
//       productPrice: +dataset.price,
//       amount: 1,
//     };
//   }
// }
// export class Basket extends General {
//   constructor(url, container = '#basket-items', containerItems = '#basket') {
//     super(url, container);
//     this.containerItems = document.querySelector(containerItems);
//     this.shown = false;
//   }

//   _handleActions() {
//     document.querySelector('#basket-toggler').addEventListener('click', () => {
//       this.containerItems.classList.toggle('invisible');
//       this.shown = !this.shown;
//     });

//     this.container.addEventListener('click', (ev) => {
//       if (ev.target.name == 'remove') {
//         this._remove(ev.target.dataset.id);
//       }
//     });
//   }

//   add(item) {
//     let find = this.items.find((el) => el.productId == item.productId);
//     if (find) {
//       find.amount++;
//     } else {
//       this.items.push(item);
//     }
//     this.render();
//   }

//   _remove(id) {
//     let find = this.items.find((el) => el.productId == id);
//     if (find.amount > 1) {
//       find.amount--;
//     } else {
//       this.items.splice(this.items.indexOf(find), 1);
//     }
//     this.render();
//   }
// }
