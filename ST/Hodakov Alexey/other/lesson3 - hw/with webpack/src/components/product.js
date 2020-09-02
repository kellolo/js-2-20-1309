import Offer from "./offer";

export default class Product {
  constructor(obj, cart) {
    this.test = "";
    this.obj = obj;
    this.urlExtra = obj.extraUrl;
    this.urlImg = obj.imgProduct;
    this.price = obj.price;
    this.userCart = cart;

    this.exItems = [];
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
    let placeToRender = document.querySelector("main");

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
    placeToRender.innerHTML = htmlHead + htmlMain + htmlFooter;
  }

  _clearFooter() {
    let placeToRenderFooter = document.querySelector("footer");
    placeToRenderFooter.innerHTML = "";
  }

  getSum(item, price) {
    let Sum = item.reduce((total, el) => {
      return (total += el.exPrice * el.amount);
    }, 0);
    //userCart.total = parseInt(Sum, 10) + parseInt(userProduct.price, 10);
    return parseInt(Sum, 10) + parseInt(price, 10);
  }

  _handleActions() {
    let minus = document.querySelectorAll(".minus");
    let plus = document.querySelectorAll(".plus");
    let btn = document.querySelector(".btn");

    let itemPrice = this.price;
    let getSum = this.getSum;
    let arr = this.exItems;

    minus.forEach((element) => {
      element.addEventListener("click", function (e) {
        let result = arr.find((item) => item.exName === e.path[2].classList[1]);
        if (result.amount > 0) {
          result.amount--;
        }
        let placeToRender = e.path[1].children[1];
        placeToRender.innerHTML = `${result.amount} шт.`;

        let placeToRenderSum = document.querySelector(".total");
        placeToRenderSum.innerHTML = `${getSum(arr, itemPrice)}`;
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
        placeToRenderSum.innerHTML = `${getSum(arr, itemPrice)}`;
      });
    });

    btn.addEventListener("click", (e) => {
        let objCart = [].concat(this.obj, this.exItems);
        this.userCart.items = objCart;
        this.userCart.total = getSum(this.exItems, itemPrice);
        this.userCart.init();
        new Offer("https://raw.githubusercontent.com/AHodakov/js-2-20-1309/hodakov-lesson3/ST/Hodakov%20Alexey/other/export/json/offers.json");
     });
  }
}
