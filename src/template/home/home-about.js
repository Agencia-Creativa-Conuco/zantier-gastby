import styled from "@emotion/styled";
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
    <Section fluid>
      <Container>
        <BImage
          Tag="section"
          fluid={data.featuredImage?.childImageSharp?.fluid}
          id="section_3"
        >
          <InView threshold={0.4}>
            {({ ref, inView }) => (
              <Spring
                reset={inView}
                reverse={!inView}
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
                          reset={inView}
                          reverse={!inView}
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
                          reset={inView}
                          reverse={!inView}
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
                          reset={inView}
                          reverse={!inView}
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
                          reset={inView}
                          reverse={!inView}
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
        </BImage>
      </Container>
    </Section>
  );
};

export default HomeAbout;

const Section = styled.section`
  background: #bc0e03;
  ${container}
  padding: 0;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  ${mq.xs} {
    clip-path: ellipse(145% 100% at 50% 100%) !important;
  }

  ${mq.md} {
    clip-path: ellipse(100% 100% at 50% 100%) !important;
  }

  ${mq.lg} {
    clip-path: ellipse(85% 100% at 50% 100%) !important;
  }
`;

const BImage = styled(BackgroundImage)`
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat, repeat;
  text-align: center;
`;

const CardContainer = styled.div`
  ${container}
`;

const Card = styled.div`
  background-color: white;
  position: relative;

  padding: 5rem 5rem 3rem;
  margin: 20% auto;
  position: relative;
  border-radius: 2rem;
  max-width: 36rem;
  ${mq.md} {
    margin-left: 0;
  }
  ${mq.lg} {
    margin: 12% 0;
  }
`;

const Logo = styled.div`
  position: absolute;
  width: 20%;
  left: 0;
  top: -8rem;
  z-index: 89;

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
