// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Yoga from "./pages/Yoga";
import Physio from "./pages/Physio";
import Explore from "./pages/Explore";
import Diet from "./pages/Diet";
import DietDetails from "./pages/Dietdetails"; // <-- Import DietDetails
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import YogaPoseDetector from "./pages/YogaPoseDetector";
import PhysioPoseDetector from "./pages/PhysioPoseDetector";

import DeskDetox from "./pages/DeskDetox";
import NeckRelief from "./pages/NeckRelief";
import BackReset from "./pages/BackReset";
import HipMobility from "./pages/HipMobility";
import MorningWakeUp from "./pages/MorningWakeUp";
import EyeShoulderBreak from "./pages/EyeShoulderBreak";
import FiveMinStretch from "./pages/FiveMinStretch";
import PostureCheck from "./pages/PostureCheck";
import EveningWindDown from "./pages/EveningWindDown";
import ConsistencyChallenge from "./pages/ConsistencyChallenge";
import PoseDetect from "./pages/PoseDetect";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16"> {/* Padding to prevent Navbar overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/y-pose-detect" element={<YogaPoseDetector />} />
          <Route path="/p-pose-detect" element={<PhysioPoseDetector />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/physio" element={<Physio />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/diet/:nutrient" element={<DietDetails />} /> {/* <-- Dynamic route */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Explore detail routes */}
          <Route path="/desk-detox" element={<DeskDetox />} />
          <Route path="/neck-relief" element={<NeckRelief />} />
          <Route path="/back-reset" element={<BackReset />} />
          <Route path="/hip-mobility" element={<HipMobility />} />
          <Route path="/morning-wakeup" element={<MorningWakeUp />} />
          <Route path="/eye-shoulder" element={<EyeShoulderBreak />} />
          <Route path="/5-min-stretch" element={<FiveMinStretch />} />
          <Route path="/posture-check" element={<PostureCheck />} />
          <Route path="/evening-winddown" element={<EveningWindDown />} />
          <Route path="/consistency-challenge" element={<ConsistencyChallenge />} />
          <Route path="/pose-detect" element={<PoseDetect />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}


export default App;
