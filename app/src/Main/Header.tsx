import React from "react";
import "./header.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <header>
        <img className="logo" src="" alt="logo" />
        <nav>
          <ul className="nav__links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#ourStory">Our Story</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
