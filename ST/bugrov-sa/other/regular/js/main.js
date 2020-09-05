'use strict'

document.querySelector('.text-input').value = '\'aren\'tI aren\'t take my little sister to school every day aren\'t,\' little Anthony said.';

document.querySelector('.btn').addEventListener('click', (e) => {
    let inputStr = document.querySelector('.text-input').value;

    const regex1 = new RegExp('^\'', 'gi');
    const regex2 = new RegExp(',\'', 'gi');

    inputStr = inputStr.replace(regex1, '"');
    inputStr = inputStr.replace(regex2, ',"');

    document.querySelector('.text-output').value = inputStr.replace(regex1, '"');
});

document.querySelector('#btn-input').addEventListener('click', (e) => {
    const regexName = new RegExp('^([a-z]|[а-я])+$', 'gi');
    const nameTip = '<span class="error">Только буквы</span>';

    const regexPhone = new RegExp('^\\+\\d\\(\\d\\d\\d\\)\\d\\d\\d\\-\\d\\d\\d\\d$', 'gi');
    const phoneTip = '<span class="error">+7(000)000-0000</span>';

    const regexEmail = new RegExp('^[a-z][a-z]+-?\\.?[a-z]+@[a-z]+\\.[a-z]+$', 'gi');
    const emailTip = '<span class="error"> mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru</span>';

    let isRight = true;

    let errDOMs = document.querySelectorAll('.error');
    errDOMs.forEach(elements => {
        elements.remove();
    });

    let doneDOMs = document.querySelector('.done');
    if (doneDOMs) {
        doneDOMs.remove();
    }
    
    let nameInput = document.querySelector('#name-input');
    if ((nameInput.value.match(regexName)) === null) {
        nameInput.classList.add('wrong');
        nameInput.insertAdjacentHTML('afterend', nameTip);
        isRight = false;
    } else {
        nameInput.classList.remove('wrong');
    }

    let phoneInput = document.querySelector('#phone-input');
    if ((phoneInput.value.match(regexPhone)) === null) {
        phoneInput.classList.add('wrong');
        phoneInput.insertAdjacentHTML('afterend', phoneTip);
        isRight = false;
    } else {
        phoneInput.classList.remove('wrong');
    }

    let emailInput = document.querySelector('#email-input');
    if ((emailInput.value.match(regexEmail)) === null) {
        emailInput.classList.add('wrong');
        emailInput.insertAdjacentHTML('afterend', emailTip);
        isRight = false;
    } else {
        emailInput.classList.remove('wrong');
    }

    if (isRight) {
        let btnInput = document.querySelector('#btn-input');
        btnInput.insertAdjacentHTML('afterend', '<span class="done">Все верно</span>');
    }
})