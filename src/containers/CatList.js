/*eslint-disable*/
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cat from '../components/CatBreed';
import { changeFilter } from '../actions/index';
import fetchCats  from '../actions/fetchCats';
import '../stylesheets/catlist.scss';
import CatFilter from '../components/CatFilter';
import Loading from '../components/Loading';

const mapStateToProp = state => ({
  cats: state.catsReducer,
  filter: state.filterReducer,
});

const mapDispatchToProps = dispatch => ({
  fetchCats: () => dispatch(fetchCats()),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

const CatList = ({
  cats, fetchCats, filter, changeFilter
  }) => {
    useEffect(() => {
      fetchCats();
    }, [fetchCats]);

    const handleFilterChange = filter => changeFilter(filter);

    if (cats.catsLoading) {
      return <Loading />;
    }

    if (cats.cats === null || cats.cats.length === 0) {
      return (
        <div>
          {/* <Navbar /> */}
          <div className="movies-not-loaded">
            <h2>Error occured. Please try again.</h2>
          </div>
        </div>
      );
    }

    const filtered = filter === '' ? cats.cats : cats.cats.filter(cat => cat.name.includes(filter));

    const renderCat = cat => <Cat key={cat.id} cat={cat}  />;

    return (
      <div>
        <div className="movie-list-body-header">
          <CatFilter changeFilter={handleFilterChange} />
          {/* <CatFilter/> */}
        </div>
          
        <div className="cats-container card-deck">
          {filtered.map(renderCat)}
        </div>
      </div>
      
    );
};

CatList.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCats: PropTypes.func.isRequired, 
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};


export default connect(mapStateToProp, mapDispatchToProps)(CatList);
