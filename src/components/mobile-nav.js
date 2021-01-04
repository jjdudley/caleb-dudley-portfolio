import { Link } from "gatsby"
import React, { Component } from "react"
import styled from "styled-components"

const MobileNavContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  height: 100vh;
  background-color: rgb(241, 241, 239);
  z-index: 2000;
  background: none;
  border: 1px solid red;
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

let MobileNavHeaderContainer = styled.div`
  position: sticky;
  top: 10px;
  display: flex;
  margin: 0;
  width: 100%;
  justify-content: space-between;
`

let MobileNavHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2000;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0;
  &:hover {
    cursor: pointer;
  }
`

let MobileNavHeaderCenter = styled.div`
  display: flex;
  color: rgb(19, 19, 18);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-transform: uppercase;
`



let MobileNavHeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  
  z-index: 2000;
  &:hover {
    cursor: pointer;
  }
`

// let LinkContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   transition: color 0.3s ease-out;
//   &:hover {
//     cursor: pointer;
//     transition: color 0.2s ease-out;
//   }
// `
let MobileNavFooterContainer = styled.div`
  display: flex;

  width: 100%;
  justify-content: space-between;
  z-index: 2000;
`

let MobileNavFooterLeft = styled.div`
  display: flex;
  flex-direction: column;
`
let MobileNavFooterCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(19, 19, 18);
`

let MobileNavFooterRight = styled.div`
  display: flex;
  flex-direction: column;
`

class MobileNav extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <MobileNavContainer>
        <MobileNavHeaderContainer>
          <MobileNavHeaderLeft>
            <Link className="hero-link-mobile" to="/">
              Home
            </Link>
          </MobileNavHeaderLeft>
          <MobileNavHeaderCenter>{this.props.heading}</MobileNavHeaderCenter>
          <MobileNavHeaderRight>
            <Link className="hero-link-mobile" to="/archive">
              Archive
            </Link>
            <Link className="hero-link-mobile" to="/fine-art">
              Fine Art
            </Link>
          </MobileNavHeaderRight>
        </MobileNavHeaderContainer>

        <MobileNavFooterContainer>
          <MobileNavFooterLeft>
            <a
              href="https://www.instagram.com/caleb_dudley/"
              target="_blank"
              className="hero-link-mobile"
            >
              Instagram
            </a>
            <Link className="hero-link-mobile">Email</Link>
          </MobileNavFooterLeft>
          <MobileNavFooterCenter>Brooklyn, NY</MobileNavFooterCenter>
          <MobileNavFooterRight>
            <Link className="hero-link-mobile" to="/about">
              About
            </Link>
            <Link className="hero-link-mobile">Contact</Link>
          </MobileNavFooterRight>
        </MobileNavFooterContainer>
      </MobileNavContainer>
    )
  }
}

export default MobileNav;
