import React, { Component } from "react";
import introImg from "../assets/image-intro-desktop.jpg";
class Hero extends Component {
  state = {};
  render() {
    return (
      <div className="he-co">
        <div className="row1">
          <div className="ro1-it-wrap">
            <div className="row1-img">
              <img src={introImg} alt="" />
            </div>
            <div className="row1-text">
              <h1>Humanizing your insurance.</h1>
              <p>
                Get you life insurance coverage easier and faster. We blend our
                experties and technology to helo you find the plan that's right
                for you. Ensure you and your loved once are protected.
              </p>
              <button className="row1-btn">VIEW PLANS</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
