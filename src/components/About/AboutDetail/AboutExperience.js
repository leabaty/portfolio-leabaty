import React, { useState, useEffect, useRef } from "react";

import "./AboutExperience.scss";

import data from "../../../data/about-en.json";

import { BsArrowRightCircle } from "react-icons/bs";

function AboutExperience() {
  const [currentExperienceVisible, setCurrentExperienceVisible] =
    useState(false);
  const [currentExperienceId, setCurrentExperienceId] = useState();
  const [currentExperienceDetails, setCurrentExperienceDetails] = useState([]);

  // PREVENT FIRST RENDER
  const firstRender = useRef(true);

  const handleClick = (id) => {
    setCurrentExperienceId(id);
    setCurrentExperienceVisible(!currentExperienceVisible);
  };

  // we put in an array the details of the desired experience
  const getCurrentExperience = (currentExpId, experiences) => {
    const matchingExpDetails = experiences.find(
      (experience) => +experience._id === +currentExpId
    );
    setCurrentExperienceDetails(matchingExpDetails.description);
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    getCurrentExperience(currentExperienceId, data.experiences);
  }, [currentExperienceId]);

  return (
    <>
      <div className="experience__container">
        <div className="experience__items">
          {data.experiences
            .slice(0)
            .reverse()
            .map((experience, index) => {
              return (
                <div
                  className={
                    currentExperienceVisible &&
                    currentExperienceId === experience._id
                      ? "experience__item--important"
                      : "experience__item"
                  }
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
                      onClick={() => handleClick(experience._id)}
                    />
                  </div>
                </div>
              );
            })}
        </div>

        {currentExperienceVisible && (
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
    </>
  );
}

export default AboutExperience;
