import React from "react";

import "./AboutCertifications.scss";

import data from "../../data/about-en.json";

function AboutCertifications() {
  return (
    <>
      <div className="certifications__container">
        {data.certifications.map((certification, index) => {
          return (
            <div
              key={certification._id}
              className={
                certification.important === true
                  ? "certifications__item--important"
                  : "certifications__item"
              }
            >
              <p className="certifications__item__title">
                {certification.name}
              </p>
              <p className="certifications__infos__text">
                {" "}
                {certification.year} • {certification.score}{" "}
              </p>

              {certification.description.map((item) => {
                return <p className="certifications__infos__description" key={item}>{item}</p>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AboutCertifications;
