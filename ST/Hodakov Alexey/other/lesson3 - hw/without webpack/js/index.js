
class Offer {

  constructor(url) {
    this.arrItems = [];
    this.url =
      "https://raw.githubusercontent.com/AHodakov/js-2-20-1309/hodakov-lesson3/ST/Hodakov%20Alexey/other/export/json/offers.json";
    this.placeToRender = document.querySelector("main");
    this.init();
  }

  init() {
    this._get(this.url)
      .then((obj) => {
        this.arrItems = obj;
      })
      .finally(() => {
        this.render();
        this.handleActions();
      });
  }

  _get(url) {
    return fetch(url).then((d) => d.json());
  }

  render() {
    let htmlStr = "";
    this.arrItems.forEach((element) => {
      htmlStr += `  <div class="${element.offerName} offer">
                        <img src=${element.imgOffer} alt="" />
                        <p>${element.offerNameRu} </br> от ${element.price} руб.</p>
                        <div class="${element.offerName} btn">заказать</div>
                        </div> `;
    });
    this.placeToRender.innerHTML = htmlStr;
  }

  handleActions() {
    let arrItems = this.arrItems;
    let btn = document.querySelectorAll(".btn");

    btn.forEach((element) => {
      element.addEventListener("click", function (e) {
        let result = arrItems.find(
          (item) => item.offerName === e.path[0].classList[0]
        );
        userProduct = new Product(result);
      });
    });
  }
}

class Product {
  constructor(obj) {
    this.obj = obj;
    this.urlExtra = obj.extraUrl;
    this.urlImg = obj.imgProduct;
    this.price = obj.price;
    this.exItems = [];
    this.placeToRender = document.querySelector("main");
    this.placeToRenderFooter = document.querySelector("footer");
    this._init();
  }
  _init() {
    this._get(this.urlExtra)
      .then((obj) => {
        this.exItems = obj;
      })
      .finally(() => {
        this._clearFooter();
        this._render();
        this._handleActions();
      });
  }

  _get(url) {
    return fetch(url).then((d) => d.json());
  }
  _render() {
    let htmlHead = `<div class="product__container"><img src=${this.urlImg} alt="" />
                        <h2>${this.obj.offerNameRu} стоит ${this.obj.price} руб.</h2>                    
                        <p class="color__red">СДЕЛАЙТЕ блюдо еще <strong>ВКУСНЕЕ</strong></p>
                        <div class="product__element__wrap">`;
    let htmlMain = "";
    let htmlFooter = `</div>
                        <p>Общая стоимость: <span class="total">${this.obj.price}</span> руб.</p>
                            <div class="btn">НАЧАТЬ ПРИГОТОВЛЕНИЕ</div>
                        </div>`;
    this.exItems.forEach((element) => {
      htmlMain += `<div class="product__element ${element.exName}">   
                        <h3>${element.exNameRu}</h3>
                        <p>${element.exPrice} руб.</p>
                        <div class="product__counter">
                            <div class="minus">удалить</div> 
                            <p>${element.amount} шт.</p>
                            <div class="plus">добавить</div>
                        </div>
                    </div>`;
    });
    this.placeToRender.innerHTML = htmlHead + htmlMain + htmlFooter;
  }

  _clearFooter() {
    this.placeToRenderFooter.innerHTML = "";
  }

  getSum(item) {
    let Sum = item.reduce((total, el) => {
      return (total += el.exPrice * el.amount);
    }, 0);
    userCart.total = parseInt(Sum, 10) + parseInt(userProduct.price, 10);
    return parseInt(Sum, 10) + parseInt(userProduct.price, 10);
  }

  _handleActions() {
    let minus = document.querySelectorAll(".minus");
    let plus = document.querySelectorAll(".plus");
    let getSum = this.getSum;
    let arr = this.exItems;
    let btn = document.querySelector(".btn");

    minus.forEach((element) => {
      element.addEventListener("click", function (e) {
        let result = arr.find((item) => item.exName === e.path[2].classList[1]);
        if (result.amount > 0) {
          result.amount--;
        }
        let placeToRender = e.path[1].children[1];
        placeToRender.innerHTML = `${result.amount} шт.`;

        let placeToRenderSum = document.querySelector(".total");
        placeToRenderSum.innerHTML = `${getSum(arr)}`;
      });
    });

    plus.forEach((element) => {
      element.addEventListener("click", function (e) {
        let result = arr.find((item) => item.exName === e.path[2].classList[1]);
        if (result.amount >= 0) {
          result.amount++;
        }
        let placeToRender = e.path[1].children[1];
        placeToRender.innerHTML = `${result.amount} шт.`;

        let placeToRenderSum = document.querySelector(".total");
        placeToRenderSum.innerHTML = `${getSum(arr)}`;
      });
    });

    btn.addEventListener("click", (e) => {
      let objCart = [].concat(this.obj, this.exItems);
      userCart.items = objCart;
      userCart.total = getSum(this.exItems);
      userCart.init();
      offerToUser.init();
    });
  }
}
class Cart {

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

let userCart = new Cart();
let offerToUser = new Offer("https://raw.githubusercontent.com/AHodakov/js-2-20-1309/hodakov-lesson3/ST/Hodakov%20Alexey/other/export/json/offers.json");
let userProduct = "";
