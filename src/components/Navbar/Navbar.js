import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import "./Navbar.scss";

import NavbarBg from "./NavbarBackground"
import logo from "../../assets/images/logo/logo-white-transparent.svg";

function Navbar() {
  const [openedMobileMenu, setOpenMobileMenu] = useState(false);

  /* Ca permet d'ouvrir et de fermer le menu avec la petite croix/les bars */
  const handleClick = () => setOpenMobileMenu(!openedMobileMenu);

  /* Quand l'utilisateur a cliqué sur un des liens, cela ferme le menu et présente à nouveau la navbar mobile*/
  const closeMobileMenu = () => setOpenMobileMenu(false);

  return (
    <>
     <NavbarBg/>
      <nav className="navbar">
        <div className="navbar__container">

          {/* Mobile navbar ONLY */}
          <div className="mobilemenu__navbar">
            <div className="mobilemenu__logo">
              <Link to="/#Home" className="navbar__title" onClick={closeMobileMenu}>
                <img className="navbar__icon" src={logo} alt="logo-lea-baty" />
              </Link>
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
              <Link to="/#Home" className="navbar__title" onClick={closeMobileMenu}>
                <img className="navbar__icon" src={logo} alt="logo-lea-baty" />
              </Link>
            </div>

            {/* Container on the right of navbar */}
            <ul className="navbar__menu__right">
              <li className="nav-item">
                <Link
                  to="/#Work"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Work
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/#About"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/#Contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
