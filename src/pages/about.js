import React, { Component } from "react";
import { Link } from "gatsby";
import "../components/styles.css";
import styled from "styled-components";
import AboutContent from "../components/about-content";
import anime from "animejs/lib/anime.es.js";
import TransitionLink from "gatsby-plugin-transition-link";



const AboutHeader = styled.div`
  font-family: orpheuspro, serif;
  font-weight: 400;
  font-style: regular;
  font-size: 4.4rem;
  text-transform: uppercase;
  height: 80px;
  display: flex;
  align-items: center;
`;

const AboutContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0;
  width: 100%;
  height: 100vh;
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

let MobileNavHeaderContainer = styled.div`
  position: sticky;
  top: 10px;
  display: flex;
  margin: 0;
  width: 100%;
  justify-content: space-between;
  padding: 0 10px;
  z-index: 4000;
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
  &:hover {
    cursor: pointer;
  }
`;

let MobileNavHeaderCenter = styled.div`
  display: flex;
  color: rgb(19, 19, 18);
  display: flex;
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
  position: sticky;
  top: 90vh;
  display: flex;
  width: 100%;
  justify-content: space-between;

  padding: 0 10px;
  z-index: 2000;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  z-index: 7000;
`;

export default class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mobileView: false
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
  }

  exitAnimation = (exit, selectAnimationHeader) => {
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
  };

  render() {
    return (
      <LayoutContainer>
        <MobileNavHeaderContainer
          style={{ display: this.state.mobileView ? "" : "none" }}
        >
          <MobileNavHeaderLeft>
            <Link className="hero-link-mobile" to="/">
              Home
            </Link>
          </MobileNavHeaderLeft>
          <MobileNavHeaderCenter className="mobile-animation-header">ABOUT</MobileNavHeaderCenter>
          <MobileNavHeaderRight>
          <TransitionLink
                    className="hero-link-mobile"
                    to="/archive"
                    exit={{
                      length: 1.8,
                      trigger: ({ exit, node }) => {
                        let animationHeader = node.querySelector(".mobile-animation-header");
                        this.mobileExitAnimation(exit, animationHeader);
                      }
                    }}
                    entry={{
                      delay: 1,
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
                        let animationHeader = node.querySelector(".mobile-animation-header");
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
            <Link className="hero-link-mobile">Email</Link>
          </MobileNavFooterLeft>
          <MobileNavFooterCenter className="hero-link-mobile">
            Brooklyn, NY
          </MobileNavFooterCenter>
          <MobileNavFooterRight>
            <Link className="hero-link-mobile" to="/about">
              About
            </Link>
            <Link className="hero-link-mobile">Contact</Link>
          </MobileNavFooterRight>
        </MobileNavFooterContainer>

        <AboutContainer>
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
                      delay: 1,
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
          

          <AboutContent />
        </AboutContainer>
      </LayoutContainer>
    );
  }
}
