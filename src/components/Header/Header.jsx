import React from "react";
import "./header-styles.css";

const Header = () => {
  return (
    <header>
      <ul className="navbar">
        <a className="item" href="#">
          About
        </a>

        <a className="item" href="#">
          Education & Experience
        </a>

        <a className="item" href="#">
          Skills & Languages
        </a>

        <a className="item" href="#">
          Interests
        </a>
      </ul>
    </header>
  );
};

export default Header;
