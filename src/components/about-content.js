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
  
  width: 99%;
  font-family: orpheuspro, serif;

  font-weight: 100;
  text-align: center;
  font-style: normal;
  font-size: 0.8rem;
  text-align: left;
  font-size: 16px;
  font-size: 30px;
  
  color: rgb(19, 19, 18);
  margin-bottom: 50px;
  padding: 0 10px;
  line-height: 2.5rem;
  padding-top: 80px;
  z-index: 2000;
  
`

const AboutPhotoContainer = styled.div`
 position: fixed;
 
  width: 150px;
  
 margin-top: 60%;
  margin-bottom: 10%;
  z-index: 1000;
`
const OpacityFilter = styled.div`
position: fixed;
  width: 152px;
 
  height: 192px;
 
 margin-top: 58%;
 
  margin-bottom: 10%;
  z-index: 1100;
  opacity: 0.7;
  background-color: rgb(241, 241, 239);
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
          {/* <p><span id="line-one">
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
           www.calebjdudley@gmail.com</p> */}
           <p>CALEB DUDLEY is a photographer + videographer based in Brooklyn, New York. He has expertise in digital + analog processes as well as experimental media, and is a graduate of the Fashion Institute of Technology where he studied alongside some of the world's most passsionate collegiate artists.<br></br></p>
          
        </AboutContentCaption>
        <AboutPhotoContainer>
        <AboutPhoto />
        </AboutPhotoContainer>
        <OpacityFilter/>
      </AboutContentContainer>
    )
  }
}

export default AboutContent
