import React from 'react';
import { connect } from 'react-redux';

import { clearData, fetchSearchData, setCategory, startNewsFetch } from '../actions/';
import HomePage from '../components/pages/HomePage';

interface IHomeContainerState {
  category: string;
  isFetching: boolean;
  newsData: [];
  newsListNumber: number;
}

const mapStateToProps = (state: IHomeContainerState) => {
  return {
    category: state.category,
    isFetching: state.isFetching,
    newsData: state.newsData,
    newsListNumber: state.newsListNumber,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  clearData: () => dispatch(clearData()),
  setCategory: (text: string) => dispatch(setCategory(text)),
  startNewsFetch: () => dispatch(startNewsFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
