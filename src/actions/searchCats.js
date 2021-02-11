import axios from 'axios';
import { getCats, catsNotFound } from './index';
import { searchUrl } from '../helpers/apiEndpoints';
import { filterCats } from '../helpers/dataFormat';

const searchCats = query => dispatch => {
  const url = searchUrl(query);

  axios.get(url).then(res => {
    const filtered = filterCats(res.data);
    dispatch(getCats(filtered));
  }).catch(err => {
    dispatch(catsNotFound());
    throw (err);
  });
};

export default searchCats;
