import React from "react";
import { useSpring, animated } from "react-spring";

import "./HomeBackground.scss";
import "./../AppBackground.scss";

import greenSquarey from "./../../assets/images/forms/green-squarey.svg";
import pinkSquareTriangley from "./../../assets/images/forms/pink-square-triangley.svg";
import mustardPotato from "./../../assets/images/forms/mustard-potato.svg";
import greenPotato from "./../../assets/images/forms/green-potatoey.svg";
import pinkOvaley from "./../../assets/images/forms/pink-ovaley.svg";
import leftStroke from "./../../assets/images/forms/left-stroke.svg";
import rightStroke from "./../../assets/images/forms/right-stroke.svg";

// TBC : Framer Motion vs Clippath vs... ?! 
import LeftStroke from "./Framer-Motion-tests/LeftStroke";
import RightStroke from "./Framer-Motion-tests/RightStroke";

// 0 - USESPRING/MOUSE PARALLAX : params for the mouse parallax effect on the forms (cf. useSpring)
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / -15}px,${y / -15}px,0)`;
const trans2 = (x, y) => `translate3d(${x / -35}px,${y / -35}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 90}px,${y / 90}px,0)`;

function HomeBackground() {
  // 1 - USESPRING/MOUSE PARALLAX : params for the mouse parallax effect on the forms (cf. useSpring)
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div
      className="form-container"
      // 2 - USESPRING/MOUSE PARALLAX : params for the mouse parallax effect on the forms (cf. useSpring)
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.img
        className="form bh1"
        style={{ transform: props.xy.to(trans3) }}
        src={mustardPotato}
      />
      <animated.img
        className="form bh2"
        style={{ transform: props.xy.to(trans2) }}
        src={greenSquarey}
      />
      <animated.img
        className="form bh3"
        style={{ transform: props.xy.to(trans1) }}
        src={pinkSquareTriangley}
      />
      <animated.img
        className="form bh4"
        style={{ transform: props.xy.to(trans1) }}
        src={pinkOvaley}
      />
      <animated.img
        className="form bh5"
        style={{ transform: props.xy.to(trans2) }}
        src={greenPotato}
      />
      <img className="stroke ch1" src={leftStroke} />
      <img className="stroke ch2" src={rightStroke} />
      
      {/* <LeftStroke />
      <RightStroke /> */}
    </div>
  );
}

export default HomeBackground;
