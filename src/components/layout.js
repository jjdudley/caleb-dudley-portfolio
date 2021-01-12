import React, {Component} from "react"
import styled from "styled-components"
import "./styles.css"

export default class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const LayoutContainer = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      
      
    `

   
    return (
      <LayoutContainer>
        {/* <Header/> */}
        <main>{this.props.children}</main>
        {/* <Footer/> */}
      </LayoutContainer>
    )
  }
}

