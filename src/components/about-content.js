import React, { Component } from "react"
import styled from "styled-components"
import AboutPhoto from "../image-components/about-photo"

const AboutContentContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-direction: column;
font-size: 100%;
width: 100%;
height: 100%;
background-color: rgb(241, 241, 239);
`
const AboutContentCaption = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 85%;

font-family: orpheuspro, serif;

font-weight: 100;
text-align: left;
font-style: normal;

text-align: center;
font-size: 16px;
font-size: 1.2rem;

color: rgb(19, 19, 18);


line-height: 120%;

z-index: 2000;

  
`

const AboutPhotoContainer = styled.div`

  width: 150px;
  width: 22%;

  margin-bottom: 5%;
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
        
      <AboutPhotoContainer>
        <AboutPhoto />
        </AboutPhotoContainer>
        <AboutContentCaption>
         
           <p>Caleb Dudley is a photographer + videographer based in Brooklyn, New York. He has expertise in digital + analog processes as well as experimental media, and is a graduate of the Fashion Institute of Technology where he studied alongside some of the world's most passsionate collegiate artists.
             <br></br>
             <br></br>
             <br></br>
             For all inquiries and collaborations:
             <br></br>
             www.calebjdudley@gmail.com
             </p>
          
        </AboutContentCaption>
        
        
      </AboutContentContainer>
    )
  }
}

export default AboutContent
