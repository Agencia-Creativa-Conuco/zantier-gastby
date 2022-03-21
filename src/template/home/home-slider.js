import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "../../components/featured-media";
import { LeftArrowIcon, RightArrowIcon } from "../../components/icons";
import { container, mq } from "../../components/layout/index";
import useFiles from "../../hooks/useFiles";
import Carousel from "react-slick";
import { css } from "@emotion/react";

const HomeSlider = () => {
  const images = useFiles();

  const data = [
    {
      featuredImage: images.home.img,
    },
    {
      featuredImage: images.home.img2,
    },
  ];

  const Arrows = (props) => {
    const Arrow = styled.div`
      ${({ bgColor = "#9f9f9f", color = "#e5e7e3" }) => css`
        border-radius: 50%;
        background-color: ${bgColor};
        color: ${color};
        margin: 0 3rem;
        z-index: 2;
        position: absolute;
        top: 50%;

        ${mq.md} {
          display: block !important;
          width: 5rem;
          height: 5rem;
          padding: 1rem;
          margin: 0 1rem;
        }
        ${mq.xl} {
          margin: 0 -6rem;
        }
        &:focus {
          background-color: ${bgColor};
          color: ${color};
        }
        &:hover {
          background-color: ${bgColor};
          color: ${color};
        }
        &:before {
          content: initial;
        }
      `}
    `;

    return <Arrow {...props} />;
  };
  return (
    <Section>
      <Container>
        <Carousel
          prevArrow={
            <Arrows>
              <LeftArrowIcon />
            </Arrows>
          }
          nextArrow={
            <Arrows>
              <RightArrowIcon />
            </Arrows>
          }
        >
          {data.map((item, key) => {
            return <FeaturedMedia key={key} media={item.featuredImage} size="60.25%" />;
          })}
        </Carousel>
      </Container>
    </Section>
  );
};

export default HomeSlider;

const Section = styled.section`
  padding-bottom: 6.6rem;
  padding-top: 6.6rem;
  background: #f4f7fc;

  ${mq.md} {
    padding-bottom: 9.5rem;
    padding-top: 9.5rem;
  }
`;

const Container = styled.div`
  ${container}

  img {
    clip-path: ellipse(95% 100% at 50% 100%);
    border-radius: 0 0 4rem 4rem;
  }

  &::before {
    content: "";
    top: 20%;
    right: -2.5%;
    position: absolute;
    width: 10%;
    padding-bottom: 10%;
    background-color: #bc0e03;
    border-radius: 100%;
    z-index: 44;
  }
`;
