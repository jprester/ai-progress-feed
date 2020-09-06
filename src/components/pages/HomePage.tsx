import React from "react";

import { IHomePageProps } from "../../types/types";
import SciPaperList from "../widgets/SciPaperList/SciPaperList";
import ArticleList from "../widgets/ArticleList/ArticleList";
import VideoList from "../widgets/VideoList/VideoList";

const Home = (props: IHomePageProps) => {
  return (
    <div className="home-page">
      <h3 className="feed-list-title" id="sciPapers">
        Arxiv
      </h3>
      <SciPaperList data={props.arxivFeedData} />
      <h3 className="feed-list-title" id="videos">
        Youtube
      </h3>
      <VideoList data={props.youtubeFeedData} />
      <h3 className="feed-list-title" id="openai">
        OpenAI
      </h3>
      <ArticleList data={props.openAIFeedData} />
      <h3 className="feed-list-title" id="deepmind">
        DeepMind
      </h3>
      <ArticleList data={props.deepMindFeedData} />
      <h3 className="feed-list-title" id="microsoft">
        Microsoft
      </h3>
      <ArticleList data={props.microsoftFeedData} />
      <h3 className="feed-list-title" id="nvidia">
        Nvidia
      </h3>
      <ArticleList data={props.nvidiaFeedData} />
      <h3 className="feed-list-title" id="google">
        Google AI
      </h3>
      <ArticleList data={props.googleFeedData} />
    </div>
  );
};

export default Home;
