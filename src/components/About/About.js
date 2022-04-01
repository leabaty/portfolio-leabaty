import React from "react";

import "./About.scss";
import "../FontStyles.scss";

import AboutExperience from "./AboutExperience.js";
import AboutEducation from "./AboutEducation.js";
import AboutSkills from "./AboutSkills.js";
import AboutCertifications from "./AboutCertifications.js";
import AboutLanguages from "./AboutLanguages";

function About() {

  //if window resize <769, then show mobile view. (Web Skills, Education, Langages, Certifications, Work Experience)
  // if window >769, then show Desktop view (50/50 with work experience)
  return (
    <>
      <div className="page">
        <div className="container">
          {/* <h1 className="title">Everything about me</h1> */}

          <section className="about__section">
            <div className="about__element">
              <h2 className="title--small about__title">Education</h2>
              <AboutEducation />
            </div>

            <div className="about__element">
              <div className="about__sub-element">
                <h2 className="title--small about__title">WebDev Skills</h2>
                <AboutSkills />
              </div>

              <div className="about__sub-element">
                <h2 className="title--small about__title">Certifications</h2>
                <AboutCertifications />
              </div>
            </div>
          </section>

          <h2 className="title--small about__title">Work Experience</h2>
          <AboutExperience />

          <h2 className="title--small about__title">I speak...</h2>
          <AboutLanguages />
        </div>
      </div>
    </>
  );
}

export default About;
