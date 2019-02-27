import React from 'react';
import { connect } from 'react-redux';

import { fetchSearchData } from '../../actions/';
import NewsList from '../widgets/NewsList/NewsList';

interface ISearchPageProps {
  historyData: {
    match: {};
  };
  searchData: {};
}

const SearchPage: React.FC<ISearchPageProps> = (props: any) => {
  console.log("props on search page: ", props);
  if (!props.searchData || !props.searchData.length) {
    console.log("no news data in search");

    props.fetchSearchData(props.historyData.match.params.id);

    return (
      <div>Loading..</div>
    );
  }

  return (
    <div className="search-page">
      <h1>Search Results</h1>
      <NewsList data={props.searchData} {...props} />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchSearchData: (text: string) => dispatch(fetchSearchData(text)),
});

export default connect(null, mapDispatchToProps)(SearchPage);
