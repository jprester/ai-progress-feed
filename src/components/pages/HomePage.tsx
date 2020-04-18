import React, { useEffect } from "react";

import NewsListContainer from "../../containers/NewsListContainer";
import { CATEGORY } from "../../helpers/apiConfig";
import CategoryNavigation from "../widgets/CategoryNavigation/CategoryNavigation";

interface IHomePageProps {
  historyData: {
    match: {};
  };
  isFetching: boolean;
  newsData: [];
  newsListNumber: number;
  startNewsFetch: any;
  clearData: any;
  category: string;
  setCategory: any;
}

const Home: React.FC<IHomePageProps> = (props) => {
  const {
    newsData,
    clearData,
    setCategory,
    startNewsFetch,
    isFetching,
    newsListNumber,
  } = props;
  useEffect(() => {
    if (isFetching === false) {
      clearData();
      setCategory("");
      startNewsFetch();
    }
  }, []);

  return (
    <div className="home-page">
      <h2 className="page-title">News</h2>
      <NewsListContainer
        data={newsData}
        listCount={newsListNumber}
        {...props}
      />
    </div>
  );
};

export default Home;
