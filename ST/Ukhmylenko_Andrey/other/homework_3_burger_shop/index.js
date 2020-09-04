import Catalog from './catalog.js';

let items = [{
        name: 'Большой бургер',
        price: 100,
        callories: 40,
        img: './assets/big-burger.jpeg'
    },
    {
        name: 'Маленький бургер',
        price: 50,
        callories: 20,
        img: './assets/big-burger.jpeg'
    },
    {
        name: 'Добавить сыр',
        price: 10,
        callories: 20,
        img: './assets/big-burger.jpeg'
    },
    {
        name: 'Добавить салат',
        price: 20,
        callories: 5,
        img: './assets/big-burger.jpeg'
    },
    {
        name: 'Посыпать приправой',
        price: 15,
        callories: 0,
        img: './assets/big-burger.jpeg'
    },
    {
        name: 'Полить майонезом',
        price: 20,
        callories: 5,
        img: './assets/big-burger.jpeg'
    },
    {
        name: 'Картофель-фри',
        price: 15,
        callories: 10,
        img: './assets/big-burger.jpeg'
    },
];

let catalog = new Catalog(items);