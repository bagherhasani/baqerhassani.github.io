import React from "react"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import selfImage from "../images/Bagher_Profile.webp"
import SplineRobot from "./SplineRobot"

const RajSidebar = () => {
  // Keep language hook for compatibility with the rest of the app
  // (even though getText currently returns English only).
  // eslint-disable-next-line no-unused-vars
  const { language } = useLanguage()

  return (
    <aside className="raj-sidebar" aria-label="Profile sidebar">
      {/* Interactive robot (Spline) on the left panel; replaces the simple progress bar */}
      <SplineRobot url="https://prod.spline.design/Ptdk2fACInwPoBTH/scene.splinecode" />
      <div className="raj-sidebar-inner">
        <div className="raj-profile">
          <header className="raj-profile-header">
            <div className="raj-top-avatar">
              <img className="raj-avatar" src={selfImage} alt={getText(data.name)} />
            </div>
            <h1 className="raj-name">{getText(data.name)}</h1>
            <div className="raj-role">Software Engineer · Robotics & Simulation</div>
          </header>

          <div className="raj-about-card" aria-label="About summary">
            <p className="raj-about-text">{getText(data.aboutParaOne, language)}</p>
          </div>

          {/* Removed sidebar contact buttons (email/GitHub) — contact section is in main content */}
        </div>
      </div>
    </aside>
  )
}

export default RajSidebar
