import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div class="navbar">
      <div class="navbar-left-content">
        <img
          class="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/37/Apple_TV%2B_logo.png"
        ></img>
        <div class="navigation-buttons">
          <button class="">Phasellus</button>
          <button class="">Finibus</button>
          <button class="">Congue & rhoncus</button>
          <button class="">Vivamus</button>
        </div>
      </div>
      <div class="login-buttons">
        <button class="">Log in</button>
        <button class="">Register</button>
      </div>
    </div>
  );
};

export default Navbar;
