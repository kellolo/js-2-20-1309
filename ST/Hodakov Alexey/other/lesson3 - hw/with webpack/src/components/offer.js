import Product from "./product"


export default class Offer {

    constructor(url, item, cart) {
      this.arrItems = [];
      this.url = url;
      this.product = item;
      this.cart = cart;
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
      let placeToRender = document.querySelector("main");
        
      let htmlStr = "";
      this.arrItems.forEach((element) => {
        htmlStr += `  <div class="${element.offerName} offer">
                          <img src=${element.imgOffer} alt="" />
                          <p>${element.offerNameRu} </br> от ${element.price} руб.</p>
                          <div class="${element.offerName} btn">заказать</div>
                          </div> `;
      });
      placeToRender.innerHTML = htmlStr;
    }
  
    handleActions() {
      let arrItems = this.arrItems;
      let btn = document.querySelectorAll(".btn");
      let cart = this.cart;
      let init = this.init;
  
      btn.forEach((element) => {
        element.addEventListener("click", function (e) {
          let result = arrItems.find(
            (item) => item.offerName === e.path[0].classList[0]
          );
         this.product = new Product(result, cart);
        });
      });
    }
  }