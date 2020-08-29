export default class ParentContent {
    constructor(container, url) {
        this.items = [];
        this.container = document.querySelector(container);
        this.url = url;
    }

    _get(url) {
        return fetch(url).then(d => d.json());
    }
}