import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import FullPage from "./FullPage";

import PrivacyPolicy from "./components/Footer/Legal/Content/PrivacyPolicy";
import LegalNotice from "./components/Footer/Legal/Content/LegalNotice";
// import NotFound from "./components/NotFound/NotFound";

import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path="/" element={<FullPage />}></Route>
          <Route path="/legal-notice" element={<LegalNotice />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
