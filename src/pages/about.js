import React, { Component } from "react";
import { Link } from "gatsby";
import "../components/styles.css";
import styled from "styled-components";
// import ArchiveMenu from "../components/archive-menu";
import AboutContent from "../components/about-content";
import anime from "animejs/lib/anime.es.js";
import TransitionLink from "gatsby-plugin-transition-link";
import { Helmet } from "react-helmet";

const AboutContainer = styled.div`
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

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileView: false
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
    if (!this.state.mobileView) {
      this.enterAnimation();
    } else {
      this.mobileEnterAnimation();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
    console.log("archive unmounting");
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

    anime.timeline().add({
      targets: ".hero-opacity-wrapper-desktop",
      opacity: [0, 1],
      easing: "easeInExpo",
      duration: 800,
      delay: 800
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
      targets: ".hero-opacity-wrapper-desktop",
      opacity: [0, 1],
      easing: "easeInExpo",
      duration: 800,
      delay: 800
    });
  };

  exitAnimation = (exit, selectAnimationHeader) => {
    // this.setState({ animateEnter: false })

    selectAnimationHeader.innerHTML = selectAnimationHeader.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
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
      targets: ".hero-opacity-wrapper-desktop",
      duration: 1600,
      easing: "easeOutExpo",
      opacity: 0,
      delay: 0
    });
  };

  mobileExitAnimation = (exit, selectAnimationHeader) => {
    // this.setState({ animateEnter: false })

    selectAnimationHeader.innerHTML = selectAnimationHeader.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
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
      targets: ".hero-opacity-wrapper-desktop",
      duration: 1600,
      easing: "easeOutExpo",
      opacity: 0,
      delay: 0
    });
  };

  render() {
    return (
      <>
        <Helmet>
          <title>About</title>
          <meta
            http-equiv="ScreenOrientation"
            content="autoRotate:disabled"
          ></meta>
        </Helmet>
        <LayoutContainer
          className={
            this.state.mobileView ? "archive-layout-container-mobile" : ""
          }
        >
          <MobileNavHeaderContainer
            style={{ display: this.state.mobileView ? "" : "none" }}
          >
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

                    this.mobileExitAnimation(exit, animationHeader);
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
              ABOUT
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
                  delay: 1,
                  length: 0
                }}
              >
                Fine Art
              </TransitionLink>
            </MobileNavHeaderRight>
          </MobileNavHeaderContainer>

          <AboutContainer
            className={this.state.mobileView ? "archive-mobile-container" : ""}
          >
            {this.state.mobileView ? (
              ""
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
                        trigger: ({ exit, node }) => {
                          let animationHeader = node.querySelector(
                            ".animation-header"
                          );

                          this.exitAnimation(exit, animationHeader);
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
                    <div className="animation-header">ABOUT</div>
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
                    <div className="hero-link">About</div>
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
                        delay: 1,
                        length: 0
                      }}
                    >
                      C.V.
                    </TransitionLink>
                  </FooterRight>
                </FooterContainer>
              </HeroLeftContainer>
            )}

            {/* /////////////////////////////////////////////// */}

            <div
              className="hero-opacity-wrapper-desktop"
              style={{ width: this.state.mobileView ? "100%" : "50%" }}
            >
              <AboutContent />
            </div>
          </AboutContainer>

          <MobileNavFooterContainer
            style={{ display: this.state.mobileView ? "" : "none" }}
          >
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
                    if (this.state.mobileView) {
                      let animationHeader = node.querySelector(
                        ".mobile-animation-header"
                      );

                      this.mobileExitAnimation(exit, animationHeader);
                    } else {
                      let animationHeader = node.querySelector(
                        ".animation-header"
                      );

                      this.exitAnimation(exit, animationHeader);
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
                    if (this.state.mobileView) {
                      let animationHeader = node.querySelector(
                        ".mobile-animation-header"
                      );

                      this.mobileExitAnimation(exit, animationHeader);
                    } else {
                      let animationHeader = node.querySelector(
                        ".animation-header"
                      );

                      this.exitAnimation(exit, animationHeader);
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
      </>
    );
  }
}
