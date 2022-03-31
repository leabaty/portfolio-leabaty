import React from "react";

import ProjectSlider from "./Project/ProjectSlide.js";

function Work(project) {
  console.log(project)
  return (
    <>
      <div className="page">
        <div className="container">
        {/* <h1 className="title">Work</h1> */}
          <ProjectSlider projectData={project}/>
        </div>
      </div>
    </>
  );
}

export default Work;
