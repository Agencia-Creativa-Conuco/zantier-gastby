import styled from "@emotion/styled";
import React from "react";
import FeaturedMedia from "../../components/featured-media";
import { container, mq } from "../../components/layout/index";
import useFiles from "../../hooks/useFiles";
import { useInView } from "react-intersection-observer";
import { FadeIn, FadeUp } from "../../components/animation/animation";

const HomeTeam = () => {
  const images = useFiles();

  const { ref, inView } = useInView({
    rootMargin: "10%",
  });

  const data = [
    {
      title: "Maria Celeste Arraraz",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",

      featuredImage: images.home.cover,
    },
    {
      title: "Robert Sosa",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",

      featuredImage: images.home.cover,
    },
    {
      title: "Robert Sosa",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",

      featuredImage: images.home.cover,
    },
    {
      title: "Maria Celeste Arraraz",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      featuredImage: images.home.cover,
    },
    {
      title: "Maria Celeste Arraraz",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      featuredImage: images.home.cover,
    },
    {
      title: "Robert Sosa",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      featuredImage: images.home.cover,
    },
    {
      title: "Maria Celeste Arraraz",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

      featuredImage: images.home.cover,
    },
  ];

  return (
    <Section fluid>
      <Container ref={ref}>
        {data.map((item, index) => {
          return (
            <CardContainer key={index}>
              <Media animate={inView ? FadeUp : "none"}>
                <FeaturedMedia
                  media={item.featuredImage}
                  size="100%"
                  rounded
                  bgColor="#bc0e05 "
                />
              </Media>
              <Card animate={inView ? FadeUp : "none"}>
                <Title animate={inView ? FadeUp : "none"}>{item.title}</Title>
                <Copy animate={inView ? FadeUp : "none"}>{item.copy}</Copy>
              </Card>
            </CardContainer>
          );
        })}
      </Container>
    </Section>
  );
};

export default HomeTeam;

const Section = styled.section`
  ${container}
  margin-bottom: 6.6rem;

  ${mq.md} {
    margin-bottom: 9.5rem;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  padding: 0;
  gap: 2rem 5rem;
  flex-wrap: wrap;
  justify-content: center;

  ${mq.md} {
    margin: -5rem auto;
  }

  ${mq.lg} {
    max-width: 1280px;
  }
`;

const CardContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: max-content;
  grid-template-columns: auto;
`;

const Media = styled.div`
  position: relative;
  max-width: 18rem;
  margin: 0 auto;
  width: 18rem;
  background: white;
  padding: 2.5rem;
  border-radius: 100%;
  animation: ${(props) => props.animate} 0.8s
    cubic-bezier(0.25, 0.46, 0.45, 0.94);

  img {
    z-index: 5;
  }
`;

const Card = styled.div`
  background-color: rgb(245 246 248);
  margin: -5rem auto 0;
  z-index: 2;
  animation: ${(props) => props.animate} 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  padding: 3.5rem 4rem;
  border-radius: 3.5rem;
  ${mq.md} {
    max-width: 28rem;
  }
`;

const Title = styled.h3`
  color: #bc0e03;
  text-align: center;
  animation: ${(props) => props.animate} 2.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const Copy = styled.p`
  padding: 0rem 0;
  color: #838383;
  animation: ${(props) => props.animate} 3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;
