import React from 'react';
import { connect } from 'react-redux';

import NewsPage from '../components/pages/NewsPage';

interface INewsPageState {
  newsData: [];
}

const mapStateToProps = (state: INewsPageState) => {
  return {
    newsData: state.newsData,
  };
};

export default connect(mapStateToProps)(NewsPage);
