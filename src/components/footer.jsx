import React from "react";
import { Link } from "react-router-dom";
import SvgIconFacebook from "./svg/IconFacebook";
import SvgIconInstagram from "./svg/IconInstagram";
import SvgIconPinterest from "./svg/IconPinterest";
import SvgIconTwitter from "./svg/IconTwitter";
import SvgLogo from "./svg/Logo";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__head">
          <SvgLogo />
          <div className="footer__social">
            <SvgIconFacebook />
            <SvgIconTwitter />
            <SvgIconPinterest />
            <SvgIconInstagram />
          </div>
        </div>
        <hr />
        <div className="footer__bottom">
          <div className="our-company link-grid">
            <p>OUR COMPANY</p>
            <Link className="footer__links" to="/">
              HOW WE WORK
            </Link>
            <Link className="footer__links" to="/">
              WHY INSURE?
            </Link>
            <Link className="footer__links" to="/">
              VIEW PLANS
            </Link>
            <Link className="footer__links" to="/">
              REVIEWS
            </Link>
          </div>
          <div className="help-me link-grid">
            <p>HELP ME</p>
            <Link className="footer__links" to="/">
              FAQ
            </Link>
            <Link className="footer__links" to="/">
              TERMS OF USE
            </Link>
            <Link className="footer__links" to="/">
              PRIVACY POLICY
            </Link>
            <Link className="footer__links" to="/">
              COOKIES
            </Link>
          </div>
          <div className="contact link-grid">
            <p>CONTACT</p>
            <Link className="footer__links" to="/">
              SALES
            </Link>
            <Link className="footer__links" to="/">
              SUPPORT
            </Link>
            <Link className="footer__links" to="/">
              LIVE CHAT
            </Link>
          </div>
          <div className="others link-grid">
            <p>OTHERS</p>
            <Link className="footer__links" to="/">
              CARRIER
            </Link>
            <Link className="footer__links" to="/">
              PRESS
            </Link>
            <Link className="footer__links" to="/">
              LICENCE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
