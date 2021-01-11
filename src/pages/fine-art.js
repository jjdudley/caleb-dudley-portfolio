// import React, { Component } from "react";
// import { Link } from "gatsby";
// import "../components/styles.css";
// import styled from "styled-components";
// import FineArtGallery from "../components/fine-art-gallery";
// import anime from "animejs/lib/anime.es.js";
// import TransitionLink from "gatsby-plugin-transition-link";

// const FineArtContainer = styled.div`
//   position: relative;
//   display: flex;
//   margin: 0;
//   width: 100%;
//   min-height: 100vh;
//   justify-content: center;
// `;
// const HeroHeader = styled.div`
//   font-family: orpheuspro, serif;
//   font-weight: 400;
//   font-style: normal;
//   font-size: 4.4rem;
//   height: 80px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const HeroCenter = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   justify-content: center;
//   align-items: center;
// `;

// const HeroLeftContainer = styled.div`
//   position: sticky;
//   top: 0;
//   background-color: rgb(19, 19, 18);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   width: 50%;
//   padding: 20px;
//   height: 100vh;

// `;

// let HeaderContainer = styled.div`
//   display: flex;
//   margin: 0;
//   width: 100%;
//   justify-content: space-between;
// `;

// let HeaderLeft = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// let HeaderRight = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// let LinkContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   transition: color 0.3s ease-out;
//   &:hover {
//     cursor: pointer;
//     transition: color 0.2s ease-out;
//   }
// `;
// let FooterContainer = styled.div`
//   display: flex;

//   width: 100%;
//   justify-content: space-between;
// `;

// let FooterLeft = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// let FooterCenter = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// let FooterRight = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// let MobileNavHeaderContainer = styled.div`
// position: sticky;
//     position: fixed;
//     top: 0;
//     display: flex;
//     margin: 0;
//     width: 100%;
//     align-items: center;
//     justify-content: space-between;
//     padding: 10px;
//     z-index: 7000;
// `;

// let MobileNavHeaderLeft = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   z-index: 2000;
//   height: 100%;
//   width: 100px;
//   justify-content: center;

//   margin: 0;
//   &:hover {
//     cursor: pointer;
//   }
// `;

// let MobileNavHeaderCenter = styled.div`
//   display: flex;
//   color: rgb(19, 19, 18);
//   justify-content: center;
//   align-items: center;
//   font-size: 1.2rem;
//   text-transform: uppercase;
// `;

// let MobileNavHeaderRight = styled.div`
//   display: flex;
//   width: 100px;
//   flex-direction: column;
//   align-items: flex-end;
//   z-index: 2000;

//   &:hover {
//     cursor: pointer;
//   }
// `;

// let MobileNavFooterContainer = styled.div`
// position: sticky;
// bottom: 10px;
// display: flex;
// width: 100%;
// justify-content: space-between;
// padding: 0 10px;
// z-index: 7000;
// `;

// let MobileNavFooterLeft = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100px;
//   align-items: flex-start;
//   background: transparent;
// `;

// let MobileNavFooterCenter = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: transparent;
// `;

// let MobileNavFooterRight = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100px;
//   align-items: flex-end;
// `;

// const LayoutContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   width: 100%;
//   z-index: 7000;

// `;

// export default class FineArt extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       mobileView: false
//     };
//   }

//   handleResize = () => {
//     // alert("handleResize ran")
//     if (window.matchMedia("(max-width: 1000px)").matches) {
//       if (this.state.mobileView) {
//         // alert("mobileView is true")
//         return;
//       } else {
//         // alert("changing mobileView from false to true")
//         this.setState({
//           mobileView: true
//         });
//       }
//     } else {
//       // alert("mobileView is turning from true to false")
//       this.setState({
//         mobileView: false
//       });
//     }
//   };

//   async componentDidMount() {
//     await this.handleResize();
//     window.addEventListener("resize", this.handleResize.bind(this));
//     if (!this.state.mobileView) {
//       this.enterAnimation();
//     } else {
//       this.mobileEnterAnimation();
//     }
//   }

//   componentWillUnmount() {
//     window.removeEventListener("resize", this.handleResize.bind(this));
//     console.log("fine art unmounting");
//   }

