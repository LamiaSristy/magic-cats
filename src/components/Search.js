import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/search.css';
import searchMovies from '../actions/searchMovies';

const Search = () => {
  const [query, handleChange] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    searchMovies(query)(dispatch);
    handleChange('');
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={e => handleChange(e.target.value)}
        className="search-input"
      />
      <input
        type="submit"
        value="Search"
        className="search-btn"
      />
    </form>
  );
};

export default Search;
