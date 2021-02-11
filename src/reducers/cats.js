import { GET_CATS, CATS_NOT_FOUND, GET_CAT } from '../actions/index';

const initialState = {
  catsLoading: true,
  cats: [],
  catLoading: true,
  cat: {},
};

const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATS:
      return {
        ...state,
        catsLoading: false,
        cats: [...action.payload],
      };
    case CATS_NOT_FOUND:
      return {
        ...state,
        catsLoading: false,
        cats: null,
      };
    case GET_CAT:
      return {
        ...state,
        catsLoading: true,
        catLoading: false,
        cat: action.payload,
      };
    default:
      return state;
  }
};

export default catsReducer;
