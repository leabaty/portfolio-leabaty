import React, { useState, useEffect, useRef } from "react";

import "./AboutExperience.scss";

import data from "../../../data/about-en.json";

import { BsArrowRightCircle } from "react-icons/bs";

function AboutExperience() {
  const [currentExperience, setCurrentExperience] = useState(true);
  const [currentExperienceId, setCurrentExperienceId] = useState("3");
  const [currentExperienceDetails, setCurrentExperienceDetails] = useState([]);

  // --------- DESKTOP OR MOBILE MODE ? ------------ //

  const [mobileMode, setMobileMode] = useState(false);

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

  // --------- GETTING THE CURRENT MATCHING EXPERIENCE IN DESKTOP MODE ------------ //

  // to show the corresponding experience, we put the current experience's id in the state and we allow it to be visible/invisible when clicked/unclicked on the button
  const handleClick = (id) => {
    setCurrentExperienceId(id);
    setCurrentExperience(true);
  };

  // we put in an array the details of the matching experience thanks to the experience's id
  const getCurrentExperience = (currentExpId, experiences) => {
    const matchingExpDetails = experiences.find(
      (experience) => +experience._id === +currentExpId
    );
    setCurrentExperienceDetails(matchingExpDetails.description);
  };

  // we prevent the first render (because there is no matching experience first) and each time the experience's id changes, we update the array with the correct data
  useEffect(() => {
    getCurrentExperience(currentExperienceId, data.experiences);
  }, [currentExperienceId]);

  return (
    <>
      {mobileMode ? (
        <div className="experience__container">
          <div className="experience__items">
            {data.experiences
              .slice(0)
              .reverse()
              .map((experience, index) => {
                return (
                  <div className="experience__item" key={experience._id}>
                    <h4 className="experience__item__title">
                      {experience.position}
                    </h4>

                    <div className="experience__infos">
                      <div className="experience__infos__basic">
                        <p className="experience__infos__text">
                          {experience.start_period} - {experience.end_period}{" "}
                        </p>
                        <p className="experience__infos__text">
                          {experience.company} • {experience.location}{" "}
                        </p>
                      </div>
                    </div>

                    <ul className="experience__detail">
                      {experience.description.map((item) => {
                        return (
                          <li key={item} className="experience__infos__text">
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div className="experience__container">
          <div className="experience__items">
            {data.experiences
              .slice(0)
              .reverse()
              .map((experience, index) => {
                return (
                  <div
                    className={
                      currentExperience &&
                      currentExperienceId === experience._id
                        ? "experience__item--important"
                        : "experience__item"
                    }
                    onClick={() => handleClick(experience._id)}
                    key={experience._id}
                  >
                    <h4 className="experience__item__title">
                      {experience.position}
                    </h4>

                    <div className="experience__infos">
                      <div className="experience__infos__basic">
                        <p className="experience__infos__text">
                          {experience.start_period} - {experience.end_period}{" "}
                        </p>
                        <p className="experience__infos__text">
                          {experience.company} • {experience.location}{" "}
                        </p>
                      </div>

                      <BsArrowRightCircle
                        className="experience__infos__icon"
                      />
                    </div>
                  </div>
                );
              })}
          </div>

          {currentExperience && (
            <ul className="experience__detail">
              {currentExperienceDetails.map((item) => {
                return (
                  <li key={item} className="experience__infos__text">
                    {item}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </>
  );
}

export default AboutExperience;
