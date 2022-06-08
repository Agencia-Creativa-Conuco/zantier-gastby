import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "./featured-media";
import { container, mq } from "./grid";

const CardInfo = ({ item }) => {
  const { title, featuredImage, copy, specialty } = item;

  return (
    <Wrapper>
      <Media>
        <FeaturedMedia media={featuredImage} />
      </Media>
      <Content>
        <Title>{title}</Title>
        <Specialty>{specialty}</Specialty>
        <Copy>{copy}</Copy>
      </Content>
    </Wrapper>
  );
};

export default CardInfo;

const Wrapper = styled.div`
  ${container};
  display: grid;
  grid-template-columns: 100%;
  justify-items: center;
  div:first-of-type {
    order: 2;
  }
  ${mq.lg} {
    grid-template-columns: ${(props) => props.value};
    div:last-of-type {
      order: 2;
    }
  }
`;

const Content = styled.div`
  padding: 0 1.5rem;
`;

const Title = styled.h2`
  text-align: center;
`;

const Specialty = styled.h5`
  padding: 0rem 0;
  color: #838383;
  text-align: center;
  margin-bottom: 3rem;
`;

const Copy = styled.p`
  margin: 0 auto;
  margin-bottom: 4rem;
  color: #838383;
`;

const Media = styled.div`
  width: 100%;
  align-self: center;
  margin: 2rem 0;
  height: fit-content;
  max-width: 22rem;
`;
