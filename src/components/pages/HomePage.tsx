import React, { useEffect } from "react";

import SciPaperList from "../widgets/SciPaperList/SciPaperList";
import ArticleList from "../widgets/ArticleList/ArticleList";

const Home = (props: any) => {
  return (
    <div className="home-page">
      <h2 className="page-title">Arxiv</h2>
      <SciPaperList data={props.arxivFeedData} />
      <h2 className="page-title">Microsoft</h2>
      <ArticleList data={props.microsoftFeedData} />
      <h2 className="page-title">OpenAI</h2>
      <ArticleList data={props.openAIFeedData} />
      <h2 className="page-title">DeepMind</h2>
      <ArticleList data={props.deepMindFeedData} />
    </div>
  );
};

export default Home;
