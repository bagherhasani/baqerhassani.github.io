import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Skills from "../components/skills"
import Nvidia from "../components/NVIDIA"
import Education from "../components/Education"
import Publications from "../components/Publications"

const IndexPage = () => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <SEO title="Baqer Hassani" />
    <Nvidia></Nvidia>
    <Education></Education>
    <Publications></Publications>
    {/* <Project></Project> */}
    <Skills></Skills>
  </Layout>
)

export default IndexPage
