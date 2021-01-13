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
  line-height: 1rem;
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

    this.state = {
      scrollPosition: null,
      fineArtOneDisplayed: false,
      fineArtTwoDisplayed: false,
      fineArtThreeDisplayed: false,
      fineArtFourDisplayed: false,
      fineArtFiveDisplayed: false,
      fineArtSixDisplayed: false,
      fineArtSevenDisplayed: false,
      fineArtEightDisplayed: false,
    };
  }
  render() {
    return (
      <FineArtGalleryContainer className={this.props.name}>
        <FineArtPhotoContainer
          id="fine-art-container-one"
          className="fine-art-photo-container"
          onClick={() => {
            let lightboxContainer = document.querySelector(
              "#fine-art-container-one"
            );
            let scrollPosition = lightboxContainer.scrollTop;
            this.setState({
              showLightbox: true,
              scrollPosition: scrollPosition,
              fineArtOneDisplayed: true,
              
          
            });
          }}
        >
          <FineArtOne />
          <FineArtCaptionContainer>
            <FineArtTitle>Vanity, Church</FineArtTitle>11" x 9"
            <br /> Aged Salt Print
            <br />
            2019
          </FineArtCaptionContainer>
        </FineArtPhotoContainer>

        <div className={this.props.fineArtLightbox} style={{display: this.state.fineArtOneDisplayed ? "" : "none", top: this.state.scrollPosition}}>
        <div className={this.props.fineArtLightboxImage}>
          <FineArtOne />
          </div>
            <button className={this.props.fineArtLightboxButton} style={{top: this.state.scrollPosition}} type="button" onClick={()=> this.setState({fineArtOneDisplayed: false})}></button>
          </div>


        <FineArtPhotoContainer
          id="fine-art-container-two"
          className="fine-art-photo-container"
          onClick={() => {
            let lightboxContainer = document.querySelector(
              "#fine-art-container-two"
            );
            let scrollPosition = lightboxContainer.scrollTop;
            this.setState({
              showLightbox: true,
              
              scrollPosition: scrollPosition,
              fineArtTwoDisplayed: true
            });
          }}
        >
          <FineArtTwo />
          <FineArtCaptionContainer>
            <FineArtTitle>Vanity, Jim 01</FineArtTitle>14" x 11"
            <br /> Aged Salt Print
            <br />
            2019
          </FineArtCaptionContainer>
        </FineArtPhotoContainer>

        <div className={this.props.fineArtLightbox} style={{display: this.state.fineArtTwoDisplayed ? "" : "none", top: this.state.scrollPosition}}>
        <div className={this.props.fineArtLightboxImage}>
          <FineArtTwo />
          </div>
            <button className={this.props.fineArtLightboxButton} style={{top: this.state.scrollPosition}} type="button" onClick={()=> this.setState({fineArtTwoDisplayed: false})}></button>
          </div>
        <FineArtPhotoContainer
          id="fine-art-container-three"
          className="fine-art-photo-container"
          onClick={() => {
            let lightboxContainer = document.querySelector(
              "#fine-art-container-three"
            );
            let scrollPosition = lightboxContainer.scrollTop;
            this.setState({
              showLightbox: true,
             
              scrollPosition: scrollPosition,
              fineArtThreeDisplayed: true
            });
          }}
        >
          <FineArtThree />
          <FineArtCaptionContainer>
            <FineArtTitle>Vanity, Empty Mirror</FineArtTitle>11" x 8"
            <br /> Aged Salt Print
            <br />
            2019
          </FineArtCaptionContainer>
        </FineArtPhotoContainer>
        <div className={this.props.fineArtLightbox} style={{display: this.state.fineArtThreeDisplayed ? "" : "none", top: this.state.scrollPosition}}>
        <div className={this.props.fineArtLightboxImage}>
          <FineArtThree />
          </div>
            <button className={this.props.fineArtLightboxButton} style={{top: this.state.scrollPosition}} type="button" onClick={()=> this.setState({fineArtThreeDisplayed: false})}></button>
          </div>
        <FineArtPhotoContainer
          id="fine-art-container-four"
          className="fine-art-photo-container"
          onClick={() => {
            let lightboxContainer = document.querySelector(
              "#fine-art-container-four"
            );
            let scrollPosition = lightboxContainer.scrollTop;
            this.setState({
              showLightbox: true,
             
              scrollPosition: scrollPosition,
              fineArtFourDisplayed: true
            });
          }}
        >
          <FineArtFour />
          <FineArtCaptionContainer>
            <FineArtTitle>Vanity, Untitled</FineArtTitle>12" x 10"
            <br /> Aged Salt Print
            <br />
            2019
          </FineArtCaptionContainer>
        </FineArtPhotoContainer>

        <div className={this.props.fineArtLightbox} style={{display: this.state.fineArtFourDisplayed ? "" : "none", top: this.state.scrollPosition}}>
        <div className={this.props.fineArtLightboxImage}>
          <FineArtFour />
          </div>
            <button className={this.props.fineArtLightboxButton} type="button" onClick={()=> this.setState({fineArtFourDisplayed: false})}></button>
          </div>


        <FineArtPhotoContainer
          id="fine-art-container-five"
          className="fine-art-photo-container"
          onClick={() => {
            let lightboxContainer = document.querySelector(
              "#fine-art-container-five"
            );
            let scrollPosition = lightboxContainer.scrollTop;
            this.setState({
              showLightbox: true,
           
              scrollPosition: scrollPosition,
              fineArtFiveDisplayed: true
            });
          }}
        >
          <FineArtFive />
          <FineArtCaptionContainer>
            <FineArtTitle>Vanity, Seth</FineArtTitle>14" x 11"
            <br /> Aged Salt Print
            <br />
            2019
          </FineArtCaptionContainer>
        </FineArtPhotoContainer>

        <div className={this.props.fineArtLightbox} style={{display: this.state.fineArtFiveDisplayed ? "" : "none", top: this.state.scrollPosition}}>
        <div className={this.props.fineArtLightboxImage}>
          <FineArtFive />
          </div>
            <button className={this.props.fineArtLightboxButton} type="button" onClick={()=> this.setState({fineArtFiveDisplayed: false})}></button>
          </div>


        <FineArtPhotoContainer
          id="fine-art-container-six"
          className="fine-art-photo-container"
          onClick={() => {
            let lightboxContainer = document.querySelector(
              "#fine-art-container-six"
            );
            let scrollPosition = lightboxContainer.scrollTop;
            this.setState({
              showLightbox: true,
            
              scrollPosition: scrollPosition,
              fineArtSixDisplayed: true
            });
          }}
        >
          <FineArtSix />
          <FineArtCaptionContainer>
            <FineArtTitle>Vanity, Self-Portrait</FineArtTitle>14" x 11"
            <br /> Aged Salt Print
            <br />
            2019
          </FineArtCaptionContainer>
        </FineArtPhotoContainer>

        <div className={this.props.fineArtLightbox} style={{display: this.state.fineArtSixDisplayed ? "" : "none", top: this.state.scrollPosition}}>
        <div className={this.props.fineArtLightboxImage}>
          <FineArtSix />
          </div>
            <button className={this.props.fineArtLightboxButton} type="button" onClick={()=> this.setState({fineArtSixDisplayed: false})}></button>
          </div>


        <FineArtPhotoContainer
          id="fine-art-container-seven"
          className="fine-art-photo-container"
          onClick={() => {
            let lightboxContainer = document.querySelector(
              "#fine-art-container-seven"
            );
            let scrollPosition = lightboxContainer.scrollTop;
            this.setState({
              showLightbox: true,
             
              scrollPosition: scrollPosition,
              fineArtSevenDisplayed: true
            });
          }}
        >
          <FineArtSeven />
          <FineArtCaptionContainer>
            <FineArtTitle>Vanity, Untitled</FineArtTitle>14" x 14"
            <br /> Aged Salt Print
            <br />
            2019
          </FineArtCaptionContainer>
        </FineArtPhotoContainer>

        <div className={this.props.fineArtLightbox} style={{display: this.state.fineArtSevenDisplayed ? "" : "none", top: this.state.scrollPosition}}>
        <div className={this.props.fineArtLightboxImage}>
          <FineArtSeven />
          </div>
            <button className={this.props.fineArtLightboxButton} type="button" onClick={()=> this.setState({fineArtSevenDisplayed: false})}></button>
          </div>


        <FineArtPhotoContainer
          id="fine-art-container-eight"
          className="fine-art-photo-container"
          onClick={() => {
            let lightboxContainer = document.querySelector(
              "#fine-art-container-eight"
            );
            let scrollPosition = lightboxContainer.scrollTop;
            this.setState({
              showLightbox: true,
             
              scrollPosition: scrollPosition,
              fineArtEightDisplayed: true
            });
          }}
        >
          <FineArtEight />
          <FineArtCaptionContainer>
            <FineArtTitle>Vanity, Jim</FineArtTitle>14" x 11"
            <br /> Aged Salt Print
            <br />
            2019
          </FineArtCaptionContainer>
        </FineArtPhotoContainer>
        <div className={this.props.fineArtLightbox} style={{display: this.state.fineArtEightDisplayed ? "" : "none", top: this.state.scrollPosition}}>
          <div className={this.props.fineArtLightboxImage}>
          <FineArtEight />
          </div>
            
            <button className={this.props.fineArtLightboxButton} type="button" onClick={()=> this.setState({fineArtEightDisplayed: false})}></button>
          </div>
      </FineArtGalleryContainer>
    );
  }
}

export default FineArtGallery;
