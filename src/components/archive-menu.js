// import { Link } from "gatsby"
// import React, { Component } from "react"
// import styled from "styled-components"
// import Anime from "react-anime"

// class ArchiveMenu extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {}
//   }

//   render() {
//     let ArchiveMenuContainer = styled.div`
//       position: relative;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//       width: ${this.props.width};
//       height: ${this.props.height};
//       background-color: rgb(241, 241, 239);
//       background: ${this.props.background};
//       z-index: 0;
//     `

//     const ArchiveMenuItem = styled.div`
//       display: flex;
//       margin: 10px 0;
//       font-family: orpheuspro, serif;
//       font-weight: 400;
//       font-style: normal;
//       font-size: 1.5rem;
//       text-transform: uppercase;
//       color: rgb(19, 19, 18);
//     `
//     return (
//       <ArchiveMenuContainer>
//         <ArchiveMenuItem>
//           <Anime
//           easing="easeInExpo"
//           duration={400}
//           opacity={[0, 1]}
//           delay={1300}
//           >
//             <TransitionLink
//                     className="hero-link"
//                     to="/digital"
//                     exit={{
//                       length: 1.8,
//                       trigger: ({ exit, node }) => {
//                         console.log("first log below");
//                         let animationHeader = node.querySelector(
//                           ".animation-header"
//                         );
//                         console.log(animationHeader);
//                         // let exitImage = node.querySelector(".hero-image-container")
//                         // let exitImage = document.querySelector(".hero-gallery-container")

//                         // this.exitHeroGallery(exit, exitImage)
//                         this.exitAnimation(exit, animationHeader);
//                       }
//                     }}
//                     entry={{
//                       delay: 1,
//                       length: 0
//                     }}
//                   >
//                     Digital
//                   </TransitionLink>
//           {/* <Link className="archive-menu-link" id={this.props.digitalId} to="/digital">
//             Digital
//           </Link> */}
//           </Anime>
          
//         </ArchiveMenuItem>
//         <ArchiveMenuItem>
//           <Anime
//           easing="easeInExpo"
//           duration={400}
//           opacity={[0, 1]}
//           delay={1700}
//           >
//             <Link className="archive-menu-link" id={this.props.analogId} to="/analog">
//               Analog
//             </Link>
//           </Anime>
          
//         </ArchiveMenuItem>
//         <ArchiveMenuItem>
//         <Anime
//           easing="easeInExpo"
//           duration={400}
//           opacity={[0, 1]}
//           delay={2100}
//           >
//           <Link className="archive-menu-link" id={this.props.videoId} to="/video">
//             Video
//           </Link>
//           </Anime>
//         </ArchiveMenuItem>
//       </ArchiveMenuContainer>
//     )
//   }
// }

// export default ArchiveMenu
