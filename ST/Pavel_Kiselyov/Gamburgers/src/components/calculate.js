'use strict'
export default class Calculate{
    constructor(container){
        this.container=document.querySelector(container);
        this.cal=0;
        this.price=0;
        this.spanCal=document.createElement('span');
        this.spanPrice=document.createElement('span');
        this.spanText=document.createElement('span');
    }
    render(){
        this.container.style.width='300px';
        this.container.style.height='200px';
        this.container.style.backgroundColor='yellow';
        this.container.style.margin='auto';
        this.spanCal.textContent=`Итого калорий: ${this.cal}`;
        this.spanPrice.textContent=`Итоговая стоимость: ${this.price}`;
        this.container.appendChild(this.spanCal);
        this.container.appendChild(this.spanPrice);
    }

}