import React from "react"
import "../../css/worksiteStyle.scss"
import { Container } from "react-bootstrap"
import Fade from "../../components/animations/Fade"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import fallbackImg from "../../images/GoosePhoto.jpg"

export default function FordTab() {
  return (
    <div>
      <Layout>
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <SEO title="Software Developer at Ford Motor Company" />
        <Container>
          <figure className="position-relative">
            <img src={fallbackImg} alt="ford" className="img-fluid" />
            <figcaption>
              <Fade bottom>
                <h1>Software Developer - Ford Motor Company of Canada</h1>
                <h2>05/2019 - 08/2019  </h2>
                <p>
                  -	Developed automation pipeline to flash and systematically test devices routinely on the Jenkins platform for over 100 daily tests 
                <br></br>
                <br></br>
                  -	Prototyped utility to flash multiple chips simultaneously on TestStand using C#, increasing efficiency by over 2 times
                </p>
              </Fade>
            </figcaption>
          </figure>
        </Container>
      </Layout>
    </div>
  )
}
