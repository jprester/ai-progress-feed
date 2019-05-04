import React from 'react';
import { connect } from 'react-redux';

import Loader from '../common/Loader';
import NewsList from '../widgets/NewsList/NewsList';

interface ISearchPageProps {
  historyData: {
    match: {};
  };
  newsListNumber: number;
  searchData: {};
  searchQuery: string;
}

const SearchPage: React.FC<ISearchPageProps> = (props: any) => {
  if (!props.searchData || !props.searchData.length) {
    props.fetchSearchData(props.historyData.match.params.id);

    return (
      <Loader />
    );
  }

  return (
    <div className="search-page">
      <h2 className="page-title">Search Results</h2>
      <NewsList data={props.searchData} listCount={props.newsListNumber} {...props} />
    </div>
  );
};

export default SearchPage;
