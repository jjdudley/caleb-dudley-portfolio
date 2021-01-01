import React from "react"
import styled from "styled-components"

const VideoWrapper = styled.div`
    width: 300px;
    border: 1px solid red;
`
const VideoFrame = ({ videoSrcURL, videoTitle, ...props }) => (
  <VideoWrapper>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
    //   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width="300"
    />
  </VideoWrapper>
)
export default VideoFrame