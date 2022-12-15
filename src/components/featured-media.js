import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { mq } from "./grid/index";
import colors from "./styles/colors";

const FeaturedMedia = ({
  state,
  media,
  position,
  className,
  bgColor,
  height,
  heightSM,
  heightMD,
  heightLG,
  heightXL,
  size,
  sizeSM,
  sizeMD,
  sizeLG,
  sizeXL,
  loading = "lazy",
  fit = "cover",
  maxWidth,
  mxAuto,
  zIndex,
  rounded = false,
  alt,
  ...props
}) => {
  const isSized =
    height ||
    heightSM ||
    heightMD ||
    heightLG ||
    heightXL ||
    size ||
    sizeSM ||
    sizeMD ||
    sizeLG ||
    sizeXL;

  if (!media) return null;

  const mediaG = getImage(media);

  return (
    <Container
      {...{
        height,
        heightSM,
        heightMD,
        heightLG,
        heightXL,
        size,
        sizeSM,
        sizeMD,
        sizeLG,
        sizeXL,
        position,
        className,
        zIndex,
        rounded,
        //asigna color gris si se pasa bgColor sin valor
        bgColor: bgColor === true ? colors.gray.light : bgColor,
        ...props,
      }}
    >
      <SImage
        image={mediaG}
        alt={alt || media.altText || media.name}
        isSized={isSized}
        loading={loading}
        objectPosition="center center"
        objectFit="cover"
      />
    </Container>
  );
};

export default FeaturedMedia;

const Container = styled.div`
  ${({
    height,
    heightSM,
    heightMD,
    heightLG,
    heightXL,
    size,
    sizeSM,
    sizeMD,
    sizeLG,
    sizeXL,
    bgColor,
    zIndex,
    rounded,
  }) => css`
    ${rounded
      ? css`
          border-radius: 50%;
          overflow: hidden;
        `
      : css``}
    position: relative;
    ${bgColor
      ? css`
          background-color: ${bgColor};
        `
      : css``}
    z-index: ${zIndex};
    ${size && size !== true
      ? css`
          padding-bottom: ${size};
        `
      : ""}
    ${mq.sm} {
      ${sizeSM && sizeSM !== true
        ? css`
            padding-bottom: ${sizeSM};
          `
        : ""}
    }
    ${mq.md} {
      ${sizeMD && sizeMD !== true
        ? css`
            padding-bottom: ${sizeMD};
          `
        : ""}
    }
    ${mq.lg} {
      ${sizeLG && sizeLG !== true
        ? css`
            padding-bottom: ${sizeLG};
          `
        : ""}
    }
    ${mq.xl} {
      ${sizeXL && sizeXL !== true
        ? css`
            padding-bottom: ${sizeXL};
          `
        : ""}
    }
    ${height && height !== true
      ? css`
          height: ${height};
        `
      : ""}
    ${mq.sm} {
      ${heightSM && heightSM !== true
        ? css`
            height: ${heightSM};
          `
        : ""}
    }
    ${mq.md} {
      ${heightMD && heightMD !== true
        ? css`
            height: ${heightMD};
          `
        : ""}
    }
    ${mq.lg} {
      ${heightLG && heightLG !== true
        ? css`
            height: ${heightLG};
          `
        : ""}
    }
    ${mq.xl} {
      ${heightXL && heightXL !== true
        ? css`
            height: ${heightXL};
          `
        : ""}
    }
  `}
`;

const SImage = styled(GatsbyImage)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  img {
    width: 100% !important;
    height: 100% !important;
  }
`;
