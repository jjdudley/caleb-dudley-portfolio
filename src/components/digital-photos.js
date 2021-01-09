import React, {Component} from 'react';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';
import Lightbox from './digital-lightbox';


const DigitalPhotos = (props) => (
       <StaticQuery
        query={graphql`
            query {
                digitalImages: allMarkdownRemark(filter: { frontmatter: { type: {eq: "digital"} } }, sort: {order: ASC, fields: frontmatter___path}) {
                    edges {
                        node {
                            frontmatter {
                                path
                                caption
                                mobileWidth
                                mobileMarginRight
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

render={data => <Lightbox  name={props.name} digitalImages={data.digitalImages.edges} />}
/>
)


export default DigitalPhotos;