import styled from "@emotion/styled";
import React from "react";
import FeaturedMedia from "../../components/featured-media";
import { container, mq } from "../../components/layout/index";
import useFiles from "../../hooks/useFiles";

import Cta from "../../components/cta";

import { useInView } from "react-intersection-observer";
import {
  FadeUp,
  TextAnimationRight,
} from "../../components/animation/animation";

const HomeDescription = () => {
  const images = useFiles();

  const { ref, inView } = useInView({
    rootMargin: "-10%",
  });

  const data = {
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",

    featuredImage: images.home.img2,
    otherCopy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    cta: {
      title: "Conocer mas",
      url: "/",
    },
  };

  return (
    <Section ref={ref}>
      <Container>
        <Media animate={inView ? FadeUp : "none"}>
          <FeaturedMedia
            media={data.featuredImage}
            size="70%"
            sizeXL="54.25%"
          />
        </Media>
        <Card animate={inView ? TextAnimationRight : "none"}>
          <Copy animate={inView ? FadeUp : "none"}>{data.copy}</Copy>
        </Card>
        <Content animate={inView ? FadeUp : "none"}>
          <p>{data.otherCopy}</p>

          <Cta
            to={data.cta.url}
            bgColor="white"
            color="#bc0e03"
            bgActiveColor="#dbd8d8"
            animation={inView ? FadeUp : "none"}
            timeAnimation="2.9s"
          >
            {data.cta.title}
          </Cta>
        </Content>
      </Container>
    </Section>
  );
};

export default HomeDescription;

const Section = styled.section`
  background: #bc0e03;

  padding-bottom: 6.6rem;
  padding-top: 6.6rem;

  ${mq.md} {
    padding-bottom: 9.5rem;
    padding-top: 9.5rem;
  }
`;

const Container = styled.div`
  ${container}
  padding-top:10rem;
  display: grid;
  grid-template-columns: 100%;
  grid-template-areas:
    "col_2"
    "col_1"
    "col_3";

  ${mq.md} {
    grid-template-columns: 50% 50%;
    grid-template-areas:
      "col_1 col_2"
      "col_3 col_3";
  }
  ${mq.lg} {
    grid-template-areas:
      "col_1 col_2"
      "col_3 col_space";
  }
`;

const Media = styled.div`
  position: relative;
  grid-area: col_2;

  img {
    border-radius: 40% 0 0% 0%;
    z-index: 2;

    ${mq.md} {
      max-width: 40rem;
      border-radius: 0 2rem 2rem 0%;
    }

    ${mq.lg} {
      max-width: 40rem;
      border-radius: 40% 0 40% 40%;
    }
  }
`;

const Card = styled.div`
  position: relative;
  grid-area: col_1;
  padding: 3rem;
  ${mq.lg} {
    padding: 6rem 5rem;
    max-height: 70%;
  }

  &::before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    border-radius: 0rem 0 2rem 2rem;
    animation: ${(props) => props.animate} 1s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    ${mq.md} {
      width: 130%;
      border-radius: 2rem 0 0 2rem;
    }
  }
`;

const Copy = styled.p`
  padding: 0rem 0;
  color: #bc0e03;
  position: relative;
  z-index: 2;
  animation: ${(props) =>
    props.animate} 2.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
`;

const Content = styled.div`
  grid-area: col_3;

  color: white;
  margin-top: 2.5rem;

  ${mq.lg} {
    margin-top: -3.5rem;
  }
  p {
    animation: ${(props) => props.animate} 2.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;
