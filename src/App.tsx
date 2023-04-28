import React, { useEffect } from "react";
import { connect } from "react-redux";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./pages/HomePage";

import { IAppProps } from "./types/types";

import "./App.css";

const App = () => {
  const feedData: any = [];

  return (
    <div className="App">
      <Header data={feedData} />
      <div className="main-content">
        <div className="content-wrapper">
          <Home />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
