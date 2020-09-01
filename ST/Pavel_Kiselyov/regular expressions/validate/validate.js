'use strict'
class Validate{
    constructor(){
        this.validValues=[/^([a-z]+)|([а-я])$/i,/^\+7\(\d{3}\)\d{3}\-\d{4}$/,/^[a-z]+(.?|-?)[a-z]+\@[a-z]+\.[a-z]+$/];
        this.inputs=document.querySelectorAll('input');
        this.button=document.querySelector('button');
        this.listener();
    }
    valid(regexp,data,name){
        if (!regexp.test(data)){
            document.querySelector(`.${name}`).style.border='1px solid red';
            document.querySelector(`.${name}-hint`).style.display='block';
        }
        else{
            document.querySelector(`.${name}`).style.border='1px solid green';
            document.querySelector(`.${name}-hint`).style.display='none';
        }
    }
    validAll(){
        let i=0;
        this.inputs.forEach(element=>{
            this.valid(this.validValues[i],element.value,element.className);
            i++;
        })
    }
    listener(){
        this.button.addEventListener('click',()=>this.validAll());
    }
}
let validate=new Validate();