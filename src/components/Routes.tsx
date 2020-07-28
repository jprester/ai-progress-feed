import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../containers/HomePageContainer";
import NewsArticlePageContainer from "../containers/NewsArticlePageContainer";
import About from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";

const Routes = () => {
  return (
    <div className="main-container">
      <Switch>
        <Route
          exact
          path="/"
          render={(history) => <Home historyData={history} />}
        />
        <Route path="/news/:id" component={NewsArticlePageContainer} />
        <Route path="/about" component={About} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default Routes;
