import React from 'react';
import { connect } from 'react-redux';

import NewsPage from '../components/pages/NewsPage';

const mapStateToProps = (state: any) => {
  return {
    newsData: state.newsData,
  };
};

export default connect(mapStateToProps)(NewsPage);
