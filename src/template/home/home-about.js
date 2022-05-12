import styled from "@emotion/styled";
import React from "react";
import BackgroundImage from "gatsby-background-image";
import { container, mq } from "../../components/layout/index";
import useFiles from "../../hooks/useFiles";
import { InView } from "react-intersection-observer";
import { animated, config, Spring } from "@react-spring/web";
import { FadeUp } from "../../components/animation/animation";

const HomeAbout = () => {
  const images = useFiles();

  const data = {
    title: "Titulo de prueba",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",

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
          <InView threshold={0.6}>
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
                    <Card ref={ref}>
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
  clip-path: ellipse(95% 100% at 50% 100%) !important;

  ${mq.lg} {
    clip-path: ellipse(85% 100% at 50% 100%) !important;
  }
`;

const BImage = styled(BackgroundImage)`
  overflow: hidden;
`;

const Card = styled.div`
  background-color: white;

  padding: 5rem 5rem 3rem;
  margin: 20% 2rem;
  position: relative;
  border-radius: 2rem;
  ${mq.md} {
    max-width: 36rem;
    top: 0;
    left: 13%;
  }
  ${mq.lg} {
    margin: 9% 0;
  }
`;

const Title = styled.h3``;

const Copy = styled.p`
  padding: 0 0 10rem;
  color: #bc0e03;
  animation: ${(props) => props.animate} 1.8s ease-in both;
`;
const Deco = styled.div`
  position: relative;
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
