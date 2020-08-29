export default class Component {
    constructor(container, url) {
        this.items = [];
        this.container = document.querySelector(container);
        this.url = url;
        if (this._handleActions === undefined) {
            throw new TypeError("Must override handleActions");
        };
        if (this._getContentLink === undefined) {
            throw new TypeError("Must override handleActions");
        };
        this._init();
    }

    _init() {
        this._get(this.url)
            .then(arr => {
                this.items = this._getContentLink(arr);
            })
            .finally(() => {
                this._render();
                this._handleActions();
            })
    }

    _get(url) {
        return fetch(url).then(d => d.json());
    }

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += new this.ViewItem(item).render();
        });
        this.containerItems.innerHTML = htmlStr;
    }
}