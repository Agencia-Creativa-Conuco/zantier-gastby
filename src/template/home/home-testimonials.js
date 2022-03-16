import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "../../components/featured-media";
import { LeftArrowIcon, RightArrowIcon } from "../../components/icons";
import { container, mq } from "../../components/layout/index";
import useFiles from "../../hooks/useFiles";
import Carousel from "react-slick";
import { css } from "@emotion/react";

const HomeTestimonials = () => {
  const images = useFiles();

  const data = [
    {
      featuredImage: images.home.img,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ",
    },
    {
      featuredImage: images.home.img2,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
    {
      featuredImage: images.home.img,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    },
    {
      featuredImage: images.home.img2,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
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
          infinite
          slidesToShow={3}
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
          responsive={[
            {
              breakpoint: mq.lgv,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: mq.mdv,
              settings: {
                slidesToShow: 1,
              },
            },

          ]}
        >
          {data.map((item) => {
            return (
              <Card>
                <FeaturedMedia media={item.featuredImage} size="70.25%" />

                <Content>
                  <Copy>{item.copy}</Copy>
                </Content>
              </Card>
            );
          })}
        </Carousel>
      </Container>
    </Section>
  );
};

export default HomeTestimonials;

const Section = styled.section`
  /* padding-bottom: 6.6rem; */
  padding-top: 6.6rem;

  background-color: #bc0e03;

  padding-bottom: 30rem;
  ${mq.md} {
    padding-top: 9.5rem;
  }
`;

const Container = styled.div`
  ${container}
  padding: 0;

  img {
    border-radius: 0 0 5rem 5rem;
  }
`;

const Card = styled.div`
  border-radius: 6.5rem;
  display: grid !important;
  background-color: white;
  margin: 0 auto;
  overflow: hidden;
  max-width: 30rem;
`;

const Content = styled.div`
  padding: 2rem 5rem;
  position: relative;
  gap: 2rem;
  &::before {
    content: "";
    position: absolute;
    left: 1rem;
    width: 3rem;
    padding-bottom: 3rem;
    border-radius: 100%;
    background-color: #bc0e03;
  }
`;
const Copy = styled.div``;
