import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import { startNewsFetch } from './actions/';
import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NewsPage from './containers/NewsPage';

interface IProps {
  startNewsFetch: () => any;
  history: {};
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
              component={NewsPage}
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

const mapDispatchToProps = (dispatch: any) => ({
  startNewsFetch: () => dispatch(startNewsFetch()),
});

export default withRouter(
  connect(null, mapDispatchToProps)(App) as any,
);
