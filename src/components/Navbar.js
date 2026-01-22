import React from "react"
import data, { getText } from "../data"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          {/* Left-side resume button temporarily disabled */}
          {/* <div className="left-nav">
            <button 
              onClick={event => window.location.href="/resume"} 
              type="button" 
              className="btn">
              {getText(data.nav.resume)}
            </button>
          </div> */}
          
          <div className="center-nav">
            <div className="links-wrapper">
              <button onClick={() => (window.location.hash = "home")} type="button">
                {getText(data.nav.home)}
              </button>
              <button onClick={() => (window.location.hash = "nvidia")} type="button">
                {getText(data.nav.work)}
              </button>
              <button onClick={() => (window.location.hash = "contact")} type="button">
                {getText(data.nav.contact)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
