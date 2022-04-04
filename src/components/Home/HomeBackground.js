import React from "react";

import "./HomeBackground.scss";
import "./../AppBackground.scss";

import greenSquarey from "./../../assets/images/forms/green-squarey.svg";
import pinkSquareTriangley from "./../../assets/images/forms/pink-square-triangley.svg";
import mustardPotato from "./../../assets/images/forms/mustard-potato.svg";
import greenPotato from "./../../assets/images/forms/green-potatoey.svg";
import pinkOvaley from "./../../assets/images/forms/pink-ovaley.svg";
import leftStroke from "./../../assets/images/forms/left-stroke.svg";
import rightStroke from "./../../assets/images/forms/right-stroke.svg";

function AppBg() {
  return (
    <div className="form-container">
      <img className="form bh2" src={greenSquarey} />
      <img className="form bh3" src={pinkSquareTriangley} />
      <img className="form bh1" src={mustardPotato} />
      {/* <img className="form th1" src={pinkPotato} />
      <img className="form--big th2" src={mustardOvaley} /> */}
      <img className="form bh5" src={greenPotato} />
      <img className="form bh4" src={pinkOvaley} />
      <img className="stroke ch1" src={leftStroke} />
      <img className="stroke ch2" src={rightStroke} />
    </div>
  );
}

export default AppBg;
