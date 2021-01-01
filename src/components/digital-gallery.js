// import { Link } from "gatsby"
// import React, { Component } from "react"
// import styled from "styled-components"
// import Gallery from '@browniebroke/gatsby-image-gallery'
// import '@browniebroke/gatsby-image-gallery/dist/style.css'
// import { graphql, useStaticQuery } from 'gatsby'
// // import Digital1 from "../image-components/digital-1"
// // import Digital2 from "../image-components/digital-2"
// // import Digital3 from "../image-components/digital-3"
// // import Digital4 from "../image-components/digital-4"
// // import Digital5 from "../image-components/digital-5"
// // import Digital6 from "../image-components/digital-6"
// // import Digital7 from "../image-components/digital-7"
// // import Digital8 from "../image-components/digital-8"
// // import Digital9 from "../image-components/digital-9"
// // import Digital10 from "../image-components/digital-10"
// // import Digital11 from "../image-components/digital-11"
// // import Digital12 from "../image-components/digital-12"
// // import Digital13 from "../image-components/digital-13"
// // import Digital14 from "../image-components/digital-14"
// // import Digital15 from "../image-components/digital-15"
// // import Digital16 from "../image-components/digital-16"
// // import Digital17 from "../image-components/digital-17"
// // import Digital18 from "../image-components/digital-18"
// // import Digital19 from "../image-components/digital-19"
// // import Digital20 from "../image-components/digital-20"
// // import Digital21 from "../image-components/digital-21"
// // import Digital22 from "../image-components/digital-22"
// // import Digital23 from "../image-components/digital-23"
// // import Digital24 from "../image-components/digital-24"
// // import Digital25 from "../image-components/digital-25"
// // import Digital26 from "../image-components/digital-26"
// // import Digital27 from "../image-components/digital-27"
// // import Digital28 from "../image-components/digital-28"
// // import Digital29 from "../image-components/digital-29"
// // import Digital30 from "../image-components/digital-30"
// // import Digital31 from "../image-components/digital-31"
// // import Digital32 from "../image-components/digital-32"
// // import Digital33 from "../image-components/digital-33"
// // import Digital34 from "../image-components/digital-34"
// // import Digital35 from "../image-components/digital-35"
// // import Digital36 from "../image-components/digital-36"
// // import Digital37 from "../image-components/digital-37"



// const GalleryContainer = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   width: 50%;
//   min-height: 100%;
//   background-color: rgb(241, 241, 239);
//   padding-top: 50px;
// `

// // const GalleryRow = styled.div`
// //   display: flex;
// //   justify-content: space-between;
// //   width: 100%;
// //   padding: 0 11%;
// //   margin: 20px 0;
// //   border: 1px solid black;
// // `

// // const ImageContainer = styled.div`

// //   width: 22%;
// // `



// const DigitalGallery = ({data}) => {
   

//    const images = data.allFile.edges.map(({ node }) => node.childImageSharp
//    )
  
//   //  const lightboxOptions = {

//   //  }

//     return (
//       <GalleryContainer>

//         <Gallery images={images} />
//         <GalleryRow><ImageContainer><Digital1/></ImageContainer><ImageContainer><Digital2/></ImageContainer><ImageContainer><Digital5/></ImageContainer><ImageContainer><Digital6/></ImageContainer></GalleryRow>
//         <GalleryRow><ImageContainer><Digital5/></ImageContainer><ImageContainer><Digital6/></ImageContainer><ImageContainer><Digital7/></ImageContainer><ImageContainer><Digital8/></ImageContainer></GalleryRow>
//       </GalleryContainer>
//     )
// }

// export const query = graphql`
//   query ImagesForGallery {
//     allFile {
//       edges {
//         node {
//           childImageSharp {
//             thumb: fluid(maxWidth: 270, maxHeight: 270) {
//               ...GatsbyImageSharpFluid
//             }
//             full: fluid(maxWidth: 1024) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

// export default DigitalGallery