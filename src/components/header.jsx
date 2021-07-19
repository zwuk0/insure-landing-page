import "../scss/app.scss";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <header className="h-nav">
        <HamMenu />
        <div className="navbar">
          <NavLink to="/how-we-work">How We Work</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/account">Account</NavLink>
          <button className="navbar-btn">View Plans</button>
        </div>
      </header>
    );
  }
}

export default Navbar;
function HamMenu() {
  return (
    <div className="hammenu">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  );
}
