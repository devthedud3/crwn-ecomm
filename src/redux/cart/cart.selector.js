import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const addCartItem = createSelector([selectCartItem], cartItem =>
  cartItem.reduce((total, newValue) => total + newValue.quantity, 0)
);

export const cartTotal = createSelector([selectCartItem], cartItem =>
  cartItem.reduce(
    (total, newValue) => total + newValue.quantity * newValue.price,
    0
  )
);

export const cartHidden = createSelector([selectCart], cart => cart.hidden);
