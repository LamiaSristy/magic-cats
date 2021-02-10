import {
  getCats, catsNotFound, changeFilter, getCat, catNotFound
} from '../../actions/index';
import { cats, cat } from '../helper/helper';

describe('Get Cats', () => {
  it('Should return an object containing the action and payload with the catList', () => {
    const response = getCats(cats);

    expect(response.type).toEqual('GET_CATS');
    expect(response.payload).toEqual(cats);
  });
});

describe('Get Cat', () => {
  it('Should return an object containing the action and payload with the cat', () => {
    const response = getCat(cat);

    expect(response.type).toEqual('GET_CAT');
    expect(response.payload).toEqual(cat);
  });
});

describe('Change Filter', () => {
  it('Should return an object containing the action and payload with the filter', () => {
    const response = changeFilter('Action');

    expect(response.type).toEqual('CHANGE_FILTER');
    expect(response.payload).toEqual('Action');
  });
});

describe('Cats Not Found', () => {
  it('Should return an object containing the action', () => {
    const response = catsNotFound();

    expect(response.type).toEqual('CATS_NOT_FOUND');
  });
});

describe('A Cat Not Found', () => {
  it('Should return an object containing the action', () => {
    const response = catNotFound();

    expect(response.type).toEqual('CAT_NOT_FOUND');
  });
});
