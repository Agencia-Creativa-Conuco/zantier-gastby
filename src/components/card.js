import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "./featured-media";
import { container, mq } from "./grid";
import colors from "./styles/colors";

const CardInfo = ({ item }) => {
  const { title, featuredImage, copy, specialty, contact } = item;

  return (
    <Wrapper>
      <Media>
        <FeaturedMedia media={featuredImage} rounded />
      </Media>
      <Content>
        <Title>{title}</Title>
        <Specialty>{specialty}</Specialty>
        <Copy dangerouslySetInnerHTML={{ __html: copy }} />
        {contact !== "" && (
          <Contact>
            <span>Contacto:</span> {contact}
          </Contact>
        )}
      </Content>
    </Wrapper>
  );
};

export default CardInfo;

const Wrapper = styled.div`
  /* ${container}; */
  display: grid;
  grid-template-columns: 100%;
  justify-items: center;
  gap: 1rem;

  ${mq.lg} {
    grid-template-columns: ${(props) => props.value};
    div:last-of-type {
      order: 2;
    }
  }
`;

const Content = styled.div`
  padding: 0;
`;

const Title = styled.h2`
  text-align: center;
  margin: 0;
`;

const Specialty = styled.p`
  padding: 0rem 0;
  color: ${colors.gray.base};
  text-align: center;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Copy = styled.p`
  margin: 0 auto;
  margin-bottom: 2rem;
  color: ${colors.gray.base};
  font-size: 0.9rem;
`;

const Media = styled.div`
  width: 100%;
  align-self: center;
  margin: 0;
  height: fit-content;
  max-width: 10rem;
`;

const Contact = styled.div`
  color: ${colors.gray.base};
  span {
    font-weight: 700;
  }
`;
