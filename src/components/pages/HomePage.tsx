import React from "react";

import { IHomePageProps, IArticleList } from "../../types/types";
import ArticleList from "../widgets/ArticleList/ArticleList";
import Loader from "../common/Loader";

const Home = ({ feedData }: IHomePageProps) => {
  return (
    <div className="home-page">
      <a id="top"></a>
      {displayData(feedData)}
    </div>
  );
};

const displayData = (data: IArticleList[]) => {
  if (!data || data.length === 0) return <Loader />;
  return data.map((feed) => {
    if (feed.data && feed.data.length > 0) {
      return (
        <ArticleList
          data={feed.data}
          moreButton={feed.webLink}
          type={feed.type}
          name={feed.name}
          feedName={feed.feedName}
          key={feed.name}
        />
      );
    }
  });
};

export default Home;
