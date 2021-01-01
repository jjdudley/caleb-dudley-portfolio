import { graphql, useStaticQuery } from "gatsby";

// const useAnalogGallery = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allFile( filter: { relativeDirectory: { eq: "archive/analog" } }, sort: {order: ASC, fields: name}) {
//         nodes {
//           id
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   `);

//   return data.allFile.nodes.map(node => ({
//     ...node.childImageSharp,
//     id: node.id,
//   }));
// };



// const useAnalogGallery = () => {
//     const data = useStaticQuery(graphql`
//             query {
//                 allMarkdownRemark (filter: {frontmatter: {type: {eq: "analog"}}}) {
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
//     )

//     return data.allMarkdownRemark.nodes.map(node => ({
//             ...node.childImageSharp,
//             id: node.id,
//             caption: node.frontmatter.caption,
//           }));
// }

// export default useAnalogGallery;