const basketStore = {
  namespaced: true,
  state: {
    items: [],
  },
  mutations: {
    add(state, item) {
      let find = state.items.find(el => el.productId == item.productId);
      if (find) {
        find.amount++;
      } else {
        state.items.push(
          Object.assign({}, item, {
            amount: 1,
          })
        );
      }
      fetch('http://localhost:3000/basket', {
        method: 'POST',
        body: JSON.stringify(state.items),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
    },
    remove(state, id) {
      let find = state.items.find(el => el.productId == id);
      if (find.amount > 1) {
        find.amount--;
      } else {
        state.items.splice(state.items.indexOf(find), 1);
      }
      fetch('http://localhost:3000/basket', {
        method: 'POST',
        body: JSON.stringify(state.items),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
    },
  },
  getters: {
    totalPrice(state) {
      return state.items.reduce((acc, cur) => acc + cur.productPrice * cur.amount, 0);
    },
  },
};

export default basketStore;
