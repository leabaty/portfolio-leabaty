import React from "react";

import "./WorkBackground.scss";

import greenSquarey from "./../../assets/images/forms/green-squarey.svg";
import mustardOvaley from "./../../assets/images/forms/mustard-ovaley.svg";
import pinkSquareTriangley from "./../../assets/images/forms/pink-square-triangley.svg";
import mustardPotato from "./../../assets/images/forms/mustard-potato.svg";
import pinkPotato from "./../../assets/images/forms/pink-potatoey.svg";
import greenPotato from "./../../assets/images/forms/green-potatoey.svg";
import pinkOvaley from "./../../assets/images/forms/pink-ovaley.svg";
import leftStroke from "./../../assets/images/forms/left-stroke.svg";
import rightStroke from "./../../assets/images/forms/right-stroke.svg";

function AppBg() {
  return (
    <div className="form-container">

      <img className="form bw1" src={mustardOvaley} />
      <img className="form bw2" src={pinkOvaley} />
      <img className="form bw3" src={greenPotato} />

    </div>
  );
}

export default AppBg;
