import ActionType from '../action.types';
import { addItemsToCart, removeFromCart, subItemsFromCart } from './cart.util';

const INITITAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case ActionType.cart.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };

    case ActionType.cart.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemsToCart([...state.cartItems], action.payload)
      };

    case ActionType.cart.SUB_FROM_CART:
      return {
        ...state,
        cartItems: subItemsFromCart([...state.cartItems], action.payload)
      };

    case ActionType.cart.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: removeFromCart([...state.cartItems], action.payload)
      };

    default:
      return state;
  }
};

export default cartReducer;
