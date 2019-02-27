import React from 'react';
import { connect } from 'react-redux';

import SearchInput from '../components/widgets/SearchInput/SearchInput';

const mapStateToProps = (state: any) => {
  return {
    newsData: state.newsData,
    searchQuery: state.searchQuery,
  };
};

export default connect(mapStateToProps)(SearchInput);
