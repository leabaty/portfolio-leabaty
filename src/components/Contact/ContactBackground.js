import React from "react";
import { useSpring, animated } from "react-spring";

import "./ContactBackground.scss";
import "./../AppBackground.scss";

import mustardOvaley from "./../../assets/images/forms/mustard-ovaley.svg";
import greenPotato from "./../../assets/images/forms/green-potatoey.svg";
import pinkOvaley from "./../../assets/images/forms/pink-ovaley.svg";

// 0 - USESPRING/MOUSE PARALLAX : params for the mouse parallax effect on the forms (cf. useSpring)
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / -15}px,${y / -15}px,0)`;
const trans2 = (x, y) => `translate3d(${x / -35}px,${y / -35}px,0)`;

function ContactBackground() {
  // 1 - USESPRING/MOUSE PARALLAX : params for the mouse parallax effect on the forms (cf. useSpring)
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div
      className="form-container"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.img
        className="form bc1"
        style={{ transform: props.xy.to(trans2) }}
        src={mustardOvaley}
      />
      <animated.img
        className="form bc2"
        style={{ transform: props.xy.to(trans1) }}
        src={pinkOvaley}
      />
      <animated.img
        className="form bc3"
        style={{ transform: props.xy.to(trans2) }}
        src={greenPotato}
      />
    </div>
  );
}

export default ContactBackground;
