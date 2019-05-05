import React from 'react';
import { connect } from 'react-redux';

import NewsArticlePage from '../components/pages/NewsArticlePage';

interface INewsPageState {
  newsData: [];
  searchData: [];
  newsListNumber: number;
}

const mapStateToProps = (state: INewsPageState) => {
  const allResults = state.searchData ? state.newsData.concat(state.searchData) : state.newsData;

  return {
    data: allResults,
  };
};

export default connect(mapStateToProps)(NewsArticlePage);
