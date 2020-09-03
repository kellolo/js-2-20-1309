'use strict'
class Replacement {
    constructor(container,button,final){
        this.container=document.querySelector(container);
        this.button=document.querySelector(button);
        this.final=document.querySelector(final);
    }
    listener(){
        this.button.addEventListener('click', ()=>this.replaced());
    }
    replaced(){
        const str=this.container.value;
        const regexp=/\s'|'\s|'$/g;
        this.final.value=str.replace(regexp,` " `)
    }
}
let replacement=new Replacement('.input-text','.button','.text-output');
replacement.listener();