import CartActionTypes from "./cart-types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};
export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case CartActionTypes.ADD_ITEM:
      for (let i = 0; i < state.cartItems.length; i++) {
        if (state.cartItems[i].item.id === action.payload.id) {
          state.cartItems[i].quantity = state.cartItems[i].quantity + 1;
          return {
            ...state,
            cartItems: [...state.cartItems],
          };
        }
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { item: action.payload, quantity: 1 }],
      };
    default:
      return state;
  }
};
