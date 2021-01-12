import { Link } from "gatsby";
import React, { Component } from "react";
import styled from "styled-components";

import FineArtOne from "../image-components/fine-art-1";
import FineArtTwo from "../image-components/fine-art-2";
import FineArtThree from "../image-components/fine-art-3";
import FineArtFour from "../image-components/fine-art-4";
import FineArtFive from "../image-components/fine-art-5";
import FineArtSix from "../image-components/fine-art-6";
import FineArtSeven from "../image-components/fine-art-7";
import FineArtEight from "../image-components/fine-art-8";

let FineArtGalleryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  background-color: rgb(241, 241, 239);
  padding-top: 30px;
  padding-bottom: 30px;
`;

const FineArtPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px 0;
`;

const FineArtCaptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 300px;
  font-size: 0.8rem;
  color: gray;
  font-family: orpheuspro, serif;
  font-weight: 400;
  font-style: normal;
  margin-top: 20px;
`;

const FineArtTitle = styled.div`
  font-family: orpheuspro, serif;
  font-weight: 400;
  font-style: italic;
  font-size: 0.8rem;
`;

class FineArtGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <FineArtGalleryContainer className={this.props.name}>
        <FineArtPhotoContainer className="fine-art-photo-container">
          <FineArtOne />
          <FineArtCaptionContainer>
            <FineArtTitle>Vanity, Church</FineArtTitle>11" x 9"
            <br /> Aged Salt Print
            <br />
            2019
          </FineArtCaptionContainer>
        </FineArtPhotoContainer>
        <FineArtPhotoContainer className="fine-art-photo-container">
          <FineArtTwo />
          <FineArtCaptionContainer>
            <FineArtTitle>Vanity, Jim 01</FineArtTitle>14" x 11"
            <br /> Aged Salt Print
            <br />
            2019
          </FineArtCaptionContainer>
        </FineArtPhotoContainer>
        <FineArtPhotoContainer className="fine-art-photo-container">
          <FineArtThree />
          <FineArtCaptionContainer>
            <FineArtTitle>Vanity, Empty Mirror</FineArtTitle>11" x 8"
            <br /> Aged Salt Print
            <br />
            2019
          </FineArtCaptionContainer>
        </FineArtPhotoContainer>
        <FineArtPhotoContainer className="fine-art-photo-container">
          <FineArtFour />
          <FineArtCaptionContainer>
            <FineArtTitle>Vanity, Untitled</FineArtTitle>12" x 10"
            <br /> Aged Salt Print
            <br />
            2019
          </FineArtCaptionContainer>
        </FineArtPhotoContainer>
        <FineArtPhotoContainer className="fine-art-photo-container">
          <FineArtFive />
          <FineArtCaptionContainer>
            <FineArtTitle>Vanity, Seth</FineArtTitle>14" x 11"
            <br /> Aged Salt Print
            <br />
            2019
          </FineArtCaptionContainer>
        </FineArtPhotoContainer>
        <FineArtPhotoContainer className="fine-art-photo-container">
          <FineArtSix />
          <FineArtCaptionContainer>
            <FineArtTitle>Vanity, Self-Portrait</FineArtTitle>14" x 11"
            <br /> Aged Salt Print
            <br />
            2019
          </FineArtCaptionContainer>
        </FineArtPhotoContainer>
        <FineArtPhotoContainer className="fine-art-photo-container">
          <FineArtSeven />
          <FineArtCaptionContainer>
            <FineArtTitle>Vanity, Untitled</FineArtTitle>14" x 14"
            <br /> Aged Salt Print
            <br />
            2019
          </FineArtCaptionContainer>
        </FineArtPhotoContainer>
        <FineArtPhotoContainer className="fine-art-photo-container">
          <FineArtEight />
          <FineArtCaptionContainer>
            <FineArtTitle>Vanity, Jim</FineArtTitle>14" x 11"
            <br /> Aged Salt Print
            <br />
            2019
          </FineArtCaptionContainer>
        </FineArtPhotoContainer>
      </FineArtGalleryContainer>
    );
  }
}

export default FineArtGallery;
