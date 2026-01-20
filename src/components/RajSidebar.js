import React from "react"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import selfImage from "../images/Bagher_Profile.webp"

const RajSidebar = () => {
  // Keep language hook for compatibility with the rest of the app
  // (even though getText currently returns English only).
  // eslint-disable-next-line no-unused-vars
  const { language } = useLanguage()

  return (
    <aside className="raj-sidebar" aria-label="Profile sidebar">
      <div className="raj-sidebar-progress" aria-hidden="true">
        <div className="raj-sidebar-progress-fill" />
      </div>
      <div className="raj-sidebar-inner">
        <div className="raj-top-avatar">
          <img className="raj-avatar" src={selfImage} alt={getText(data.name)} />
        </div>

        <h1 className="raj-name">{getText(data.name)}</h1>
        <div className="raj-about" aria-label="About summary">
          <p className="raj-about-text">{getText(data.aboutParaOne, language)}</p>
        </div>

        <div className="raj-actions" aria-label="Primary actions">
          <a className="raj-resume-btn" href="/resume">
            {getText(data.nav.resume, language)}
          </a>
        </div>
      </div>
    </aside>
  )
}

export default RajSidebar
