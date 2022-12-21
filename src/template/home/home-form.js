import styled from "@emotion/styled";
import React from "react";
import Form from "../../components/form";
import { container, mq } from "../../components/grid/index";
import { FadeUp } from "../../components/animation/animation";
import { InView } from "react-intersection-observer";
import { animated, config, Spring } from "@react-spring/web";
import useFiles from "../../hooks/useFiles";
import FeaturedMedia from "../../components/featured-media";
import colors from "../../components/styles/colors";

const HomeForm = () => {
  const images = useFiles();

  const imagen = images.home.contacto;

  return (
    <Section id="contacto">
      <InView threshold={0.3}>
        {({ ref, inView }) => (
          <Container ref={ref}>
            <Deco>
              <FeaturedMedia
                media={imagen}
                size="125%"
                sizeMD="100%"
                sizeLG="125%"
              />
            </Deco>
            <Content>
              <Spring pause={!inView} config={config.wobbly} {...FadeUp}>
                {(styles) => (
                  <animated.div style={styles}>
                    <Title>Contáctanos</Title>
                  </animated.div>
                )}
              </Spring>
              <Spring
                from={{
                  opacity: 0,
                  transform: `translateY(5rem)`,
                }}
                to={{ opacity: 1, transform: "translateY(0)" }}
                pause={!inView}
                config={config.wobbly}
                delay={500}
              >
                {(styles) => (
                  <animated.div style={styles}>
                    <Form formId="dd761710-e90b-4d87-a867-c8141db651ce" />
                  </animated.div>
                )}
              </Spring>
            </Content>
          </Container>
        )}
      </InView>
    </Section>
  );
};

export default HomeForm;

const Section = styled.section`
  padding: 0;
  position: relative;
`;

const Container = styled.div`
  ${container}
  display: grid;
  background: white;
  border-radius: 10rem 10rem 0 0;
  margin-top: -10rem;
  justify-content: center;
  grid-template-columns: 100%;
  padding: 0;
  gap: 2rem;
  padding: 2rem;
  ${mq.lg} {
    padding: 3rem;

    grid-template-columns: 1fr 1fr;
  }
`;

const Content = styled.div`
  color: white;
  align-self: center;
  margin: 0 -2rem;
  ${mq.md} {
    margin: initial;
  }
`;

const Deco = styled.div`
  border-radius: 10rem 10rem 10rem 0;
  overflow: hidden;
  img {
    object-position: top center !important;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin: 0;
  text-transform: uppercase;
  ${mq.lg} {
    text-align: left;
  }
`;
