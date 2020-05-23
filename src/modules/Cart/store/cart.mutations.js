const mutations = {
  addToCart(state, product) {
    console.log(product);
    console.log(state);
    const record = state.cart.find(p => p.product.id === product.id);
    console.log(record);
    console.log(state.cart);
    if (!record) {
      state.cart.push({
        product,
        quantity: 1
      });
    } else {
      record.quantity++;
    }
  },
  removeFromCart(state, product) {
    console.log(product.product.id);
    const record = state.cart.find(p => p.product.id === product.product.id);
    console.log(record);
    if (record.quantity === 1) {
      const newCart = state.cart.filter(
        p => p.product.id !== product.product.id
      );
      state.cart = newCart;
    } else {
      record.quantity--;
    }
  },
  emptyCart(state) {
    state.cart = [];
  },
  setCart(state, value) {
    if (state.cart.length > 0) {
      state.cart.concat(value);
    } else {
      state.cart = value;
    }
  },
  setCoupon(state, value) {
    state.coupon = value
  }
};

export default mutations;
