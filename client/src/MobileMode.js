import "./App.scss";

//DATA
import projectsData from "./data/projects-en.json";

// COMPONENTS
import Home from "./components/Home/Home";
import AboutDetail from "./components/About/AboutDetail/AboutDetail";
import AboutIntro from "./components/About/AboutIntro/AboutIntro";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import NavbarFullpage from "./components/Navbar/NavbarFullpage/NavbarFullpage";

function MobileMode() {
  return (
    <div className="app">
      <NavbarFullpage />

      <div className="mobile__home">
        <Home />
      </div>

      <Work />

      <AboutIntro />

      <AboutDetail />

      <Contact />
    </div>
  );
}

export default MobileMode;
