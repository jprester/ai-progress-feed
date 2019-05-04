import React from 'react';
import { connect } from 'react-redux';

import { clearData, setCategory, updateSearchText } from '../actions/';
import SearchInput from '../components/widgets/SearchInput/SearchInput';

const mapStateToProps = (state: any) => {
  return {
    newsData: state.newsData,
    searchQuery: state.searchQuery,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  clearData: () => dispatch(clearData()),
  setCategory: (text: string) => dispatch(setCategory(text)),
  updateSearchText: (text: string) => dispatch(updateSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
