import React, { useEffect } from "react";

import { asyncFunct, startNewsFetch } from "../../actions";
import NewsList from "../widgets/NewsList/NewsList";

const Home = (props: any) => {
  useEffect(() => {
    // asyncFunct();
    // startNewsFetch();
  }, []);
  return (
    <div className="home-page">
      <h2 className="page-title">Arxiv </h2>
      <NewsList {...props} data={props.arxivFeedData} />
      <h2 className="page-title">Microsoft </h2>
      <NewsList {...props} data={props.microsoftFeedData} />
      <h2 className="page-title">OpenAI </h2>
      <NewsList {...props} data={props.openAIFeedData} />
      <h2 className="page-title">DeepMind </h2>
      <NewsList {...props} data={props.deepMindFeedData} />
    </div>
  );
};

export default Home;
