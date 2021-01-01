import React from "react"
import "../components/styles.css"
import styled from "styled-components"
import Layout from "../components/layout"
import AboutContent from "../components/about-content"
import HeroLeft from "../components/hero-left"

const AboutContainer = styled.div`
  display: flex;
  margin: 0;
  width: 100%;
  justify-content: center;
`

const AboutHeader = styled.div`
font-family: orpheuspro, serif;
font-weight: 400;
font-style: regular;
font-size: 4.4rem;
text-transform: uppercase;
  height: 80px;
  display: flex;
  align-items: center;
`


export default function About() {
  return (
    <Layout>
      <AboutContainer>
        <HeroLeft>
          <AboutHeader>About</AboutHeader>
        </HeroLeft>
        <AboutContent/>
      </AboutContainer>
    </Layout>
  )
}