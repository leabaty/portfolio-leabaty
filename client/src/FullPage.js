import { useEffect, useState } from "react";

import "fullpage.js/vendors/scrolloverflow.min";
import ReactFullpage from "@fullpage/react-fullpage";

import "./App.scss";
import "./FullPage.scss";

//DATA
import projectsData from "./data/projects-en.json";

// COMPONENTS
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import AboutDetail from "./components/About/AboutDetail/AboutDetail";
import AboutIntro from "./components/About/AboutIntro/AboutIntro";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import NavbarFullpage from "./components/Navbar/NavbarFullpage/NavbarFullpage";

function FullPage() {
  const anchors = [
    "Home",
    "Work",
    "About",
    "Resume",
    "Contact",
    "To-Infinity-and-Beyond",
  ];

  const [mobileMode, setMobileMode] = useState(false);

  const changeViewMode = () => {
    if (window.innerWidth <= 800) {
      setMobileMode(true);
    } else {
      setMobileMode(false);
    }
  };

  window.addEventListener("resize", changeViewMode);

  useEffect(() => {
    changeViewMode();
  }, []);

  return (
    <div className="app">
      <NavbarFullpage />
      <ReactFullpage
        licenseKey={process.env.REACT_APP_FULLPAGE_LK}
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        scrollingSpeed={1000}
        scrollOverflow={true}
        responsiveWidth={800}
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

              {!mobileMode && (
                <div className="section fp-auto-height">
                  <Footer />
                </div>
              )}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default FullPage;
