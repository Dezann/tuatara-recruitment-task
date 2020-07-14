import React, { Component } from "react";
import "./Navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }
  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    return (
      <div className="navbar">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/37/Apple_TV%2B_logo.png"
        ></img>
        <div
          className={
            this.state.navbarOpen ? "nav-links nav-active" : "nav-links"
          }
        >
          <div className="site-links">
            <ul className="navigation-buttons">
              <li>
                <a href="#">Phasellus</a>
              </li>
              <li>
                <a href="#">Finibus</a>
              </li>
              <li>
                <a href="#">Congue & rhoncus</a>
              </li>
              <li>
                <a href="#">Vivamus</a>
              </li>
            </ul>
          </div>
          <div className="login-buttons">
            <button className="">Log in</button>
            <button className="">Register</button>
          </div>
        </div>
        <div className="burger" onClick={this.toggleNavbar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}

export default Navbar;
