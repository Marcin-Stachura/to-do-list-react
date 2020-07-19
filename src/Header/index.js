import React from "react";
import "./style.css";

const Header = ({title}) => (
    <header>
    <div className="header">{title}</div>
  </header>
);

export default Header;