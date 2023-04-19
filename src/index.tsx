import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Root from "./Root";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Root>
      <App />
    </Root>
  </React.StrictMode>
);
