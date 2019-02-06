import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { fetchNews } from './actions/';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NewsItemPage from './components/pages/NewsItemPage';
import './App.css';

export interface Props {
  name: string;
  data: {}
}

class App extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
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
  connect(null, mapDispatchToProps)(App) as any
);