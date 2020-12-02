import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IArticleList } from "../../types/types";
interface IHeaderProps {
  data: IArticleList[];
}

const Header = ({ data }: IHeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const onClickMenuButton = () => {
    setShowMenu(!showMenu);
  };

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
      {showMenu && (
        <div className="category-menu">
          <ul>
            {data.map((item) => {
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
