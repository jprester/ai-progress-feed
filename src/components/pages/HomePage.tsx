import React from "react";

import { SOURCES } from "../../helpers/apiConfig";
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
      <SciPaperList
        data={props.arxivFeedData}
        moreButton={SOURCES.AI_PAPERS.ARXIV.WEB}
      />
      <h3 className="feed-list-title" id="videos">
        Youtube
      </h3>
      <VideoList
        data={props.youtubeFeedData}
        moreButton={SOURCES.YOUTUBE.TWO_MINUTE_PAPERS.WEB}
      />
      <h3 className="feed-list-title" id="openai">
        OpenAI
      </h3>
      <ArticleList
        data={props.openAIFeedData}
        moreButton={SOURCES.COMPANIES.OPENAI.WEB}
      />
      <h3 className="feed-list-title" id="deepmind">
        DeepMind
      </h3>
      <ArticleList
        data={props.deepMindFeedData}
        moreButton={SOURCES.COMPANIES.DEEPMIND.WEB}
      />
      <h3 className="feed-list-title" id="microsoft">
        Microsoft
      </h3>
      <ArticleList
        data={props.microsoftFeedData}
        moreButton={SOURCES.COMPANIES.MICROSOFT.WEB}
      />
      <h3 className="feed-list-title" id="nvidia">
        Nvidia
      </h3>
      <ArticleList
        data={props.nvidiaFeedData}
        moreButton={SOURCES.COMPANIES.NVIDIA.WEB}
      />
      <h3 className="feed-list-title" id="amazon">
        Amazon
      </h3>
      <ArticleList
        data={props.amazonFeedData}
        moreButton={SOURCES.COMPANIES.AMAZON.WEB}
      />
      <h3 className="feed-list-title" id="google">
        Google AI
      </h3>
      <ArticleList
        data={props.googleFeedData}
        moreButton={SOURCES.COMPANIES.GOOGLE.WEB}
      />
    </div>
  );
};

export default Home;
