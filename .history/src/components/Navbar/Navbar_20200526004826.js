import React from "react";
import logo from "../../logo.svg";
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours company" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link"></a>
        </li>
      </ul>
    </nav>
  );
}
