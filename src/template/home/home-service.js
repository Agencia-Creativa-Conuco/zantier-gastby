import styled from "@emotion/styled";
import React from "react";
import FeaturedMedia from "../../components/featured-media";
import { container, mq } from "../../components/layout/index";
import useFiles from "../../hooks/useFiles";
import {
  TextAnimationLeft,
  TextAnimationRight,
} from "../../components/animation/animation";
import { InView } from "react-intersection-observer";
import { Spring, animated, config } from "@react-spring/web";

const HomeService = () => {
  const images = useFiles();
  const sectionTitle = "LA FECILIDAD VIENE DE SONRISA EN SONRISA";
  const data = [
    {
      title: "En zantier creemos que la felicidad viene de sonrisa en sonrisa",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      cta: {
        title: "Conocer mas",
        url: "/",
      },
      featuredImage: images.home.service_1,
    },
    {
      title: "En zantier creemos que la felicidad viene de sonrisa en sonrisa",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      cta: {
        title: "Conocer mas",
        url: "/",
      },
      featuredImage: images.home.service_3,
    },
    {
      title: "En zantier creemos que la felicidad viene de sonrisa en sonrisa",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      cta: {
        title: "Conocer mas",
        url: "/",
      },
      featuredImage: images.home.service_1,
    },
  ];

  return (
    <Section fluid>
      <ImageDeco>
        <FeaturedMedia media={images.home.deco} size="255%" />
      </ImageDeco>
      <Logo>
        <FeaturedMedia media={images.icons.smile} sizeMd="100%" />
      </Logo>

      <InView threshold={0.6}>
        {({ ref, inView }) => (
          <Spring
            reset={inView}
            reverse={!inView}
            config={config.default}
            from={{
              opacity: 0,
            }}
            to={{ opacity: 1 }}
          >
            {(styles) => (
              <animated.div style={styles}>
                <div>
                  <SectionTitle ref={ref}>{sectionTitle}</SectionTitle>
                </div>
              </animated.div>
            )}
          </Spring>
        )}
      </InView>

      {data.map((item, index) => {
        let animationText = index % 2 ? TextAnimationLeft : TextAnimationRight;
        return (
          <InView threshold={0.4} key={index}>
            {({ ref, inView }) => (
              <Container direction={index % 2}>
                <Spring
                  reset={inView}
                  reverse={!inView}
                  config={config.molasses}
                  {...animationText}
                >
                  {(styles) => (
                    <animated.div style={styles} ref={ref}>
                      <Media>
                        <FeaturedMedia media={item.featuredImage} size="80%" />
                      </Media>
                    </animated.div>
                  )}
                </Spring>

                <Content>
                  <Spring
                    delay={600}
                    reset={inView}
                    reverse={!inView}
                    config={config.slow}
                    {...animationText}
                  >
                    {(styles) => (
                      <animated.div style={styles}>
                        <Title>{item.title}</Title>
                      </animated.div>
                    )}
                  </Spring>

                  <Spring
                    delay={600}
                    reset={inView}
                    reverse={!inView}
                    config={config.slow}
                    {...animationText}
                  >
                    {(styles) => (
                      <animated.div style={styles}>
                        <Copy>{item.copy}</Copy>
                      </animated.div>
                    )}
                  </Spring>
                  <Spring
                    from={{
                      opacity: 0,
                      transform: `translateY(3rem)`,
                    }}
                    to={{ opacity: 1, transform: "translateY(0)" }}
                    delay={1000}
                    reset={inView}
                    reverse={!inView}
                    config={config.wobbly}
                  >
                    {(styles) => (
                      <animated.div style={styles}>
                        <Deco direction={index % 2} />
                      </animated.div>
                    )}
                  </Spring>
                </Content>
              </Container>
            )}
          </InView>
        );
      })}
    </Section>
  );
};

export default HomeService;

const Section = styled.section`
  ${container}
  padding: 5rem 1.5rem 12rem;
  position: relative;
  background: #bc0e03;

  ${mq.md} {
    padding: 0 0 12rem;
  }
  &::before {
    content: "";
    position: absolute;
    background: #bc0e03;
    width: 100%;
    height: 30rem;
    clip-path: ellipse(65% 37% at 50% 100%);
    top: -23rem;
    left: 0;
    z-index: 2;

    ${mq.md} {
      clip-path: ellipse(65% 57% at 50% 100%);
    }
  }
`;

const Logo = styled.div`
  position: relative;

  right: -80%;
  top: -9rem;
  z-index: 89;
  width: 5rem;

  ${mq.md} {
    width: 8rem;
    right: -80%;
    top: -11rem;
  }

  &::after {
    content: "";
    position: absolute;
    width: 150%;
    height: 150%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #bc0e03;
    border-radius: 100%;
    max-width: 150%;
    max-height: 150%;
    box-shadow: 0px -6px 42px -12px rgba(255, 0, 0, 0.75);
    z-index: -1;
  }
`;
const SectionTitle = styled.h2`
  color: white;
  text-align: center;
  z-index: 5;
  position: relative;
  max-width: 56rem;
  margin: -7.2rem auto 4rem;
`;

const ImageDeco = styled.div`
  width: 0;
  position: absolute;

  ${mq.md} {
    width: 44%;
    top: -10rem;
    left: -2rem;
    padding-bottom: 9rem;
    z-index: 3;
  }
  ${mq.lg} {
    left: -5rem;

    top: -11rem;
    width: 35%;
  }
`;
const Container = styled.div`
  ${container}
  z-index: 5;
  display: grid;
  grid-template-columns: 100%;
  padding-bottom: 6.6rem;
  gap: 3rem;
  div:last-of-type {
    order: ${(props) => props.direction};
  }
  ${mq.md} {
    gap: 5rem;
    margin-bottom: 5rem;
    justify-content: ${(props) => (props.direction ? "end" : "start")};
    grid-template-columns: ${(props) =>
      props.direction === 0 ? "35% 50%" : "50% 35%;"};
    text-align: ${(props) => props.direction && "end"};

    div:first-of-type {
      order: ${(props) => props.direction === 1 && 2};
    }
  }

  img {
    border-radius: ${(props) =>
      props.direction ? "25%" : " 1.5rem 30% 30% 30%"};
  }
`;

const Content = styled.div`
  color: white;
  align-self: center;
`;
const Title = styled.h4`
  color: white;
`;

const Copy = styled.p``;

const Media = styled.div`
  position: relative;
  max-width: 40rem;
  margin: auto;
`;

const Deco = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background: white;
    width: 7%;
    padding-bottom: 7%;
    ${mq.md} {
      ${(props) => (props.direction === 1 ? "right: 0" : " left:0")};
    }
    border-radius: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    background: white;
    width: 15%;
    padding-bottom: 7%;
    left: 10%;
    ${mq.md} {
      ${(props) =>
        props.direction === 1 ? "right:10%; left:auto;" : " left:10%"};
    }

    border-radius: 2.8rem;
  }
`;
