import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import searchCats from '../actions/searchCats';

const CatFilter = ({ changeFilter }) => {
  // const [query, handleChange] = useState('');

  // const dispatch = useDispatch();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   searchCats(query)(dispatch);
  //   handleChange('');
  // };

  return (
    <input
    type="text"
    placeholder="Search"
    onChange={e => changeFilter(e.target.value)}
    className="search-input"
  />
    // <form onSubmit={handleSubmit} className="search-form">
    //   <input
    //     type="text"
    //     placeholder="Search"
    //     value={query}
    //     onChange={e => handleChange(e.target.value)}
    //     className="search-input"
    //   />
    //   <input
    //     type="submit"
    //     value="Search"
    //     className="search-btn"
    //   />
    // </form>
  );
};

CatFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CatFilter;
