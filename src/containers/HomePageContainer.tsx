import { connect } from "react-redux";

import HomePage from "../components/pages/HomePage";
import { IHomePageProps } from "../types/types";

const mapStateToProps = (state: IHomePageProps) => {
  return {
    arxivFeedData: state.arxivFeedData,
    microsoftFeedData: state.microsoftFeedData,
    deepMindFeedData: state.deepMindFeedData,
    openAIFeedData: state.openAIFeedData,
    nvidiaFeedData: state.nvidiaFeedData,
    googleFeedData: state.googleFeedData,
  };
};

export default connect(mapStateToProps)(HomePage);
