import { css } from "@emotion/react";
import colors from "./colors";
export const h1 = css`
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.138888889;
`;

export const h2 = css`
  font-size: 1.5rem;
`;

export const h3 = css`
  font-size: 1.3rem;
`;

export const h4 = css`
  font-size: 1.2rem;
`;

export const h5 = css`
  font-size: 1.1rem;
`;

export const h6 = css`
  font-size: 1rem;
`;

const tipography = css`
  main {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .faux-heading {
    font-feature-settings: "lnum";
    font-variant-numeric: lining-nums;
    font-weight: 700;
    letter-spacing: -0.0415625em;
    line-height: 1.25;
    margin: 2rem 0 1rem;
    color: ${colors.primary.base};
  }

  h1,
  .heading-size-1 {
    ${h1}
  }

  h2,
  .heading-size-2 {
    ${h2}
  }

  h3,
  .heading-size-3 {
    ${h3}
  }

  h4,
  .heading-size-4 {
    ${h4}
  }

  h5,
  .heading-size-5 {
    ${h5}
  }

  h6,
  .heading-size-6 {
    letter-spacing: 0.03125em;
    text-transform: uppercase;
    ${h6}
  }
`;
const subtitle = ({ hideDeco }) => css`
  ${h2}
  text-align: center;
  position: relative;
  text-transform: uppercase;
  color: ${colors.text.base};
  margin: 0;
  margin-bottom: 2.5rem;
  ${hideDeco
    ? css``
    : css`
        &:after {
          content: "_______ __";
          color: ${colors.yellow.base};
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translate(-50%, -0.25rem);
          font-weight: 900;
          line-height: 0;
          height: 0;
          width: 50%;
        }
      `}
`;

export default tipography;

export { subtitle };
