import React from "react";

import "./ContactBackground.scss";
import "./../AppBackground.scss";

import mustardOvaley from "./../../assets/images/forms/mustard-ovaley.svg";
import greenPotato from "./../../assets/images/forms/green-potatoey.svg";
import pinkOvaley from "./../../assets/images/forms/pink-ovaley.svg";


function ContactBg() {
  return (
    <div className="form-container">

      <img className="form bc1" src={mustardOvaley} />
      <img className="form bc2" src={pinkOvaley} />
      <img className="form bc3" src={greenPotato} />

    </div>
  );
}

export default ContactBg;
