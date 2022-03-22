import styled from "@emotion/styled";
import React from "react";
import Form from "../../components/form";
import { container, mq } from "../../components/layout/index";
import { FadeUp } from "../../components/animation/animation";
import { useInView } from "react-intersection-observer";

const HomeForm = () => {
  const { ref, inView } = useInView({
    rootMargin: "-10%",
  });

  return (
    <Section ref={ref}>
      <Container>
        <Deco />
        <Content animate={inView ? FadeUp : "none"}>
          <Title animate={inView ? FadeUp : "none"}>Contáctanos</Title>
          <Form formId="dd761710-e90b-4d87-a867-c8141db651ce" />
        </Content>
      </Container>
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

  iframe {
    animation: ${(props) => props.animate} 0.7s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
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
  animation: ${(props) => props.animate} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
`;
