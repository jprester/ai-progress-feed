import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SearchInputContainer from "../../containers/SearchInputContainer";

interface IHeaderProps {
  showMenu: (menuVisible: boolean) => void;
  menuVisible: boolean;
  history: [];
}

const Header = ({ showMenu, menuVisible, history }: IHeaderProps) => {
  return (
    <div className="header-container">
      <div className="content-wrapper">
        <div className="navigation-content">
          <h1 className="logo">
            <Link className="header-logo-link" to="/">
              AI PROGRESS FEED
            </Link>
          </h1>
          <div className="navigation-right">
            <Link className="header-nav-link" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
