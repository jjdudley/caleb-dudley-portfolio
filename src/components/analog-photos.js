import React, {Component} from 'react';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';
import Lightbox from './analog-lightbox';
// import { html } from 'common-tags';
// import { pathToArray } from 'graphql/jsutils/Path';

// const AnalogPhotos = () => (
//   <StaticQuery
//   query={graphql`
//   query {
//     analogImages: allFile(filter: { relativeDirectory: { eq: "archive/analog" } }, sort: {order: ASC, fields: name}) {
//       edges {
//         node {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `}
// render={data => <Lightbox analogImages={data.analogImages.edges} />}
//   />


// );




// const AnalogPhotos = () => (
//        <StaticQuery
//         query={graphql`
//             query {
//                 analogImages: allMarkdownRemark(filter: { frontmatter: { type: {eq: "analog"} } }, sort: {order: ASC, fields: frontmatter___path}) {
//                     edges {
//                         node {
//                             frontmatter {
//                                 path
//                                 caption
//                                 galleryImage {
//                                     childImageSharp {
//                                         fluid {
//                                             ...GatsbyImageSharpFluid
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         `
//     }

// render={data => <Lightbox  analogImages={data.analogImages.edges} />}
// />
// )


// export default AnalogPhotos;


const AnalogPhotos = (props) => (
       <StaticQuery
        query={graphql`
            query {
                analogImages: allMarkdownRemark(filter: { frontmatter: { type: {eq: "analog"} } }, sort: {order: ASC, fields: frontmatter___path}) {
                    edges {
                        node {
                            frontmatter {
                                path
                                caption
                                galleryImage {
                                    childImageSharp {
                                        fluid {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `
    }

render={data => <Lightbox  name={props.name} analogImages={data.analogImages.edges} />}
/>
)


export default AnalogPhotos;





    