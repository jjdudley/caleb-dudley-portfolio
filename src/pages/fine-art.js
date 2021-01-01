import React, { Component } from "react"
import { Link } from "gatsby"
import "../components/styles.css"
import styled from "styled-components"
// import Layout from "../components/layout"
import FineArtGallery from "../components/fine-art-gallery"
// import HeroLeft from "../components/hero-left"
import Anime from "react-anime"
import anime from 'animejs/lib/anime.es.js';
import MobileNav from "../components/mobile-nav"
import TransitionLink from 'gatsby-plugin-transition-link'



const FineArtContainer = styled.div`
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




// const FineArtHeader = styled.div`
//   font-family: orpheuspro, serif;
//   font-weight: 400;
//   font-style: regular;
//   font-size: 4.4rem;
//   text-transform: uppercase;
//   height: 80px;
//   display: flex;
//   align-items: center;
// `

// const GalleryRight = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 50%;
//   padding: 1%;
// `











// const HeroCenter = styled.div`

//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   justify-content: center;
//   align-items: center;
  
// `

// const HeroLeftContainer = styled.div`
// position: sticky;
// top: 0;
// background-color: rgb(19, 19, 18);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   width: 50%;
//   padding: 20px;
//   height: 100vh;
// `


// let HeaderContainer = styled.div`
  
//   display: flex;
//   margin: 0;
//   width: 100%;
//   justify-content: space-between;
// `

// let HeaderLeft = styled.div`
//   display: flex;
//   flex-direction: column;
// `

// let HeaderRight = styled.div`
//   display: flex;
//   flex-direction: column;
// `

// let LinkContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   transition: color 0.3s ease-out;
//   &:hover {
//     cursor: pointer;
//     transition: color 0.2s ease-out;
//   }
// `
// let FooterContainer = styled.div`
 
//   display: flex;

//   width: 100%;
//   justify-content: space-between;
// `

// let FooterLeft = styled.div`
//   display: flex;
//   flex-direction: column;
// `
// let FooterCenter = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// let FooterRight = styled.div`
//   display: flex;
//   flex-direction: column;
// `


const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: orange;
  z-index: 7000;
`






export default class FineArt extends Component {
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
      this.setState({
        mobileView: false,
      })
    }
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener("resize", this.handleResize.bind(this))
    console.log("fine art mounting")
    
    this.enterAnimation()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this))
    console.log("fine art unmounting")
  }


  enterAnimation = () => {
    let animationHeader = document.querySelector(".animation-header")
  
   
    animationHeader.innerHTML = animationHeader.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
   
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
    // this.setState({ animateEnter: false })

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

    console.log("FINE ART IS RENDERINGGGGGG")
    // let MobileNavHeaderContainer = styled.div`
    //   position: sticky;
    //   top: 10px;
    //   display: flex;
    //   margin: 0;
    //   width: 100%;
    //   justify-content: space-between;
    //   padding: 0 10px;
    //  z-index: 4000;
    // `

    // let MobileNavHeaderLeft = styled.div`
    //   display: flex;
    //   flex-direction: column;
    //   z-index: 2000;
    //   height: 100%;
    //   justify-content: center;
    //   align-items: center;
    
      
    //   margin: 0;
    //   &:hover {
    //     cursor: pointer;
    //   }
    // `

    // let MobileNavHeaderCenter = styled.div`
    //   display: flex;
    //   color: rgb(19, 19, 18);
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   font-size: 1.2rem;
    //   text-transform: uppercase;
    // `

    // let MobileNavHeaderRight = styled.div`
    //   display: flex;
    //   flex-direction: column;
    //   z-index: 2000;
    //   &:hover {
    //     cursor: pointer;
    //   }
    // `
    // let MobileNavFooterContainer = styled.div`
    //   position: sticky;
    //   top: 91%;
    //   display: flex;
    //   width: 100%;
    //   justify-content: space-between;
    //   padding: 0 10px;
    //   z-index: 2000;
    // `

    // let MobileNavFooterLeft = styled.div`
    //   display: flex;
    //   flex-direction: column;
    //   background: transparent;
    // `

    // let MobileNavFooterCenter = styled.div`
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   background: transparent;
    // `
    // // let MobileNavFooterCenter = styled.div`
    // //   display: flex;
    // //   justify-content: center;
    // //   align-items: center;
    // //   color: rgb(19, 19, 18);
    // // `

    // let MobileNavFooterRight = styled.div`
    //   display: flex;
    //   flex-direction: column;
    // `

    return (
      <LayoutContainer>

    <FineArtContainer>
          {this.state.mobileView ? (
            <MobileNav heading={"Fine Art"} />
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
                  {/* <Link className="hero-link" to="/">
                    Home
                  </Link> */}
                </HeaderLeft>
                <HeaderRight>

                 
                  <Link className="hero-link" to="/archive">
                    Archive
                  </Link>


                {/* <TransitionLink 
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
                  </TransitionLink> */}
                  <Link className="hero-link" to="/fine-art">
                    Fine Art
                  </Link>
                </HeaderRight>
              </HeaderContainer>

              <HeroCenter>
               
                <HeroHeader>
                  <div className="animation-header">FINE ART
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
          
          <FineArtGallery
            // heroGalleryContainer="hero-gallery-container"
            // width={this.state.mobileView ? "100% !important" : "50% !important"}
            // background={this.state.mobileView ? "none" : ""}
          />
          <OpacityFilter className="opacity-filter"/>
        </FineArtContainer>


      </LayoutContainer>
    )
  }
}