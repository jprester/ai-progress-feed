import React, { useEffect } from "react";
import { connect } from "react-redux";

import NewsListContainer from "../../containers/NewsListContainer";
import Loader from "../common/Loader";

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
  useEffect(() => {
    props.fetchSearchData(props.historyData.match.params.id);
  }, []);

  if (!props.searchData || !props.searchData.length) {
    return <Loader />;
  }

  return (
    <div className="search-page">
      <h2 className="page-title">Search Results</h2>
      <NewsListContainer
        data={props.searchData}
        listCount={props.newsListNumber}
        {...props}
      />
    </div>
  );
};

export default SearchPage;
