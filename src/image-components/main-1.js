import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";


const Image = styled(Img)`
  width: 100%;
  height: auto !important;
  margin-top: 10px;
  margin-bottom: 10px;
  z-index: 999;
`;

const Main1 = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "main/Main01.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);
  
    return <Image fluid={data.placeholderImage.childImageSharp.fluid} />;
  };
  
  export default Main1;