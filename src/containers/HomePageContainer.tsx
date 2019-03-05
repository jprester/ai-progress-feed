import React from 'react';
import { connect } from 'react-redux';

import { clearSearchResults, fetchSearchData } from '../actions/';
import Home from '../components/pages/Home';

interface IHomePageState {
  newsData: [];
  newsListNumber: number;
}

const mapDispatchToProps = (dispatch: any) => ({
  clearSearchResults: () => dispatch(clearSearchResults()),
});

const mapStateToProps = (state: IHomePageState) => {
  return {
    newsData: state.newsData,
    newsListNumber: state.newsListNumber,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
