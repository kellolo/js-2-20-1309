export class OfferItem {
  constructor(item) {
    this.item = item;
  }
  render() {
    return `<div class="${this.item.offerName} offer">
                        <img src=${this.item.imgOffer} alt="" />
                        <p>${this.item.offerNameRu} </br> от ${this.item.price} руб.</p>
                    <div class="${this.item.offerName} btn">заказать</div>
                </div> `;
  }
}

export class ProductItem {
  constructor(item) {
    this.item = item;
  }
  renderHead() {
    return `<div class="product__container"><img src=${this.item.imgProduct} alt="" />
                <h2>${this.item.offerNameRu} стоит ${this.item.price} руб.</h2>                    
                <p class="color__red">СДЕЛАЙТЕ блюдо еще <strong>ВКУСНЕЕ</strong></p>
                    <div class="product__element__wrap">`;
  }
  renderFooter() {
    return `</div>
                <p>Общая стоимость: <span class="total">${this.item.price}</span> руб.</p>
                 <div class="btn">НАЧАТЬ ПРИГОТОВЛЕНИЕ</div>
            </div>`;
  }

  render() {
    return `<div class="product__element ${this.item.exName}">   
                    <h3>${this.item.exNameRu}</h3>
                    <p>${this.item.exPrice} руб.</p>
                    <div class="product__counter">
                        <div class="minus">удалить</div> 
                        <p>${this.item.amount} шт.</p>
                        <div class="plus">добавить</div>
                    </div>
            </div>`;
  }
}

