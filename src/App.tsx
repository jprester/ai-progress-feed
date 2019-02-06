import * as React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { fetchNews } from './actions/';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NewsItemPage from './components/pages/NewsItemPage';
import './App.css';

interface IProps {
  fetchNews: () => any;
  history: {};
}

class App extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public componentDidMount() {
    this.props.fetchNews();
  }

  public render() {
    return (
      <div className="App">
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>

            <Route
              exact
              path="/"
              render={(history) => <Home historyData={history} />}
            />
            <Route
              path="/news/:id"
              component={NewsItemPage}
            />
            <Route
              exact
              path="/about"
              component={About}
            />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchNews: () => dispatch(fetchNews()),
});

export default withRouter(
  connect(null, mapDispatchToProps)(App) as any,
);
