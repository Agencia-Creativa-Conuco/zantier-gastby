import React from "react";
import styled from "@emotion/styled";
import { container } from "../../components/grid/index";
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
        <Title>Before & After</Title>
        <Body>
          {data.map((item, index) => {
            return (
              <>
                <CardTestimonials item={item} key={index} />
              </>
            );
          })}
        </Body>
      </Container>
    </Section>
  );
};

export default HomeTestimonials;

const Section = styled.section`
  padding-bottom: 18rem;
  background-color: #bc0e03;
`;

const Container = styled.div`
  ${container}
`;

const Body = styled.div`
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

const Title = styled.h2`
  text-align: center;
  color: white;
  margin-top: initial;
  margin-bottom: 3rem;
  text-transform: uppercase;
`;
