import React from 'react';
import { connect } from 'react-redux';

import { clearSearchResults, updateSearchText } from '../actions/';
import SearchInput from '../components/widgets/SearchInput/SearchInput';

const mapStateToProps = (state: any) => {
  return {
    newsData: state.newsData,
    searchQuery: state.searchQuery,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  clearSearchResults: () => dispatch(clearSearchResults()),
  updateSearchText: (text: string) => dispatch(updateSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
