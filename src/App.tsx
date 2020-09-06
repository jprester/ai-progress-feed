import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Routes from "./components/Routes";
import { IAppProps } from "./types/types";

import {
  startFetchArxivFeed,
  startFetchYoutubeFeed,
  startFetchMicrosoftFeed,
  startFetchOpenAIFeed,
  startFetchDeepMindFeed,
  startFetchNvidiaFeed,
  startFetchGoogleAIFeed,
  showMenu,
} from "./actions/";

const App = ({
  history,
  showMenu,
  menuVisible,
  startFetchArxivFeed,
  startFetchYoutubeFeed,
  startFetchMicrosoftFeed,
  startFetchOpenAIFeed,
  startFetchDeepMindFeed,
  startFetchNvidiaFeed,
  startFetchGoogleAIFeed,
}: IAppProps) => {
  useEffect(() => {
    startFetchArxivFeed();
    startFetchYoutubeFeed();
    startFetchMicrosoftFeed();
    startFetchDeepMindFeed();
    startFetchOpenAIFeed();
    startFetchNvidiaFeed();
    startFetchGoogleAIFeed();
  }, []);

  return (
    <div className="App">
      <Header />
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
    menuVisible: state.menuVisible,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  showMenu: (isVisible: boolean) => dispatch(showMenu(isVisible)),
  startFetchArxivFeed: () => dispatch(startFetchArxivFeed()),
  startFetchYoutubeFeed: () => dispatch(startFetchYoutubeFeed()),
  startFetchMicrosoftFeed: () => dispatch(startFetchMicrosoftFeed()),
  startFetchOpenAIFeed: () => dispatch(startFetchOpenAIFeed()),
  startFetchDeepMindFeed: () => dispatch(startFetchDeepMindFeed()),
  startFetchNvidiaFeed: () => dispatch(startFetchNvidiaFeed()),
  startFetchGoogleAIFeed: () => dispatch(startFetchGoogleAIFeed()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
