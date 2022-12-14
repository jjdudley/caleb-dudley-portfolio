import React, { Component } from "react";
import "../components/styles.css";
import styled from "styled-components";
import HeroGallery from "../components/hero-gallery";
import anime from "animejs/lib/anime.es.js";
import TransitionLink from "gatsby-plugin-transition-link";
import { Helmet } from "react-helmet";

const HeroContainer = styled.div`
  position: fixed;
  top: 0;
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
  width: 172px;

  height: 20px;
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
  align-items: flex-end;
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  z-index: 7000;
`;

const OpacityMaskEnter = styled.div`
  position: absolute;
  display: flex;
  background-color: rgb(241, 241, 239);
  height: 100vh;
  width: 50%;
  left: 50%;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 8500;
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
  align-items: center;
  width: 100%;
  justify-content: space-between;

  padding: 10px;
  z-index: 7000;
  background-color: rgb(241, 241, 239);
`;

let MobileNavHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  z-index: 2000;

  width: 100px;
  justify-content: center;
  margin: 0;

  &:hover {
    cursor: pointer;
  }
`;

let MobileNavHeaderCenter = styled.div`
  position: fixed;
  top: 13px;
  left: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  color: rgb(19, 19, 18);
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

let MobileNavHeaderRight = styled.div`
  display: flex;
  width: 100px;
  flex-direction: column;
  align-items: flex-end;
  z-index: 2000;

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

  padding: 10px;
  z-index: 7000;
  background-color: rgb(241, 241, 239);
`;

let MobileNavFooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  align-items: flex-start;
`;

let MobileNavFooterCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
      animateEnter: true,
      photosReady: false,
      siteLoaded: false,
      opacityMaskEnterVisible: true,
      opacityMaskEnterDisplayed: true,
      opacityMaskExitDisplayed: false
    };
  }

  handleResize = () => {
    if (window.matchMedia("(max-width: 1050px)").matches) {
      if (this.state.mobileView) {
        return;
      } else {
        this.setState({
          mobileView: true
        });
      }
    } else {
      if (!this.state.mobileView) {
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


    await this.handleResize();
    // setTimeout(()=> this.setState({opacityMaskEnterVisible: false}), 1100)
    setTimeout(() => this.setState({ photosReady: true }), 2000);
    // setTimeout(() => this.setState({opacityMaskEnterDisplayed: false }), 3200)
    window.addEventListener("resize", this.handleResize.bind(this));
    this.setState({ siteLoaded: true });
    if (!this.state.mobileView) {
      this.enterAnimation();
    } else {
      this.mobileEnterAnimation();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));

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
      duration: 800,
      delay: 1200
    });

    anime.timeline().add({
      targets: "#hero-subcaption-amp",
      opacity: [0, 1],
      easing: "linear",
      duration: 800,
      delay: 1200
    });

    anime.timeline().add({
      targets: "#hero-subcaption-video .video-letter",
      opacity: [0, 1],
      easing: "linear",
      duration: 800,
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

    selectAnimationHeader.innerHTML = selectAnimationHeader.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    let testImage = document.querySelector(".hero-gallery-container");


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

    anime.timeline().add({
      targets: ".hero-opacity-wrapper-desktop",
      duration: 800,
      easing: "linear",
      opacity: 0,
      delay: 0
    });
  };

  mobileExitAnimation = (exit, selectAnimationHeader) => {
    // this.setState({ animateEnter: false })

    this.setState({
      opacityMaskExitDisplayed: true
    });

    selectAnimationHeader.innerHTML = selectAnimationHeader.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    let testCharacters = document.querySelectorAll(".letter");

    let testImage = document.querySelector(".hero-gallery-container");


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
      duration: 1600,
      easing: "easeOutExpo",
      opacity: 0,
      delay: 0
    });
  };

  render() {
    if (this.state.siteLoaded) {
      return (
        <>
          <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>Homepage</title>
            <meta
              http-equiv="ScreenOrientation"
              content="autoRotate:disabled"
            ></meta>
            <meta charset="utf-8"></meta>
            <meta name="description" content="Caleb Dudley Photo and Video."></meta>
          </Helmet>
          {this.state.mobileView ? (
            <LayoutContainer className="home-layout-container-mobile">
              <MobileNavHeaderContainer>
                <MobileNavHeaderLeft>
                  <div className="hero-link-mobile">Home</div>
                </MobileNavHeaderLeft>
                <MobileNavHeaderCenter className="mobile-nav-header-center">
                  <div className="landing-animation-header">
                    CALEB&nbsp;DUDLEY
                  </div>
                  <MobileHeroSubcaption className="mobile-hero-subcaption-container">
                    <h3
                      id="mobile-hero-subcaption-photo"
                      className="mobile-hero-subcaption"
                    >
                      Photo
                    </h3>

                    <h3
                      id="mobile-hero-subcaption-amp"
                      className="mobile-hero-subcaption"
                    >
                      &
                    </h3>

                    <h3
                      id="mobile-hero-subcaption-video"
                      className="mobile-hero-subcaption"
                    >
                      Video
                    </h3>
                  </MobileHeroSubcaption>
                </MobileNavHeaderCenter>
                <MobileNavHeaderRight>
                  {/* <TransitionLink
                    className="hero-link-mobile"
                    to="/archive"
                    exit={{
                      length: 1.2,
                      trigger: ({ exit, node }) => {
                        let animationHeader = node.querySelector(
                          ".landing-animation-header"
                        );
                        this.mobileExitAnimation(exit, animationHeader);
                      }
                    }}
                    entry={{
                      delay: 1.2,
                      length: 0
                    }}
                  >
                    Archive
                  </TransitionLink> */}
                  <TransitionLink
                    className="hero-link-mobile"
                    to="/salt-prints"
                    exit={{
                      length: 1.8,
                      trigger: ({ exit, node }) => {
                        let animationHeader = node.querySelector(
                          ".landing-animation-header"
                        );
                        this.mobileExitAnimation(exit, animationHeader);
                      }
                    }}
                    entry={{
                      delay: 1.2,
                      length: 0
                    }}
                  >
                    Salt Prints
                  </TransitionLink>
                </MobileNavHeaderRight>
              </MobileNavHeaderContainer>

              <div className="hero-opacity-wrapper-mobile">
                {this.state.photosReady ? (
                  <HeroGallery
                    position="fixed"
                    heroImageContainerClass="hero-image-mobile"
                    heroGalleryContainer="hero-gallery-container"
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <div className="place-holder"></div>
                )}
              </div>

              <MobileNavFooterContainer>
                <MobileNavFooterLeft>
                  {" "}
                  <a
                    href="https://www.instagram.com/caleb_dudley/"
                    target="_blank"
                    className="hero-link-mobile"
                  >
                    Instagram
                  </a>
                  <a
                    className="hero-link-mobile"
                    target="_blank"
                    href="mailto:calebjdudley@gmail.com"
                  >
                    Email
                  </a>
                </MobileNavFooterLeft>
                <MobileNavFooterCenter className="hero-link-mobile">
                  Brooklyn, NY
                </MobileNavFooterCenter>
                <MobileNavFooterRight>
                  <TransitionLink
                    className="hero-link-mobile"
                    to="/about"
                    exit={{
                      length: 1.8,
                      trigger: ({ exit, node }) => {
                        let animationHeader = node.querySelector(
                          ".landing-animation-header"
                        );
                        this.mobileExitAnimation(exit, animationHeader);
                      }
                    }}
                    entry={{
                      delay: 1,
                      length: 0
                    }}
                  >
                    About
                  </TransitionLink>
                  <TransitionLink
                    className="hero-link-mobile"
                    to="/cv"
                    exit={{
                      length: 1.8,
                      trigger: ({ exit, node }) => {
                        let animationHeader = node.querySelector(
                          ".landing-animation-header"
                        );
                        this.mobileExitAnimation(exit, animationHeader);
                      }
                    }}
                    entry={{
                      delay: 1,
                      length: 0
                    }}
                  >
                    C.V.
                  </TransitionLink>
                </MobileNavFooterRight>
              </MobileNavFooterContainer>
            </LayoutContainer>
          ) : (
            <LayoutContainer>
              <HeroContainer>
                <HeroLeftContainer>
                  <HeaderContainer>
                    <HeaderLeft>
                      <div className="hero-link">Home</div>
                    </HeaderLeft>
                    <HeaderRight>
                      {/* <TransitionLink
                        className="hero-link"
                        to="/archive"
                        exit={{
                          length: 1.8,
                          trigger: ({ exit, node }) => {

                            let animationHeader = node.querySelector(
                              ".animation-header"
                            );

                            // let exitImage = node.querySelector(".hero-image-container")
                            let exitImage = document.querySelector(
                              ".hero-gallery-container"
                            );

                            this.exitAnimation(exit, animationHeader);
                          }
                        }}
                        entry={{
                          delay: 1.2,
                          length: 0
                        }}
                      >
                        Archive
                      </TransitionLink> */}

                      <TransitionLink
                        className="hero-link"
                        to="/salt-prints"
                        exit={{
                          length: 1.8,
                          trigger: ({ exit, node }) => {

                            let animationHeader = node.querySelector(
                              ".animation-header"
                            );

                            // let exitImage = node.querySelector(".hero-image-container")
                            let exitImage = document.querySelector(
                              ".hero-gallery-container"
                            );

                            this.exitAnimation(exit, animationHeader);
                          }
                        }}
                        entry={{
                          delay: 1.8,
                          length: 0
                        }}
                      >
                        Salt Prints
                      </TransitionLink>
                    </HeaderRight>
                  </HeaderContainer>

                  <HeroCenter>
                    <HeroHeader>
                      <div className="animation-header">CALEB DUDLEY</div>
                    </HeroHeader>
                    <HeroSubcaption>
                      <h3
                        id="hero-subcaption-photo"
                        className="hero-subcaption"
                      >
                        Photo
                      </h3>

                      <h3 id="hero-subcaption-amp" className="hero-subcaption">
                        &
                      </h3>

                      <h3
                        id="hero-subcaption-video"
                        className="hero-subcaption"
                      >
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

                      <a
                        className="hero-link"
                        target="_blank"
                        href="mailto:calebjdudley@gmail.com"
                      >
                        Email
                      </a>
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

                      <TransitionLink
                        className="hero-link"
                        to="/cv"
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
                        C.V.
                      </TransitionLink>
                    </FooterRight>
                  </FooterContainer>
                </HeroLeftContainer>

                <div className="hero-opacity-wrapper-desktop">
                  {this.state.photosReady ? (
                    <HeroGallery
                      position="relative"
                      heroImageContainerClass="hero-image-desktop"
                      heroGalleryContainer="hero-gallery-container"
                      width="100%"
                      height="100%"
                    />
                  ) : (
                    <div className="place-holder"></div>
                  )}
                  {/* <OpacityMaskEnter style={{"opacity": this.state.opacityMaskEnterVisible ? "1" : "0", "width": this.state.mobileView ? "100vw" : "", "left": this.state.mobileView ? "0" : "", display: this.state.opacityMaskEnterDisplayed? "" : "none"}}/> */}
                  {/* <OpacityMaskExit className="opacity-mask-exit" style={{ "width": this.state.mobileView ? "100vw" : "", "left": this.state.mobileView ? "0" : "", display: this.state.opacityMaskExitDisplayed? "" : "none"}}/> */}
                </div>
                {/* <OpacityMaskEnter style={{"opacity": this.state.opacityMaskEnterVisible ? "1" : "0", "width": this.state.mobileView ? "100vw" : "", "left": this.state.mobileView ? "0" : "", display: this.state.opacityMaskEnterDisplayed? "" : "none"}}/> */}
              </HeroContainer>
            </LayoutContainer>
          )}
        </>
      );
    } else {
      return null;
    }
  }
}
