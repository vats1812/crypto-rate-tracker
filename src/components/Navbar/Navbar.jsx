import React from "react";
import logo from "../../assets/logo.svg";
import "./Navbar.css";
function Navbar(props) {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="title">
            <img src={logo} alt="logo" />
            <h1>Crypto Rate Tracker</h1>
          </div>
          <div className="mode">{props.switches}</div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
