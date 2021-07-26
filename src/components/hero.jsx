import React, { Component } from "react";
import introImg from "../assets/image-intro-desktop.jpg";
import SvgIconAffordablePrices from "./svg/IconAffordablePrices";
import SvgIconPeopleFirst from "./svg/IconPeopleFirst";
import SvgIconSnappyProcess from "./svg/IconSnappyProcess";
class Hero extends Component {
  state = {};
  render() {
    return (
      <div className="parent">
        <div className="he-co">
          <div className="row1">
            <div className="ro1-it-wrap">
              <div className="row1-img">
                <img src={introImg} alt="" />
              </div>
              <div className="row1-text">
                <hr />
                <h1>Humanizing your insurance.</h1>
                <p>
                  Get you life insurance coverage easier and faster. We blend
                  our experties and technology to helo you find the plan that's
                  right for you. Ensure you and your loved once are protected.
                </p>
                <button className="row1-btn">VIEW PLANS</button>
              </div>
            </div>
          </div>
        </div>
        <Details />
        <CtaHww />
      </div>
    );
  }
}

export default Hero;

function Details() {
  return (
    <div className="details__container">
      <div className="details">
        <hr />
        <h1>We're diffrent</h1>
        <div className="dbox__con">
          <div className="details__box">
            <SvgIconSnappyProcess />
            <h3>Snappy Process</h3>
            <p>
              Our application process can be completed in minutes not hours.
              Don't get stuck filling in tedious forms.
            </p>
          </div>
          <div className="details__box">
            <SvgIconAffordablePrices />
            <h3>Affordable Prices</h3>
            <p>
              We don't want you worrying about high monthly costs. our prices
              may be low. but we still offer the best coverage possible.
            </p>
          </div>
          <div className="details__box">
            <SvgIconPeopleFirst />
            <h3>People First</h3>
            <p>
              Our Plans aren't full of conditions and clauses to prevent
              payouts. We make sure you're covered when you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CtaHww() {
  return (
    <div className="cta_con">
      <div className="cta_box">
        <h2>Find out more about how we work</h2>
        <button className="cta_btn">HOW WE WORK</button>
      </div>
    </div>
  );
}
