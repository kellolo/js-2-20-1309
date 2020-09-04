'use srict'

import Component from './component';
import Calculate from './calculate';
export default class Menu extends Component{
    constructor(url,container){
        super(url,container);
    }
    add(event,calculate){
        if(event.target.classList.contains('main-product-button')){
            this.transitionToToppings(event,calculate);
            }
            if(event.target.classList.contains('toppings-product-button')){
                this.transitionToSupplements(event,calculate);
            }
            if(event.target.classList.contains('supplements-product-button')){
                this.transitionToEnd(event,calculate);
            }
    }
    transitionToToppings(event,calculate){
        document.querySelector('.main-menu').style.display='none';
        document.querySelector('.toppings-menu').style.display='flex';
        calculate.cal+=+event.target.getAttribute('data-cal');
        calculate.price+=+event.target.getAttribute('data-price');
        calculate.spanCal.textContent=`Итого калорий: ${calculate.cal}`;
        calculate.spanPrice.textContent=`Итоговая стоимость: ${calculate.price}`;
    }
    transitionToSupplements(event,calculate) {
        document.querySelector('.toppings-menu').style.display='none';
        document.querySelector('.supplements-menu').style.display='flex';
        calculate.cal+=+event.target.getAttribute('data-cal');
        calculate.price+=+event.target.getAttribute('data-price');
        calculate.spanCal.textContent=`Итого калорий: ${calculate.cal}`;
        calculate.spanPrice.textContent=`Итоговая стоимость: ${calculate.price}`;
    }
    transitionToEnd(event,calculate){
        document.querySelector('.supplements-menu').style.display='none';
        calculate.cal+=+event.target.getAttribute('data-cal');
        calculate.price+=+event.target.getAttribute('data-price');
        calculate.spanCal.textContent=`Итого калорий: ${calculate.cal}`;
        calculate.spanPrice.textContent=`Итоговая стоимость: ${calculate.price}`;
    }
    listener(){
        let calculate=new Calculate('.calculate');
        calculate.render();
        document.addEventListener('click',(event)=>this.add(event,calculate));
    }
    init(){
        super.init();
        this.listener();
    }
}