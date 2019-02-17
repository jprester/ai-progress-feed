import React from 'react';
import { Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import NewsPageContainer from '../containers/NewsPageContainer';

const Routes = () => (
  <div>
    <Route
      exact
      path="/"
      render={(history) => <Home historyData={history} />}
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
