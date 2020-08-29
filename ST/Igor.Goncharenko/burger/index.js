
//'https://raw.githubusercontent.com/igogggg/js2cart2/master/catalog.json'

        
   let catalog = {
       inputs:null,
      tprice:null,
      tkkal:null, 
    sumPlus : null,
    kkalPlus : null,
    container: null,
    items: [],
    url: 'https://raw.githubusercontent.com/igogggg/js2cart2/master/catalog2.json',
    init() {
        this.container = document.querySelector('#app');
        this._get(this.url)
            .then(arr => {
                this.items = arr;
            })
            .finally(() => {
                this._render();
                this._handleActions();
                
            })
    },
    _get(url) {
        return fetch(url).then(d => d.json());
    },
    _fillCatalog() { 
        this.items = getArrayOfObjects();
    },
    _render(){
        
     this.items.map((item)=>this.container.innerHTML +=`
     
     <div class="item "><h3>${item.productname}</h3>
     <p>Цена: ${item.price}</p>
     <p>Калорийность: ${item.kkal}</p>
     
     <input  type = "checkbox"id="${item.id}"name="add" data-id="${item.id}" data-kkal="${item.kkal}"data-price="${item.price}">                               
             
             </input>
             <label for="${item.id}"></label>
     
     `);
      this.inputs = document.querySelectorAll('input');
      
    },
    _handleActions() {
        let big = document.querySelector('#big');
        let small = document.querySelector('#small');
        this.container.addEventListener('change', ev => { 
           
            if(small.checked) {
                big.checked = false;
                ev.target.checked = true;
            }  
            if(big.checked) {
                small.checked = false;
                ev.target.checked = true;
            }  
            if (ev.target.name == 'add' ) {
                let dataset = ev.target.dataset;
                (this._createNewItem(dataset));
            } 
        });
       (this._clear())  
    },
    _createNewItem(dataset) {
         let sum = ''
        let sumkkal = ''
         sum  = +dataset.price + this.sumPlus;
        sumkkal = +dataset.kkal +this.kkalPlus;
        this.tprice=document.querySelector('.tprice');
        this.tkkal = document.querySelector('.tkkal');
        this.tprice.innerHTML = +sum;
        this.tkkal.innerHTML = +sumkkal;
        this.sumPlus  += +dataset.price ;
       this.kkalPlus  += +dataset.kkal;
        return this.sumPlus ,this.kkalPlus 
        
    },
    _clear(){
        button = document.querySelector('.clear');
        button.addEventListener('click',()=>{
        this.tprice.innerHTML = '';
        this.tkkal.innerHTML = '';
        this.sumPlus = null;
        this.kkalPlus = null;
        this.inputs.forEach(input => {
            input.checked = false
        });
       
        });
    },
    
    
    


    
}
catalog.init();