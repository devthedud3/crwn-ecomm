import { createSelector } from 'reselect';

export const directory = state => state.directory;

export const selectDirectory = createSelector(
  [directory],
  directory => directory
);
