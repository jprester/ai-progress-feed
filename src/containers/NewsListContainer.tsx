import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NewsList from '../components/widgets/NewsList';

const mapStateToProps = (state: any) => {
  return {
    newsData: state.newsData,
  };
};

export default connect(mapStateToProps)(NewsList);
