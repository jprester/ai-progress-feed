import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SearchInputContainer from "../../containers/SearchInputContainer";
import { CATEGORY } from "../../helpers/apiConfig";
import CategoryNavigation from "../widgets/CategoryNavigation/CategoryNavigation";

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
              News Getter
            </Link>
          </h1>
          <div className="navigation-right">
            <Link className="header-nav-link" to="/about">
              About
            </Link>
            <button
              className={
                menuVisible ? "mobile-menu-button change" : "mobile-menu-button"
              }
              onClick={() => showMenu(!menuVisible)}
            >
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${menuVisible ? "visible" : "hidden"}`}>
        <div className="content-wrapper">
          <SearchInputContainer history={history} />
          <h4 className="menu-title">Category</h4>
          <CategoryNavigation data={CATEGORY} />
        </div>
      </div>
    </div>
  );
};

export default Header;
