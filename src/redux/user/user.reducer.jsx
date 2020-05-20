import ActionType from '../action.types';

const DEFAULT_STATE = {
  currentUser: null
};

const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionType.user.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
