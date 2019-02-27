import React from 'react';
import { connect } from 'react-redux';

import Home from '../components/pages/Home';

interface IHomePageState {
  newsData: [];
}

const mapStateToProps = (state: IHomePageState) => {
  return {
    newsData: state.newsData,
  };
};

export default connect(mapStateToProps)(Home);
