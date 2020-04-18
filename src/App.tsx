import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Routes from "./components/Routes";

import { clearData, setCategory, showMenu, startNewsFetch } from "./actions/";

interface IAppProps {
  history: any;
  newsData: [];
  newsListNumber: number;
  startNewsFetch: () => void;
  clearData: () => void;
  setCategory: (value?: any) => void;
  showMenu: (value: boolean) => void;
  menuVisible: boolean;
  isFetching: boolean;
}

interface IAppState {
  menuVisible: boolean;
  newsData: [];
  newsListNumber: number;
  isFetching: boolean;
}

const App = ({
  clearData,
  setCategory,
  startNewsFetch,
  history,
  showMenu,
  menuVisible,
  isFetching,
}: IAppProps) => {
  useEffect(() => {
    clearData();
    setCategory();

    if (!isFetching) {
      startNewsFetch();
    }
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

const mapDispatchToProps = (dispatch: any) => ({
  clearData: () => dispatch(clearData()),
  setCategory: (text: string) => dispatch(setCategory(text)),
  showMenu: (isVisible: boolean) => dispatch(showMenu(isVisible)),
  startNewsFetch: () => dispatch(startNewsFetch()),
});

const mapStateToProps = (state: IAppState) => {
  return {
    isFetching: state.isFetching,
    menuVisible: state.menuVisible,
    newsData: state.newsData,
    newsListNumber: state.newsListNumber,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
