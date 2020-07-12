import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left-content">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/37/Apple_TV%2B_logo.png"
        ></img>
        <div className="navigation-buttons">
          <button className="">Phasellus</button>
          <button className="">Finibus</button>
          <button className="">Congue & rhoncus</button>
          <button className="">Vivamus</button>
        </div>
      </div>
      <div className="login-buttons">
        <button className="">Log in</button>
        <button className="">Register</button>
      </div>
    </div>
  );
};

export default Navbar;
