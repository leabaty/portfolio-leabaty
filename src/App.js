import { BrowserRouter as Router } from "react-router-dom";

import "../node_modules/fullpage.js/vendors/scrolloverflow.min.js";
import ReactFullpage from "@fullpage/react-fullpage";

import "./App.scss";

//DATA
import projectsData from "./data/projects-en.json";

// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import About from "./components/About/About";
import Work from "./components/Work/Work";

function App() {
  const anchors = ["Home", "Work", "About", "Contact"];

  return (
    <div className="app">
      <Router>
        <Navbar />

        <ReactFullpage
          licenseKey={process.env.REACT_APP_FULLPAGE_LK}
          anchors={anchors}
          navigation
          navigationTooltips={anchors}
          scrollingSpeed={1000}
          scrollOverflow={true}
          render={({ state }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section bgc1">Component 1</div>

                <div class="section">
                <div class="slide"> <h1 className="title">Work</h1> </div>
                  {projectsData.projects.map((project, index) => {
                    return (
                      <div key={project._id} class="slide">
                        {" "}
                        <Work {...project} />
                      </div>
                    );
                  })}
                </div>

                <div className="section bgc2">
                  <About />
                </div>

                <div className="section bgc4">Component 4</div>

                <div className="section bgc5 fp-auto-height">
                  <Footer />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </Router>
    </div>
  );
}

export default App;
