export default class Cart {

    constructor() {
      this.items = [];
      this.total = "";
      this.htmlExtra = "";
    }
  
    init() {
      this.getExtra();
      this.render();
    }
  
    render() {
      let placeToRender = document.querySelector("footer");
      let htmlStr = "";
      htmlStr = `<p>Для вас готовиться ${this.items[0].offerNameRu} !</p>
                   <p>Cумма вашего заказа : ${this.total} руб.</p>
                   <p>Дополнительные ингардиенты: ${this.htmlExtra}</p>`;
      placeToRender.innerHTML = htmlStr;
    }
  
    getExtra() {
      this.htmlExtra = "";
      let result = this.items.filter((item) => item.amount > 0);
      result.forEach((item) => {
        this.htmlExtra += `<span>${item.exNameRu}</span>`;
      });
    }
  }