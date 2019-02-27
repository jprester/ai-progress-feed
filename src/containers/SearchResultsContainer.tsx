import React from 'react';
import { connect } from 'react-redux';

import SearchResultsPage from '../components/pages/SearchResultsPage';

interface IHomePageState {
  searchData: [];
  searchQuery: '';
}

const mapStateToProps = (state: IHomePageState) => {
  return {
    searchData: state.searchData,
    searchQuery: state.searchQuery,
  };
};

export default connect(mapStateToProps)(SearchResultsPage);
