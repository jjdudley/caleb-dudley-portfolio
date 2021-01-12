import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Lightbox from './analog-lightbox';


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
                                mobileWidth
                                mobilePaddingLeft
                                mobilePaddingRight
                                galleryImage {
                                    childImageSharp {
                                        fluid(maxWidth: 2000) {
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

render={data => <Lightbox closeDialogButton={props.closeDialogButton} mobileView={props.mobileView} dialogBox={props.dialogBox} lightboxId={props.lightboxId} name={props.name} mobileView={props.mobileView} analogImages={data.analogImages.edges} />}
/>
)


export default AnalogPhotos;





    