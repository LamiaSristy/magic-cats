/*eslint-disable*/
import catsReducer from '../../reducers/cats';
import {
  getCats, catsNotFound, catNotFound } from '../../actions';
import { cats } from '../helper/helper';

const initialState = {
  catsLoading: true,
  cats: [],
  catLoading: true,
  cat: {},
};

describe('Cats Reducer', () => {
  it('Should return the default state', () => {
    const state = catsReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('Should return new state if valid cats are provided', () => {
    const action = getCats(cats);
    const state = catsReducer(undefined, action);

    expect(state.cats).toEqual([...cats]);
    expect(state.catLoading).toEqual(true);
  });

  it('Should return new state with cats set to null', () => {
    const action = catsNotFound();
    const state = catsReducer(undefined, action);

    expect(state.cats).toEqual(null);
    expect(state.catLoading).toBeUndefined;
  });

  it('Should return new state with cat set to null', () => {
    const action = catNotFound();
    const state = catsReducer(undefined, action);

    expect(state.cat).toEqual({});
    expect(state.catLoading).toBeFalsy;
  });
});
