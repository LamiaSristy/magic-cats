import { CHANGE_FILTER } from '../actions/index';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default: return state;
  }
};

export default filterReducer;
