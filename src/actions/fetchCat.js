import axios from 'axios';
import { getCat, catNotFound } from './index';
import { catDetailUrl } from '../helpers/apiEndpoints';
import { filterCat } from '../helpers/filterData';

const fetchCat = id => dispatch => {
  const url = catDetailUrl(id);

  axios.get(url).then(res => {
    const filtered = filterCat(res.data);
    dispatch(getCat(filtered));
  }).catch(err => {
    if (err.response.status === 404) {
      dispatch(catNotFound());
    }
    throw (err);
  });
};

export default fetchCat;
