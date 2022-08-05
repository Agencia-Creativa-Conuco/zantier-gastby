import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "../../components/grid/index";
import useFiles from "../../hooks/useFiles";
import CardTestimonials from "../../components/card-testimonials";

const HomeTestimonials = () => {
  const images = useFiles();

  const data = [
    {
      featuredImage: images.home.smile_1,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.  ",
      images: {
        before: images.sonrisas.smile_1,
        after: images.sonrisas.smile_2,
      },
    },
    {
      featuredImage: images.home.smile_2,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      images: {
        before: images.sonrisas.smile_1,
        after: images.sonrisas.smile_2,
      },
    },
    {
      featuredImage: images.home.smile_3,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
      images: {
        before: images.home.smile_1,
        after: images.home.smile_2,
      },
    },
  ];

  return (
    <Section fluid>
      <Container>
        {data.map((item, index) => {
          return (
            <>
              <CardTestimonials item={item} key={index} />
            </>
          );
        })}
      </Container>
    </Section>
  );
};

export default HomeTestimonials;

const Section = styled.section`
  padding-top: 6.6rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  ${container}

  background-color: #bc0e03;

  padding-bottom: 30rem;
  ${mq.md} {
    padding-top: 9.5rem;
  }
`;

const Container = styled.div`
  ${container}
  padding: 0;
  display: flex;
  gap: 3rem;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;

  img {
    border-radius: 0 0 5rem 5rem;
  }
`;
