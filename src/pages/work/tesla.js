import React from "react"
import "../../css/worksiteStyle.scss"
import { Container } from "react-bootstrap"
import Fade from "../../components/animations/Fade"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import fallbackImg from "../../images/GoosePhoto.jpg"

export default function TeslaTab() {
  return (
    <div>
      <Layout>
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <SEO title="Software Developer at Tesla" />
        <Container>
          <figure className="position-relative">
            <img src={fallbackImg} alt="tesla" className="img-fluid" />
            <figcaption>
              <Fade bottom>
                <h1>Body Firmware Control Developer - Tesla</h1>
                <h2>05/2022 - 08/2022  </h2>
                <p>
                    I will be joining the body firmware controls team in Summer 2022,
                    stay tuned.
                </p>
              </Fade>
            </figcaption>
          </figure>
        </Container>
      </Layout>
    </div>
  )
}
