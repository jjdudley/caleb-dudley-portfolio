import { graphql, useStaticQuery } from "gatsby";

const useDigitalGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile( filter: { relativeDirectory: { eq: "archive/Digital" } }, sort: {order: ASC, fields: name}) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return data.allFile.nodes.map(node => ({
    ...node.childImageSharp,
    id: node.id,
  }));
};

export default useDigitalGallery;