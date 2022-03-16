import styled from "@emotion/styled";
import React from "react";
import FeaturedMedia from "../../components/featured-media";
import { container, mq } from "../../components/layout/index";
import useFiles from "../../hooks/useFiles";

const HomeForm = () => {
  const images = useFiles();

  return (
    <Section>
      <Container>
        <Deco />
        <Content>
          <Title>Contáctanos</Title>
        </Content>
      </Container>
      );
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

  grid-template-columns: 100%;
  padding-bottom: 6.6rem;
  gap: 3rem;

  ${mq.lg} {
    grid-template-columns: 45% 50%;
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

const Copy = styled.p``;

const Deco = styled.div`
  width: 40rem;
  height: 40rem;
  border-radius: 30% 30% 30% 0;
  background-color: #dc4545;
  margin: 7rem auto;
`;


const Title = styled.h1`
`