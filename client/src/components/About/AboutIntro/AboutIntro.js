import React from "react";

import {
  BsBriefcase,
  BsLightbulb,
  BsCodeSlash,
  BsChatQuote,
  BsPalette,
} from "react-icons/bs";

import "./AboutIntro.scss";
import aboutMeImg from "../../../assets/images/about-illustration.svg";

function AboutIntro() {
  return (
    <>
      <div className="page" id="About">
        <div className="container">
          <h1 className="title">About me</h1>

          <div className="about-desktop__intro">
            <p className="about-desktop__intro--pgp">
              After four years spent in the tourism industry, I made a{" "}
              <span className="about-desktop__intro--bold">
                complete retraining in fullstack web-development
              </span>
              , tested myself out on several projects for small businesses...
              and here I am – on the{" "}
              <span className="about-desktop__intro--bold">maker’s side</span>,
              the people who make internet an even more magical place.
            </p>

            <p className="about-desktop__intro--pgp">
              I love the thrilling{" "}
              <span className="about-desktop__intro--bold">challenges</span>
              {" "}that coding brings every day, the {" "}
              <span className="about-desktop__intro--bold">
                never-ending stimulation
              </span>
              , the direct impact we have on our digitalized world. I love a{" "}
              <span className="about-desktop__intro--bold">good design</span>, a
              website that feels like home or to the contrary, that make us
              discover places we’ve never been before.{" "}
            </p>

            <p className="about-desktop__intro--pgp">
              The versatility of coding is really what amazes me:{" "}
              <span className="about-desktop__intro--bold">
                There is so much to do, to learn, to test out, to build !
              </span>
            </p>
          </div>

          <div className="about-desktop">
            <div className="about-desktop__ensemble">
              <img src={aboutMeImg} alt="About" />

              <div className="about-desktop__tag one">
                <p className="one__text">
                  {" "}
                  <BsBriefcase /> Business Sensitive
                </p>
              </div>

              {/* <div className="circle onebis">MORE</div> */}
              <div className="about-desktop__tag two">
                <p className="two__text">
                  <BsLightbulb /> Creative
                </p>
              </div>

              <div className="about-desktop__tag three">
                <p className="three__text">
                  {" "}
                  <BsCodeSlash /> Knowledgeable{" "}
                </p>
              </div>

              <div className="about-desktop__tag four">
                <p className="four__text">
                  Polyglot <BsChatQuote />
                </p>
              </div>

              <div className="about-desktop__tag five">
                <p className="five__text">
                  Multi-potentialist <BsPalette />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutIntro;
