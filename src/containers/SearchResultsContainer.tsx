import React from 'react';
import { connect } from 'react-redux';

import { fetchSearchData } from '../actions/';
import SearchResultsPage from '../components/pages/SearchResultsPage';

interface IHomePageState {
  newsListNumber: number;
  searchData: [];
  searchQuery: '';
}

const mapStateToProps = (state: IHomePageState) => {
  return {
    newsListNumber: state.newsListNumber,
    searchData: state.searchData,
    searchQuery: state.searchQuery,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchSearchData: (text: string) => dispatch(fetchSearchData(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
