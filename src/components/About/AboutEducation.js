import React from "react";

import "./AboutEducation.scss";

import data from "../../data/about-en.json";

function AboutEducation() {
  return (
    <>
      <div className="education__container">
        {data.educations
          .slice(0)
          .reverse()
          .map((education, index) => {
            return (
              <div className="education__item" key={education._id}>
                <h4 className="education__item__title">{education.diploma}</h4>

                <div className="education__infos">
                  <div className="education__infos__basic">
                    <p className="education__infos__text">
                      {education.school} • {education.location}
                    </p>
                    <p className="education__infos__text">
                      {education.start_period} - {education.end_period}{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default AboutEducation;
