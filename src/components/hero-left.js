import { Link } from "gatsby"
import React, { Component } from "react"
import styled from "styled-components"

// import TransitionLink from 'gatsby-plugin-transition-link'


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

// const HeroRight = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 50%;
//   height: 100vh;
//   background-color: rgb(241, 241, 239);
// `

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
const HeroLeft = ({ children }) => {
  return (
    <HeroLeftContainer>
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


          <Link className="hero-link" to="/" >
            Home
          </Link>
        </HeaderLeft>
        <HeaderRight>
          <Link className="hero-link" to="/archive">
            Archive
          </Link>
          <Link className="hero-link" to="/fine-art">
            Fine Art
          </Link>
        </HeaderRight>
      </HeaderContainer>

      <HeroCenter>
        {/* <HeroHeader>CALEB DUDLEY</HeroHeader>
            <HeroSubcaption>
              <h3 className="hero-subcaption">Photo</h3>

              <h3 className="hero-subcaption">&</h3>

              <h3 className="hero-subcaption">Video</h3>
            </HeroSubcaption> */}
        {children}
      </HeroCenter>
      <FooterContainer>
        <FooterLeft>
          <a href="https://www.instagram.com/caleb_dudley/" target="_blank" className="hero-link">Instagram</a>
          <Link className="hero-link">Email</Link>
        </FooterLeft>
        <FooterCenter>Brooklyn, NY</FooterCenter>
        <FooterRight>
          <Link className="hero-link" to="/about">About</Link>
          <Link className="hero-link">Contact</Link>
        </FooterRight>
      </FooterContainer>
    </HeroLeftContainer>
  )
}

export default HeroLeft
