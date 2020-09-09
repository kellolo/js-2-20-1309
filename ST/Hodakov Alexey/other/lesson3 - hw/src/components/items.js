import { OfferItem, ProductItem } from "./render.js";

let dictionary = {
    Product: ProductItem,
    Offer: OfferItem,
  };

class Items {
    constructor(cart, url){
        this.url = url;
        this.cart = cart; 
        this.arr = [];
        this.init();
    }
    init() {
        this._get(this.url)
          .then((obj) => {
            this.arr = obj;
          })
          .finally(() => {
            this.render();
            this.handleActions();
          });
      }
    
      _get(url) {
        return fetch(url).then((d) => d.json());
      }
}

export class Offer extends Items {
    constructor(
      cart,
      url = "https://raw.githubusercontent.com/AHodakov/js-2-20-1309/hodakov-lesson3/ST/Hodakov%20Alexey/other/export/json/offers.json"
    ) {
      super(cart, url);
    }
    render() {
      let placeToRender = document.querySelector("main");
  
      let htmlStr = "";
      this.arr.forEach((element) => {
        htmlStr += new dictionary[this.constructor.name](element).render();
      });
      placeToRender.innerHTML = htmlStr;
    }
  
    handleActions() {
      let btn = document.querySelectorAll(".btn");
  
      btn.forEach((element) => {
        element.addEventListener("click", (event) => {
          let obj = this.arr.find(
            (item) => item.offerName === event.target.classList[0]
          );
          const name = new Product(this.cart, obj.extraUrl, obj);
        });
      });
    }
  }

class Product extends Items {
    constructor(cart, url, obj) {
      super(cart, url);
      this.obj = obj;
      this.cart.clear();
    }
  
    render() {
      let placeToRender = document.querySelector("main");
  
      let htmlHead = new dictionary[this.constructor.name](this.obj).renderHead();
      let htmlFooter = new dictionary[this.constructor.name](this.obj).renderFooter();
      let htmlMain = "";

      this.arr.forEach((element) => {
        htmlMain += new dictionary[this.constructor.name](element).render();
      });
      placeToRender.innerHTML = htmlHead + htmlMain + htmlFooter;
    }
    
    getSum(item, price) {
      let Sum = item.reduce((total, el) => {
        return (total += el.exPrice * el.amount);
      }, 0);
      return parseInt(Sum, 10) + parseInt(price, 10);
    }
  
    addDataToCart() {
      this.cart.items = this.arr;
      this.cart.items.price = this.obj.price;
      this.cart.items.offerNameRu = this.obj.offerNameRu;
    }
  
    handleActions() {
      let minus = document.querySelectorAll(".minus");
      let plus = document.querySelectorAll(".plus");
  
      let itemPrice = this.obj.price;
      let getSum = this.getSum;
      let arr = this.arr;
  
      minus.forEach(function (element) {
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
  
      let btn = document.querySelector(".btn");
      btn.addEventListener("click", (event) => {
        this.addDataToCart();
        this.cart.calculationProductInfo();
        const offer = new Offer(this.cart);
      });
    }
  }

  export class Cart {
    constructor() {
      this.items = [];
      this.htmlExtra = "";
    }
    
    calculationProductInfo() {
      this.getExtra();
      this.render();
    }
  
    findEx() {
      let result = this.items.filter((item) => item.amount > 0);
      return result;
    }
  
    clear() {
      let placeToRenderFooter = document.querySelector("footer");
      placeToRenderFooter.innerHTML = "";
    }
  
    getSum(price) {
      let result = this.findEx();
      let Sum = result.reduce((total, el) => {
        return (total += el.exPrice * el.amount);
      }, 0);
      return parseInt(Sum, 10) + parseInt(price, 10);
    }
  
    render() {
      let placeToRender = document.querySelector("footer");
      let htmlStr = "";
      htmlStr = `<p>Для вас готовиться ${this.items.offerNameRu} !</p>
                     <p>Cумма вашего заказа : ${this.getSum(
                       this.items.price
                     )} руб.</p>
                     <p class="ex">Дополнительные ингардиенты: ${this.htmlExtra}</p>`;
      placeToRender.innerHTML = htmlStr;
    }
  
    getExtra() {
      this.htmlExtra = "";
      let result = this.findEx();
      result.forEach((item) => {
        this.htmlExtra += `<span>${item.exNameRu} x${item.amount} </span>`;
      });
    }
  }