import { connect } from "react-redux";

import HomePage from "../components/pages/HomePage";
import { IHomePageProps } from "../types/types";

const mapStateToProps = (state: IHomePageProps) => {
  return {
    feedData: state.feedData,
  };
};

export default connect(mapStateToProps)(HomePage);
