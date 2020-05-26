import DIRECTORY_DATA from '../../data/directory.data';

const INITIAL_STATE = {
  directory: DIRECTORY_DATA
};

const directoryReducer = (state = INITIAL_STATE.directory, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryReducer;