//   enterAnimation = () => {
//     let animationHeader = document.querySelector(".animation-header");

//     animationHeader.innerHTML = animationHeader.textContent.replace(
//       /\S/g,
//       "<span class='letter'>$&</span>"
//     );

//     anime.timeline().add({
//       targets: ".animation-header .letter",
//       translateX: [40, 0],
//       translatez: 0,
//       opacity: [0, 1],
//       easing: "easeInExpo",
//       duration: 800,
//       delay: (el, index) => 30 * index
//     });
//   };

//   mobileEnterAnimation = () => {
//     let animationHeader = document.querySelector(".mobile-animation-header");

//     animationHeader.innerHTML = animationHeader.textContent.replace(
//       /\S/g,
//       "<span class='letter'>$&</span>"
//     );

//     anime.timeline().add({
//       targets: ".mobile-animation-header .letter",
//       translateX: [40, 0],
//       translatez: 0,
//       opacity: [0, 1],
//       easing: "easeInExpo",
//       duration: 800,
//       delay: (el, index) => 30 * index
//     });
//   }

//   exitAnimation = (exit, selectAnimationHeader) => {
//     // this.setState({ animateEnter: false })

//     selectAnimationHeader.innerHTML = selectAnimationHeader.textContent.replace(
//       /\S/g,
//       "<span class='letter'>$&</span>"
//     );

//     anime.timeline().add({
//       targets: ".animation-header .letter",
//       duration: 1600,
//       easing: "easeOutExpo",
//       translateX: [0, -30],
//       opacity: [1, 0],
//       delay: (el, index) => 30 * index
//     });
//   };

//   mobileExitAnimation = (exit, selectAnimationHeader) => {
//     // this.setState({ animateEnter: false })

//     selectAnimationHeader.innerHTML = selectAnimationHeader.textContent.replace(
//       /\S/g,
//       "<span class='letter'>$&</span>"
//     );

//     anime.timeline().add({
//       targets: ".mobile-animation-header .letter",
//       duration: 1600,
//       easing: "easeOutExpo",
//       translateX: [0, -30],
//       opacity: [1, 0],
//       delay: (el, index) => 30 * index
//     });
//   };

//   render() {
//     return (
//       <LayoutContainer
//         className={this.state.mobileView ? "layout-container-mobile" : ""}
//       >
//         <MobileNavHeaderContainer
//           style={{ display: this.state.mobileView ? "" : "none" }}
//         >
//           <MobileNavHeaderLeft>
//           <TransitionLink
//                     className="hero-link-mobile"
//                     to="/"
//                     exit={{
//                       length: 1.8,
//                       trigger: ({ exit, node }) => {
//                         let animationHeader = node.querySelector(".mobile-animation-header");
//                         this.mobileExitAnimation(exit, animationHeader);
//                       }
//                     }}
//                     entry={{
//                       delay: 1.8,
//                       length: 0
//                     }}
//                   >
//                     Home
//                   </TransitionLink>
//             {/* <Link className="hero-link-mobile" to="/">
//               Home
//             </Link> */}
//           </MobileNavHeaderLeft>
//           <MobileNavHeaderCenter className="mobile-animation-header">FINE&nbsp;ART</MobileNavHeaderCenter>
//           <MobileNavHeaderRight>
//           <TransitionLink
//                     className="hero-link-mobile"
//                     to="/archive"
//                     exit={{
//                       length: 1.8,
//                       trigger: ({ exit, node }) => {
//                         let animationHeader = node.querySelector(".mobile-animation-header");
//                         this.mobileExitAnimation(exit, animationHeader);
//                       }
//                     }}
//                     entry={{
//                       delay: 1.8,
//                       length: 0
//                     }}
//                   >
//                     Archive
//                   </TransitionLink>
//             {/* <Link className="hero-link-mobile" to="/archive">
//               Archive
//             </Link> */}

//             <div className="hero-link-mobile" to="/fine-art">
//               Fine Art
//             </div>
//           </MobileNavHeaderRight>
//         </MobileNavHeaderContainer>

