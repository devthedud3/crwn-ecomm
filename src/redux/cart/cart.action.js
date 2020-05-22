import ActionType from '../action.types';

export const cartHidden = () => ({
  type: ActionType.cart.TOGGLE_CART
});

export const addToCart = item => ({
  type: ActionType.cart.ADD_TO_CART,
  payload: item
});
