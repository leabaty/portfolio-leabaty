import ProjectSlider from "./Project/ProjectSlider.js";

import "./Work.scss"
import WorkBg from "./WorkBackground"

function Work() {
  return (
    <>
    <WorkBg/>
      <div className="page">
        <div className="container">
        <div className="work__container">
          <h1 className="title">Work</h1>
          <ProjectSlider/>
        </div>
        </div>
      </div>
    </>
  );
}

export default Work;
