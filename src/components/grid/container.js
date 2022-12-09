import { css } from "@emotion/react";
import mq from "./mq";

//Max Witdhs para contenedores no fluids
const mwSM = "540px";
const mwMD = "720px";
const mwLG = "960px";
const mwXL = "1140px";

export { mwSM, mwMD, mwLG, mwXL };

const container = ({
  fluid,
  fluidLg,
  thin,
  small,
  medium = true,
  large,
  space,
  spaceTop,
  spaceBottom,
  maxWidth,
}) => css`
  width: 100%;
  max-width: ${maxWidth ?? `90%`};
  position: relative;
  margin: 0 auto;
  //Tipo de contenedor
  ${!fluid
    ? css`
        ${mq.lg} {
          max-width: 70%;
        }
      `
    : css``}
  ${fluidLg
    ? css`
        ${mq.lg} {
          max-width: initial;
        }
      `
    : css``}
  //Configuracion de espacios para dividir secciones
    ${thin
    ? css`
        ${space || spaceBottom
          ? css`
              margin-bottom: 2rem;
            `
          : css``}
        ${space || spaceTop
          ? css`
              margin-top: 2rem;
            `
          : css``}
      `
    : small
    ? css`
        ${space || spaceBottom
          ? css`
              margin-bottom: 4rem;
            `
          : css``}
        ${space || spaceTop
          ? css`
              margin-top: 4rem;
            `
          : css``}
      `
    : medium && !large
    ? css`
        ${space || spaceBottom
          ? css`
              margin-bottom: 6.5rem;
            `
          : css``}
        ${space || spaceTop
          ? css`
              margin-top: 6.5rem;
            `
          : css``}
      `
    : large
    ? css`
        ${space || spaceBottom
          ? css`
              margin-bottom: 8rem;
            `
          : css``}
        ${space || spaceTop
          ? css`
              margin-top: 8rem;
            `
          : css``}
      `
    : css``}
`;

export default container;
