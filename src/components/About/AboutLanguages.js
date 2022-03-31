import React from "react";

import "./AboutLanguages.scss";

import data from "../../data/about-en.json";

function AboutLanguages() {
  return (
    <>
      <div className="languages__container">
        {data.languages.map((language, index) => {
          return (
              <p key={language._id} className="languages__tag">{language.language} <span className="languages__tag__detail">| {language.level} </span>  </p>
          );
        })}
      </div>
    </>
  );
}

export default AboutLanguages;
