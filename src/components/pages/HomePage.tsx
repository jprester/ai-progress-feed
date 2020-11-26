import React from "react";

import { IHomePageProps } from "../../types/types";
import ArticleList from "../widgets/ArticleList/ArticleList";

const Home = ({ feedData }: IHomePageProps) => {
  return (
    <div className="home-page">
      <a id="top"></a>
      {feedData &&
        feedData.map((feed: any) => {
          if (feed.data && feed.data.length > 0) {
            return (
              <ArticleList
                data={feed.data}
                moreButton={feed.webLink}
                type={feed.type}
                name={feed.name}
              />
            );
          }
        })}
    </div>
  );
};

export default Home;
