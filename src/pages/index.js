import React, { Component } from "react"
import "../components/styles.css"
import styled from "styled-components"
// import Layout from "../components/layout"

import VideoBg from "reactjs-videobg"
import mp4 from "../videos/caleb.mp4"
// import HeroLeft from "../components/hero-left"
import HeroGallery from "../components/hero-gallery"
import MobileNav from "../components/mobile-nav"
import Anime from "react-anime"
import anime from 'animejs/lib/anime.es.js';
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

const HeroSubcaption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 470px;
  height: 40px;

  font-family: orpheuspro, serif;
  font-weight: 400;
  font-style: italic;
  font-size: 1.5rem;
  font-size: 2.5rem;
`

const OpacityMask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2000;
`
const EnterHereContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  z-index: 7000 !important;
`

const EnterHere = styled.div`
  display: flex;
  font-size: 1.5rem;
  padding: 20px;
  color: rgb(241, 241, 239);
  color: black;
  border: 1px solid black;
  z-index: 9000;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
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

let LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: color 0.3s ease-out;
  &:hover {
    cursor: pointer;
    transition: color 0.2s ease-out;
  }
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

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: orange;
  z-index: 7000;
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

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileView: false,
      splashPage: true,
      animateEnter: true,
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

  enterSite = () => {
    this.setState({
      splashPage: false,
    })
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener("resize", this.handleResize.bind(this))
    this.enterAnimation()

   
    this.enterAnimationPhoto()
    this.enterAnimationAmp()
    this.enterAnimationVideo()
    console.log("index mounting")
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this))
    console.log("index unmounting")
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

  animationLoader = () => {
    this.enterAnimationPhoto()
    this.enterAnimationAmp()
    this.enterAnimationVideo()
  }

  enterAnimationPhoto = () => {
    let animationHeaderSubPhoto = document.querySelector("#hero-subcaption-photo")
    animationHeaderSubPhoto.innerHTML = animationHeaderSubPhoto.textContent.replace(/\S/g, "<span class='photo-letter'>$&</span>");

    anime.timeline().add({
      targets:  '#hero-subcaption-photo .photo-letter',
      
      opacity: [0,1],
      easing: "linear",
      duration: 1100,
      delay: 1200
    })
  }

  enterAnimationAmp = () => {
    
    anime.timeline().add({
      targets:  '#hero-subcaption-amp',
      
      opacity: [0,1],
      easing: "linear",
      duration: 1100,
      delay: 1200
    })
  }

  enterAnimationVideo = () => {
    let animationHeaderSubVideo = document.querySelector("#hero-subcaption-video")
    animationHeaderSubVideo.innerHTML = animationHeaderSubVideo.textContent.replace(/\S/g, "<span class='video-letter'>$&</span>");

    anime.timeline().add({
      targets:  '#hero-subcaption-video .video-letter',
      opacity: [0,1],
      easing: "linear",
      duration: 1100,
      delay: 1200
    })
  }

 

  exitAnimation = (exit, selectAnimationHeader) => {
    // this.setState({ animateEnter: false })

    console.log(selectAnimationHeader)
    selectAnimationHeader.innerHTML = selectAnimationHeader.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    let testCharacters = document.querySelectorAll(".letter")
   
    let testImage = document.querySelector(".hero-gallery-container")
    console.log(testImage)

    anime.timeline().add({
      targets:  '.animation-header .letter',
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0,-30],
      opacity: [1,0],
      delay: (el, index) => 30 * index
    })

    anime.timeline().add({
      targets:  '#hero-subcaption-photo .photo-letter',
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0,-30],
      opacity: [1,0],
      delay: (el, index) => 30 * index
    })

    anime.timeline().add({
      targets:  '#hero-subcaption-amp',
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0,-30],
      opacity: [1,0],
      delay: (el, index) => 30 * index
    })

    anime.timeline().add({
      targets:  '#hero-subcaption-video .video-letter',
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0,-30],
      opacity: [1,0],
      delay: (el, index) => 30 * index
    })
  }

  exitHeroGallery = (exit, item) => {

    return anime.timeline().add({
      targets:  '.opacity-filter',
      duration: 800,
      easing: "linear",
      opacity: 1,
      delay: 800
    })
  }

  render() {
    console.log("INDEX IS RENDERINGGGGGG")
    return (
      <LayoutContainer
        // layoutBackground={this.state.splashPage ? "none" : "rgb(241, 241, 239)"}
        style={{
          backgroundColor: this.state.splashPage ? "none" : "rgb(241, 241, 239)",
        }}
      >
        {/* {this.state.splashPage ? (
          <>
            <EnterHereContainer>
              <EnterHere onClick={this.enterSite}>Enter Here</EnterHere>
            </EnterHereContainer>
            {/* <VideoBg className="hero-video-background">
              <VideoBg.Source src={mp4} type="video/mp4" />
            </VideoBg> */}
        {/* </> */}
        {/* ) : ( */} 
        <HeroContainer>
          {this.state.mobileView ? (
            <MobileNav heading={"Caleb Dudley"} />
          ) : (
            <HeroLeftContainer
              style={{ display: this.state.mobileView ? "none" : "" }}
            >
              <HeaderContainer>
                <HeaderLeft>
                  {/* <TransitionLink
          to="/"
          exit={{
            trigger: () => this.props.animateExit,
            length: 1
          }}
          entry={{
            delay: 0.6
          }}
          >Home</TransitionLink> */}

                  <Link className="hero-link" to="/">
                    Home
                  </Link>
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
                  {/* <Link className="hero-link" to="/fine-art">
                    Fine Art
                  </Link> */}
                </HeaderRight>
              </HeaderContainer>

              <HeroCenter>
                {/* <HeroHeader>CALEB DUDLEY</HeroHeader>
            <HeroSubcaption>
              <h3 className="hero-subcaption">Photo</h3>

              <h3 className="hero-subcaption">&</h3>

              <h3 className="hero-subcaption">Video</h3>
            </HeroSubcaption> */}
                {/* {children} */}
                <HeroHeader>
                  <div className="animation-header">CALEB DUDLEY
                  </div>



                  {/* <Anime
                    easing={
                      this.state.animateEnter ? "easeInExpo" : "easeOutExpo"
                    }
                    duration={1100}
                    translateX={this.state.animateEnter ? [40, 0] : [0, -30]}
                    translateZ="0"
                    opacity={this.state.animateEnter ? [0, 1] : [1, 0]}
                    delay={(el, index) => 30 * index}
                  >
                    <Anime
                      easing={
                        this.state.animateEnter ? "easeInExpo" : "easeOutExpo"
                      }
                      duration={1100}
                      translateX={this.state.animateEnter ? [40, 0] : [0, -30]}
                      translateZ="0"
                      opacity={this.state.animateEnter ? [0, 1] : [1, 0]}
                      delay={(el, index) => 30 * index}
                    >
                      C
                    </Anime>
                    <Anime
                      easing={
                        this.state.animateEnter ? "easeInExpo" : "easeOutExpo"
                      }
                      duration={1100}
                      translateX={this.state.animateEnter ? [40, 0] : [0, -30]}
                      translateZ="0"
                      opacity={this.state.animateEnter ? [0, 1] : [1, 0]}
                      delay={(el, index) => 30 * index}
                    >
                      A
                    </Anime>
                    <Anime
                      easing={
                        this.state.animateEnter ? "easeInExpo" : "easeOutExpo"
                      }
                      duration={1100}
                      translateX={this.state.animateEnter ? [40, 0] : [0, -30]}
                      translateZ="0"
                      opacity={this.state.animateEnter ? [0, 1] : [1, 0]}
                      delay={(el, index) => 30 * index}
                    >
                      L
                    </Anime>
                    <Anime
                      easing={
                        this.state.animateEnter ? "easeInExpo" : "easeOutExpo"
                      }
                      duration={1100}
                      translateX={this.state.animateEnter ? [40, 0] : [0, -30]}
                      translateZ="0"
                      opacity={this.state.animateEnter ? [0, 1] : [1, 0]}
                      delay={(el, index) => 30 * index}
                    >
                      E
                    </Anime>
                    <Anime
                      easing={
                        this.state.animateEnter ? "easeInExpo" : "easeOutExpo"
                      }
                      duration={1100}
                      translateX={this.state.animateEnter ? [40, 0] : [0, -30]}
                      translateZ="0"
                      opacity={this.state.animateEnter ? [0, 1] : [1, 0]}
                      delay={(el, index) => 30 * index}
                    >
                      B
                    </Anime>
                    <Anime
                      easing={
                        this.state.animateEnter ? "easeInExpo" : "easeOutExpo"
                      }
                      duration={1100}
                      translateX={this.state.animateEnter ? [40, 0] : [0, -30]}
                      translateZ="0"
                      opacity={this.state.animateEnter ? [0, 1] : [1, 0]}
                      delay={(el, index) => 30 * index}
                    >
                      &nbsp;
                    </Anime>
                    <Anime
                      easing={
                        this.state.animateEnter ? "easeInExpo" : "easeOutExpo"
                      }
                      duration={1100}
                      translateX={this.state.animateEnter ? [40, 0] : [0, -30]}
                      translateZ="0"
                      opacity={this.state.animateEnter ? [0, 1] : [1, 0]}
                      delay={(el, index) => 30 * index}
                    >
                      D
                    </Anime>
                    <Anime
                      easing={
                        this.state.animateEnter ? "easeInExpo" : "easeOutExpo"
                      }
                      duration={1100}
                      translateX={this.state.animateEnter ? [40, 0] : [0, -30]}
                      translateZ="0"
                      opacity={this.state.animateEnter ? [0, 1] : [1, 0]}
                      delay={(el, index) => 30 * index}
                    >
                      U
                    </Anime>
                    <Anime
                      easing={
                        this.state.animateEnter ? "easeInExpo" : "easeOutExpo"
                      }
                      duration={1100}
                      translateX={this.state.animateEnter ? [40, 0] : [0, -30]}
                      translateZ="0"
                      opacity={this.state.animateEnter ? [0, 1] : [1, 0]}
                      delay={(el, index) => 30 * index}
                    >
                      D
                    </Anime>
                    <Anime
                      easing={
                        this.state.animateEnter ? "easeInExpo" : "easeOutExpo"
                      }
                      duration={1100}
                      translateX={this.state.animateEnter ? [40, 0] : [0, -30]}
                      translateZ="0"
                      opacity={this.state.animateEnter ? [0, 1] : [1, 0]}
                      delay={(el, index) => 30 * index}
                    >
                      L
                    </Anime>
                    <Anime
                      easing={
                        this.state.animateEnter ? "easeInExpo" : "easeOutExpo"
                      }
                      duration={1200}
                      translateX={this.state.animateEnter ? [40, 0] : [0, -30]}
                      translateZ="0"
                      opacity={this.state.animateEnter ? [0, 1] : [1, 0]}
                      delay={(el, index) => 30 * index}
                    >
                      E
                    </Anime>
                    <Anime
                      easing={
                        this.state.animateEnter ? "easeInExpo" : "easeOutExpo"
                      }
                      duration={1100}
                      translateX={this.state.animateEnter ? [40, 0] : [0, -30]}
                      translateZ="0"
                      opacity={this.state.animateEnter ? [0, 1] : [1, 0]}
                      delay={(el, index) => 30 * index}
                    >
                      Y
                    </Anime>
                  </Anime> */}


                </HeroHeader>
                <HeroSubcaption>
                  
                
                   <h3 id="hero-subcaption-photo" className="hero-subcaption">
                    
                      Photo
                   
                  </h3> 
                  
                    
                   <h3 id="hero-subcaption-amp" className="hero-subcaption">
                    
                      &
                 
                  </h3> 
                    
                 
                    
                   <h3 id="hero-subcaption-video" className="hero-subcaption">
                    
                      Video
                   
                  </h3> 
                </HeroSubcaption>
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

            // <HeroLeft

            //   style={{ display: this.state.mobileView ? "none" : "" }}
            // >
            //   <HeroHeader>
            //     <Anime
            //     easing={ this.state.animateEnter ? "easeInExpo" : "easeOutExpo"}
            //     duration={1100}
            //     translateX={ this.state.animateEnter ? [40,0] : [0,-30]}
            //     translateZ="0"
            //     opacity={ this.state.animateEnter ? [0,1] : [1,0]}
            //     delay={(el, index) =>  30 * index}
            //     >
            //     <Anime easing={ this.state.animateEnter ? "easeInExpo" : "easeOutExpo"}
            //     duration={1100}
            //     translateX={ this.state.animateEnter ? [40,0] : [0,-30]}
            //     translateZ="0"
            //     opacity={ this.state.animateEnter ? [0,1] : [1,0]}
            //     delay={(el, index) =>  30 * index}
            //     >
            //       C
            //     </Anime>
            //     <Anime easing={ this.state.animateEnter ? "easeInExpo" : "easeOutExpo"}
            //     duration={1100}
            //     translateX={ this.state.animateEnter ? [40,0] : [0,-30]}
            //     translateZ="0"
            //     opacity={ this.state.animateEnter ? [0,1] : [1,0]}
            //     delay={(el, index) =>  30 * index}
            //     >
            //       A
            //     </Anime>
            //     <Anime easing={ this.state.animateEnter ? "easeInExpo" : "easeOutExpo"}
            //     duration={1100}
            //     translateX={ this.state.animateEnter ? [40,0] : [0,-30]}
            //     translateZ="0"
            //     opacity={ this.state.animateEnter ? [0,1] : [1,0]}
            //     delay={(el, index) => 30 * index}
            //     >
            //       L
            //     </Anime>
            //     <Anime easing={ this.state.animateEnter ? "easeInExpo" : "easeOutExpo"}
            //     duration={1100}
            //     translateX={ this.state.animateEnter ? [40,0] : [0,-30]}
            //     translateZ="0"
            //     opacity={ this.state.animateEnter ? [0,1] : [1,0]}
            //     delay={(el, index) =>  30 * index}
            //     >
            //       E
            //     </Anime>
            //     <Anime easing={ this.state.animateEnter ? "easeInExpo" : "easeOutExpo"}
            //     duration={1100}
            //     translateX={ this.state.animateEnter ? [40,0] : [0,-30]}
            //     translateZ="0"
            //     opacity={ this.state.animateEnter ? [0,1] : [1,0]}
            //     delay={(el, index) =>  30 * index}
            //     >
            //       B
            //     </Anime>
            //     <Anime easing={ this.state.animateEnter ? "easeInExpo" : "easeOutExpo"}
            //     duration={1100}
            //     translateX={ this.state.animateEnter ? [40,0] : [0,-30]}
            //     translateZ="0"
            //     opacity={ this.state.animateEnter ? [0,1] : [1,0]}
            //     delay={(el, index) =>  30 * index}
            //     >
            //     &nbsp;
            //     </Anime>
            //     <Anime easing={ this.state.animateEnter ? "easeInExpo" : "easeOutExpo"}
            //     duration={1100}
            //     translateX={ this.state.animateEnter ? [40,0] : [0,-30]}
            //     translateZ="0"
            //     opacity={ this.state.animateEnter ? [0,1] : [1,0]}
            //     delay={(el, index) =>  30 * index}
            //     >
            //       D
            //     </Anime>
            //     <Anime easing={ this.state.animateEnter ? "easeInExpo" : "easeOutExpo"}
            //     duration={1100}
            //     translateX={ this.state.animateEnter ? [40,0] : [0,-30]}
            //     translateZ="0"
            //     opacity={ this.state.animateEnter ? [0,1] : [1,0]}
            //     delay={(el, index) =>  30 * index}
            //     >
            //       U
            //     </Anime>
            //     <Anime easing={ this.state.animateEnter ? "easeInExpo" : "easeOutExpo"}
            //     duration={1100}
            //     translateX={ this.state.animateEnter ? [40,0] : [0,-30]}
            //     translateZ="0"
            //     opacity={ this.state.animateEnter ? [0,1] : [1,0]}
            //     delay={(el, index) =>  30 * index}
            //     >
            //       D
            //     </Anime>
            //     <Anime easing={ this.state.animateEnter ? "easeInExpo" : "easeOutExpo"}
            //     duration={1100}
            //     translateX={ this.state.animateEnter ? [40,0] : [0,-30]}
            //     translateZ="0"
            //     opacity={ this.state.animateEnter ? [0,1] : [1,0]}
            //     delay={(el, index) =>  30 * index}
            //     >
            //       L
            //     </Anime>
            //     <Anime easing={ this.state.animateEnter ? "easeInExpo" : "easeOutExpo"}
            //     duration={1200}
            //     translateX={ this.state.animateEnter ? [40,0] : [0,-30]}
            //     translateZ="0"
            //     opacity={ this.state.animateEnter ? [0,1] : [1,0]}
            //     delay={(el, index) =>  30 * index}
            //     >
            //       E
            //     </Anime>
            //     <Anime easing={ this.state.animateEnter ? "easeInExpo" : "easeOutExpo"}
            //     duration={1100}
            //     translateX={ this.state.animateEnter ? [40,0] : [0,-30]}
            //     translateZ="0"
            //     opacity={ this.state.animateEnter ? [0,1] : [1,0]}
            //     delay={(el, index) =>  30 * index}
            //     >
            //       Y
            //     </Anime>
            //     </Anime>
            //   </HeroHeader>
            //   <HeroSubcaption>
            //     <h3 className="hero-subcaption">
            //       <Anime
            //       opacity={[0,1]}
            //       translateX={["8rem",0]}
            //       easing="easeInExpo"
            //       duration="600"
            //       offset="-=300"
            //       delay={1800}
            //       >
            //         Photo
            //         </Anime>
            //       </h3>

            //     <h3 className="hero-subcaption">
            //       <Anime
            //       opacity={[0, 1]}
            //       scaleY={[0.5, 1]}
            //       easing="easeInExpo"
            //       duration="500"
            //       offset="-=600"
            //       delay={1600}
            //       >
            //       &</Anime></h3>

            //     <h3 className="hero-subcaption" >
            //       <Anime
            //       opacity={[0,1]}
            //       translateX={["-8rem", 0]}
            //       easing="easeInExpo"
            //       duration={600}
            //       offset="-=600"
            //       delay={1800}
            //       >Video</Anime></h3>
            //   </HeroSubcaption>
            // </HeroLeft>
          )}

          <HeroGallery
            heroGalleryContainer="hero-gallery-container"
            width={this.state.mobileView ? "100% !important" : "50% !important"}
            background={this.state.mobileView ? "none" : ""}
          />
          <OpacityFilter className="opacity-filter"/>
        </HeroContainer>
        {/* )} */}
      </LayoutContainer>
    )
  }
}
