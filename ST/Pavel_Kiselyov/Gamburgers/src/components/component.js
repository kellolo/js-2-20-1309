'use strict'

export default class Component{
    constructor(url,container){
    this.url=url;
    this.container=document.querySelector(container);
    this.strHtmlMain='';
    this.strHtmlToppings='';
    this.strHtmlSupplements='';
    this.mainMenu=document.createElement('div');
    this.toppingsMenu=document.createElement('div');
    this.supplementsMenu=document.createElement('div');
    }
    init(){
        this.get(this.url);
    };
    get(url){
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.render(data);
        });
    }
    render(data){
            this.mainMenu.classList.add('main-menu');
            this.toppingsMenu.classList.add('toppings-menu');
            this.supplementsMenu.classList.add('supplements-menu');
            this.items=Array.from(data);
            this.items.forEach((element) => {
                switch (element.productClass){
                    case('main-products'): 
                         this.strHtmlMain+=`
                         <div class='${element.productClass} product'>
                             <span class='product-name'> Наименование: <br> ${element.productName}</span>
                             <img class='product-pic' src='${element.productImg}'>
                             <span class='product-cal'> Калории: ${element.productCal}</span>
                             <span class='product-price'> Стоимость: ${element.productPrice}</span>
                             <button class='main-product-button button' data-id='${element.productId}' data-cal='${element.productCal}'
                             data-price='${element.productPrice}'>Выбрать</button>
                         </div>`;
                         break;
                     case('toppings'): 
                         this.strHtmlToppings+=`
                         <div class='${element.productClass} product'>
                             <span class='product-name'> Наименование: <br> ${element.productName}</span>
                             <img class='product-pic' src='${element.productImg}'>
                             <span class='product-cal'> Калории: ${element.productCal}</span>
                             <span class='product-price'> Стоимость: ${element.productPrice}</span>
                             <button class='toppings-product-button button' data-id='${element.productId}' data-cal='${element.productCal}'
                             data-price='${element.productPrice}'>Выбрать</button>
                         </div>`;
                         break;
                     case('supplements'): 
                         this.strHtmlSupplements+=`
                         <div class='${element.productClass} product'>
                             <span class='product-name'> Наименование: <br> ${element.productName}</span>
                             <img class='product-pic' src='${element.productImg}'>
                             <span class='product-cal'> Калории: ${element.productCal}</span>
                             <span class='product-price'> Цена: ${element.productPrice}</span>
                             <button class='supplements-product-button button' data-id='${element.productId}' data-cal='${element.productCal}'
                             data-price='${element.productPrice}'>Выбрать</button>
                         </div>`;
                         break; 
                }
                this.mainMenu.innerHTML=this.strHtmlMain;
                this.toppingsMenu.innerHTML=this.strHtmlToppings;
                this.supplementsMenu.innerHTML=this.strHtmlSupplements; 
                this.container.appendChild(this.mainMenu);
                this.container.appendChild(this.toppingsMenu);
                this.container.appendChild(this.supplementsMenu);
            })
    } 
}