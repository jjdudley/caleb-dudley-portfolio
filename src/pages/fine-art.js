import React, { Component } from "react";
import { Link } from "gatsby";
import "../components/styles.css";
import styled from "styled-components";
import FineArtGallery from "../components/fine-art-gallery";
import anime from "animejs/lib/anime.es.js";
import TransitionLink from "gatsby-plugin-transition-link";

const FineArtContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0;
  width: 100%;
  min-height: 100vh;
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
  top: 91.5vh;
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

export default class FineArt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileView: false
    };
  }

  handleResize = () => {
    // alert("handleResize ran")
    if (window.matchMedia("(max-width: 1000px)").matches) {
      if (this.state.mobileView) {
        // alert("mobileView is true")
        return;
      } else {
        // alert("changing mobileView from false to true")
        this.setState({
          mobileView: true
        });
      }
    } else {
      // alert("mobileView is turning from true to false")
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
    console.log("fine art unmounting");
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
      <LayoutContainer
        className={this.state.mobileView ? "layout-container-mobile" : ""}
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
                        let animationHeader = node.querySelector(".mobile-animation-header");
                        this.mobileExitAnimation(exit, animationHeader);
                      }
                    }}
                    entry={{
                      delay: 1.8,
                      length: 0
                    }}
                  >
                    Home
                  </TransitionLink>
            {/* <Link className="hero-link-mobile" to="/">
              Home
            </Link> */}
          </MobileNavHeaderLeft>
          <MobileNavHeaderCenter className="mobile-animation-header">FINE&nbsp;ART</MobileNavHeaderCenter>
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
                      delay: 1.8,
                      length: 0
                    }}
                  >
                    Archive
                  </TransitionLink>
            {/* <Link className="hero-link-mobile" to="/archive">
              Archive
            </Link> */}


            
            <div className="hero-link-mobile" to="/fine-art">
              Fine Art
            </div>
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
          <TransitionLink
                    className="hero-link-mobile"
                    to="/about"
                    exit={{
                      length: 1.8,
                      trigger: ({ exit, node }) => {
                        let animationHeader = node.querySelector(".mobile-animation-header");
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
            {/* <Link className="hero-link-mobile" to="/about">
              About
            </Link> */}
            <Link className="hero-link-mobile">Contact</Link>
          </MobileNavFooterRight>
        </MobileNavFooterContainer>

        <FineArtContainer
          className={this.state.mobileView ? "fine-art-mobile-container" : ""}
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
                        console.log("first log below");
                        let animationHeader = node.querySelector(
                          ".animation-header"
                        );
                        console.log(animationHeader);
                        // let exitImage = node.querySelector(".hero-image-container")
                        // let exitImage = document.querySelector(".hero-gallery-container")

                        // this.exitHeroGallery(exit, exitImage)
                        this.exitAnimation(exit, animationHeader);
                      }
                    }}
                    entry={{
                      delay: 1.8,
                      length: 0
                    }}
                  >
                    Home
                  </TransitionLink>
                  {/* <Link className="hero-link" to="/">
                    Home
                  </Link> */}
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
            

                  <Link className="hero-link" to="/fine-art">
                    Fine Art
                  </Link>
                </HeaderRight>
              </HeaderContainer>

              <HeroCenter>
                <HeroHeader>
                  <div className="animation-header">FINE ART</div>
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

          <FineArtGallery
            // heroGalleryContainer="hero-gallery-container"
            width={this.state.mobileView ? "100% !important" : "50% !important"}
            name={this.state.mobileView ? "mobile-gallery-container" : ""}
            // background={this.state.mobileView ? "none" : ""}
          />
        </FineArtContainer>
      </LayoutContainer>
    );
  }
}
