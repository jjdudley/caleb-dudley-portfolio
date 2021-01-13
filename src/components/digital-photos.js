import React from 'react';
import { StaticQuery, graphql} from 'gatsby';
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
                                mobilePaddingLeft
                                mobilePaddingRight
                                galleryImage {
                                    childImageSharp {
                                        fluid(maxWidth: 2000, quality: 60) {
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

render={data => <Lightbox closeDialogButton={props.closeDialogButton} mobileView={props.mobileView} dialogBox={props.dialogBox} lightboxId={props.lightboxId} name={props.name} digitalImages={data.digitalImages.edges} />}
/>
)


export default DigitalPhotos;