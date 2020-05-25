import ActionType from '../action.types';

export const setActiveUser = user => ({
  type: ActionType.user.SET_CURRENT_USER,
  payload: user
});
