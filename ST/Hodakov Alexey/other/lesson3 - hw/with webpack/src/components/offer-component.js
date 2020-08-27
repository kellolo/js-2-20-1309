export default class OffertItem {
    constructor(item) {
      this.item = item;
    }
    render() {
        return `  <div class="${element.offerName} offer">
                    <img src=${element.imgOffer} alt="" />
                    <p>${element.offerNameRu} </br> от ${element.price} руб.</p>
                    <div class="${element.offerName} btn">заказать</div>
                </div> `;
    }
  }