import React from 'react';
import { connect } from 'react-redux';

import { clearData, fetchSearchData, setCategory, startNewsFetch } from '../actions/';
import HomePage from '../components/pages/HomePage';

const mapDispatchToProps = (dispatch: any) => ({
  clearData: () => dispatch(clearData()),
  setCategory: (text: string) => dispatch(setCategory(text)),
  startNewsFetch: () => dispatch(startNewsFetch()),
});

const mapStateToProps = (state: any) => {
  return {
    category: state.category,
    newsData: state.newsData,
    newsListNumber: state.newsListNumber,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);