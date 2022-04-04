import React from "react";

import "./NavbarBackground.scss";
import "./../AppBackground.scss";

import mustardOvaley from "./../../assets/images/forms/mustard-ovaley.svg";

import pinkPotato from "./../../assets/images/forms/pink-potatoey.svg";

function NavbarBackground() {
  return (
    <div className="form-container--nav">
      <img className="form tn1 " src={pinkPotato} />
      <img className="form--big tn2" src={mustardOvaley} />
    </div>
  );
}

export default NavbarBackground;
