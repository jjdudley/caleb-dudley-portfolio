import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

let FooterContainer = styled.div`
  display: flex;
  margin: 0;

  width: 100%;
  justify-content: space-between;
`

let FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
`
let FooterCenter = styled.div``

let FooterRight = styled.div`
  display: flex;
  flex-direction: column;
`

const Footer = () => (
  <FooterContainer>
    <FooterLeft>
      <Link>Instagram</Link>
      <Link>Email</Link>
    </FooterLeft>
    <FooterCenter>Brooklyn, NY</FooterCenter>
    <FooterRight>
      <Link>About</Link>
      <Link>Contact</Link>
    </FooterRight>
  </FooterContainer>
)

export default Footer
