/*eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import '../stylesheets/catbreed.scss';

const Cat = ({ cat, history }) => {
  const showCat = id => history.push(`/cat/${id}`);
  return (
    <div className="cat-list-body">
      <div className="cat-container card">           
        <div  className="card-img-container">
          <img src={cat.url} alt={cat.name} className="card-img" />
        </div>   
        <div className="card-img-overlay"
            onClick={() => showCat(cat.id)}
            onKeyDown={() => showCat(cat.id)}
            role="button"
        >
            <p className="cat-name">{cat.name}</p>
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