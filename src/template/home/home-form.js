import styled from "@emotion/styled";
import React from "react";
import Form from "../../components/form";
import { container, mq } from "../../components/grid/index";
import { FadeUp } from "../../components/animation/animation";
import { InView } from "react-intersection-observer";
import { animated, config, Spring } from "@react-spring/web";

const HomeForm = () => {
  return (
    <Section>
      <InView threshold={0.3}>
        {({ ref, inView }) => (
          <Container ref={ref}>
            <Deco />
            <Content>
              <Spring
                reset={inView}
                reverse={!inView}
                config={config.wobbly}
                {...FadeUp}
              >
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
                reset={inView}
                reverse={!inView}
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
  z-index: 5;
  display: grid;
  background: white;
  border-radius: 20rem 20rem 0 0;
  margin-top: -15rem;
  justify-content: center;
  grid-template-columns: 100%;
  padding: 0;
  gap: 7rem;
  padding: 2rem;
  ${mq.lg} {
    padding: 8rem;
    grid-template-columns: 45% 50%;
  }
`;

const Content = styled.div`
  color: white;
  align-self: center;
`;

const Deco = styled.div`
  width: 25rem;
  height: 25rem;
  border-radius: 40% 40% 40% 0;
  background-color: #dc4545;
  margin: 5rem auto 0;
  ${mq.lg} {
    margin: 0 auto;

    width: 40rem;
    height: 45rem;
  }
`;

const Title = styled.h1`
  text-align: center;
`;
