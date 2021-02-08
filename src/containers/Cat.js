import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import fetchCat from '../actions/fetchCat';

const mapStateToProps = state => ({
  cats: state.catsReducer,
});

const mapDispatchToProps = dispatch => ({
  fetchCat: id => dispatch(fetchCat(id)),
});

const Cat = ({
    cats, match, fetchCat
  }) => {
    const { params: { id } } = match;
    const { cat } = cats;

    useEffect(() => {
      fetchCat(id);
    }, [fetchCat, id]);
    
    if (cats.catLoading) {
      return (
        <div>
          {/* <Navbar /> */}
          <div className="movies-not-loaded">
            <h2>Cat is coming</h2>
          </div>
        </div>
      );
    }

    const view = cat ? (
      <div className="cat-list-body">
        <div className="cat-container ">
          {cat.name}
          <img src={cat.url} alt={cat.name} className="cat-item-img" />
        <p>{cat.description}</p>
      </div>
    </div>
    ) : (
      // <FourOFour />
      <div className="404"><h2>Not Found</h2></div>
    );

    return view;
};

Cat.propTypes = {
  cats: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  fetchCat: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cat));
