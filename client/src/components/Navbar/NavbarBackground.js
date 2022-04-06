import React from "react";
import { useSpring, animated } from "react-spring";

import "./NavbarBackground.scss";
import "../AppBackground.scss";

import mustardOvaley from "./../../assets/images/forms/mustard-ovaley.svg";
import pinkPotato from "./../../assets/images/forms/pink-potatoey.svg";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 45}px,${y / 45}px,0)`;

function NavbarBackground() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div
      className="form-container--nav"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.img
        className="form tn1"
        style={{ transform: props.xy.to(trans1) }}
        src={pinkPotato}
      />
      <animated.img
        className="form--big tn2"
        style={{ transform: props.xy.to(trans1) }}
        src={mustardOvaley}
      />
    </div>
  );
}

export default NavbarBackground;
