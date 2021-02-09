/*eslint-disable*/
export const GET_CATS = 'GET_CATS';
export const CATS_NOT_FOUND = 'CATS_NOT_FOUND';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const GET_CAT = 'GET_CAT';
export const CAT_NOT_FOUND = 'CAT_NOT_FOUND';


export const getCats = cats => ({
  type: GET_CATS,
  payload: cats,
});

export const catsNotFound = () => ({
  type: CATS_NOT_FOUND,
});

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export const getCat = cat => ({
  type: GET_CAT,
  payload: cat,
});

export const catNotFound = () => ({
  type: CAT_NOT_FOUND,
});