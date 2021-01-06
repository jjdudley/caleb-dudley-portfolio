import React, { Component } from "react";
import "../components/styles.css";
import styled from "styled-components";
// import Layout from "../components/layout"

// import VideoBg from "reactjs-videobg"

// import HeroLeft from "../components/hero-left"
import HeroGallery from "../components/hero-gallery";
import MobileNav from "../components/mobile-nav";
import Anime from "react-anime";
import anime from "animejs/lib/anime.es.js";
import { Link } from "gatsby";
import TransitionLink from "gatsby-plugin-transition-link";

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
const HeroHeader = styled.div`
  font-family: orpheuspro, serif;
  font-weight: 400;
  font-style: normal;
  font-size: 4.4rem;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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
`;

const MobileHeroSubcaption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
  
  height: 22px;
  font-family: orpheuspro, serif;
  font-weight: 400;
  font-style: italic;
  font-size: 1.5rem;
  font-size: 16px;
  
`;


const HeroCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const HeroLeftContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: rgb(19, 19, 18);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: 20px;
  height: 100%;
`;

let HeaderContainer = styled.div`
  display: flex;
  margin: 0;
  width: 100%;
  justify-content: space-between;
`;

let HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

let HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
`;

let LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: color 0.3s ease-out;
  &:hover {
    cursor: pointer;
    transition: color 0.2s ease-out;
  }
`;
let FooterContainer = styled.div`
  display: flex;

  width: 100%;
  justify-content: space-between;
`;

let FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
let FooterCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

let FooterRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  z-index: 7000;
`;

const OpacityFilter = styled.div`
  position: absolute;
  display: flex;
  left: 50%;
  width: 50%;
  height: 100%;
  background-color: rgb(241, 241, 239);
  opacity: 0;
  z-index: 9000;
`;

let MobileNavHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  margin: 0;
  width: 100%;
  justify-content: space-between;
  
  margin-top: 10px;
  z-index: 9000;
`;

let MobileNavHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  z-index: 2000;
  height: 100%;
  width: 100px;
  justify-content: center;
  margin: 0;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

let MobileNavHeaderCenter = styled.div`
  position: absolute;
  top: 6px;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  color: rgb(19, 19, 18);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  
  margin: 0;

`;

let MobileNavHeaderRight = styled.div`
  display: flex;
  width: 100px;
  flex-direction: column;
  align-items: flex-end;
  z-index: 2000;
 margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

let MobileNavFooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;

  padding: 0 10px;
  margin-bottom: 10px;
  z-index: 9000;
`;

let MobileNavFooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  align-items: flex-start;
  background: transparent;
