import React, { Component } from "react";
import "../components/styles.css";
import styled from "styled-components";
import anime from "animejs/lib/anime.es.js";
import TransitionLink from "gatsby-plugin-transition-link";
import { Helmet } from "react-helmet";

const ArchiveContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
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

const OpacityMask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2000;
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
  display: flex;
  margin: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  z-index: 9000;

  position: fixed;
  top: 0;
  display: flex;
  margin: 0;
  width: 100%;
  justify-content: space-between;

  z-index: 9000;
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
  display: flex;
  color: rgb(19, 19, 18);
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-transform: uppercase;
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
  display: flex;
  width: 100%;
  justify-content: space-between;

  padding: 0 10px;
  margin-bottom: 10px;
  z-index: 9000;

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

const LayoutContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  z-index: 7000;
`;

let ArchiveMenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(241, 241, 239);
  z-index: 0;
`;

const ArchiveMenuItem = styled.div`
  display: flex;
  margin: 10px 0;
  font-family: orpheuspro, serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: rgb(19, 19, 18);
`;

export default class Archive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileView: false,
      siteLoaded: false,
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

    // archiveMenuDigital.innerHTML = archiveMenuDigital.textContent.replace(
    //   /\S/g,
    //   "<span class='.archive-menu-letter'>$&</span>"
    // );

    // archiveMenuAnalog.innerHTML = archiveMenuAnalog.textContent.replace(
    //   /\S/g,
    //   "<span class='.archive-menu-letter'>$&</span>"
    // );

    // archiveMenuVideo.innerHTML = archiveMenuVideo.textContent.replace(
    //   /\S/g,
    //   "<span class='.archive-menu-letter'>$&</span>"
    // );

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
      targets: "#archive-digital-link",
      opacity: [0, 1],
      easing: "easeInExpo",
      duration: 400,
      delay: 1300
    });

    anime.timeline().add({
      targets: "#archive-analog-link",
      opacity: [0, 1],
      easing: "easeInExpo",
      duration: 400,
      delay: 1700
    });

    anime.timeline().add({
      targets: "#archive-video-link",
      opacity: [0, 1],
      easing: "easeInExpo",
      duration: 400,
      delay: 2100
    });
  };

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

    anime.timeline().add({
      targets: "#archive-digital-link",
      opacity: [0, 1],
      easing: "easeInExpo",
      duration: 400,
      delay: 1300
    });

    anime.timeline().add({
      targets: "#archive-analog-link",
      opacity: [0, 1],
      easing: "easeInExpo",
      duration: 400,
      delay: 1700
    });

    anime.timeline().add({
      targets: "#archive-video-link",
      opacity: [0, 1],
      easing: "easeInExpo",
      duration: 400,
      delay: 2100
    });
  };

  exitAnimation = (
    exit,
    selectAnimationHeader,
    archiveMenuDigital,
    archiveMenuAnalog,
    archiveMenuVideo
  ) => {
    // this.setState({ animateEnter: false })

    selectAnimationHeader.innerHTML = selectAnimationHeader.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    archiveMenuDigital.innerHTML = archiveMenuDigital.textContent.replace(
      /\S/g,
      "<span class='archive-menu-digital-letter'>$&</span>"
    );

    archiveMenuAnalog.innerHTML = archiveMenuAnalog.textContent.replace(
      /\S/g,
      "<span class='archive-menu-analog-letter'>$&</span>"
    );

    archiveMenuVideo.innerHTML = archiveMenuVideo.textContent.replace(
      /\S/g,
      "<span class='archive-menu-video-letter'>$&</span>"
    );

    anime.timeline().add({
      targets: ".animation-header .letter",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });

    anime.timeline().add({
      targets: "#archive-digital-link .archive-menu-digital-letter",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });

    anime.timeline().add({
      targets: "#archive-analog-link .archive-menu-analog-letter",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });

    anime.timeline().add({
      targets: "#archive-video-link .archive-menu-video-letter",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });
  };

  mobileExitAnimation = (
    exit,
    selectAnimationHeader,
    archiveMenuDigital,
    archiveMenuAnalog,
    archiveMenuVideo
  ) => {
    // this.setState({ animateEnter: false })

    selectAnimationHeader.innerHTML = selectAnimationHeader.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    archiveMenuDigital.innerHTML = archiveMenuDigital.textContent.replace(
      /\S/g,
      "<span class='archive-menu-digital-letter'>$&</span>"
    );

    archiveMenuAnalog.innerHTML = archiveMenuAnalog.textContent.replace(
      /\S/g,
      "<span class='archive-menu-analog-letter'>$&</span>"
    );

    archiveMenuVideo.innerHTML = archiveMenuVideo.textContent.replace(
      /\S/g,
      "<span class='archive-menu-video-letter'>$&</span>"
    );

    anime.timeline().add({
      targets: ".mobile-animation-header .letter",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });

    anime.timeline().add({
      targets: "#archive-digital-link .archive-menu-digital-letter",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });

    anime.timeline().add({
      targets: "#archive-analog-link .archive-menu-analog-letter",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });

    anime.timeline().add({
      targets: "#archive-video-link .archive-menu-video-letter",
      duration: 1600,
      easing: "easeOutExpo",
      translateX: [0, -30],
      opacity: [1, 0],
      delay: (el, index) => 30 * index
    });

    anime.timeline().add({
      targets: ".hero-opacity-wrapper-desktop",
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
            <title>Media Archive</title>
            <meta
              http-equiv="ScreenOrientation"
              content="autoRotate:disabled"
            ></meta>
            <meta charset="utf-8"></meta>
            <meta name="description" content="Media archive."></meta>
          </Helmet>

          {this.state.mobileView ? (
            <LayoutContainer className="archive-layout-container-mobile">
              <MobileNavHeaderContainer>
                <MobileNavHeaderLeft>
                  <TransitionLink
                    className="hero-link-mobile"
                    to="/"
                    exit={{
                      length: 1.8,
                      trigger: ({ exit, node }) => {
                        let animationHeader = node.querySelector(
                          ".mobile-animation-header"
                        );

                        let archiveMenuDigital = node.querySelector(
                          "#archive-digital-link"
                        );
                        let archiveMenuAnalog = node.querySelector(
                          "#archive-analog-link"
                        );
                        let archiveMenuVideo = node.querySelector(
                          "#archive-video-link"
                        );
                        this.mobileExitAnimation(
                          exit,
                          animationHeader,
                          archiveMenuDigital,
                          archiveMenuAnalog,
                          archiveMenuVideo
                        );
                      }
                    }}
                    entry={{
                      delay: 1,
                      length: 0
                    }}
                  >
                    Home
                  </TransitionLink>
                </MobileNavHeaderLeft>
                <MobileNavHeaderCenter className="mobile-animation-header">
                  ARCHIVE
                </MobileNavHeaderCenter>
                <MobileNavHeaderRight>
                  <div className="hero-link-mobile">Archive</div>

                  <TransitionLink
                    className="hero-link-mobile"
                    to="/fine-art"
                    exit={{
                      length: 1.8,
                      trigger: ({ exit, node }) => {
                        let animationHeader = node.querySelector(
                          ".mobile-animation-header"
                        );

                        let archiveMenuDigital = node.querySelector(
                          "#archive-digital-link"
                        );

                        let archiveMenuAnalog = node.querySelector(
                          "#archive-analog-link"
                        );
                        let archiveMenuVideo = node.querySelector(
                          "#archive-video-link"
                        );
                        this.mobileExitAnimation(
                          exit,
                          animationHeader,
                          archiveMenuDigital,
                          archiveMenuAnalog,
                          archiveMenuVideo
                        );
                      }
                    }}
                    entry={{
                      delay: 1,
                      length: 0
                    }}
                  >
                    Fine Art
                  </TransitionLink>
                </MobileNavHeaderRight>
              </MobileNavHeaderContainer>

              <ArchiveContainer className="archive-mobile-container">
                <ArchiveMenuContainer
                  style={{
                    width: "100%",
                    height: "50vh"
                  }}
                >
                  <ArchiveMenuItem>
                    <TransitionLink
                      id="archive-digital-link"
                      className="mobile-archive-menu-link"
                      to="/digital"
                      exit={{
                        length: 1.8,
                        trigger: ({ exit, node }) => {
                          let archiveMenuDigital = node.querySelector(
                            "#archive-digital-link"
                          );
                          let archiveMenuAnalog = node.querySelector(
                            "#archive-analog-link"
                          );
                          let archiveMenuVideo = node.querySelector(
                            "#archive-video-link"
                          );
                          if (this.state.mobileView) {
                            let animationHeader = node.querySelector(
                              ".mobile-animation-header"
                            );
                            this.mobileExitAnimation(
                              exit,
                              animationHeader,
                              archiveMenuDigital,
                              archiveMenuAnalog,
                              archiveMenuVideo
                            );
                          } else {
                            let animationHeader = node.querySelector(
                              ".animation-header"
                            );
                            this.exitAnimation(
                              exit,
                              animationHeader,
                              archiveMenuDigital,
                              archiveMenuAnalog,
                              archiveMenuVideo
                            );
                          }
                        }
                      }}
                      entry={{
                        delay: 1,
                        length: 0
                      }}
                    >
                      Digital
                    </TransitionLink>
                  </ArchiveMenuItem>
                  <ArchiveMenuItem>
                    <TransitionLink
                      id="archive-analog-link"
                      className="mobile-archive-menu-link"
                      to="/analog"
                      exit={{
                        length: 1.4,
                        trigger: ({ exit, node }) => {
                          let archiveMenuDigital = node.querySelector(
                            "#archive-digital-link"
                          );
                          let archiveMenuAnalog = node.querySelector(
                            "#archive-analog-link"
                          );
                          let archiveMenuVideo = node.querySelector(
                            "#archive-video-link"
                          );
                          if (this.state.mobileView) {
                            let animationHeader = node.querySelector(
                              ".mobile-animation-header"
                            );
                            this.mobileExitAnimation(
                              exit,
                              animationHeader,
                              archiveMenuDigital,
                              archiveMenuAnalog,
                              archiveMenuVideo
                            );
                          } else {
                            let animationHeader = node.querySelector(
                              ".animation-header"
                            );
                            this.exitAnimation(
                              exit,
                              animationHeader,
                              archiveMenuDigital,
                              archiveMenuAnalog,
                              archiveMenuVideo
                            );
                          }
                        }
                      }}
                      entry={{
                        delay: 0.8,
                        length: 0
                      }}
                    >
                      Analog
                    </TransitionLink>
                  </ArchiveMenuItem>
                  <ArchiveMenuItem>
                    <TransitionLink
                      id="archive-video-link"
                      className="mobile-archive-menu-link"
                      to="/video"
                      exit={{
                        length: 1.8,
                        trigger: ({ exit, node }) => {
                          let archiveMenuDigital = node.querySelector(
                            "#archive-digital-link"
                          );
                          let archiveMenuAnalog = node.querySelector(
                            "#archive-analog-link"
                          );
                          let archiveMenuVideo = node.querySelector(
                            "#archive-video-link"
                          );
                          if (this.state.mobileView) {
                            let animationHeader = node.querySelector(
                              ".mobile-animation-header"
                            );
                            this.mobileExitAnimation(
                              exit,
                              animationHeader,
                              archiveMenuDigital,
                              archiveMenuAnalog,
                              archiveMenuVideo
                            );
                          } else {
                            let animationHeader = node.querySelector(
                              ".animation-header"
                            );
                            this.exitAnimation(
                              exit,
                              animationHeader,
                              archiveMenuDigital,
                              archiveMenuAnalog,
                              archiveMenuVideo
                            );
                          }
                        }
                      }}
                      entry={{
                        delay: 1,
                        length: 0
                      }}
                    >
                      Video
                    </TransitionLink>
                  </ArchiveMenuItem>
                </ArchiveMenuContainer>
              </ArchiveContainer>
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
                        let archiveMenuDigital = node.querySelector(
                          "#archive-digital-link"
                        );
                        let archiveMenuAnalog = node.querySelector(
                          "#archive-analog-link"
                        );
                        let archiveMenuVideo = node.querySelector(
                          "#archive-video-link"
                        );
                        if (this.state.mobileView) {
                          let animationHeader = node.querySelector(
                            ".mobile-animation-header"
                          );

                          this.mobileExitAnimation(
                            exit,
                            animationHeader,
                            archiveMenuDigital,
                            archiveMenuAnalog,
                            archiveMenuVideo
                          );
                        } else {
                          let animationHeader = node.querySelector(
                            ".animation-header"
                          );

                          this.exitAnimation(
                            exit,
                            animationHeader,
                            archiveMenuDigital,
                            archiveMenuAnalog,
                            archiveMenuVideo
                          );
                        }
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
                        let archiveMenuDigital = node.querySelector(
                          "#archive-digital-link"
                        );
                        let archiveMenuAnalog = node.querySelector(
                          "#archive-analog-link"
                        );
                        let archiveMenuVideo = node.querySelector(
                          "#archive-video-link"
                        );
                        if (this.state.mobileView) {
                          let animationHeader = node.querySelector(
                            ".mobile-animation-header"
                          );

                          this.mobileExitAnimation(
                            exit,
                            animationHeader,
                            archiveMenuDigital,
                            archiveMenuAnalog,
                            archiveMenuVideo
                          );
                        } else {
                          let animationHeader = node.querySelector(
                            ".animation-header"
                          );

                          this.exitAnimation(
                            exit,
                            animationHeader,
                            archiveMenuDigital,
                            archiveMenuAnalog,
                            archiveMenuVideo
                          );
                        }
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
              <ArchiveContainer>
                <HeroLeftContainer>
                  <HeaderContainer>
                    <HeaderLeft>
                      <TransitionLink
                        className="hero-link"
                        to="/"
                        exit={{
                          length: 1.8,
                          trigger: ({ exit, node }) => {
                            let animationHeader = node.querySelector(
                              ".animation-header"
                            );

                            let archiveMenuDigital = node.querySelector(
                              "#archive-digital-link"
                            );
                            let archiveMenuAnalog = node.querySelector(
                              "#archive-analog-link"
                            );
                            let archiveMenuVideo = node.querySelector(
                              "#archive-video-link"
                            );
                            this.exitAnimation(
                              exit,
                              animationHeader,
                              archiveMenuDigital,
                              archiveMenuAnalog,
                              archiveMenuVideo
                            );
                          }
                        }}
                        entry={{
                          delay: 1,
                          length: 0
                        }}
                      >
                        Home
                      </TransitionLink>
                    </HeaderLeft>
                    <HeaderRight>
                      <div className="hero-link">Archive</div>

                      <TransitionLink
                        className="hero-link"
                        to="/fine-art"
                        exit={{
                          length: 1.8,
                          trigger: ({ exit, node }) => {
                            let animationHeader = node.querySelector(
                              ".animation-header"
                            );

                            let archiveMenuDigital = node.querySelector(
                              "#archive-digital-link"
                            );
                            let archiveMenuAnalog = node.querySelector(
                              "#archive-analog-link"
                            );
                            let archiveMenuVideo = node.querySelector(
                              "#archive-video-link"
                            );
                            this.exitAnimation(
                              exit,
                              animationHeader,
                              archiveMenuDigital,
                              archiveMenuAnalog,
                              archiveMenuVideo
                            );
                          }
                        }}
                        entry={{
                          delay: 1,
                          length: 0
                        }}
                      >
                        Fine Art
                      </TransitionLink>
                    </HeaderRight>
                  </HeaderContainer>

                  <HeroCenter>
                    <HeroHeader>
                      <div className="animation-header">ARCHIVE</div>
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

                            let archiveMenuDigital = node.querySelector(
                              "#archive-digital-link"
                            );
                            let archiveMenuAnalog = node.querySelector(
                              "#archive-analog-link"
                            );
                            let archiveMenuVideo = node.querySelector(
                              "#archive-video-link"
                            );
                            this.exitAnimation(
                              exit,
                              animationHeader,
                              archiveMenuDigital,
                              archiveMenuAnalog,
                              archiveMenuVideo
                            );
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
                        className="hero-link"
                        to="/cv"
                        exit={{
                          length: 1.8,
                          trigger: ({ exit, node }) => {
                            let animationHeader = node.querySelector(
                              ".animation-header"
                            );

                            let archiveMenuDigital = node.querySelector(
                              "#archive-digital-link"
                            );
                            let archiveMenuAnalog = node.querySelector(
                              "#archive-analog-link"
                            );
                            let archiveMenuVideo = node.querySelector(
                              "#archive-video-link"
                            );
                            this.exitAnimation(
                              exit,
                              animationHeader,
                              archiveMenuDigital,
                              archiveMenuAnalog,
                              archiveMenuVideo
                            );
                          }
                        }}
                        entry={{
                          delay: 1,
                          length: 0
                        }}
                      >
                        C.V.
                      </TransitionLink>
                    </FooterRight>
                  </FooterContainer>
                </HeroLeftContainer>

                <ArchiveMenuContainer
                  style={{
                    width: "50%",
                    height: "100vh"
                  }}
                >
                  <ArchiveMenuItem>
                    <TransitionLink
                      id="archive-digital-link"
                      className="archive-menu-link"
                      to="/digital"
                      exit={{
                        length: 1.8,
                        trigger: ({ exit, node }) => {
                          let archiveMenuDigital = node.querySelector(
                            "#archive-digital-link"
                          );
                          let archiveMenuAnalog = node.querySelector(
                            "#archive-analog-link"
                          );
                          let archiveMenuVideo = node.querySelector(
                            "#archive-video-link"
                          );
                          if (this.state.mobileView) {
                            let animationHeader = node.querySelector(
                              ".mobile-animation-header"
                            );
                            this.mobileExitAnimation(
                              exit,
                              animationHeader,
                              archiveMenuDigital,
                              archiveMenuAnalog,
                              archiveMenuVideo
                            );
                          } else {
                            let animationHeader = node.querySelector(
                              ".animation-header"
                            );
                            this.exitAnimation(
                              exit,
                              animationHeader,
                              archiveMenuDigital,
                              archiveMenuAnalog,
                              archiveMenuVideo
                            );
                          }
                        }
                      }}
                      entry={{
                        delay: 1,
                        length: 0
                      }}
                    >
                      Digital
                    </TransitionLink>
                  </ArchiveMenuItem>
                  <ArchiveMenuItem>
                    <TransitionLink
                      id="archive-analog-link"
                      className="archive-menu-link"
                      to="/analog"
                      exit={{
                        length: 1.4,
                        trigger: ({ exit, node }) => {
                          let archiveMenuDigital = node.querySelector(
                            "#archive-digital-link"
                          );
                          let archiveMenuAnalog = node.querySelector(
                            "#archive-analog-link"
                          );
                          let archiveMenuVideo = node.querySelector(
                            "#archive-video-link"
                          );
                          if (this.state.mobileView) {
                            let animationHeader = node.querySelector(
                              ".mobile-animation-header"
                            );
                            this.mobileExitAnimation(
                              exit,
                              animationHeader,
                              archiveMenuDigital,
                              archiveMenuAnalog,
                              archiveMenuVideo
                            );
                          } else {
                            let animationHeader = node.querySelector(
                              ".animation-header"
                            );
                            this.exitAnimation(
                              exit,
                              animationHeader,
                              archiveMenuDigital,
                              archiveMenuAnalog,
                              archiveMenuVideo
                            );
                          }
                        }
                      }}
                      entry={{
                        delay: 0.8,
                        length: 0
                      }}
                    >
                      Analog
                    </TransitionLink>
                  </ArchiveMenuItem>
                  <ArchiveMenuItem>
                    <TransitionLink
                      id="archive-video-link"
                      className="archive-menu-link"
                      to="/video"
                      exit={{
                        length: 1.8,
                        trigger: ({ exit, node }) => {
                          let archiveMenuDigital = node.querySelector(
                            "#archive-digital-link"
                          );
                          let archiveMenuAnalog = node.querySelector(
                            "#archive-analog-link"
                          );
                          let archiveMenuVideo = node.querySelector(
                            "#archive-video-link"
                          );
                          if (this.state.mobileView) {
                            let animationHeader = node.querySelector(
                              ".mobile-animation-header"
                            );
                            this.mobileExitAnimation(
                              exit,
                              animationHeader,
                              archiveMenuDigital,
                              archiveMenuAnalog,
                              archiveMenuVideo
                            );
                          } else {
                            let animationHeader = node.querySelector(
                              ".animation-header"
                            );
                            this.exitAnimation(
                              exit,
                              animationHeader,
                              archiveMenuDigital,
                              archiveMenuAnalog,
                              archiveMenuVideo
                            );
                          }
                        }
                      }}
                      entry={{
                        delay: 1,
                        length: 0
                      }}
                    >
                      Video
                    </TransitionLink>
                  </ArchiveMenuItem>
                </ArchiveMenuContainer>
              </ArchiveContainer>
            </LayoutContainer>
          )}
        </>
      );
    } else {
      return null;
    }
  }
}
