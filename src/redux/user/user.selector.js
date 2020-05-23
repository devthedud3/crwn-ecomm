import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const activeUser = createSelector(
  [selectUser],
  user => user.currentUser
);
