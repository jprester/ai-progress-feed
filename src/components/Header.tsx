import React from 'react';
import { Link } from 'react-router-dom';

import { CATEGORY } from '../helpers/apiConfig';
import CategoryNavigation from './widgets/CategoryNavigation/CategoryNavigation';

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
    <hr />
    <CategoryNavigation data={CATEGORY}/>
  </div>
);

export default Header;
