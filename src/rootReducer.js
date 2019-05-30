import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
import { products } from "./data.json";

const INITIAL_STATE = { cart: [], products };

function rootReducer(state = INITIAL_STATE, action) {
  let cart = [];
  let index = 0;
  switch (action.type) {
    // add to cart
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, { id: action.payload.id, ...products[action.payload.id] }] };

    // remove from cart
    case REMOVE_FROM_CART:
      cart = [...state.cart];
      index = cart.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        cart.splice(index, 1);
        return { ...state, cart };
      }
      return { ...state };

    // return state as is
    default:
      return state;
  }
}

export default rootReducer;
