import React, { Component } from "react";

import "../components/styles.css";
import styled from "styled-components";
// import Layout from "../components/layout"

// import MobileNav from "../components/mobile-nav"
import anime from "animejs/lib/anime.es.js";
import TransitionLink from "gatsby-plugin-transition-link";
import ReactPlayer from "react-player/lazy";
import { Helmet } from "react-helmet";

const VideoContainer = styled.div`
  display: flex;
  margin: 0;
  width: 100%;
  justify-content: flex-start;
`;

const VideoHeader = styled.div`
  font-family: orpheuspro, serif;
  font-weight: 400;
  font-style: regular;
  font-size: 4.4rem;
  text-transform: uppercase;
  height: 80px;
  display: flex;
  align-items: center;
`;

const GalleryRight = styled.div`
  display: flex;
  justify-content: center;
  padding: 1%;
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
  height: 100vh;
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

let MobileNavHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  margin: 0;
  width: 100%;
  padding: 10px;
  justify-content: space-between;

  z-index: 9000;
`;

//     let MobileNavHeaderContainer = styled.div`
//   display: flex;
//   margin: 0;
//   width: 100%;
//   justify-content: space-between;
//   padding: 0 10px;
//   margin-top: 10px;
//   z-index: 9000;
//   border: 1px solid blue !important;
// `;

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
  display: flex;
  color: rgb(19, 19, 18);
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

let MobileNavHeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100px;
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
  align-items: flex-start;
  width: 100px;
  background: transparent;
`;

let MobileNavFooterCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`;
// let MobileNavFooterCenter = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: rgb(19, 19, 18);
// `

let MobileNavFooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100px;
`;

const LayoutContainer = styled.div`
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

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
const OpacityMaskExit = styled.div`
  position: absolute;
  display: flex;
  background-color: rgb(241, 241, 239);
  height: 100vh;
  width: 50%;
  left: 50%;
  opacity: 0;
  z-index: 8500;
`;
export default class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileView: false,
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
      this.setState({
        mobileView: false
      });
    }
  };

  async componentDidMount() {
    await this.handleResize();
    setTimeout(() => this.setState({ opacityMaskEnterVisible: false }), 1100);
    setTimeout(() => this.setState({ photosReady: true }), 1200);
    setTimeout(() => this.setState({ opacityMaskEnterDisplayed: false }), 3200);

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

    animationHeader.innerHTML = animationHeader.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
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

    // anime.timeline().add({
    //   targets: ".opacity-mask-two",
    //   duration: 200,
    //   easing: "linear",
    //   opacity: 0,
    //   delay: 600,
    // });
  };

  // triggerTransition = () => {
  //   return useTriggerTransition({
  //     exit: {
  //       length: 1.8
  //     },
  //     entry: {
  //       delay: 1.8
  //     },
  //   })
  // }

  // progTransition = async () => {
  //   await this.exitAnimation()
  //   this.triggerTransition({ to: "/"})
  // }

  mobileEnterAnimation = () => {
  
    let animationHeader = document.querySelector(".mobile-animation-header");

    animationHeader.innerHTML = animationHeader.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline().add({
      targets: ".mobile-animation-header .letter",
      translateX: [40, 0],
      translatez: 0,
      opacity: [0, 1],
      easing: "easeInExpo",
      duration: 800,
      delay: (el, index) => 30 * index
    });
  };

  exitAnimation = () => {
    // this.setState({ animateEnter: false })
    this.setState({
      opacityMaskExitDisplayed: true
    });

    // setTimeout(()=> this.setState({opacityMaskVisible: false}), 1100)
    // setTimeout(() => this.setState({photosReady: true}), 1200)
    // setTimeout(() => this.setState({opacityMaskDisplayed: false}), 3200)

    let selectAnimationHeader = document.querySelector(".animation-header");
   
    selectAnimationHeader.innerHTML = selectAnimationHeader.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    let selectAnimationHeaderLetters = document.querySelectorAll(".letter");


    anime.timeline().add({
      targets: ".opacity-mask-exit",
      duration: 800,
      easing: "linear",
      opacity: 1,
      delay: 800
    });

    anime.timeline().add({
      targets: ".animation-header .letter",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });

    anime.timeline().add({
      targets: ".video-opacity-wrapper-desktop",
      duration: 1600,
      easing: "easeOutExpo",
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

    anime.timeline().add({
      targets: ".opacity-mask-exit",
      duration: 800,
      easing: "linear",
      opacity: 1,
      delay: 0
    });

    anime.timeline().add({
      targets: ".mobile-animation-header .letter",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });
  };

  render() {
    if (this.state.siteLoaded) {
      return (
        <>
          <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>Video</title>
            <meta
              http-equiv="ScreenOrientation"
              content="autoRotate:disabled"
            ></meta>
            <meta charset="utf-8"></meta>
            <meta name="description" content="Video archive."></meta>
          </Helmet>
          {this.state.mobileView ? (
            <>
              <LayoutContainer>
                <MobileNavHeaderContainer>
                  <MobileNavHeaderLeft>
                    <TransitionLink
                      className="hero-link-mobile"
                      to="/"
                      exit={{
                        length: 2,
                        trigger: ({ exit, node }) => {
                          let animationHeader = node.querySelector(
                            ".mobile-animation-header"
                          );
                          this.mobileExitAnimation(exit, animationHeader);
                        }
                      }}
                      entry={{
                        delay: 2,
                        length: 0
                      }}
                    >
                      Home
                    </TransitionLink>
                  </MobileNavHeaderLeft>
                  <MobileNavHeaderCenter className="mobile-animation-header">
                    VIDEO
                  </MobileNavHeaderCenter>
                  <MobileNavHeaderRight>
                    <TransitionLink
                      className="hero-link-mobile"
                      to="/archive"
                      exit={{
                        length: 1.8,
                        trigger: ({ exit, node }) => {
                          let animationHeader = node.querySelector(
                            ".mobile-animation-header"
                          );
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
                          let animationHeader = node.querySelector(
                            ".mobile-animation-header"
                          );
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

                <VideoContainer className="analog-mobile-container">
                  <GalleryRight
                    className="video-opacity-wrapper-mobile"
                    style={{ width: "100%" }}
                  >
                    {/* { this.state.photosReady ? <AnalogPhotos
              lightboxId="lightbox-container-mobile"
              dialogBox="dialog-box-mobile"
              closeDialogButton="close-dialog-button-mobile"
              mobileView={this.state.mobileView}
                  name={
                    this.state.mobileView
                      ? "analog-gallery-mobile"
                      : "gallery-desktop"
                  }
                /> : <div className="place-holder"></div>}  */}

                    {/* <Videos
                id="videos-container"
                playerClass={this.state.mobileView ? "player-mobile" : "player-desktop"}
                // name={
                //   this.state.mobileView
                //     ? "gallery-mobile"
                //     : "gallery-desktop"
                // }
              />  */}
                    <div
                      // className="player-container"
                      className="player-container-mobile"
                    >
                      <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/embed/G6qD8mb7SpM"
                      />
                    </div>

                    <div
                      // className="player-container"
                      className="player-container-mobile"
                    >
                      <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/embed/plfNbTpK8m0"
                      />
                    </div>

                    <div
                      // className="player-container"
                      className="player-container-mobile"
                    >
                      <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/embed/oW8w607gFes"
                      />
                    </div>
                  </GalleryRight>
                </VideoContainer>
                <OpacityMaskEnter
                  style={{
                    opacity: this.state.opacityMaskEnterVisible ? "1" : "0",
                    width: "100vw",
                    left: "0",
                    display: this.state.opacityMaskEnterDisplayed ? "" : "none"
                  }}
                />
                <OpacityMaskExit
                  className="opacity-mask-exit"
                  style={{
                    width: "100vw",
                    left: "0",
                    display: this.state.opacityMaskExitDisplayed ? "" : "none"
                  }}
                />
              </LayoutContainer>
              <MobileNavFooterContainer>
                <MobileNavFooterLeft>
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
                          ".mobile-animation-header"
                        );
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
                  <TransitionLink
                    className="hero-link-mobile"
                    to="/cv"
                    exit={{
                      length: 1.8,
                      trigger: ({ exit, node }) => {
                        let animationHeader = node.querySelector(
                          ".mobile-animation-header"
                        );
                        this.mobileExitAnimation(exit, animationHeader);
                      }
                    }}
                    entry={{
                      delay: 1.8,
                      length: 0
                    }}
                  >
                    C.V.
                  </TransitionLink>
                </MobileNavFooterRight>
              </MobileNavFooterContainer>
            </>
          ) : (
            <LayoutContainer>
              <VideoContainer>
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
                          delay: 0,
                          trigger: () => {
                            
                            this.exitAnimation();
                          }
                        }}
                        entry={{ delay: 1.8, length: 0 }}
                      >
                        {" "}
                        Home{" "}
                      </TransitionLink>
                      {/* <div className="hero-link" onClick={this.progTransition}>Home</div> */}
                    </HeaderLeft>
                    <HeaderRight>
                      <TransitionLink
                        className="hero-link"
                        to="/archive"
                        exit={{
                          length: 2,
                          trigger: ({ exit, node }) => {
                            let animationHeader = node.querySelector(
                              ".animation-header"
                            );
                            this.exitAnimation(exit, animationHeader);
                          }
                        }}
                        entry={{
                          delay: 2,
                          length: 0
                        }}
                      >
                        Archive
                      </TransitionLink>

                      <TransitionLink
                        className="hero-link"
                        to="/fine-art"
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
                        Fine Art
                      </TransitionLink>
                    </HeaderRight>
                  </HeaderContainer>

                  <HeroCenter>
                    <HeroHeader>
                      <div className="animation-header">VIDEO</div>
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

                <GalleryRight
                  className="video-opacity-wrapper-desktop"
                  style={{ width: "50%" }}
                >
                  <div
                    // className="player-container"
                    className="player-container-desktop"
                  >
                    <ReactPlayer
                      className="react-player"
                      url="https://www.youtube.com/embed/G6qD8mb7SpM"
                    />
                  </div>

                  <div
                    // className="player-container"
                    className="player-container-desktop"
                  >
                    <ReactPlayer
                      className="react-player"
                      url="https://www.youtube.com/embed/plfNbTpK8m0"
                    />
                  </div>

                  <div
                    // className="player-container"
                    className="player-container-desktop"
                  >
                    <ReactPlayer
                      className="react-player"
                      url="https://www.youtube.com/embed/oW8w607gFes"
                    />
                  </div>
                </GalleryRight>
              </VideoContainer>
              <OpacityMaskEnter
                style={{
                  opacity: this.state.opacityMaskEnterVisible ? "1" : "0",
                  display: this.state.opacityMaskEnterDisplayed ? "" : "none"
                }}
              />
              <OpacityMaskExit
                className="opacity-mask-exit"
                style={{
                  display: this.state.opacityMaskExitDisplayed ? "" : "none"
                }}
              />
            </LayoutContainer>
          )}
        </>
      );
    } else {
      return null;
    }
  }
}
