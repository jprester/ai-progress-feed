import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import NewsItemPage from './components/pages/NewsItemPage';
import { newsData } from './helpers/dummyData';

export interface Props {
  name: string;
  data: {}
}

class App extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);

    this.submitText.bind(this);
  }

  submitText(event: any) {
    console.log("the event we log: ", event.target);
  };

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
              render={(history) => <Home historyData={history} data={newsData} />}
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

export default App;
