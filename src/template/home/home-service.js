import styled from "@emotion/styled";
import React from "react";
import FeaturedMedia from "../../components/featured-media";
import { container, mq } from "../../components/grid/index";
import useFiles from "../../hooks/useFiles";
import {
  TextAnimationLeft,
  TextAnimationRight,
} from "../../components/animation/animation";
import { InView } from "react-intersection-observer";
import { Spring, animated, config } from "@react-spring/web";
import colors from "../../components/styles/colors";

const HomeService = () => {
  const images = useFiles();
  const sectionTitle =
    "La felicidad se transmite de persona a persona a través de sonrisas";
  const data = [
    {
      title: "Diagnóstico",
      copy: "Conocemos tu caso particular, tus necesidades y requerimientos específicos para lograr esa sonrisa deseada.",
      featuredImage: images.home.planificacion,
    },
    {
      title: "Planificación",
      copy: "Coordinamos los procesos necesarios y a los especialistas involucrados en la creación de tu sonrisa.",
      cta: {
        title: "Conocer mas",
        url: "/",
      },
      featuredImage: images.home.diagnostico,
    },
    {
      title: "Ejecución",
      copy: "Aquí empieza el camino hacia tu sonrisa soñada, cada tratamiento puede variar de tiempo según la persona, ya que cada sonrisa es única.",
      cta: {
        title: "Conocer mas",
        url: "/",
      },
      featuredImage: images.home.inicio,
    },
  ];

  return (
    <Section fluid id="infografia">
      <Logo>
        <FeaturedMedia media={images.icons.smile} sizeMd="100%" />
      </Logo>
      <Wrapper>
        <ImageDeco>
          <FeaturedMedia media={images.home.deco} size="255%" />
        </ImageDeco>
        <Container>
          <InView threshold={0.6}>
            {({ ref, inView }) => (
              <Spring
                pause={!inView}
                // reverse={!inView}
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
            let animationText =
              index % 2 ? TextAnimationLeft : TextAnimationRight;
            return (
              <InView threshold={0.4} key={index}>
                {({ ref, inView }) => (
                  <Info direction={index % 2}>
                    <Spring
                      pause={!inView}
                      // reverse={!inView}
                      config={config.molasses}
                      {...animationText}
                    >
                      {(styles) => (
                        <animated.div style={styles} ref={ref}>
                          <InfoMedia>
                            <FeaturedMedia
                              media={item.featuredImage}
                              size="80%"
                            />
                          </InfoMedia>
                        </animated.div>
                      )}
                    </Spring>

                    <Content>
                      <Spring
                        delay={600}
                        pause={!inView}
                        // reverse={!inView}
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
                        pause={!inView}
                        // reverse={!inView}
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
                        pause={!inView}
                        // reverse={!inView}
                        config={config.wobbly}
                      >
                        {(styles) => (
                          <animated.div style={styles}>
                            <Deco direction={index % 2} />
                          </animated.div>
                        )}
                      </Spring>
                    </Content>
                  </Info>
                )}
              </InView>
            );
          })}
        </Container>
      </Wrapper>
    </Section>
  );
};

export default HomeService;

const Section = styled.section`
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
  background: ${colors.red.base};
  position: relative;
  padding-top: 5rem;
  padding-bottom: 3rem;
  z-index: 2;
  clip-path: ellipse(250% 100% at 50% 100%) !important;

  ${mq.lg} {
    margin-top: -10%;
    padding-top: 10%;
    z-index: initial;
    clip-path: ellipse(145% 100% at 50% 100%) !important;
  }
`;

const Logo = styled.div`
  position: absolute;
  right: 10%;
  top: 0;
  width: 8vw;
  transform: translate(0, 0%);
  z-index: 4;
  ${mq.lg} {
    width: 5vw;
    transform: translate(0, 25%);
  }
  &::after {
    content: "";
    position: absolute;
    width: 150%;
    height: 150%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: ${colors.red.base};
    border-radius: 100%;
    max-width: 150%;
    max-height: 150%;
    box-shadow: 0px -6px 42px -12px ${colors.red.light};
    z-index: -1;
  }
`;
const SectionTitle = styled.h2`
  color: white;
  text-align: center;
  z-index: 5;
  position: relative;
  text-transform: uppercase;
  max-width: 39rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  ${mq.lg} {
    margin-bottom: 5rem;
  }
`;

const ImageDeco = styled.div`
  width: 35%;
  position: absolute;
  top: 3.5vw;
  left: 0;
`;

const Container = styled.div`
  ${container}
`;

const Info = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  z-index: 5;
  max-width: 30rem;
  margin-bottom: 7.5rem;
  margin-left: auto;
  margin-right: auto;

  ${mq.lg} {
    gap: 2rem;
    margin-bottom: 5rem;
    max-width: initial;
    &:nth-of-type(odd) {
      justify-content: end;
      grid-template-columns: 3fr 4fr;
      text-align: left;
      & > div {
        &:first-of-type {
          order: 1;
        }
        &:last-of-type {
          order: 2;
        }
      }
    }
    &:nth-of-type(even) {
      justify-content: start;
      grid-template-columns: 4fr 3fr;
      text-align: right;
      & > div {
        &:first-of-type {
          order: 2;
        }
        &:last-of-type {
          order: 1;
        }
      }
    }
  }

  img {
    border-radius: ${(props) =>
      props.direction ? "25%" : " 1.5rem 30% 30% 30%"};
    border-radius: 1rem 3.5rem 3.5rem 3.5rem;
  }
`;

const Content = styled.div`
  color: white;
  align-self: center;
`;
const Title = styled.h3`
  color: white;
  text-transform: uppercase;
  margin-top: 0;
`;

const Copy = styled.p``;

const InfoMedia = styled.div`
  position: relative;
  margin: auto;
`;

const Deco = styled.div`
  position: relative;
  display: inline-block;

  &::before {
    content: "";
    display: inline-block;
    position: relative;
    background: white;
    width: 2rem;
    padding-bottom: 2rem;
    border-radius: 100%;
  }
  &::after {
    content: "";
    display: inline-block;
    position: relative;
    background: white;
    width: 3.5rem;
    padding-bottom: 2rem;
    left: 10%;
    border-radius: 2.8rem;
  }
`;
