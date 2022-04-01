import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "./ProjectSlider.scss";

import data from "../../../data/projects-en.json";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";
import { AiFillGithub } from "react-icons/ai";

function ProjectSlider() {
  // SLICK-CAROUSEL
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next arrows-slide" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev arrows-slide" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  // SLIDE RESPONSIVENESS
  const [imageIndex, setImageIndex] = useState(0);
  const [mobileMode, setMobileMode] = useState(false);

  const settingsDesktop = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    centerMode: true,
    speed: 300,
    slidesToShow: 1,
    centerPadding: 0,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  const settingsMobile = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerPadding: 0,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  const changeViewMode = () => {
    if (window.innerWidth <= 960) {
      setMobileMode(true);
    } else {
      setMobileMode(false);
    }
  };

  window.addEventListener("resize", changeViewMode);

  useEffect(() => {
    changeViewMode();
  }, []);

  return (
    <>
      {mobileMode ? (
        <Slider {...settingsMobile}>
          {data.projects.map((project, index) => {
            return (
              <div
                className={index === imageIndex ? "slide activeSlide" : "slide"}
                key={project._id}
              >
                <h1 className="title slide__title">{project.name}</h1>
                <img
                  className="slide__img"
                  src={project.img_url}
                  alt={project.img_alt}
                />
              </div>
            );
          })}
        </Slider>
      ) : (
        <Slider {...settingsDesktop}>
          {data.projects.map((project, index, array) => {
            return (
              <div
                className={index === imageIndex ? "slide activeSlide" : "slide"}
                //ce qu'on veut ici c'est mettre en valeur l'image courante.
                // Si l'index de l'image dans le tableau d'objets matche avec l'index du
                // tableau, ça veut dire qu'elle est l'image courante et qu'on peut donc
                // lui appliquer un style pour la mettre en valeur.
                key={project._id}
              >
                <div className="project__container">
                  <div className="project__description">
                                        
                  <h4 className="title--nano project__description__title">
                      {index+1}/{array.length}
                    </h4>

                    <h2 className="title--small project__description__title">
                      {project.name}
                    </h2>
                    <p className="text project__description__text">
                      {project.short_desc}
                    </p>

                    <h3 className="project__description__undertitle">
                      Technologies
                    </h3>
                    {project.technologies.map((technology) => {
                      return (
                        <div key={technology} className="project__technology__tag">
                          {technology}
                        </div>
                      );
                    })}

                    <h3 className="project__description__undertitle">
                      Browse it
                    </h3>
                    <div className="project__links">
                      <a
                        className="project__links__icon"
                        href={project.github_url}
                        target="_blank"
                        aria-label="Github URL"
                      >
                        <AiFillGithub />
                      </a>

                      <a
                        className="project__links__icon"
                        href={project.website_url}
                        target="_blank"
                        aria-label="Website URL"
                      >
                        <VscGlobe />
                      </a>

                    </div>
                  </div>
                  <div className="project__image">
                    <img
                      className="project__image__item"
                      src={project.img_url}
                      alt={project.img_alt}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </>
  );
}

export default ProjectSlider;
