import styled from "@emotion/styled";

import { css } from "@emotion/react";
import React from "react";
import BackgroundImage from "gatsby-background-image";
import { container, mq } from "../../components/grid/index";
import useFiles from "../../hooks/useFiles";
import { InView } from "react-intersection-observer";
import { animated, config, Spring } from "@react-spring/web";
import { FadeUp } from "../../components/animation/animation";
import FeaturedMedia from "../../components/featured-media";

const HomeAbout = () => {
  const images = useFiles();

  const data = {
    title: "Una gran sonrisa, requiere de un gran equipo",
    copy: "El diseño de sonrisa y el blanqueamiento dental son procesos que prometen sonrisas felices y solo expertos pueden hacer que tu sonrisa sea verdadero reflejo de quien eres.",

    featuredImage: images.home.about,
  };
  return (
    <Section>
      <Container>
        <BackgroundImage
          Tag="div"
          fluid={data.featuredImage?.childImageSharp?.fluid}
          id="section_3"
        >
          <Content>
            <InView threshold={0.4}>
              {({ ref, inView }) => (
                <Spring
                  pause={!inView}
                  config={config.gentle}
                  from={{
                    opacity: 0,
                    transform: `translateY(3rem)`,
                  }}
                  to={{ opacity: 1, transform: "translateY(0)" }}
                >
                  {(styles) => (
                    <animated.div style={styles}>
                      <CardContainer>
                        <Card ref={ref}>
                          <Spring
                            delay={500}
                            pause={!inView}
                            config={config.gentle}
                            {...FadeUp}
                          >
                            {(styles) => (
                              <animated.div style={styles}>
                                <Logo>
                                  <FeaturedMedia
                                    media={images.icons.tooth}
                                    size="100%"
                                  />
                                </Logo>
                              </animated.div>
                            )}
                          </Spring>

                          <Spring
                            delay={600}
                            pause={!inView}
                            config={config.gentle}
                            {...FadeUp}
                          >
                            {(styles) => (
                              <animated.div style={styles}>
                                <Title>{data.title}</Title>
                              </animated.div>
                            )}
                          </Spring>
                          <Spring
                            delay={700}
                            pause={!inView}
                            config={config.gentle}
                            {...FadeUp}
                          >
                            {(styles) => (
                              <animated.div style={styles}>
                                <Copy>{data.copy}</Copy>
                              </animated.div>
                            )}
                          </Spring>
                          <Spring
                            delay={900}
                            pause={!inView}
                            config={config.gentle}
                            {...FadeUp}
                          >
                            {(styles) => (
                              <animated.div style={styles}>
                                <Deco />
                              </animated.div>
                            )}
                          </Spring>
                        </Card>
                      </CardContainer>
                    </animated.div>
                  )}
                </Spring>
              )}
            </InView>
          </Content>
        </BackgroundImage>
      </Container>
    </Section>
  );
};

export default HomeAbout;

const Section = styled.section`
  background: #bc0e03;
`;

const Container = styled.div`
  position: relative;
  clip-path: ellipse(145% 100% at 50% 100%) !important;
`;

const Content = styled.div`
  padding: 10rem 0;
`;

const CardContainer = styled.div`
  ${container}
`;

const Card = styled.div`
  background-color: white;
  position: relative;
  padding: 2rem;
  border-radius: 2rem;
  max-width: 25rem;
`;

const Logo = styled.div`
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;

  left: 0;
  top: 0;
  transform: translate(0, -100%);

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
    box-shadow: 0px 10px 59px -12px rgba(255, 0, 0, 0.75);
    z-index: -1;
  }
`;

const Title = styled.h3``;

const Copy = styled.p`
  padding: 0 0 10rem;
  color: #bc0e03;
  animation: ${(props) => props.animate} 1.8s ease-in both;
`;
const Deco = styled.div`
  position: absolute;
  animation: ${(props) => props.animate} 2s ease-in both;

  &::before {
    content: "";
    position: absolute;
    background: #bc0e03;
    width: 9rem;
    padding-bottom: 2.7rem;
    bottom: 0;
    border-radius: 2.8rem;
  }
  &::after {
    content: "";
    position: absolute;
    background: #bc0e03;
    width: 2.9rem;
    padding-bottom: 2.9rem;
    left: 10rem;
    bottom: 0;
    border-radius: 100%;
  }
`;
