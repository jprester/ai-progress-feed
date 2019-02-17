import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NewsList from '../components/widgets/NewsList';

interface INewsListState {
  newsData: [];
}

const mapStateToProps = (state: INewsListState) => {
  return {
    newsData: state.newsData,
  };
};

export default connect(mapStateToProps)(NewsList);