//         <MobileNavFooterContainer
//           style={{ display: this.state.mobileView ? "" : "none" }}
//         >
//           <MobileNavFooterLeft>
//             {" "}
//             <a
//               href="https://www.instagram.com/caleb_dudley/"
//               target="_blank"
//               className="hero-link-mobile"
//             >
//               Instagram
//             </a>
//             <Link className="hero-link-mobile">Email</Link>
//           </MobileNavFooterLeft>
//           <MobileNavFooterCenter className="hero-link-mobile">
//             Brooklyn, NY
//           </MobileNavFooterCenter>
//           <MobileNavFooterRight>
//           <TransitionLink
//                     className="hero-link-mobile"
//                     to="/about"
//                     exit={{
//                       length: 1.8,
//                       trigger: ({ exit, node }) => {
//                         let animationHeader = node.querySelector(".mobile-animation-header");
//                         this.mobileExitAnimation(exit, animationHeader);
//                       }
//                     }}
//                     entry={{
//                       delay: 1.8,
//                       length: 0
//                     }}
//                   >
//                     About
//                   </TransitionLink>
//             {/* <Link className="hero-link-mobile" to="/about">
//               About
//             </Link> */}
//             <Link className="hero-link-mobile">Contact</Link>
//           </MobileNavFooterRight>
//         </MobileNavFooterContainer>

//         <FineArtContainer
//           // className={this.state.mobileView ? "fine-art-mobile-container" : ""}
//           className={this.state.mobileView ? "digital-mobile-container" : ""}
//         >
//           {this.state.mobileView ? (
//             ""
//           ) : (
//             <HeroLeftContainer
//               style={{ display: this.state.mobileView ? "none" : "" }}
//             >
//               <HeaderContainer>
//                 <HeaderLeft>

//                   <TransitionLink
//                     className="hero-link"
//                     to="/"
//                     exit={{
//                       length: 1.8,
//                       trigger: ({ exit, node }) => {
//                         console.log("first log below");
//                         let animationHeader = node.querySelector(
//                           ".animation-header"
//                         );
//                         console.log(animationHeader);
//                         // let exitImage = node.querySelector(".hero-image-container")
//                         // let exitImage = document.querySelector(".hero-gallery-container")

//                         // this.exitHeroGallery(exit, exitImage)
//                         this.exitAnimation(exit, animationHeader);
//                       }
//                     }}
//                     entry={{
//                       delay: 1.8,
//                       length: 0
//                     }}
//                   >
//                     Home
//                   </TransitionLink>
//                   {/* <Link className="hero-link" to="/">
//                     Home
//                   </Link> */}
//                 </HeaderLeft>
//                 <HeaderRight>
//                   <TransitionLink
//                     className="hero-link"
//                     to="/archive"
//                     exit={{
//                       length: 1.8,
//                       trigger: ({ exit, node }) => {
//                         let animationHeader = node.querySelector(
//                           ".animation-header"
//                         );
//                         this.exitAnimation(exit, animationHeader);
//                       }
//                     }}
//                     entry={{
//                       delay: 1.8,
//                       length: 0
//                     }}
//                   >
//                     Archive
//                   </TransitionLink>

//                   <Link className="hero-link" to="/fine-art">
//                     Fine Art
//                   </Link>
//                 </HeaderRight>
//               </HeaderContainer>

//               <HeroCenter>
//                 <HeroHeader>
//                   <div className="animation-header">FINE ART</div>
//                 </HeroHeader>
//               </HeroCenter>
//               <FooterContainer>
//                 <FooterLeft>
//                   <a
//                     href="https://www.instagram.com/caleb_dudley/"
//                     target="_blank"
//                     className="hero-link"
//                   >
//                     Instagram
//                   </a>
//                   <Link className="hero-link" to="/">
//                     Email
//                   </Link>
//                 </FooterLeft>
//                 <FooterCenter>Brooklyn, NY</FooterCenter>
//                 <FooterRight>
//                   <TransitionLink
//                     className="hero-link"
//                     to="/about"
//                     exit={{
//                       length: 1.8,
//                       trigger: ({ exit, node }) => {
//                         let animationHeader = node.querySelector(
//                           ".animation-header"
//                         );
//                         this.exitAnimation(exit, animationHeader);
//                       }
//                     }}
//                     entry={{
//                       delay: 1.8,
//                       length: 0
//                     }}
//                   >
//                     About
//                   </TransitionLink>
//                   <Link className="hero-link" to="/">
//                     Contact
//                   </Link>
//                 </FooterRight>
//               </FooterContainer>
//             </HeroLeftContainer>
//           )}

