export default class MyForm {
    constructor() {
        this.isNameChecked = false;
        this.isPhoneNumberChecked = false;
        this.isEmailChecked = false;
        this._init();
    }

    _init() {
        document.querySelectorAll('.form-input').forEach((input) => input.addEventListener('blur', this.checkValue));
        document.querySelector('.submit').addEventListener('click', this.submitButtonFunction);
    }

    submitButtonFunction(event) {
        if (!(this.isNameChecked && this.isPhoneNumberChecked && this.isEmailChecked)) {
            event.preventDefault();
        }
    }

    checkValue(event) {
        switch (event.target.id) {
            case 'name': {
                if (event.target.value) {
                    if (event.target.value.match(/^[a-zа-я]+$/i)) {
                        document.querySelector('.name').classList.remove('unmatched-name');
                        event.target.classList.remove('unmatched');
                        event.target.classList.add('matched');
                        this.isNameChecked = true;
                    } else {
                        event.target.classList.remove('matched');
                        document.querySelector('.name').classList.add('unmatched-name');
                        event.target.classList.add('unmatched');
                        this.isNameChecked = false;
                    }
                } else {
                    event.target.classList.remove('matched');
                    event.target.classList.remove('unmatched-name');
                    this.isNameChecked = false;
                }
                break;
            }
            case 'phone': {
                if (event.target.value) {
                    if (event.target.value.match(/^\+[0-9]\([0-9]{3}\)[0-9]{3}\-[0-9]{4}/)) {
                        document.querySelector('.phone').classList.remove('unmatched-phone');
                        event.target.classList.remove('unmatched');
                        event.target.classList.add('matched');
                        this.isPhoneNumberChecked = true;
                    } else {
                        event.target.classList.remove('matched');
                        document.querySelector('.phone').classList.add('unmatched-phone');
                        event.target.classList.add('unmatched');
                        this.isPhoneNumberChecked = false;
                    }
                } else {
                    event.target.classList.remove('matched');
                    event.target.classList.remove('unmatched-phone');
                    this.isPhoneNumberChecked = false;
                }
                break;
            }
            case 'email': {
                if (event.target.value) {
                    if (event.target.value.match(/^[a-z0-9]+(\.?|\-?)[a-z0-9]+@mail\.ru/i)) {
                        document.querySelector('.email').classList.remove('unmatched-email');
                        event.target.classList.remove('unmatched');
                        event.target.classList.add('matched');
                        this.isEmailChecked = true;
                    } else {
                        event.target.classList.remove('matched');
                        document.querySelector('.email').classList.add('unmatched-email');
                        event.target.classList.add('unmatched');
                        this.isEmailChecked = false;
                    }
                } else {
                    event.target.classList.remove('matched');
                    event.target.classList.remove('unmatched-email');
                    this.isEmailChecked = false;
                }
                break;
            }
        }
    }
}