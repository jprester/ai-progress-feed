import React from 'react';
import { connect } from 'react-redux';

import NewsList from '../widgets/NewsList/NewsList';

interface ISearchPageProps {
  historyData: {
    match: {};
  };
  newsListNumber: number;
  searchData: {};
}

const SearchPage: React.FC<ISearchPageProps> = (props: any) => {
  if (!props.searchData || !props.searchData.length) {
    props.fetchSearchData(props.historyData.match.params.id);

    return (
      <div>Loading..</div>
    );
  }

  return (
    <div className="search-page">
      <h1>Search Results</h1>
      <NewsList data={props.searchData} listCount={props.newsListNumber} {...props} />
    </div>
  );
};

export default SearchPage;
