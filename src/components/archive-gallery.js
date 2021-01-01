import { Link } from "gatsby"
import React, { Component } from "react"
import styled from "styled-components"



let ArchiveGalleryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 100%;
  background-color: rgb(241, 241, 239);
  padding-top: 50px;
`

const ArchiveRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 30px 0;
`

class ArchiveGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <ArchiveGalleryContainer>
        <ArchiveRow>
          
        </ArchiveRow>
        <ArchiveRow></ArchiveRow>
        <ArchiveRow></ArchiveRow>
        <ArchiveRow></ArchiveRow>
        <ArchiveRow></ArchiveRow>
        <ArchiveRow></ArchiveRow>
        <ArchiveRow></ArchiveRow>
        <ArchiveRow></ArchiveRow>
        <ArchiveRow></ArchiveRow>
        <ArchiveRow></ArchiveRow>
        <ArchiveRow></ArchiveRow>
        <ArchiveRow></ArchiveRow>
        <ArchiveRow></ArchiveRow>
        <ArchiveRow></ArchiveRow>
        <ArchiveRow></ArchiveRow>
      </ArchiveGalleryContainer>
    )
  }
}

export default ArchiveGallery
