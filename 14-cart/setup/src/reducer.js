const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    let cart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: cart,
    };
  }

  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });

    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      })
      .filter((item) => item.amount !== 0);

    return {
      ...state,
      cart: tempCart,
    };
  }
  return state;
};

export default reducer;
