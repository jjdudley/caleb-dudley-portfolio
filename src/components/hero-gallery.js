import { Link } from "gatsby"
import React, { Component } from "react"
import styled from "styled-components"

import Main1 from "../image-components/main-1"


// let KentContainer = styled.div`
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   left: 10%;
//   top: 5%;
// `

class HeroGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stackCount: 1,
      main1Displayed: false,
      main2Displayed: false,
      main3Displayed: false,
      main4Displayed: false,
      main5Displayed: false,
      main6Displayed: false,
      main7Displayed: false,
      main8Displayed: false,
      main9Displayed: false,
      main10Displayed: false,
      main11Displayed: false,
      main12Displayed: false,
      main13Displayed: false,
      main14Displayed: false,
      main15Displayed: false,
      main16Displayed: false,
      main17Displayed: false,
    }
  }

  addToStack = () => {
    let currentStackCount = this.state.stackCount

    if (currentStackCount < 14) {
      this.setState({
        stackCount: currentStackCount + 1,
      })
    }

    if (this.state.stackCount === 1) {
      this.setState({
        main2Displayed: true,
      })
    } else if (this.state.stackCount === 2) {
      this.setState({
        main3Displayed: true,
      })
    } else if (this.state.stackCount === 3) {
      this.setState({
        main4Displayed: true,
      })
    } else if (this.state.stackCount === 4) {
      this.setState({
        main5Displayed: true,
      })
    } else if (this.state.stackCount === 5) {
      this.setState({
        main6Displayed: true,
      })
    } else if (this.state.stackCount === 6) {
      this.setState({
        main7Displayed: true,
      })
    } else if (this.state.stackCount === 7) {
      this.setState({
        main8Displayed: true,
      })
    } else if (this.state.stackCount === 8) {
      this.setState({
        main9Displayed: true,
      })
    } else if (this.state.stackCount === 9) {
      this.setState({
        main9Displayed: true,
      })
    } else if (this.state.stackCount === 10) {
      this.setState({
        main10Displayed: true,
      })
    } else if (this.state.stackCount === 11) {
      this.setState({
        main11Displayed: true,
      })
    } else if (this.state.stackCount === 12) {
      this.setState({
        main11Displayed: true,
      })
    } else if (this.state.stackCount === 13) {
      this.setState({
        main11Displayed: true,
      })
    }
  }

  render() {
    let HeroImageContainer = styled.div`
  
`

    const HeroRight = styled.div`
      position: ${this.props.position};
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(241, 241, 239);
      background-color: rgb(241, 241, 239);
      width: ${this.props.width};
      height: ${this.props.height};
      z-index: 1000;
    `
    return (
      <HeroRight onClick={this.addToStack} className={this.props.heroGalleryContainer}>
        <HeroImageContainer className={this.props.heroImageContainerClass}>
          <Main1 />
        </HeroImageContainer>

        {/* <KentContainer
          style={{ display: this.state.kentDisplayed ? "" : "none" }}
        >
          <Kent id="kent" />
        </KentContainer>

        <div style={{ display: this.state.dakotaTwoDisplayed ? "" : "none" }}>
          <DakotaTwo id="dakota-two" />
        </div>

        <div
          style={{ display: this.state.verhampThreeDisplayed ? "" : "none" }}
        >
          <VerhampThree id="verhamp-three" />
        </div>

        <div style={{ display: this.state.collageDisplayed ? "" : "none" }}>
          <Collage id="collage" />
        </div>

        <div style={{ display: this.state.sierraOneDisplayed ? "" : "none" }}>
          <SierraOne id="sierra-one" />
        </div>
        <div style={{ display: this.state.dakotaThreeDisplayed ? "" : "none" }}>
          <DakotaThree id="dakota-three" />
        </div>

        <div
          style={{ display: this.state.californiaOneDisplayed ? "" : "none" }}
        >
          <CaliforniaOne id="california-one" />
        </div>

        <div
          style={{
            display: this.state.californiaThreeDisplayed ? "" : "none",
          }}
        >
          <CaliforniaThree id="california-three" />
        </div>

        <div style={{ display: this.state.sethDisplayed ? "" : "none" }}>
          <Seth id="seth" />
        </div>

        <div style={{ display: this.state.dakotaFourDisplayed ? "" : "none" }}>
          <DakotaFour id="dakota-four" />
        </div>

        <div style={{ display: this.state.dakotaFourDisplayed ? "" : "none" }}>
          <VerhampOne
            id="verhamp-one"
            style={{ display: this.state.verhampOneDisplayed ? "" : "none" }}
          />
        </div>

        <div style={{ display: this.state.daltonOneDisplayed ? "" : "none" }}>
          <DaltonOne id="dalton-one" />
        </div>

        <div style={{ display: this.state.sierraTwoDisplayed ? "" : "none" }}>
          <SierraTwo id="sierra-two" />
        </div> */}
      </HeroRight>
    )
  }
}

export default HeroGallery
