import React, { Component } from "react";
import styled from "styled-components";

const ContactContentContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-direction: column;
font-size: 100%;
width: 100%;
height: 100%;
background-color: rgb(241, 241, 239);
 
`;
const ContactContentCaption = styled.div`
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


`;

const OpacityFilter = styled.div`

  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;

 
  margin-bottom: 10%;
  z-index: 1100;
  opacity: 0.7;
  background-color: rgb(241, 241, 239);
 
`;
export default class CvContent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <ContactContentContainer>
        <ContactContentCaption>
          
          <p>
            FEATURES
            <br></br>
            <br></br>
            Paper Magazine 2021 
            <br></br>
            Early Rising 2021 
            <br></br>
            9 To 5 Magazine 2019 
            <br></br>
            Reuben NYC 2019 
            <br></br>
            Pingayao Photography Festival 2019
            <br></br>
            <br></br>
            CLIENTELE
            <br></br>
            <br></br>
            Entire World
            <br></br>
            Toast
            <br></br>
            Sézane
            <br></br>
            Nisolo
            <br></br>
            ArayaWorld
          </p>
        </ContactContentCaption>

        <OpacityFilter />
      </ContactContentContainer>
    );
  }
}
