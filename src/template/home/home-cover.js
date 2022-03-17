import styled from "@emotion/styled";
import React from "react";
import Cta from "../../components/cta";
import FeaturedMedia from "../../components/featured-media";
import { container, mq } from "../../components/layout/index";
import useFiles from "../../hooks/useFiles";

const HomeCover = () => {
  const images = useFiles();
  const data = {
    title: "En zantier creemos que la felicidad viene de sonrisa en sonrisa",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    cta: {
      title: "Conocer mas",
      url: "/",
    },
    featuredImage: images.home.cover,
  };

  return (
    <Section fluid>
      <Container>
        <Content>
          <Title>{data.title}</Title>
          <Copy>{data.copy}</Copy>
          <Cta to={data.cta.url}>{data.cta.title}</Cta>
        </Content>

        <Media>
          <FeaturedMedia
            media={data.featuredImage}
            size="80%"
            sizeMD="125%"
            sizeXL="100%"
            position="50% 0% !important"
          />
        </Media>
      </Container>
    </Section>
  );
};

export default HomeCover;

const Section = styled.section`
  ${container}
  background: #eaeef2;
  padding: 0;
  &::after {
    content: "";
    position: absolute;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.6615021008403361) 41%,
      rgba(255, 255, 255, 0.38699229691876746) 64%,
      rgba(255, 255, 255, 0) 100%
    );
    width: 100%;
    min-height: 40%;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  padding-bottom: 6.6rem;

  div:first-of-type {
    order: 2;
  }
  ${mq.md} {
    grid-template-columns: 50% 50%;
    div:last-of-type {
      order: 2;
    }
  }
`;

const Content = styled.div`
  padding: 0 1.5rem;
  align-self: center;
  max-width: 60rem;
  margin: 0 auto;
  z-index: 5;
`;

const Title = styled.h1`
  margin-bottom: 3rem;
`;

const Copy = styled.p`
  color: #838383;
  margin-bottom: 3rem;
`;

const Media = styled.div`
  position: relative;
`;
