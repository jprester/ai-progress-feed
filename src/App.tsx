import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import { startNewsFetch } from './actions/';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './components/Routes';
import NewsPageContainer from './containers/NewsPageContainer';

interface IProps {
  startNewsFetch: () => any;
}

class App extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public componentDidMount() {
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
  startNewsFetch: () => dispatch(startNewsFetch()),
});

export default withRouter(
  connect(null, mapDispatchToProps)(App) as any,
);
