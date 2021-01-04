import React, { Component } from "react"
import styled from "styled-components"
import ReactPlayer from 'react-player/lazy'


// const VideoWrapper = styled.div`
//     width: 300px;
//     border: 1px solid red;
// `
// const VideoFrame = ({ videoSrcURL, videoTitle, ...props }) => (
//   <VideoWrapper>
//     <iframe
//       src={videoSrcURL}
//       title={videoTitle}
//     //   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//       frameBorder="0"
//       webkitallowfullscreen="true"
//       mozallowfullscreen="true"
//       allowFullScreen
//       width="300"
//     />
//   </VideoWrapper>
// )

export default class ResponsivePlayer extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          className='react-player'
          url={this.props.playerurl}
          width='100%'
          height='100%'
        />
      </div>
    )
  }
}
