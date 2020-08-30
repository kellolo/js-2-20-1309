// Задание 1

function directSpeechQuotes(text) {
    return text.replaceAll(/\B'|'\B/g, '"');
}

// Задание 2

let isNameChecked = false;
let isPhoneNumberChecked = false;
let isEmailChecked = false;

document.querySelectorAll('.form-input').forEach((input) => input.addEventListener('blur', checkValue));
document.querySelector('.submit').addEventListener('click', submitButtonFunction);

function submitButtonFunction(event) {
    if (!(isNameChecked && isPhoneNumberChecked && isEmailChecked)) {
        event.preventDefault();
    }
}

function checkValue(event) {
    switch(event.target.id) {
        case 'name': {
            if (event.target.value) {
                if (event.target.value.match(/^[a-zа-я]+/i)) {
                    document.querySelector('.name').classList.remove('unmatched-name');
                    event.target.classList.remove('unmatched');
                    event.target.classList.add('matched');
                    isNameChecked = true;
                } else {
                    event.target.classList.remove('matched');
                    document.querySelector('.name').classList.add('unmatched-name');
                    event.target.classList.add('unmatched');
                    isNameChecked = false;
                }
            } else {
                event.target.classList.remove('matched');
                event.target.classList.remove('unmatched-name');
                isNameChecked = false;
            }
            break;
        }
        case 'phone': {
            if (event.target.value) {
                if (event.target.value.match(/^\+[0-9]\([0-9]{3}\)[0-9]{3}\-[0-9]{4}/)) {
                    document.querySelector('.phone').classList.remove('unmatched-phone');
                    event.target.classList.remove('unmatched');
                    event.target.classList.add('matched');
                    isPhoneNumberChecked = true;
                } else {
                    event.target.classList.remove('matched');
                    document.querySelector('.phone').classList.add('unmatched-phone');
                    event.target.classList.add('unmatched');
                    isPhoneNumberChecked = false;
                }
            } else {
                event.target.classList.remove('matched');
                event.target.classList.remove('unmatched-phone');
                isPhoneNumberChecked = false;
            }
            break;
        }
        case 'email': {
            if (event.target.value) {
                if (event.target.value.match(/^[a-z0-9]+(\.?|\-?)[a-z0-9]+@mail\.ru/i)) {
                    document.querySelector('.email').classList.remove('unmatched-email');
                    event.target.classList.remove('unmatched');
                    event.target.classList.add('matched');
                    isEmailChecked = true;
                } else {
                    event.target.classList.remove('matched');
                    document.querySelector('.email').classList.add('unmatched-email');
                    event.target.classList.add('unmatched');
                    isEmailChecked = false;
                }
            } else {
                event.target.classList.remove('matched');
                event.target.classList.remove('unmatched-email');
                isEmailChecked = false;
            }
            break;
        }
    }
}
