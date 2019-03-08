import React from 'react';
import { connect } from 'react-redux';

import { clearData, startNewsFetch } from '../actions/';
import CategoryPage from '../components/pages/CategoryPage';

const mapStateToProps = (state: any) => {
  return {
    newsData: state.newsData,
    newsListNumber: state.newsListNumber,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  clearData: () => dispatch(clearData()),
  startNewsFetch: (category: string) => dispatch(startNewsFetch(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
