import axios from 'axios';
import { getCats, catsNotFound } from './index';
import { catBreedsUrl } from '../helpers/apiEndpoints';
import { filterCats } from '../helpers/dataFormat';

const fetchCats = () => dispatch => {
  axios.get(catBreedsUrl).then(res => {
    const filtered = filterCats(res.data);
    dispatch(getCats(filtered));
  }).catch(err => {
    dispatch(catsNotFound());
    throw (err);
  });
};

export default fetchCats;
