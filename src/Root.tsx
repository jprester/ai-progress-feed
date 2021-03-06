import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import "./index.css";
import reducers from "./reducers/index";

export default ({ children, initialState }: any) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunkMiddleware)
  );

  return <Provider store={store}>{children}</Provider>;
};
