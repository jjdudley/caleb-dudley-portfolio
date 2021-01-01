import { Link } from "gatsby"
import React, { Component } from "react"
import styled from "styled-components"
import AboutPhoto from "../image-components/about-photo"

const AboutContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  min-height: 100%;
  background-color: rgb(241, 241, 239);
  padding-top: 50px;
`
const AboutContentCaption = styled.div`
  display: flex;
  width: 500px;
  font-family: orpheuspro, serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
  color: rgb(19, 19, 18);
  margin-top: 40px;
  margin-bottom: 50px;
`

class AboutContent extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <AboutContentContainer>
        <AboutPhoto />
        <AboutContentCaption>
          Caleb Dudley is a freelance editorial / fine
          art photographer and videographer with expertise in both digital and analog processes as well as experimental media.
          <br /><br/>
          The driving force behind Caleb’s work is his uniquely gentle
          perspective into the world. His work, often described as feeling
          fragile, slowly reveals the vulnerability and sensitivity at the core of the human experience.
          <br /><br/>
          Caleb currently resides in Brooklyn, NY. He is a graduate of The Fashion Institute of Technology, where he studied alongside some of the world's most passionate collegiate artists.
        </AboutContentCaption>
      </AboutContentContainer>
    )
  }
}

export default AboutContent
