import { connect } from "react-redux";

import HomePage from "../components/pages/HomePage";
import { IHomePageProps } from "../types/types";
import { startDataFeedFetch } from "../actions";

const mapStateToProps = (state: IHomePageProps) => {
  return {
    feedData: state.feedData,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  startDataFeedFetch: () => dispatch(startDataFeedFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
