import styled from "@emotion/styled";
import React from "react";
import FeaturedMedia from "../../components/featured-media";
import { container, mq } from "../../components/layout/index";
import useFiles from "../../hooks/useFiles";
import { FadeUp } from "../../components/animation/animation";
import { InView } from "react-intersection-observer";
import { animated, Trail, config, Spring } from "@react-spring/web";

const HomeTeam = () => {
  const images = useFiles();

  const data = [
    {
      title: "Maria Celeste Arraraz",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",

      featuredImage: images.home.person_1,
    },
    {
      title: "Robert Sosa",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",

      featuredImage: images.home.person_2,
    },
    {
      title: "Robert Sosa",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",

      featuredImage: images.home.person_3,
    },
    {
      title: "Maria Celeste Arraraz",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      featuredImage: images.home.person_4,
    },
    {
      title: "Maria Celeste Arraraz",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      featuredImage: images.home.person_2,
    },
    {
      title: "Robert Sosa",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      featuredImage: images.home.person_4,
    },
  ];

  return (
    <Section fluid>
      <InView threshold={0.2}>
        {({ ref, inView }) => (
          <Container ref={ref}>
            <Trail
              items={data}
              reset={inView}
              reverse={!inView}
              config={config.gentle}
              {...FadeUp}
            >
              {(item, index) => (styles) => {
                return (
                  <animated.div style={styles} key={index}>
                    <CardContainer>
                      <Deco />
                      <Media>
                        <Spring
                          reset={inView}
                          reverse={!inView}
                          config={config.gentle}
                          {...FadeUp}
                        >
                          {(styles) => (
                            <animated.div style={styles}>
                              <FeaturedMedia
                                media={item.featuredImage}
                                size="100%"
                                rounded
                              />
                            </animated.div>
                          )}
                        </Spring>
                      </Media>

                      <Spring
                        reset={inView}
                        reverse={!inView}
                        config={config.molasses}
                        {...FadeUp}
                      >
                        {(styles) => (
                          <animated.div style={styles}>
                            <Card>
                              <Title>{item.title}</Title>

                              <Spring
                                reset={inView}
                                reverse={!inView}
                                delay={1000}
                                from={{
                                  opacity: 0,
                                }}
                                to={{ opacity: 1 }}
                              >
                                {(styles) => (
                                  <animated.div style={styles}>
                                    <Copy>{item.copy}</Copy>
                                  </animated.div>
                                )}
                              </Spring>
                            </Card>
                          </animated.div>
                        )}
                      </Spring>
                    </CardContainer>
                  </animated.div>
                );
              }}
            </Trail>
          </Container>
        )}
      </InView>
    </Section>
  );
};

export default HomeTeam;

const Section = styled.section`
  ${container}
  margin-bottom: 6.6rem;

  ${mq.md} {
    margin-bottom: 9.5rem;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  padding: 0;
  gap: 2rem 5rem;
  flex-wrap: wrap;
  justify-content: center;

  ${mq.md} {
    margin: -5rem auto;
  }

  ${mq.lg} {
    max-width: 1280px;
  }
`;

const CardContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: max-content;
  grid-template-columns: auto;
`;

const Media = styled.div`
  position: relative;
  max-width: 19rem;
  margin: 0 auto;
  width: 19rem;
  z-index: 5;

  padding: 2.5rem;
`;

const Deco = styled.div`
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 100%;
    max-width: 21rem;
    max-height: 21rem;
  }
`;
const Card = styled.div`
  background-color: rgb(245 246 248);
  margin: -5rem auto 0;
  z-index: 2;
  padding: 3.5rem 4rem;
  border-radius: 3.5rem;
  ${mq.md} {
    max-width: 28rem;
  }
`;

const Title = styled.h3`
  color: #bc0e03;
  text-align: center;
`;

const Copy = styled.p`
  padding: 0rem 0;
  color: #838383;
`;
