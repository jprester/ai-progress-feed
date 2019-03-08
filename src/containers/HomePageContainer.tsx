import React from 'react';
import { connect } from 'react-redux';

import { clearData, fetchSearchData, startNewsFetch } from '../actions/';
import Home from '../components/pages/Home';

const mapDispatchToProps = (dispatch: any) => ({
  clearData: () => dispatch(clearData()),
  startNewsFetch: () => dispatch(startNewsFetch()),
});

const mapStateToProps = (state: any) => {
  return {
    newsData: state.newsData,
    newsListNumber: state.newsListNumber,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
