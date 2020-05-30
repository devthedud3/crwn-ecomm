import ActionType from '../action.types';

export const updateShopData = data => ({
  type: ActionType.shop.DISPLAY_DATA,
  payload: data
});
