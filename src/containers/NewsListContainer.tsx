import React from "react";
import { connect } from "react-redux";

import { showMoreItems } from "../actions/";
import NewsList from "../components/widgets/NewsList/NewsList";

const mapDispatchToProps = (dispatch: any) => ({
  showMoreItems: () => dispatch(showMoreItems()),
});

export default connect(null, mapDispatchToProps)(NewsList);
