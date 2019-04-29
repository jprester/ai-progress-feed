import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './components/Routes';

import { clearData, setCategory, startNewsFetch} from './actions/';

interface IAppProps {
  newsData: [];
  newsListNumber: number;
  startNewsFetch: any;
  clearData: any;
  setCategory: any;
}

class App extends React.Component<IAppProps> {
  public componentDidMount() {
    this.props.clearData();
    this.props.setCategory();
    this.props.startNewsFetch();
  }

  public render() {
    return (
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  clearData: () => dispatch(clearData()),
  setCategory: (text: string) => dispatch(setCategory(text)),
  startNewsFetch: () => dispatch(startNewsFetch()),
});

const mapStateToProps = (state: any) => {
  return {
    newsData: state.newsData,
    newsListNumber: state.newsListNumber,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App) as any);
