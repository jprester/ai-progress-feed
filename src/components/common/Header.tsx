import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import RequestDataContext from "../../context/RequestDataContext";
import { IArticleList } from "../../types/types";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onClickMenuButton = () => {
    setShowMenu(!showMenu);
  };

  const { requestData } = useContext(RequestDataContext);
  console.log("requestData: ", requestData);

  return (
    <div className="header-container">
      <div className="content-wrapper">
        <div className="navigation-content">
          <button className="menu-button" onClick={() => onClickMenuButton()}>
            <img
              src={
                showMenu ? "img/menu-button-close.svg" : "img/menu-button.svg"
              }
            />
          </button>
          <h1 className="logo">
            <Link to="/">AI PROGRESS FEED</Link>
          </h1>
          <p className="header-sub-title">Newest AI papers in one place</p>
          <div className="navigation-right">
            <Link to="/about" className="header-nav-link">
              About
            </Link>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="category-menu">
          <ul>
            {requestData.map((item) => {
              return (
                <li key={item.name}>
                  <a href={`/#${item.feedName}`}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
