import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

import "@reach/dialog/styles.css"

export default class Lightbox extends Component {
  static propTypes = {
    digitalImages: PropTypes.array.isRequired, // eslint-disable-line
  }

  constructor(props) {
    super(props)

    this.state = {
      showLightbox: false,
      selectedImage: null,
      scrollPosition: null
    }
  }

  render() {
    const { digitalImages } = this.props;
    const { selectedImage, showLightbox } = this.state;
    
    const LightboxContainer = styled.div`
      display: grid;
    `

  
    const PreviewButton = styled.button`
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
    `
    return (
      <Fragment>
        <LightboxContainer 
        id="lightbox-container" 
        className={this.props.name}>
          {digitalImages.map(image => (
            <PreviewButton
              key={
                image.node.frontmatter.galleryImage.childImageSharp.fluid.src
              }
              type="button"
              onClick={() => {
                let lightboxContainer = document.querySelector("#lightbox-container")
                let scrollPosition = lightboxContainer.scrollTop
                this.setState({ showLightbox: true, selectedImage: image, scrollPosition: scrollPosition })
              }}
            >
              <div className="test-container-div" 
              style={{display: this.props.mobileView ? "" : "none", paddingLeft: image.node.frontmatter.mobilePaddingLeft, paddingRight:  image.node.frontmatter.mobilePaddingRight }}
              >
              <Img
                loading="eager"
                style={{width: image.node.frontmatter.mobileWidth}}
                fluid={
                  image.node.frontmatter.galleryImage.childImageSharp.fluid
                }
              />
              </div>
              <Img
                style={{display: this.props.mobileView? "none" : ""}}
                fluid={
                  image.node.frontmatter.galleryImage.childImageSharp.fluid
                }
              />
            </PreviewButton>
          ))}
        </LightboxContainer>
        {showLightbox && (
         
          <div  id={this.props.lightboxId} style={{top: this.state.scrollPosition}}>
            <div  className={this.props.dialogBox}>
              <Img
                fluid={
                  selectedImage.node.frontmatter.galleryImage.childImageSharp
                    .fluid
                }
              />
            </div>
            <div className="caption-div">
              {selectedImage.node.frontmatter.caption}
            </div>
            <button
             className="close-dialog-button"
             className={this.props.closeDialogButton}
              type="button"
              onClick={() => this.setState({ showLightbox: false })}
            >
             
            </button>
            </div>
        )}
      </Fragment>
    )
  }
}