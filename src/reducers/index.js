import { combineReducers } from 'redux';
import catsReducer from './cats';
import filterReducer from './filter';

const reducer = combineReducers({ catsReducer, filterReducer });

export default reducer;
