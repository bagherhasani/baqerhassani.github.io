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
            <div className="raj-role">Robotics Engineer · Simulation &amp; Autonomy</div>
          </header>

          <div className="raj-about-card" aria-label="About summary">
            <p className="raj-about-text">{getText(data.aboutParaOne, language)}</p>
          </div>

          <div className="raj-links" aria-label="Profile links">
            <a className="raj-link" href={`mailto:${data.contactEmail}`}>
              <span className="raj-link-icon" aria-hidden="true">
                {/* Mail icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 6.75h16c.69 0 1.25.56 1.25 1.25v10c0 .69-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25V8c0-.69.56-1.25 1.25-1.25Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="m4.5 8.5 7.1 5.2c.25.18.55.28.86.28s.61-.1.86-.28l7.1-5.2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="raj-link-text">{data.contactEmail}</span>
            </a>

            <a
              className="raj-link"
              href="https://github.com/bagherhassani"
              target="_blank"
              rel="noreferrer"
            >
              <span className="raj-link-icon" aria-hidden="true">
                {/* GitHub icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2.5c-5.2 0-9.5 4.1-9.5 9.3 0 4.15 2.75 7.67 6.56 8.91.48.09.66-.21.66-.47v-1.65c-2.67.59-3.23-1.18-3.23-1.18-.44-1.1-1.08-1.39-1.08-1.39-.88-.58.07-.57.07-.57 1 .07 1.52 1 1.52 1 .88 1.5 2.3 1.07 2.86.82.09-.64.35-1.07.63-1.32-2.13-.24-4.38-1.05-4.38-4.69 0-1.04.38-1.89 1-2.56-.1-.24-.43-1.22.1-2.55 0 0 .82-.26 2.68 1a9.5 9.5 0 0 1 4.88 0c1.86-1.26 2.68-1 2.68-1 .53 1.33.2 2.31.1 2.55.62.67 1 1.52 1 2.56 0 3.65-2.25 4.45-4.39 4.68.36.31.69.92.69 1.86v2.75c0 .26.18.56.66.47A9.35 9.35 0 0 0 21.5 11.8c0-5.2-4.3-9.3-9.5-9.3Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="raj-link-text">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default RajSidebar
