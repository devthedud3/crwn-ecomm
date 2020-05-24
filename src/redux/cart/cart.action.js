import ActionType from '../action.types';

export const cartHidden = () => ({
  type: ActionType.cart.TOGGLE_CART
});

export const addToCart = item => ({
  type: ActionType.cart.ADD_TO_CART,
  payload: item
});

export const subFromCart = item => ({
  type: ActionType.cart.SUB_FROM_CART,
  payload: item
});

export const removeFromCart = item => ({
  type: ActionType.cart.REMOVE_FROM_CART,
  payload: item
});
