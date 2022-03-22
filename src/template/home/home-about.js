import styled from "@emotion/styled";
import React from "react";
import FeaturedMedia from "../../components/featured-media";
import { container, mq } from "../../components/layout/index";
import useFiles from "../../hooks/useFiles";
import { useInView } from "react-intersection-observer";
import { FadeIn, FadeUp } from "../../components/animation/animation";

const HomeAbout = () => {
  const images = useFiles();

  const { ref, inView } = useInView({
    rootMargin: "10%",
  });

  const data = {
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",

    featuredImage: images.home.img2,
  };

  return (
    <Section ref={ref} fluid>
      <Media animate={inView ? FadeIn : "none"}>
        <FeaturedMedia
          media={data.featuredImage}
          size="100%"
          sizeMD="90%"
          sizeLG="75%"
          sizeXL="80rem"
        />
        <Card animate={inView ? FadeUp : "none"}>
          <Copy animate={inView ? FadeUp : "none"}>{data.copy}</Copy>
          <Deco animate={inView ? FadeUp : "none"} />
        </Card>
      </Media>
    </Section>
  );
};

export default HomeAbout;

const Section = styled.section`
  background: #bc0e03;
  ${container}
  padding: 0;
`;

const Media = styled.div`
  position: relative;
  width: 100%;
  img {
    clip-path: ellipse(95% 100% at 50% 100%);

    ${mq.md} {
      animation: ${(props) => props.animate} 3s ease-in both;
    }
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 3rem 5rem;
  ${mq.md} {
    animation: ${(props) => props.animate} 1s ease-in both;

    position: absolute;
    max-width: 36rem;
    border-radius: 2rem;
    top: 25%;
    left: 13%;
  }
`;

const Copy = styled.p`
  padding: 10rem 0;
  color: #bc0e03;
  animation: ${(props) => props.animate} 1.8s ease-in both;
`;
const Deco = styled.div`
  position: relative;
  animation: ${(props) => props.animate} 2s ease-in both;

  &::before {
    content: "";
    position: absolute;
    background: #bc0e03;
    width: 9rem;
    padding-bottom: 3.5rem;
    bottom: 0;
    border-radius: 2.8rem;
  }
  &::after {
    content: "";
    position: absolute;
    background: #bc0e03;
    width: 3.5rem;
    padding-bottom: 3.5rem;
    left: 10rem;
    bottom: 0;
    border-radius: 100%;
  }
`;
