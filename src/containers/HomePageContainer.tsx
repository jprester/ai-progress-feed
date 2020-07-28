import { connect } from "react-redux";

import {
  clearData,
  startFetchArxivFeed,
  startFetchMicrosoftFeed,
  startFetchOpenAIFeed,
  startFetchDeepMindFeed,
} from "../actions/";
import HomePage from "../components/pages/HomePage";
import { SOURCES } from "../helpers/apiConfig";

const mapStateToProps = (state: any) => {
  return {
    isFetching: state.isFetching,
    arxivFeedData: state.arxivFeedData,
    microsoftFeedData: state.microsoftFeedData,
    deepMindFeedData: state.deepMindFeedData,
    openAIFeedData: state.openAIFeedData,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  clearData: () => dispatch(clearData()),
  startFetchArxivFeed: () => dispatch(startFetchArxivFeed()),
  startFetchMicrosoftFeed: () => dispatch(startFetchMicrosoftFeed()),
  startFetchOpenAIFeed: () => dispatch(startFetchOpenAIFeed()),
  startFetchDeepMindFeed: () => dispatch(startFetchDeepMindFeed()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
