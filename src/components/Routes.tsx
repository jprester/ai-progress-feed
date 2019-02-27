import React from 'react';
import { Route } from 'react-router-dom';

import NewsPageContainer from '../containers/NewsPageContainer';
import About from './pages/About';
import Home from '../containers/HomePageContainer';
import SearchResultsContainer from '../containers/SearchResultsContainer';

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
