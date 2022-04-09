import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { HiOutlineMailOpen } from "react-icons/hi";

function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer__content">
        <div className="footer__link__wrapper">
          <h2 className="footer__title">About</h2>

          <div className="footer__links">
            <div className="footer__link__items">
              <Link to="/legal-notice">Legal Notice</Link>

              <Link to="/privacy-policy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="social__icons">
          <a
            className="social__icon-link"
            href="https://github.com/leabaty"
            alt="Github"
            target="_blank"
            aria-label="Github"
          >
            <AiFillGithub />
          </a>
          <a
            className="social__icon-link"
            href="https://www.linkedin.com/in/l%C3%A9a-baty-2a542375"
            alt="Linkedin"
            target="_blank"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin />
          </a>

          <a
            className="social__icon-link"
            href="mailto: leabaty.dev@gmail.com"
            alt="email me"
            target="_blank"
            aria-label="Email me"
          >
            <HiOutlineMailOpen />
          </a>
        </div>

        <div className="footer__website-rights">Léa Baty © 2022</div>
      </div>
    </footer>
  );
}

export default Footer;
