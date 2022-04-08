import React from "react";

import "./Home.scss";

import HomeBg from "./HomeBackground"

import profile from "../../assets/images/profile.png";

import { BsArrowDownCircle } from "react-icons/bs";

function Home() {
  // HORIZONTAL SCROLL
  var scrollEventHandler = function () {
    window.scroll(0, window.pageYOffset);
  };
  window.addEventListener("scroll", scrollEventHandler, false);

  return (
    <>
    <HomeBg/>
      <div className="page" id="Home">
        <div className="container">
          <div className="home">
            <p className="home__name">Léa Baty</p>

            <img src={profile} className="home__profile-picture" />

            <div className="home__designation">
              <p className="home__designation__text">fullstack web developer</p>
              <p className="home__designation__text --small">
                design enthousiast
              </p>
              <p className="home__designation__text --smaller">cat lover</p>

              <a href="#Work">
                <BsArrowDownCircle className="home__scroll-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
