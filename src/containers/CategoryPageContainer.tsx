import React from 'react';
import { connect } from 'react-redux';

import { clearData, setCategory, startNewsFetch } from '../actions/';
import CategoryPage from '../components/pages/CategoryPage';

const mapStateToProps = (state: any) => {
  return {
    category: state.category,
    newsData: state.newsData,
    newsListNumber: state.newsListNumber,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  clearData: () => dispatch(clearData()),
  setCategory: (category: string) => dispatch(setCategory(category)),
  startNewsFetch: (category: string) => dispatch(startNewsFetch(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
