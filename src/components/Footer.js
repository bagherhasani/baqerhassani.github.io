import React from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import "../styles/footer.scss"

const Footer = () => {
  const { language } = useLanguage();

  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom distance="20px" duration={1000}>
            <h1>{getText(data.sections.contact, language)}</h1>
          </Fade>
          <Fade bottom>
            <button
              type="button"
              className="primary-btn"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.location.href = "/resume";
                }
              }}
            >
              {getText(data.nav.resume, language)}
            </button>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Footer
