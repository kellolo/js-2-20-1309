import {get} from '../../utils/requests.js';

export default {
    state: () => ({
        items: [],
        url: '/api/basket'
    }),
    actions: {
    },
    mutations: {
        mountedBasket(state){
            get(state.url)
            .then(bask => {state.items = bask.content});
            console.log(state.items);
        },
        buy(state, item) {
            let find = state.items.find(el => el.productId == item.productId);
            if (find) {
                find.amount++;
            } else {
                state.items.push(Object.assign({}, item, {
                    amount: 1
                }))
            }
        },
        remove(state, id){
            let itemBasket = state.items.find(el => el.productId == id);
            if (itemBasket.amount > 1){
                itemBasket.amount--;
            } else {
                state.items.splice(state.items.indexOf(itemBasket), 1);
            }
        },
    } 
}