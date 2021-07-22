import "../scss/app.scss";
import "./svg/index";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./svg/index";

class Navbar extends Component {
  state = { isActive: false };
  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    const isActive = this.state.isActive;
    return (
      <header className="navbar-container">
        <div className="navbar">
          <Logo />
          <div className="navlink-parent">
            <div
              className={
                isActive ? "navlink-container nav-clicked" : "navlink-container"
              }
            >
              <NavLink className="navlink" to="/how-we-work">
                HOW WE WORK
              </NavLink>
              <NavLink className="navlink" to="/blog">
                BLOG
              </NavLink>
              <NavLink className="navlink" to="/account">
                ACCOUNT
              </NavLink>
              <button className="navbar-btn">VIEW PLANS</button>
            </div>
          </div>
          <div
            className={isActive ? "ham-menu clicked" : "ham-menu"}
            onClick={this.handleToggle}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
