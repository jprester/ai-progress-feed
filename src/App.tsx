import React, { useEffect } from "react";
import { connect } from "react-redux";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./containers/HomePageContainer";
import { IAppProps } from "./types/types";
import { startDataFeedFetch, showMenu } from "./actions/";

import "./App.css";

const App = ({ startDataFeedFetch, feedData }: IAppProps) => {
  useEffect(() => {
    startDataFeedFetch();
  }, []);

  return (
    <div className="App">
      <Header data={feedData} />
      <div className="main-content">
        <div className="content-wrapper">
          <Home historyData={history} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    menuVisible: state.menuVisible,
    feedData: state.feedData,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  showMenu: (isVisible: boolean) => dispatch(showMenu(isVisible)),
  startDataFeedFetch: () => dispatch(startDataFeedFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
