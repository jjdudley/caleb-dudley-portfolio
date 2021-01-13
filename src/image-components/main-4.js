import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";


const Image = styled(Img)`
  width: 400px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  z-index: 999;
`;

const Main4 = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "main/Main04.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);
  
    return <Image alt="street and fashion photography by caleb dudley in new york city" loading="eager" fluid={data.placeholderImage.childImageSharp.fluid} />;
  };
  
  export default Main4;