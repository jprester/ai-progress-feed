import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../containers/HomePageContainer';
import NewsPageContainer from '../containers/NewsPageContainer';
import SearchResultsContainer from '../containers/SearchResultsContainer';
import About from './pages/About';

const Routes = () => (
  <div className="main-container">
    <Route
      exact
      path="/"
      render={(history) => <Home historyData={history} />}
    />
    <Route
      path="/search/:id"
      render={(history) => <SearchResultsContainer historyData={history} />}
    />
    <Route
      path="/news/:id"
      component={NewsPageContainer}
    />
    <Route
      exact
      path="/about"
      component={About}
    />
  </div>
);

export default Routes;
