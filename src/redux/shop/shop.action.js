import ActionType from '../action.types';

export const showHats = hats => ({
  type: ActionType.shop.SHOW_HATS,
  payload: hats
});
