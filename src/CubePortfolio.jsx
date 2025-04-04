import React, { useState } from "react";
import "./CubePortfolio.css";
import BasicInfo from "./components/BasicInfo/BasicInfo";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import Resources from "./components/Resources/Resources";
import DeveloperSetup from "./components/DeveloperSetup/DeveloperSetup";

export default function CubePortfolio() {
  const [face, setFace] = useState("bottom");

  return (
    <div className="portfolio-wrapper">
      <nav className="cube-nav">
        <ul>
          <li onClick={() => setFace("front")}>Basic Info</li>
          <li onClick={() => setFace("back")}>Work</li>
          <li onClick={() => setFace("right")}>Skills</li>
          <li onClick={() => setFace("top")}>Resources</li>
          <li onClick={() => setFace("left")}>Setup</li>
          <li onClick={() => setFace("bottom")}>Welcome</li>
        </ul>
      </nav>

      <div className="scene">
        <div className={`cube-container show-${face}`}>
          <div className="cube">
            <div className="cube-face cube-face-front">
              <BasicInfo />
            </div>
            <div className="cube-face cube-face-back">
              <Work />
            </div>
            <div className="cube-face cube-face-right">
              <Skills />
            </div>
            <div className="cube-face cube-face-left">
              <DeveloperSetup />
            </div>
            <div className="cube-face cube-face-top">
              <Resources />
            </div>
            <div className="cube-face cube-face-bottom">
              <div className="face-label">Welcome to Tiya's Portfolio 🎉</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
