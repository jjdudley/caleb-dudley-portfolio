import React, { Component } from "react"
import "../components/styles.css"
import styled from "styled-components"
// import Layout from "../components/layout"
import ArchiveMenu from "../components/archive-menu"
import HeroLeft from "../components/hero-left"
import MobileNav from "../components/mobile-nav"
import Anime from "react-anime"
import { Link } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0;
  width: 100%;
  height: 100vh;
  justify-content: center;
`
const HeroHeader = styled.div`
  font-family: orpheuspro, serif;
  font-weight: 400;
  font-style: normal;
  font-size: 4.4rem;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`


const HeroCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const HeroLeftContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: rgb(19, 19, 18);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: 20px;
  height: 100vh;
`

let HeaderContainer = styled.div`
  display: flex;
  margin: 0;
  width: 100%;
  justify-content: space-between;
`

let HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
`

let HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
`

let FooterContainer = styled.div`
  display: flex;

  width: 100%;
  justify-content: space-between;
`

let FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
`
let FooterCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

let FooterRight = styled.div`
  display: flex;
  flex-direction: column;
`


const HeroCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const HeroLeftContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: rgb(19, 19, 18);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: 20px;
  height: 100vh;
`

let HeaderContainer = styled.div`
  display: flex;
  margin: 0;
  width: 100%;
  justify-content: space-between;
`

let HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
`

let HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
`


const OpacityFilter = styled.div`
  position: absolute;
  display: flex;
  left: 50%;
  width: 50%;
  height: 100%;
  background-color: rgb(241, 241, 239);
  opacity: 0;
  z-index: 9000;
`

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: orange;
  z-index: 7000;
`

export default class Archive extends Component {
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
      // if the window is desktop size
      if (!this.state.mobileView) {
        // if mobile view is already off, return
        return
      } else {
        this.setState({
          mobileView: false,
        })
      }
    }
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener("resize", this.handleResize.bind(this))
    this.enterAnimation()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this))
  }

  enterAnimation = () => {
    let animationHeader = document.querySelector(".animation-header")
    // let animationHeaderSubPhoto = document.querySelector("#hero-subcaption-photo")
    // let animationHeaderSubAmp = document.querySelector("#hero-subcaption-amp")
    // let animationHeaderSubVideo = document.querySelector("#hero-subcaption-video")
    
    console.log("enter animation")
    console.log(animationHeader)
    animationHeader.innerHTML = animationHeader.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    // animationHeaderSubPhoto.innerHTML = animationHeaderSubPhoto.textContent.replace(/\S/g, "<span class='photo-letter'>$&</span>");
    // animationHeaderSubVideo.innerHTML = animationHeaderSubVideo.textContent.replace(/\S/g, "<span class='video-letter'>$&</span>");
    anime.timeline().add({
      targets:  '.animation-header .letter',
      translateX: [40, 0],
      translatez: 0,
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 800,
      delay: (el, index) =>  30 * index
    })
  }

  exitAnimation = (exit, selectAnimationHeader) => {
    

    console.log(selectAnimationHeader)
    selectAnimationHeader.innerHTML = selectAnimationHeader.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline().add({
      targets:  '.animation-header .letter',
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0,-30],
      opacity: [1,0],
      delay: (el, index) => 30 * index
    })
  }
  

  render() {

    return (
      <LayoutContainer  
      style={{
        backgroundColor: this.state.splashPage ? "none" : "rgb(241, 241, 239)",
      }}>
        <HeroContainer>
          {this.state.mobileView ? (
            <MobileNav heading={"Caleb Dudley"} />
          ) : (
            <HeroLeftContainer
              style={{ display: this.state.mobileView ? "none" : "" }}
            >
              <HeaderContainer>
                <HeaderLeft> 

                <TransitionLink 
                  className="hero-link" 
                  to="/"
                  exit={{
                    length: 1.8,
                    trigger: ({exit, node }) => {
                      console.log("first log below")
                      let animationHeader = node.querySelector(".animation-header")
                      console.log(animationHeader)
                      // let exitImage = node.querySelector(".hero-image-container")
                      // let exitImage = document.querySelector(".hero-gallery-container")
                      
                      // this.exitHeroGallery(exit, exitImage)
                      this.exitAnimation(exit, animationHeader)
                      
                    
                    },
                  }}
                  entry={{
                    delay: 1.8,
                    length: 0,
                  }}
                  >
                    Home
                  </TransitionLink>

                 
                </HeaderLeft>
                <HeaderRight>

                  <TransitionLink 
                  className="hero-link" 
                  to="/archive"
                  exit={{
                    length: 1.8,
                    trigger: ({exit, node }) => {
                      console.log("first log below")
                      let animationHeader = node.querySelector(".animation-header")
                      console.log(animationHeader)
                      // let exitImage = node.querySelector(".hero-image-container")
                      let exitImage = document.querySelector(".hero-gallery-container")
                      
                      this.exitHeroGallery(exit, exitImage)
                      this.exitAnimation(exit, animationHeader)
                      
                    
                    },
                  }}
                  entry={{
                    delay: 1.8,
                    length: 0,
                  }}
                  >
                    Archive
                  </TransitionLink>
                  {/* <Link className="hero-link" to="/archive">
                    Archive
                  </Link> */}


                <TransitionLink 
                  className="hero-link" 
                  to="/fine-art"
                  exit={{
                    length: 1.8,
                    trigger: ({exit, node }) => {
                      console.log("first log below")
                      let animationHeader = node.querySelector(".animation-header")
                      console.log(animationHeader)
                      // let exitImage = node.querySelector(".hero-image-container")
                      let exitImage = document.querySelector(".hero-gallery-container")
                      
                      this.exitHeroGallery(exit, exitImage)
                      this.exitAnimation(exit, animationHeader)
        
                    },
                  }}
                  entry={{
                    delay: 1.8,
                    length: 0,
                  }}
                  >
                    Fine Art
                  </TransitionLink>
                  
                </HeaderRight>
              </HeaderContainer>

              <HeroCenter>
                
                <HeroHeader>
                  <div className="animation-header">ARCHIVE
                  </div>

                </HeroHeader>
              </HeroCenter>
              <FooterContainer>
                <FooterLeft>
                  <a
                    href="https://www.instagram.com/caleb_dudley/"
                    target="_blank"
                    className="hero-link"
                  >
                    Instagram
                  </a>
                  <Link className="hero-link" to="/">Email</Link>
                </FooterLeft>
                <FooterCenter>Brooklyn, NY</FooterCenter>
                <FooterRight>
                  <Link className="hero-link" to="/about">
                    About
                  </Link>
                  <Link className="hero-link" to="/">Contact</Link>
                </FooterRight>
              </FooterContainer>
            </HeroLeftContainer>
          )}
          <ArchiveMenu
            digitalId="archive-digital-link"
            analogId="archive-analog-link"
            videoId="archive-video-link"
            width={this.state.mobileView ? "100% !important" : "50% !important"}
            background={this.state.mobileView ? "" : ""}
            height={this.state.mobileView ? "80%" : "100%"}
          />
          <OpacityFilter className="opacity-filter"/>
        </HeroContainer>
      </LayoutContainer>
    )
  }
}
