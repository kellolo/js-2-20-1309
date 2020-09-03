document.querySelector('.basket-button').addEventListener('click', hideBasket);

function hideBasket() {
    let basketContainer = document.querySelector('.basket-container');

    if (basketContainer.classList.contains('invisible')) {
        basketContainer.classList.remove('invisible');
    } else {
        basketContainer.classList.add('invisible');
    }
}