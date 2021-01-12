import React, { Component } from "react";
import styled from "styled-components";
import Main1 from "../image-components/main-1";
import Main2 from "../image-components/main-2";
import Main3 from "../image-components/main-3";
import Main4 from "../image-components/main-4";
import Main5 from "../image-components/main-5";
import Main6 from "../image-components/main-6";
import Main7 from "../image-components/main-7";
import Main8 from "../image-components/main-8";
import Main9 from "../image-components/main-9";
import Main10 from "../image-components/main-10";
import Main11 from "../image-components/main-11";
import Main12 from "../image-components/main-12";
import Main13 from "../image-components/main-13";
import Main14 from "../image-components/main-14";
import Main15 from "../image-components/main-15";
import Main16 from "../image-components/main-16";
import Main17 from "../image-components/main-17";



class HeroGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stackCount: 1,
      items: [
        { main1Displayed: true },
        { main2Displayed: false },
        { main3Displayed: false },
        { main4Displayed: false },
        { main5Displayed: false },
        { main6Displayed: false },
        { main7Displayed: false },
        { main8Displayed: false },
        { main9Displayed: false },
        { main10Displayed: false },
        { main11Displayed: false },
        { main12Displayed: false },
        { main13Displayed: false },
        { main14Displayed: false },
        { main15Displayed: false },
        { main16Displayed: false },
        { main17Displayed: false }
      ]
    };
  }

  addToStack = async () => {
    console.log("stackCount:")
    console.log(this.state.stackCount);
    let currentStackCount = this.state.stackCount;
    let newCurrentStackCount;
    if (currentStackCount === 16 ) {
      newCurrentStackCount = 0;
    } else {
      newCurrentStackCount = currentStackCount + 1;
    }
    let newState = {
      stackCount: newCurrentStackCount,
      items: []
    };
    await this.state.items.map(item => {
      
      

      let newItem = Object.keys(item); // ex: newItem = main2Displayed
      if (this.state.items.indexOf(item) === currentStackCount) {
        
        let newStateObj = { [newItem]: true };
        console.log("the old item:")
        console.log(item)
        console.log("will be replaced with:");
        console.log(newStateObj);
        newState.items.push(newStateObj);
      } else {
        
        let newStateObj = { [newItem]: false };
        console.log("the old item:")
        console.log(item)
        console.log("will be replaced with:");
        console.log(newStateObj);
        newState.items.push(newStateObj);
      }
    });

    this.setState(newState);
    console.log(this.state);
  };

  componentDidMount = () => {
   setInterval(this.addToStack, 2000)
  }

  
  render() {
    let HeroImageContainer = styled.div``;

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
      z-index: 0;
    `;
    return (
      <HeroRight
        // onClick={this.addToStack}
        className={this.props.heroGalleryContainer}
      >
        <HeroImageContainer
          style={{ display: this.state.items[0].main1Displayed ? "" : "none" }}
          className={this.props.heroImageContainerClass}
        >
          <Main1 />
        </HeroImageContainer>
        <HeroImageContainer
          style={{ display: this.state.items[1].main2Displayed ? "" : "none" }}
          className={this.props.heroImageContainerClass}
        >
          <Main2 />
        </HeroImageContainer>
        <HeroImageContainer
          style={{ display: this.state.items[2].main3Displayed ? "" : "none" }}
          className={this.props.heroImageContainerClass}
        >
          <Main3 />
        </HeroImageContainer>
        <HeroImageContainer
          style={{ display: this.state.items[3].main4Displayed ? "" : "none" }}
          className={this.props.heroImageContainerClass}
        >
          <Main4 />
        </HeroImageContainer>
        <HeroImageContainer
          style={{ display: this.state.items[4].main5Displayed ? "" : "none" }}
          className={this.props.heroImageContainerClass}
        >
          <Main5 />
        </HeroImageContainer>
        <HeroImageContainer
          style={{ display: this.state.items[5].main6Displayed ? "" : "none" }}
          className={this.props.heroImageContainerClass}
        >
          <Main6 />
        </HeroImageContainer>
        <HeroImageContainer
          style={{ display: this.state.items[6].main7Displayed ? "" : "none" }}
          className={this.props.heroImageContainerClass}
        >
          <Main7 />
        </HeroImageContainer>
        <HeroImageContainer
          style={{ display: this.state.items[7].main8Displayed ? "" : "none" }}
          className={this.props.heroImageContainerClass}
        >
          <Main8 />
        </HeroImageContainer>
        <HeroImageContainer
          style={{ display: this.state.items[8].main9Displayed ? "" : "none" }}
          className={this.props.heroImageContainerClass}
        >
          <Main9 />
        </HeroImageContainer>
        <HeroImageContainer
          style={{ display: this.state.items[9].main10Displayed ? "" : "none" }}
          className={this.props.heroImageContainerClass}
        >
          <Main10 />
        </HeroImageContainer>
        <HeroImageContainer
          style={{
            display: this.state.items[10].main11Displayed ? "" : "none"
          }}
          className={this.props.heroImageContainerClass}
        >
          <Main11 />
        </HeroImageContainer>
        <HeroImageContainer
          style={{
            display: this.state.items[11].main12Displayed ? "" : "none"
          }}
          className={this.props.heroImageContainerClass}
        >
          <Main12 />
        </HeroImageContainer>
        <HeroImageContainer
          style={{
            display: this.state.items[12].main13Displayed ? "" : "none"
          }}
          className={this.props.heroImageContainerClass}
        >
          <Main13 />
        </HeroImageContainer>
        <HeroImageContainer
          style={{
            display: this.state.items[13].main14Displayed ? "" : "none"
          }}
          className={this.props.heroImageContainerClass}
        >
          <Main14 />
        </HeroImageContainer>
        <HeroImageContainer
          style={{
            display: this.state.items[14].main15Displayed ? "" : "none"
          }}
          className={this.props.heroImageContainerClass}
        >
          <Main15 />
        </HeroImageContainer>
        <HeroImageContainer
          style={{
            display: this.state.items[15].main16Displayed ? "" : "none"
          }}
          className={this.props.heroImageContainerClass}
        >
          <Main16 />
        </HeroImageContainer>
        <HeroImageContainer
          style={{
            display: this.state.items[16].main17Displayed ? "" : "none"
          }}
          className={this.props.heroImageContainerClass}
        >
          <Main17 />
        </HeroImageContainer>
      </HeroRight>
    );
  }
}

export default HeroGallery;
