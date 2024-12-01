import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import { RequestDataProvider } from "./context/RequestDataContext";

import "./App.css";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onClickMenuButton = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="App">
      <RequestDataProvider>
        <BrowserRouter>
          <div>
            <Header onClickMenuButton={onClickMenuButton} showMenu={showMenu} />
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
          </div>
        </BrowserRouter>
      </RequestDataProvider>
    </div>
  );
};

export default App;
