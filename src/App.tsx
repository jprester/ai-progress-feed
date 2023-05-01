import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";

import { RequestDataProvider } from "./context/RequestDataContext";
import { IAppProps } from "./types/types";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <RequestDataProvider>
        <BrowserRouter>
          <Header />
          <div className="main-content">
            <div className="content-wrapper">
              <div className="main-container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </div>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </RequestDataProvider>
    </div>
  );
};

export default App;
