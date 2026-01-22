import React, { useEffect, useMemo } from "react"

const SPLINE_VIEWER_SCRIPT_SRC =
  "https://unpkg.com/@splinetool/viewer@1.12.39/build/spline-viewer.js"

/**
 * SplineRobot
 * - Loads the Spline Viewer web-component on the client.
 * - Renders the <spline-viewer> element (SSR-safe).
 *
 * NOTE: Scroll interactions in Spline Viewer are based on page scroll.
 * This project used an internal scroll container; we switch to normal page scroll
 * so Spline scroll events can work naturally.
 */
export default function SplineRobot({
  url = "https://prod.spline.design/Ptdk2fACInwPoBTH/scene.splinecode",
  className = "",
}) {
  const attrs = useMemo(
    () => ({
      url,
      "events-target": "global",
      // Many Spline scenes rely on viewer scroll events; leaving this attribute
      // makes it explicit and harmless if unused.
      scroll: "",
    }),
    [url]
  )

  useEffect(() => {
    if (typeof window === "undefined") return

    // Avoid injecting the script multiple times.
    const existing = document.querySelector(
      `script[data-spline-viewer][src="${SPLINE_VIEWER_SCRIPT_SRC}"]`
    )
    if (existing) return

    const script = document.createElement("script")
    script.type = "module"
    script.src = SPLINE_VIEWER_SCRIPT_SRC
    script.async = true
    script.setAttribute("data-spline-viewer", "true")
    document.head.appendChild(script)

    return () => {
      // Keep the script cached for SPA navigation; do not remove.
    }
  }, [])

  return (
    <div className={`raj-spline-panel ${className}`.trim()}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <spline-viewer {...attrs} class="raj-spline-viewer" />
    </div>
  )
}

