import { BrowserRouter as Router } from "react-router-dom";

import "../node_modules/fullpage.js/vendors/scrolloverflow.min.js";
import ReactFullpage from "@fullpage/react-fullpage";

import "./App.scss";

//DATA
import projectsData from "./data/projects-en.json";

// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import AboutDetail from "./components/About/AboutDetail/AboutDetail";
import AboutIntro from "./components/About/AboutIntro/AboutIntro";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";

function App() {
  const anchors = ["Home", "Work", "About", "Resume", "Contact", "Bottom"];

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
                <div className="section">
                  <Home />
                </div>

                <div className="section">
                  <Work />
                </div>

                <div className="section">
                  <AboutIntro />
                </div>

                <div className="section">
                  <AboutDetail />
                </div>

                <div className="section">
                  <Contact />
                </div>

                <div className="section fp-auto-height">
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
