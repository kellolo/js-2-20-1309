export default class Components {
    constructor(container, url, object){
        this.items = [];
        this.container = document.querySelector(container);
        this.url = url;
        this.object = object;
        this._init();
    }
    _init() {
        this._get(this.url)
            .then(object => {
                if(object.hasOwnProperty('content')){
                this.items = object.content;
            } else {
                this.items = object;
            }
            })
            .finally(() => {
                this._render();
                this._handleActions();
            })
    }
           
    _get(url) {
        return fetch(url).then(d => d.json());
    }
}