`;

let MobileNavFooterCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

let MobileNavFooterRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  align-items: flex-end;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileView: false,
      splashPage: true,
      animateEnter: true
    };
  }

  handleResize = () => {
    if (window.matchMedia("(max-width: 1000px)").matches) {
      if (this.state.mobileView) {
        return;
      } else {
        this.setState({
          mobileView: true
        });
      }
    } else {
      // if the window is desktop size
      if (!this.state.mobileView) {
        // if mobile view is already off, return
        return;
      } else {
        this.setState({
          mobileView: false
        });
      }
    }
  };

  enterSite = () => {
    this.setState({
      splashPage: false
    });
  };

  async componentDidMount() {
    console.log("index mounting");

    await this.handleResize();
    window.addEventListener("resize", this.handleResize.bind(this));
    if (!this.state.mobileView) {
      this.enterAnimation();
 
    } else {
      this.mobileEnterAnimation();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
    console.log("index unmounting");
  }

  enterAnimation = () => {
    let animationHeader = document.querySelector(".animation-header");
  
    let animationHeaderSubPhoto = document.querySelector(
      "#hero-subcaption-photo"
    );

    let animationHeaderSubVideo = document.querySelector(
      "#hero-subcaption-video"
    );

    animationHeader.innerHTML = animationHeader.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    animationHeaderSubPhoto.innerHTML = animationHeaderSubPhoto.textContent.replace(
      /\S/g,
      "<span class='photo-letter'>$&</span>"
    );

    animationHeaderSubVideo.innerHTML = animationHeaderSubVideo.textContent.replace(
      /\S/g,
      "<span class='video-letter'>$&</span>"
    );
 
    anime.timeline().add({
      targets: ".animation-header .letter",
      translateX: [40, 0],
      translatez: 0,
      opacity: [0, 1],
      easing: "easeInExpo",
      duration: 800,
      delay: (el, index) => 30 * index
    });

    anime.timeline().add({
      targets: "#hero-subcaption-photo .photo-letter",
      opacity: [0, 1],
      easing: "linear",
      duration: 1100,
      delay: 1200
    });

    anime.timeline().add({
      targets: "#hero-subcaption-amp",
      opacity: [0, 1],
      easing: "linear",
      duration: 1100,
      delay: 1200
    });

    anime.timeline().add({
      targets: "#hero-subcaption-video .video-letter",
      opacity: [0, 1],
      easing: "linear",
      duration: 1100,
      delay: 1200
    });
  };





  mobileEnterAnimation = () => {
    let animationHeader = document.querySelector(".landing-animation-header");
  
    let animationHeaderSubPhoto = document.querySelector(
      "#mobile-hero-subcaption-photo"
    );

    let animationHeaderSubVideo = document.querySelector(
      "#mobile-hero-subcaption-video"
    );

    animationHeader.innerHTML = animationHeader.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    
    animationHeaderSubPhoto.innerHTML = animationHeaderSubPhoto.textContent.replace(
      /\S/g,
      "<span class='photo-letter'>$&</span>"
    );

    animationHeaderSubVideo.innerHTML = animationHeaderSubVideo.textContent.replace(
      /\S/g,
      "<span class='video-letter'>$&</span>"
    );

    anime.timeline().add({
      targets: ".landing-animation-header .letter",
      translateX: [40, 0],
      translatez: 0,
      opacity: [0, 1],
      easing: "easeInExpo",
      duration: 800,
      delay: (el, index) => 30 * index
    });

    anime.timeline().add({
      targets: "#mobile-hero-subcaption-photo .photo-letter",

      opacity: [0, 1],
      easing: "linear",
      duration: 1100,
      delay: 1200
    });

    anime.timeline().add({
      targets: "#mobile-hero-subcaption-amp",
      opacity: [0, 1],
      easing: "linear",
      duration: 1100,
      delay: 1200
    });

    anime.timeline().add({
      targets: "#mobile-hero-subcaption-video .video-letter",
      opacity: [0, 1],
      easing: "linear",
      duration: 1100,
      delay: 1200
    });

  };




  exitAnimation = (exit, selectAnimationHeader) => {
    // this.setState({ animateEnter: false })

    console.log(selectAnimationHeader);
    selectAnimationHeader.innerHTML = selectAnimationHeader.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    let testCharacters = document.querySelectorAll(".letter");

    let testImage = document.querySelector(".hero-gallery-container");
    console.log(testImage);

    anime.timeline().add({
      targets: ".animation-header .letter",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });

    anime.timeline().add({
      targets: "#hero-subcaption-photo .photo-letter",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });

    anime.timeline().add({
      targets: "#hero-subcaption-amp",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });

    anime.timeline().add({
      targets: "#hero-subcaption-video .video-letter",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });
  };

  mobileExitAnimation = (exit, selectAnimationHeader) => {
    // this.setState({ animateEnter: false })

    console.log(selectAnimationHeader);
    selectAnimationHeader.innerHTML = selectAnimationHeader.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    let testCharacters = document.querySelectorAll(".letter");

    let testImage = document.querySelector(".hero-gallery-container");
    console.log(testImage);

    anime.timeline().add({
      targets: ".landing-animation-header .letter",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });

    anime.timeline().add({
      targets: "#mobile-hero-subcaption-photo .photo-letter",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });

    anime.timeline().add({
      targets: "#mobile-hero-subcaption-amp",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });

    anime.timeline().add({
      targets: "#mobile-hero-subcaption-video .video-letter",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });

    anime.timeline().add({
      targets: ".hero-opacity-wrapper-mobile",
      duration: 800,
      easing: "linear",
      opacity: 0,
      delay: 0,
    });
  };


  exitHeroGallery = (exit, item) => {
    // return anime.timeline().add({
    //   targets: ".opacity-filter",
    //   duration: 800,
    //   easing: "linear",
    //   opacity: 1,
    //   delay: 800
    // });
  };

  render() {
    console.log("INDEX IS RENDERINGGGGGG");
    return (
      <LayoutContainer
        // layoutBackground={this.state.splashPage ? "none" : "rgb(241, 241, 239)"}
        style={{
          backgroundColor: this.state.splashPage ? "none" : "rgb(241, 241, 239)"
        }}
        className={
          this.state.mobileView ? "home-layout-container-mobile" : ""
        }
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

          <MobileNavHeaderContainer style={{display: this.state.mobileView ? "" : "none"}}>
            <MobileNavHeaderLeft>
            <TransitionLink
                    className="hero-link-mobile"
                    to="/"
                    exit={{
                      length: 2.2,
                      trigger: ({ exit, node }) => {
                        let animationHeader = node.querySelector(".landing-animation-header");
                        this.mobileExitAnimation(exit, animationHeader);
                      }
                    }}
                    entry={{
                      delay: 2.2,
                      length: 0
                    }}
                  >
                    Home
                  </TransitionLink>
            </MobileNavHeaderLeft>
            <MobileNavHeaderCenter>
              <div className="landing-animation-header">CALEB&nbsp;DUDLEY</div>
            <MobileHeroSubcaption>
                  <h3 id="mobile-hero-subcaption-photo" className="mobile-hero-subcaption">
                    Photo
                  </h3>

                  <h3 id="mobile-hero-subcaption-amp" className="mobile-hero-subcaption">
                    &
                  </h3>

                  <h3 id="mobile-hero-subcaption-video" className="mobile-hero-subcaption">
                    Video
                  </h3>
                </MobileHeroSubcaption></MobileNavHeaderCenter>
            <MobileNavHeaderRight>
            <TransitionLink
                    className="hero-link-mobile"
                    to="/archive"
                    exit={{
                      length: 1.8,
                      trigger: ({ exit, node }) => {
                        let animationHeader = node.querySelector(".landing-animation-header");
                        this.mobileExitAnimation(exit, animationHeader);
                      }
                    }}
                    entry={{
                      delay: 1.8,
                      length: 0
                    }}
                  >
                    Archive
                  </TransitionLink>
                  <TransitionLink
                    className="hero-link-mobile"
                    to="/fine-art"
                    exit={{
                      length: 1.8,
                      trigger: ({ exit, node }) => {
                        let animationHeader = node.querySelector(".landing-animation-header");
                        this.mobileExitAnimation(exit, animationHeader);
                      }
                    }}
                    entry={{
                      delay: 1.8,
                      length: 0
                    }}
                  >
                    Fine Art
                  </TransitionLink>
            </MobileNavHeaderRight>
          </MobileNavHeaderContainer>
          
        <HeroContainer>
          {this.state.mobileView ? (
            // <MobileNav heading={"Caleb Dudley"} />
            ""
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
                      trigger: ({ exit, node }) => {
                        console.log("first log below");
                        let animationHeader = node.querySelector(
                          ".animation-header"
                        );
                        console.log(animationHeader);
                        // let exitImage = node.querySelector(".hero-image-container")
                        let exitImage = document.querySelector(
                          ".hero-gallery-container"
                        );

                        this.exitHeroGallery(exit, exitImage);
                        this.exitAnimation(exit, animationHeader);
                      }
                    }}
                    entry={{
                      delay: 1.8,
                      length: 0
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
                      trigger: ({ exit, node }) => {
                        console.log("first log below");
                        let animationHeader = node.querySelector(
                          ".animation-header"
                        );
                        console.log(animationHeader);
                        // let exitImage = node.querySelector(".hero-image-container")
                        let exitImage = document.querySelector(
                          ".hero-gallery-container"
                        );

                        this.exitHeroGallery(exit, exitImage);
                        this.exitAnimation(exit, animationHeader);
                      }
                    }}
                    entry={{
                      delay: 1.8,
                      length: 0
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
                  <div className="animation-header">CALEB DUDLEY</div>
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
                  <Link className="hero-link" to="/">
                    Email
                  </Link>
                </FooterLeft>
                <FooterCenter>Brooklyn, NY</FooterCenter>
                <FooterRight>
                  <TransitionLink
                    className="hero-link"
                    to="/about"
                    exit={{
                      length: 1.8,
                      trigger: ({ exit, node }) => {
                        let animationHeader = node.querySelector(
                          ".animation-header"
                        );
                        this.exitAnimation(exit, animationHeader);
                      }
                    }}
                    entry={{
                      delay: 1.8,
                      length: 0
                    }}
                  >
                    About
                  </TransitionLink>

                  <Link className="hero-link" to="/">
                    Contact
                  </Link>
                </FooterRight>
              </FooterContainer>
            </HeroLeftContainer>
          )}
          <div className={this.state.mobileView ? "hero-opacity-wrapper-mobile" : "hero-opacity-wrapper-desktop"} >
          <HeroGallery
            position={this.state.mobileView ? "fixed" : "relative"}
            heroImageContainerClass={this.state.mobileView ? "hero-image-mobile" : "hero-image-desktop"}
            heroGalleryContainer="hero-gallery-container"
            width={this.state.mobileView ? "100%" : "100%"}
            height={this.state.mobileView ? "100vh" : "100%"}
          />
          </div>
          
          {/* <OpacityFilter className="opacity-filter" /> */}
        </HeroContainer>
        {/* )} */}

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
            <TransitionLink
                    className="hero-link-mobile"
                    to="/about"
                    exit={{
                      length: 1.8,
                      trigger: ({ exit, node }) => {
                        let animationHeader = node.querySelector(".landing-animation-header");
                        this.mobileExitAnimation(exit, animationHeader);
                      }
                    }}
                    entry={{
                      delay: 1.8,
                      length: 0
                    }}
                  >
                    About
                  </TransitionLink>
              <Link className="hero-link-mobile">Contact</Link>
            </MobileNavFooterRight>
          </MobileNavFooterContainer>
      </LayoutContainer>
    );
  }
}
