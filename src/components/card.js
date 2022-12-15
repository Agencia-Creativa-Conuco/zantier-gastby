import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "./featured-media";
import { container, mq } from "./grid";
import colors from "./styles/colors";
import Cta from "./cta";

const CardInfo = ({ item }) => {
  const { title, featuredImage, copy, specialty, contact, meetTheDoctor } =
    item;

  return (
    <Wrapper>
      <Media>
        <FeaturedMedia media={featuredImage} rounded size="100%" />
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
        <CtaBox>
          <Cta to={meetTheDoctor} target="_blank">
            Meet the doctor
          </Cta>
        </CtaBox>
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

const Copy = styled.div`
  margin: 0 auto;
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

const CtaBox = styled.div`
  text-align: center;
  margin-top: 2rem;
`;
