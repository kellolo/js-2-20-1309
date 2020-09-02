import { get } from "jquery";

export class Form {
    constructor() {
      this.content = document.querySelector(".form__container");
      this.initBtnRender();
    }
    clearForm() {
      this.content.innerHTML = "";
    }
    initBtnRender() {
      const btn = document.querySelector(".form__" + this.constructor.name);
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        this.renderPage();
      });
    }
  }
 