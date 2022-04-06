import React, { useState } from "react";

import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import "../Navbar.scss";

import NavbarBg from "../NavbarBackground";
import logo from "../../../assets/images/logo/logo-white-transparent.svg";

function Navbar() {
  const [openedMobileMenu, setOpenMobileMenu] = useState(false);

  /* Ca permet d'ouvrir et de fermer le menu avec la petite croix/les bars */
  const handleClick = () => setOpenMobileMenu(!openedMobileMenu);

  /* Quand l'utilisateur a cliqué sur un des liens, cela ferme le menu et présente à nouveau la navbar mobile*/
  const closeMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  return (
    <>
      <NavbarBg />
      <nav className="navbar">
        <div className="navbar__container">
          {/* Mobile navbar ONLY */}
          <div className="mobilemenu__navbar">
            <div className="mobilemenu__logo">
              <a
                href="#Home"
                className="navbar__title"
                onClick={closeMobileMenu}
              >
                <img className="navbar__icon" src={logo} alt="logo-lea-baty" />
              </a>
            </div>

            <div className="mobilemenu__button" onClick={handleClick}>
              {openedMobileMenu ? <FaTimes /> : <HiOutlineMenuAlt3 />}
            </div>
          </div>

          <div
            className={
              openedMobileMenu ? "navbar__menu active" : "navbar__menu"
            }
          >
            {/* Logo on the left of navbar in desktop mode ONLY */}
            <div className="navbar__menu__left">
              <a
                href="#Home"
                className="navbar__title"
                onClick={closeMobileMenu}
              >
                <img className="navbar__icon" src={logo} alt="logo-lea-baty" />
              </a>
            </div>

            {/* Container on the right of navbar */}
            <ul className="navbar__menu__right">
              <li className="nav-item">
                <a href="#Work" className="nav-links" onClick={closeMobileMenu}>
                  Work
                  {/* <a href="#Work">Work</a> */}
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#About"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#Contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
