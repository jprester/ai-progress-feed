import React from "react";

import { IHomePageProps } from "../../types/types";
import SciPaperList from "../widgets/SciPaperList/SciPaperList";
import ArticleList from "../widgets/ArticleList/ArticleList";
import VideoList from "../widgets/VideoList/VideoList";

const Home = (props: IHomePageProps) => {
  return (
    <div className="home-page">
      <h3 className="feed-list-title">Arxiv</h3>
      <SciPaperList data={props.arxivFeedData} />
      <h3 className="feed-list-title">Youtube</h3>
      <VideoList data={props.youtubeFeedData} />
      <h3 className="feed-list-title">OpenAI</h3>
      <ArticleList data={props.openAIFeedData} />
      <h3 className="feed-list-title">DeepMind</h3>
      <ArticleList data={props.deepMindFeedData} />
      <h3 className="feed-list-title">Microsoft</h3>
      <ArticleList data={props.microsoftFeedData} />
      <h3 className="feed-list-title">Nvidia</h3>
      <ArticleList data={props.nvidiaFeedData} />
      <h3 className="feed-list-title">Google AI</h3>
      <ArticleList data={props.googleFeedData} />
    </div>
  );
};

export default Home;
