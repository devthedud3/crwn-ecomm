import ActionTypes from '../action.types';

const INITITAL_STATE = {
  hidden: true
};

const cartReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.cart.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };

    default:
      return state;
  }
};

export default cartReducer;
