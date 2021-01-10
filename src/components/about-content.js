import { Link } from "gatsby"
import React, { Component } from "react"
import styled from "styled-components"
import AboutPhoto from "../image-components/about-photo"

const AboutContentContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgb(241, 241, 239);
 
`
const AboutContentCaption = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  font-family: orpheuspro, serif;

  font-weight: 100;
  text-align: center;
  font-style: normal;
  font-size: 0.8rem;
  
  font-size: 16px;
  font-size: 1.1rem;
  color: rgb(19, 19, 18);
  margin-bottom: 50px;
  padding: 0 10px;
  line-height: 1.7rem;
  padding-top: 100px;
  z-index: 2000;
  
`

const AboutPhotoContainer = styled.div`
 position: fixed;
 top: 49%;
  width: 100px;
  margin-bottom: 10%;
  z-index: 1000;
`

class AboutContent extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <AboutContentContainer>
        
      
        <AboutContentCaption>
          <p><span id="line-one">
            <span className="about-strong">Caleb Dudley&nbsp;</span>
          &nbsp;&nbsp;&nbsp;&nbsp;is&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;&nbsp;&nbsp;&nbsp;Brooklyn&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp;&nbsp;&nbsp;&nbsp; based
          </span>
          <br></br>
          <span id="line-two">
          photographer + videographer with expertise
          </span>
          <br></br>
          <span id="line-three">
          in digital + analog processes as well as
          </span>
          <br></br>
          <span id="line-four">
          experimental media. He is a graduate of 
          </span>
          <br></br>
          <span id="line-five">
          the Fashion Institute of Technology, where 
          </span>
          <br></br>
          <span id="line-six">
          he studied alongside some of the world's
          </span>
          <br></br>
          <span id="line-seven">
          most passionate collegiate artists.
          </span>
            
          <br></br><br></br>
          <br></br><br></br>
          <br></br><br></br>
          <br></br><br></br>
           CONTACT
           <br></br>
           www.calebjdudley@gmail.com</p>
        </AboutContentCaption>
        <AboutPhotoContainer>
        <AboutPhoto />
        </AboutPhotoContainer>
        
      </AboutContentContainer>
    )
  }
}

export default AboutContent
