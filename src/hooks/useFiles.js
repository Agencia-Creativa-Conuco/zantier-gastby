import { useStaticQuery, graphql } from "gatsby";

const useFiles = () => {
  //Obtiene las imágenes localmente desde la ruta "images/home"
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          id
          name
          publicURL
          relativeDirectory
          sourceInstanceName
          childImageSharp {
            gatsbyImageData(
              width: 1920
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  return allFile.nodes.reduce((obj, item) => {
    if (obj[item.relativeDirectory]) {
      return Object.assign(obj, {
        [item.relativeDirectory]: Object.assign(obj[item.relativeDirectory], {
          [item.name]: item,
        }),
      });
    }

    return Object.assign(obj, {
      [item.relativeDirectory]: {
        [item.name]: item,
      },
    });
  }, {});
};

export default useFiles;
