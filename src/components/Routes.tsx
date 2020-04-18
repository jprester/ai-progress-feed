import React from "react";
import { Route, Switch } from "react-router-dom";

import CategoryPageContainer from "../containers/CategoryPageContainer";
import Home from "../containers/HomePageContainer";
import NewsArticlePageContainer from "../containers/NewsArticlePageContainer";
import SearchResultsContainer from "../containers/SearchResultsContainer";
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
        <Route
          path="/search/:id"
          render={(history) => <SearchResultsContainer historyData={history} />}
        />
        <Route path="/news/:id" component={NewsArticlePageContainer} />
        <Route
          path="/category/:category"
          render={(history) => <CategoryPageContainer historyData={history} />}
        />
        <Route path="/about" component={About} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default Routes;
