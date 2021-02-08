/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../stylesheets/filterstyles.css';

const CategoryFilter = ({ catFilter }) => {
  const booksCategories = [
    'All',
    'Kids',
    'Action',
    'Horror',
    'Sci-Fi',
    'History',
    'Learning',
    'Biography',
  ];

  return (
    <div className="filtercategory">
      <div className="wrapper filter-wrapper">   
      <label htmlFor="book-category" className="Filter-heading">
        <h2 className="title">BookStore CMS</h2>
        <p className="books">Books</p>
        <div className="categories">
        <p className="categories-label">category</p>
        <select className="book-category-selector"
          id="book-category"
          onChange={e => catFilter(e.target.value)}
        >
          {booksCategories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        </div>
      </label>
      <div>
        <i class="fas fa-user"></i>
      </div>    
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  catFilter: PropTypes.func.isRequired,
};

export default connect(null, null)(CategoryFilter);
