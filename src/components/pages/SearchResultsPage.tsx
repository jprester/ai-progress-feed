import React from 'react';
import { connect } from 'react-redux';

import Loader from '../common/Loader';
import NewsList from '../widgets/NewsList/NewsList';

interface ISearchPageProps {
  historyData: {
    match: {
      params: {
        id: string;
      };
    };
  };
  newsListNumber: number;
  searchData: [];
  searchQuery: string;
  fetchSearchData: (id: string) => void;
}

const SearchPage: React.FC<ISearchPageProps> = (props) => {
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
