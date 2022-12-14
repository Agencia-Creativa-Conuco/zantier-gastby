import styled from "@emotion/styled";
import React from "react";
import BackgroundImage from "gatsby-background-image";
import { container } from "../../components/grid/index";
import useFiles from "../../hooks/useFiles";
import { InView } from "react-intersection-observer";
import { animated, config, Spring } from "@react-spring/web";
import { FadeUp } from "../../components/animation/animation";
import FeaturedMedia from "../../components/featured-media";
import colors from "../../components/styles/colors";
import Cta from "../../components/cta";

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
                            delay={700}
                            pause={!inView}
                            config={config.gentle}
                            {...FadeUp}
                          >
                            {(styles) => (
                              <animated.div style={styles}>
                                <Cta to="#contacto">Contáctanos</Cta>
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
  background: ${colors.red.base};
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
    background: ${colors.red.base};
    border-radius: 100%;
    max-width: 150%;
    max-height: 150%;
    box-shadow: 0px 10px 59px -12px ${colors.red.light};
    z-index: -1;
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
`;

const Copy = styled.p`
  color: ${colors.gray.base};
  animation: ${(props) => props.animate} 1.8s ease-in both;
`;
const Deco = styled.div`
  position: relative;
  margin-top: 4rem;
  height: 1.5rem;
  animation: ${(props) => props.animate} 2s ease-in both;

  &::before {
    content: "";
    position: absolute;
    background: ${colors.red.base};
    width: 5rem;
    padding-bottom: 1.5rem;
    bottom: 0;
    border-radius: 2.8rem;
    right: 0;
  }
  &::after {
    content: "";
    position: absolute;
    background: ${colors.red.base};
    width: 1.5rem;
    padding-bottom: 1.5rem;
    right: 5.5rem;
    bottom: 0;
    border-radius: 100%;
  }
`;
