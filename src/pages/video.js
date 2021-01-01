import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import "../components/styles.css"
import styled from "styled-components"
import Layout from "../components/layout"
import Videos from "../components/videos"
import MobileNav from "../components/mobile-nav"

// import DigitalGallery from "../components/digital-gallery"
import HeroLeft from "../components/hero-left"

// import Gallery from "@browniebroke/gatsby-image-gallery"
// import "@browniebroke/gatsby-image-gallery/dist/style.css"

const VideoContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  justify-content: start;
 
`

const VideoHeader = styled.div`
  font-family: orpheuspro, serif;
  font-weight: 400;
  font-style: regular;
  font-size: 4.4rem;
  text-transform: uppercase;
  height: 80px;
  display: flex;
  align-items: center;
  
`

const GalleryRight = styled.div`
  display: flex;
  justify-content: center;
  padding: 1%;
`

export default class Video extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mobileView: false,
    }
  }

  handleResize = () => {
    if (window.matchMedia("(max-width: 1000px)").matches) {
      if (this.state.mobileView) {
        return
      } else {
        this.setState({
          mobileView: true,
        })
      }
    } else {
      this.setState({
        mobileView: false,
      })
    }
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener("resize", this.handleResize.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this))
  }
  render() {
    let MobileNavHeaderContainer = styled.div`
      position: sticky;
      top: 10px;
      display: flex;
      margin: 0;
      width: 100%;
      justify-content: space-between;
      padding: 0 10px;
     z-index: 4000;
     
    `

    let MobileNavHeaderLeft = styled.div`
      display: flex;
      flex-direction: column;
      z-index: 2000;
      height: 100%;
      justify-content: center;
      align-items: center;
      margin: 0;
      &:hover {
        cursor: pointer;
      }
    `

    let MobileNavHeaderCenter = styled.div`
      display: flex;
      color: rgb(19, 19, 18);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      text-transform: uppercase;
     
    `

    let MobileNavHeaderRight = styled.div`
      display: flex;
      flex-direction: column;
      z-index: 2000;
      &:hover {
        cursor: pointer;
      }
    `
    let MobileNavFooterContainer = styled.div`
      position: sticky;
      top: 91%;
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 0 10px;
      z-index: 2000;
    `

    let MobileNavFooterLeft = styled.div`
      display: flex;
      flex-direction: column;
      background: transparent;
    `

    let MobileNavFooterCenter = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
    `
    // let MobileNavFooterCenter = styled.div`
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   color: rgb(19, 19, 18);
    // `

    let MobileNavFooterRight = styled.div`
      display: flex;
      flex-direction: column;
    `
    return (
      <Layout>
        <VideoContainer className={ this.state.mobileView ?  "mobile-container" : ""}>
          <MobileNavHeaderContainer style={{display: this.state.mobileView ? "" : "none"}}>
            <MobileNavHeaderLeft>
              <Link className="hero-link-mobile" to="/">
                Home
              </Link>
            </MobileNavHeaderLeft>
            <MobileNavHeaderCenter>VIDEO</MobileNavHeaderCenter>
            <MobileNavHeaderRight>
              <Link className="hero-link-mobile" to="/archive">
                Archive
              </Link>
              <Link className="hero-link-mobile" to="/fine-art">
                Fine Art
              </Link>
            </MobileNavHeaderRight>
          </MobileNavHeaderContainer>
          <MobileNavFooterContainer style={{display: this.state.mobileView ? "" : "none"}}>
            <MobileNavFooterLeft>
              {" "}
              <a
                href="https://www.instagram.com/caleb_dudley/"
                target="_blank"
                className="hero-link-mobile"
              >
                Instagram
              </a>
              <Link className="hero-link-mobile">Email</Link>
            </MobileNavFooterLeft>
            <MobileNavFooterCenter className="hero-link-mobile">Brooklyn, NY</MobileNavFooterCenter>
            <MobileNavFooterRight>
              <Link className="hero-link-mobile" to="/about">
                About
              </Link>
              <Link className="hero-link-mobile">Contact</Link>
            </MobileNavFooterRight>
          </MobileNavFooterContainer>

          {this.state.mobileView ? (
            // <MobileNav heading={""} /> 
            ""
          ) : (
            <HeroLeft style={{ display: this.state.mobileView ? "none" : "" }}>
              <VideoHeader>VIDEO</VideoHeader>
            </HeroLeft>
          )}
          <GalleryRight style={{ width: this.state.mobileView ? "100%" : "50%" }}>
          <Videos
              iframeClass={this.state.mobileView ? "iframe-mobile" : "iframe-desktop"}
              name={
                this.state.mobileView
                  ? "gallery-mobile"
                  : "gallery-desktop"
              }
            />
          </GalleryRight>
          
          
          
        </VideoContainer>
      </Layout>
    )
  }
}
