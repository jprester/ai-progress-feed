import React from "react";

import { IHomePageProps } from "../../types/types";
import SciPaperList from "../widgets/SciPaperList/SciPaperList";
import ArticleList from "../widgets/ArticleList/ArticleList";

const Home = (props: IHomePageProps) => {
  return (
    <div className="home-page">
      <h3 className="feed-list-title">Arxiv</h3>
      <SciPaperList data={props.arxivFeedData} />
      <h3 className="feed-list-title">OpenAI</h3>
      <ArticleList data={props.openAIFeedData} />
      <h3 className="feed-list-title">DeepMind</h3>
      <ArticleList data={props.deepMindFeedData} />
      <h3 className="feed-list-title">Microsoft</h3>
      <ArticleList data={props.microsoftFeedData} />
    </div>
  );
};

export default Home;
