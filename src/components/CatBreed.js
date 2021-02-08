/*eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import '../stylesheets/catbreed.css';

const Cat = ({ cat, history }) => {
  const showCat = id => history.push(`/cat/${id}`);
  return (
    <div className="cat-list-body">
      <div className="cat-container">
          <p className="cat-name">{cat.name}</p>
          <div
            className=""
            onClick={() => showCat(cat.id)}
            onKeyDown={() => showCat(cat.id)}
            role="button"
          >
        <img src={cat.url} alt={cat.name} className="cat-breed-img" />
      </div>      
    </div>
    </div>
  )
};

Cat.propTypes = {
  cat: {
    id: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
  }.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(Cat);