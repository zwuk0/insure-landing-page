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
      <header className="header">
        <div className="nav-container">
          <div className="na">
            <Logo className="logo" />
            <div
              className={isActive ? "bu-me bu-clicked" : "bu-me"}
              onClick={this.handleToggle}
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className={isActive ? "na-clicked" : "na-li-co"}>
            <NavLink className="li" to="/how-we-work">
              HOW WE WORK
            </NavLink>
            <NavLink className="li" to="/blog">
              BLOG
            </NavLink>
            <NavLink className="li" to="/account">
              ACCOUNT
            </NavLink>
            <button className="na-btn">VIEW MORE</button>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
