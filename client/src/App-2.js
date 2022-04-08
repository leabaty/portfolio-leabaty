import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// COMPONENTS
import Footer from "./components/Footer/Footer";

import MobileMode from "./MobileMode";
import DesktopMode from "./Fullpage";

import PrivacyPolicy from "./components/Footer/Legal/Content/PrivacyPolicy";
import LegalNotice from "./components/Footer/Legal/Content/LegalNotice";
import NotFound from "./components/NotFound/NotFound";

import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const [mobileMode, setMobileMode] = useState(false);

  const changeViewMode = () => {
    if (window.innerWidth <= 600) {
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
      <Router>
        <ScrollToTop />

        <Routes>
          {mobileMode ? (
            <Route path="/" element={<MobileMode />}></Route>
          ) : (
            <Route path="/" element={<DesktopMode />}></Route>
          )}
          <Route path="/legal-notice" element={<LegalNotice />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
