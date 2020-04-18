import React, { useEffect } from "react";

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
  const { fetchSearchData, historyData, searchData, newsListNumber } = props;

  useEffect(() => {
    fetchSearchData(historyData.match.params.id);
  }, []);

  if (!searchData || !searchData.length) {
    return <Loader />;
  }

  return (
    <div className="search-page">
      <h2 className="page-title">Search Results</h2>
      <NewsListContainer
        data={searchData}
        listCount={newsListNumber}
        {...props}
      />
    </div>
  );
};

export default SearchPage;
