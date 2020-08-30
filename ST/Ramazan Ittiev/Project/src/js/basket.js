import General from './general.js';

export default class Basket extends General {
  constructor(container, url, containerItems) {
    super(container, url);
    this.containerItems = document.querySelector(containerItems);
    this.shown = false;
  }
  _handleActions() {
    document.querySelector('#basket-toggler').addEventListener('click', () => {
      this.containerItems.classList.toggle('invisible');
      // this.shown = !this.shown;
    });

    this.container.addEventListener('click', (ev) => {
      if (ev.target.name == 'remove') {
        this._remove(ev.target.dataset.id);
      }
    });
  }

  add(item) {
    let find = this.items.find((el) => el.productId == item.productId);
    if (find) {
      find.amount++;
    } else {
      this.items.push(item);
    }
    this.render();
  }

  _remove(id) {
    let find = this.items.find((el) => el.productId == id);
    if (find.amount > 1) {
      find.amount--;
    } else {
      this.items.splice(this.items.indexOf(find), 1);
    }
    this.render();
  }
}