//           <FineArtGallery
//             // heroGalleryContainer="hero-gallery-container"
//             width={this.state.mobileView ? "100% !important" : "50% !important"}
//             name={this.state.mobileView ? "mobile-gallery-container" : ""}
//             // background={this.state.mobileView ? "none" : ""}
//           />
//         </FineArtContainer>
//       </LayoutContainer>
//     );
//   }
// }

///////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import { Link } from "gatsby";
import "../components/styles.css";
import styled from "styled-components";
// import Layout from "../components/layout"
import FineArtGallery from "../components/fine-art-gallery";
// import MobileNav from "../components/mobile-nav"
import anime from "animejs/lib/anime.es.js";
import TransitionLink from "gatsby-plugin-transition-link";

const FineArtContainer = styled.div`
  display: flex;
  margin: 0;
  width: 100%;
  justify-content: flex-start;
`;

const FineArtHeader = styled.div`
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
  position: sticky;
  position: fixed;
  top: 0;
  display: flex;
  margin: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  z-index: 7000;
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
  position: sticky;
  bottom: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 10px;
  z-index: 7000;
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
export default class FineArt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileView: false,
      photosReady: false,
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
    console.log("enter normal");
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
    console.log("enter mobile");
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
    console.log(selectAnimationHeader);
    selectAnimationHeader.innerHTML = selectAnimationHeader.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    let selectAnimationHeaderLetters = document.querySelectorAll(".letter");
    console.log(selectAnimationHeaderLetters);

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
      delay: 800
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
    return (
      <>
        <LayoutContainer>
          <MobileNavHeaderContainer
            style={{ display: this.state.mobileView ? "" : "none" }}
          >
            <MobileNavHeaderLeft>
              <TransitionLink
                className="hero-link-mobile"
                to="/"
                exit={{
                  length: 2.2,
                  trigger: ({ exit, node }) => {
                    let animationHeader = node.querySelector(
                      ".mobile-animation-header"
                    );
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
            <MobileNavHeaderCenter className="mobile-animation-header">
              FINE&nbsp;ART
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

          <FineArtContainer
            className={this.state.mobileView ? "digital-mobile-container" : ""}
          >
            {this.state.mobileView ? (
              // <MobileNav heading={""} />
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
                        delay: 0,
                        trigger: () => {
                          console.log("trigger running");
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

                          console.log(animationHeader);
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
                    <div className="animation-header">FINE&nbsp;ART</div>
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
                    <Link className="hero-link" to="/cv">
                      C.V.
                    </Link>
                  </FooterRight>
                </FooterContainer>
              </HeroLeftContainer>
            )}
            <GalleryRight
              style={{ width: this.state.mobileView ? "100%" : "50%" }}
            >
              {this.state.photosReady ? (
                <FineArtGallery
                  
                  // width={
                  //   this.state.mobileView ? "100% !important" : "50% !important"
                  // }
                  name={this.state.mobileView ? "mobile-gallery-container" : ""}
                  
                  name={
                    this.state.mobileView
                      ? "fine-art-gallery-mobile"
                      : "gallery-desktop"
                  }
                />
              ) : (
                <div className="place-holder"></div>
              )}
            </GalleryRight>
          </FineArtContainer>
          <OpacityMaskEnter
            style={{
              opacity: this.state.opacityMaskEnterVisible ? "1" : "0",
              width: this.state.mobileView ? "100vw" : "",
              left: this.state.mobileView ? "0" : "",
              display: this.state.opacityMaskEnterDisplayed ? "" : "none"
            }}
          />
          <OpacityMaskExit
            className="opacity-mask-exit"
            style={{
              width: this.state.mobileView ? "100vw" : "",
              left: this.state.mobileView ? "0" : "",
              display: this.state.opacityMaskExitDisplayed ? "" : "none"
            }}
          />
        </LayoutContainer>
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
            <Link className="hero-link-mobile" to="/cv">C.V.</Link>
          </MobileNavFooterRight>
        </MobileNavFooterContainer>
      </>
    );
  }
}
