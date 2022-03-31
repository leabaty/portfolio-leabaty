import React from "react";

import "./ProjectSlide.scss";

import { VscGlobe } from "react-icons/vsc";
import { AiFillGithub } from "react-icons/ai";

function ProjectSlide(projectData) {
  console.log(projectData.projectData)
  return (
    <>
            <div className="project__container">
              <div className="project__description">
                <h2 className="title--small project__description__title">
                  {projectData.projectData.name}
                </h2>
                <p className="text project__description__text">
                  {projectData.projectData.short_desc}
                </p>

                <h3 className="project__description__undertitle">
                  Technologies
                </h3>
                {projectData.projectData.technologies.map((technology) => {
                  return (
                    <div key={technology} className="project__technology__tag">
                      {technology}
                    </div>
                  );
                })}

                <h3 className="project__description__undertitle">Browse it</h3>
                <div className="project__links">
                  <a
                    className="project__links__icon"
                    href={projectData.projectData.github_url}
                    target="_blank"
                    aria-label="Github URL"
                  >
                    <AiFillGithub />
                  </a>

                  <a
                    className="project__links__icon"
                    href={projectData.projectData.website_url}
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
                  src={projectData.projectData.img_url}
                  alt={projectData.projectData.img_alt}
                />
              </div>
            </div>
  
    </>
  );
}

export default ProjectSlide;
