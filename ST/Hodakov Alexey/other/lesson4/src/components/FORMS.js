import { Form } from "./form.js";

export class Transform extends Form {
  constructor(btnTarget) {
    super(btnTarget);
  }
  renderPage() {
    this.clearForm();
    let htmlStr = ` <form name="test">
                        <fieldset name="fieldset">
                            <legend>Введите текст для форматирования кавычек</legend>
                            <textarea id="myTextarea" cols="80" rows="20"></textarea>
                            <button type="button" class="transform">ОБРАБОТАТЬ</button>
                        </fieldset>
                    </form>`;
    this.content.innerHTML = htmlStr;
    this.handleaction();
  }
  handleaction() {
    const btn = document.querySelector(".transform");

    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const text = document.getElementById("myTextarea").value;
      const regExp = /^'|(\s)'|'(\s)|'$/gm;
      document.getElementById("myTextarea").value = text.replace(regExp, ' " ');
    });
  }
}

export class Check extends Form {
  constructor() {
    super();
  }
  renderPage() {
    this.clearForm();
    let htmlStr = ` <form name="test">
                              <fieldset name="fieldset">
                                  <legend>Введите ваши данные</legend>
                                  <input type="text" id="name" placeholder="Имя">
                                  <p>Имя не должно сожержать цифр и спец символов</p>
                                  <input type="text" id="phone" placeholder="+7(000)000-0000">
                                  <p>Телефон долженс соответствовать шаблону <b>+7(000)000-0000</b></p>
                                  <input type="text" id="email" placeholder="E-mail">
                                  <p>Пример:mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru.</p>
                                  <input type="text" id="fromUser" placeholder="Коментарии">
                                  <button class="check">ПРОВЕРИТЬ</button>
                              </fieldset>
                          </form>`;
    this.content.innerHTML = htmlStr;
    this.handleaction();
  }
  getCheck(regExp, fieldValue, field) {
    if (regExp.test(fieldValue)) {
      field.style.backgroundColor = "#aaf0d1";
      field.style.color = "#5e727a";
    } else {
      field.style.backgroundColor = "#e89797";
      field.style.color = "#f0fbff";
    }
  }

  checkName() {
    const fieldValue = document.getElementById("name").value;
    const field = document.getElementById("name");
    const regExp = /[a-z|а-я][a-z|а-я]+(\s)?$/i;
    this.getCheck(regExp, fieldValue, field);
  }
  checkPhone() {
    const fieldValue = document.getElementById("phone").value;
    const field = document.getElementById("phone");
    const regExp = /[+]\d[(]\d{3}[)]\d{3}[-]\d{4}/i;
    this.getCheck(regExp, fieldValue, field);
  }
  checkEmail() {
    const fieldValue = document.getElementById("email").value;
    const field = document.getElementById("email");
    const regExp = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/i;
    this.getCheck(regExp, fieldValue, field);
  }
  handleaction() {
    const btn = document.querySelector(".check");

    btn.addEventListener("click", (event) => {
      event.preventDefault();
      this.checkName();
      this.checkPhone();
      this.checkEmail();
    });
  }
}
