import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header-container">
    <ul className="navigation">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
);

export default Header;
