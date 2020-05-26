import SHOP_DATA from '../../data/shop.data';
const INITIAL_STATE = {
  shop: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOW_HATS':
      return {
        ...state,
        action: action.payload
      };

    default:
      return state;
  }
};

export default shopReducer;
