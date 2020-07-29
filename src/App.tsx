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
  startFetchMicrosoftFeed,
  startFetchOpenAIFeed,
  startFetchDeepMindFeed,
  showMenu,
} from "./actions/";

const App = ({
  history,
  showMenu,
  menuVisible,
  startFetchArxivFeed,
  startFetchMicrosoftFeed,
  startFetchOpenAIFeed,
  startFetchDeepMindFeed,
}: IAppProps) => {
  useEffect(() => {
    startFetchArxivFeed();
    startFetchMicrosoftFeed();
    startFetchDeepMindFeed();
    startFetchOpenAIFeed();
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
    menuVisible: state.menuVisible,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  showMenu: (isVisible: boolean) => dispatch(showMenu(isVisible)),
  startFetchArxivFeed: () => dispatch(startFetchArxivFeed()),
  startFetchMicrosoftFeed: () => dispatch(startFetchMicrosoftFeed()),
  startFetchOpenAIFeed: () => dispatch(startFetchOpenAIFeed()),
  startFetchDeepMindFeed: () => dispatch(startFetchDeepMindFeed()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
