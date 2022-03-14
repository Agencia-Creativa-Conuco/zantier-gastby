import styled from "@emotion/styled";
import React from "react";
import Cta from "../../components/cta";
import FeaturedMedia from "../../components/featured-media";
import { container, mq } from "../../components/layout/index";
import useFiles from "../../hooks/useFiles";

const HomeCover = ({ page }) => {
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
            position="0 -60% !important"
          />
        </Media>
      </Container>
    </Section>
  );
};

export default HomeCover;

const Section = styled.section`
  background: #eaeef2;
  ${container}
  padding: 0;
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
`;

const Title = styled.h1`
  margin-bottom: 3rem;
`;

const Copy = styled.p`
  color: gray;
  margin-bottom: 3rem;
`;

const Media = styled.div`
  position: relative;
`;
