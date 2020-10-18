import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
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
            <li>
              <a href="/#sciPapers" onClick={() => setShowMenu(false)}>
                Arxiv
              </a>
            </li>
            <li>
              <a href="/#videos" onClick={() => setShowMenu(false)}>
                Youtube
              </a>
            </li>
            <li>
              <a href="/#openai" onClick={() => setShowMenu(false)}>
                OpenAI
              </a>
            </li>
            <li>
              <a href="/#deepmind" onClick={() => setShowMenu(false)}>
                DeepMind
              </a>
            </li>
            <li>
              <a href="/#microsoft" onClick={() => setShowMenu(false)}>
                Microsoft
              </a>
            </li>
            <li>
              <a href="/#nvidia" onClick={() => setShowMenu(false)}>
                Nvidia
              </a>
            </li>
            <li>
              <a href="/#amazon" onClick={() => setShowMenu(false)}>
                Amazon
              </a>
            </li>
            <li>
              <a href="/#google" onClick={() => setShowMenu(false)}>
                Google AI
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
