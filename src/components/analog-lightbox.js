import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
// import BackgroundImage from "gatsby-background-image"
export default class Lightbox extends Component {
  static propTypes = {
    analogImages: PropTypes.array.isRequired, // eslint-disable-line
  }

  constructor(props) {
    super(props)

    this.state = {
      showLightbox: false,
      selectedImage: null,
      scrollPosition: null
    }
  }

//   render() {
//     const { analogImages } = this.props;
//     const { selectedImage, showLightbox } = this.state;
    
//     const LightboxContainer = styled.div`
//       display: grid;
//     `

//     // display: grid;
//     //   grid-template-columns: repeat(3, 1fr);
//     //   grid-auto-rows: 12vw;
//     //   grid-gap: 80px 80px;
//     //   width: 100%;
//     //   padding: 60px;
//     const PreviewButton = styled.button`
//       background: transparent;
//       border: none;
//       padding: 0;
//       margin: 0;
//     `
//     return (
//       <Fragment>
//         <LightboxContainer className={this.props.name}>
//           {analogImages.map(image => (
//             <PreviewButton
//               key={
//                 image.node.frontmatter.galleryImage.childImageSharp.fluid.src
//               }
//               type="button"
//               onClick={() => {
//                 this.setState({ showLightbox: true, selectedImage: image })
//               }}
//             >
//               <Img
//                 fluid={
//                   image.node.frontmatter.galleryImage.childImageSharp.fluid
//                 }
//               />
//             </PreviewButton>
//           ))}
//         </LightboxContainer>
//         {showLightbox && (
//           <Dialog className="dialog-box-container">
//             <div className="dialog-box">
//               <Img
                
//                 fluid={
//                   selectedImage.node.frontmatter.galleryImage.childImageSharp
//                     .fluid
//                 }
//               />
//             </div>
//             <div className="caption-div">
//               {selectedImage.node.frontmatter.caption}
//             </div>
//             <button
//               className="close-dialog-button"
//               type="button"
//               onClick={() => this.setState({ showLightbox: false })}
//             >
              
//             </button>
//           </Dialog>
//         )}
//       </Fragment>
//     )
//   }
// }
render() {
  const { analogImages } = this.props;
  const { selectedImage, showLightbox } = this.state;
  
  const LightboxContainer = styled.div`
    display: grid;
  `

  // display: grid;
  //   grid-template-columns: repeat(3, 1fr);
  //   grid-auto-rows: 12vw;
  //   grid-gap: 80px 80px;
  //   width: 100%;
  //   padding: 60px;
  const PreviewButton = styled.button`
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
  `
  return (
    <Fragment>
      <LightboxContainer id="lightbox-container" className={this.props.name}>
        {analogImages.map(image => (
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
            <div className="analog-photos-container-div" 
            style={{display: this.props.mobileView ? "" : "none"}}
            // style={{paddingLeft: image.node.frontmatter.mobilePaddingLeft, paddingRight: image.node.frontmatter.mobilePaddingRight}}
            >
            <Img
               style={{width: "100%"}}
              fluid={
                image.node.frontmatter.galleryImage.childImageSharp.fluid
              }
            />
            </div>
            <Img
               style={{display: this.props.mobileView ? "none" : ""}}
              fluid={
                image.node.frontmatter.galleryImage.childImageSharp.fluid
              }
            />
            
            
          </PreviewButton>
        ))}
      </LightboxContainer>
      {showLightbox && (
        // <Dialog className="dialog-box-container">
        //   <div className="dialog-box">
        //     <Img
        //       fluid={
        //         selectedImage.node.frontmatter.galleryImage.childImageSharp
        //           .fluid
        //       }
        //     />
        //   </div>
        //   <div className="caption-div">
        //     {selectedImage.node.frontmatter.caption}
        //   </div>
        //   <button
        //    className="close-dialog-button"
        //     type="button"
        //     onClick={() => this.setState({ showLightbox: false })}
        //   >
        //     Close
        //   </button>
        // </Dialog>
        <div id={this.props.lightboxId}  style={{top: this.state.scrollPosition}}>
          <div className={this.props.dialogBox}>
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


