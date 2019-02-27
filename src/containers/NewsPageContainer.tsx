import React from 'react';
import { connect } from 'react-redux';

import NewsPage from '../components/pages/NewsPage';

interface INewsPageState {
  newsData: [];
  searchData: [];
}

const mapStateToProps = (state: INewsPageState) => {
  let allResults = [];

  if(state.searchData) {
    allResults = state.newsData.concat(state.searchData);
  } else {
    allResults = state.newsData;
  }

  return {
    data: allResults,
  };
};

export default connect(mapStateToProps)(NewsPage);
