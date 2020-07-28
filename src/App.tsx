import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Routes from "./components/Routes";

import {
  clearData,
  // fetchAll,
  startNewsFetch,
  asyncFunct,
  basicFunc,
  startFetchArxivFeed,
  startFetchMicrosoftFeed,
  startFetchOpenAIFeed,
  startFetchDeepMindFeed,
  showMenu,
} from "./actions/";

const App = ({ clearData, history, showMenu, menuVisible }: any) => {
  useEffect(() => {
    // clearData();
    // console.log("starting app");
    // asyncFunct();
    // basicFunc();
    startNewsFetch();
  }, []);

  return (
    <div className="App">
      <Header history={history} showMenu={showMenu} menuVisible={menuVisible} />
      <div className="main-content">
        <div className="content-wrapper">
          <Routes />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isFetching: state.isFetching,
    menuVisible: state.menuVisible,
    arxivFeedData: state.arxivFeedData,
    microsoftFeedData: state.microsoftFeedData,
    deepMindFeedData: state.deepMindFeedData,
    openAIFeedData: state.openAIFeedData,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  clearData: () => dispatch(clearData()),
  showMenu: (isVisible: boolean) => dispatch(showMenu(isVisible)),
  startFetchArxivFeed: () => dispatch(startFetchArxivFeed()),
  startFetchMicrosoftFeed: () => dispatch(startFetchMicrosoftFeed()),
  startFetchOpenAIFeed: () => dispatch(startFetchOpenAIFeed()),
  startFetchDeepMindFeed: () => dispatch(startFetchDeepMindFeed()),
  // fetchAll: () => dispatch(fetchAll()),
  asyncFunct: () => dispatch(asyncFunct()),
  startNewsFetch: () => dispatch(startNewsFetch()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
