/*eslint-disable*/
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import Cat from '../components/CatBreed';
import { changeFilter, getCats } from '../actions/index';
import fetchCats  from '../actions/fetchCats';
import '../stylesheets/catlist.scss';
import CatFilter from '../components/CatFilter';
import Loading from '../components/Loading';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    const dispatch = useDispatch();

    useEffect(() => {
      if (cats.cats === null || cats.cats.length === 0) {
        fetchCats();
      } else {
        dispatch(getCats(cats.cats));
      }
    }, [fetchCats, cats.cats.length]);

    const handleFilterChange = filter => changeFilter(filter);

    if (cats.catsLoading) {
      return <Loading />;
    }

    if (cats.cats === null || cats.cats.length === 0) {
      return (
        <div>
         <Navbar />
          <div className="">
            <h2>Error occured. Please try again.</h2>
          </div>
        </div>
      );
    }

    const filtered = filter === '' ? cats.cats : cats.cats.filter(cat => cat.name.includes(filter));

    const renderCat = cat => <Cat key={cat.id} cat={cat}  />;

    return (
      <div className = "cat-list-Home-container">
        <Navbar />
        <div className="cat-catalogue-container">
          <div className="cat-search">
            <CatFilter changeFilter={handleFilterChange} />          
          </div>         
          <div className="cats-container d-flex flex-wrap">
            {filtered.map(renderCat)}
          </div>
        </div>      

        <Footer />
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
