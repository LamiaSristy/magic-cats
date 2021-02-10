import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/search.scss';

const CatFilter = ({ changeFilter }) => (
  <input
    type="text"
    placeholder="Search"
    onChange={e => changeFilter(e.target.value)}
    className="search-input"
  />
);

CatFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CatFilter;
