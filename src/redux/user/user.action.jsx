import ActionTypes from '../action.types';

export const setActiveUser = user => ({
  type: ActionTypes.user.SET_CURRENT_USER,
  payload: user
});
