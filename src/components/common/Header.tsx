import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ showMenu, menuVisible, history }: any) => {
  return (
    <div className="header-container">
      <div className="content-wrapper">
        <div className="navigation-content">
          <h1 className="logo">
            <Link className="header-logo-link" to="/">
              AI PROGRESS FEED
            </Link>
          </h1>
          <p className="header-sub-title">Newest AI papers in one place</p>
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
