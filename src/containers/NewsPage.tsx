import React from 'react';
import { connect } from 'react-redux';

import NewsPageContent from '../components/pages/NewsPageContent';

const mapStateToProps = (state: any) => {
  return {
    newsData: state.newsData,
  };
};

export default connect(mapStateToProps)(NewsPageContent);
