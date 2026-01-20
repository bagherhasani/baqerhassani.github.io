/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useRef } from "react"
import RajSidebar from "./RajSidebar"
import { LanguageProvider } from "../contexts/LanguageContext"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/mains.scss"

const Layout = ({ children }) => {
  const layoutRef = useRef(null)
  const mainRef = useRef(null)

  // Handle potential CSS loading issues in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Add a small delay to ensure CSS is loaded before any HMR updates
      const timer = setTimeout(() => {
        // Force a reflow to ensure CSS is properly applied
        // eslint-disable-next-line no-unused-expressions
        document.body.offsetHeight;
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Sidebar scroll progress (driven by the right panel scroll container)
  useEffect(() => {
    if (typeof window === "undefined") return
    const scroller = mainRef.current
    const layoutEl = layoutRef.current
    if (!scroller || !layoutEl) return

    let raf = 0
    const update = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const max = scroller.scrollHeight - scroller.clientHeight
        const pct = max > 0 ? Math.min(1, Math.max(0, scroller.scrollTop / max)) : 0
        layoutEl.style.setProperty("--raj-scroll-pct", `${pct * 100}%`)
      })
    }

    update()
    scroller.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update, { passive: true })

    return () => {
      if (raf) cancelAnimationFrame(raf)
      scroller.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <LanguageProvider>
      <div className="raj-layout" ref={layoutRef}>
        <RajSidebar />
        <div className="raj-main" role="main" ref={mainRef}>
          <div className="raj-main-inner">{children}</div>
        </div>
      </div>
    </LanguageProvider>
  )
}
export default Layout
