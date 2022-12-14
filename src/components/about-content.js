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

const AboutPhotoLightbox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(241, 241, 239);

`

class AboutContent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      aboutPhotoLightbox: false
    }
  }
  render() {
    return (
      <AboutContentContainer>

        {/* <AboutPhotoLightbox className={this.props.aboutPhotoLightbox} onClick={()=> this.setState({ aboutPhotoLightbox: false })} style={{display: this.state.aboutPhotoLightbox ? "" : "none"}}>
          <AboutPhoto />
        </AboutPhotoLightbox>
        <AboutPhotoContainer onClick={()=> this.setState({ aboutPhotoLightbox: true })}>
          <AboutPhoto />
        </AboutPhotoContainer> */}
        <AboutContentCaption>

           <p>Caleb Dudley is a photographer and mixed-media artist based in New York City. He has expertise in digital + analog methods as well as experimental media.
             <br></br>
             <br></br>
             <br></br>
             Slow art, open to commisions.
             <br></br>
             www.calebjdudley@gmail.com
             </p>

        </AboutContentCaption>


      </AboutContentContainer>
    )
  }
}

export default AboutContent
