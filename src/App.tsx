import * as React from 'react';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './components/Routes';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
    <Footer />
  </div>
);

export default App;
