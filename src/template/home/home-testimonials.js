import React from "react";
import styled from "@emotion/styled";
import { container } from "../../components/grid/index";
import useFiles from "../../hooks/useFiles";
import CardTestimonials from "../../components/card-testimonials";
import colors from "../../components/styles/colors";

const HomeTestimonials = () => {
  const images = useFiles();

  const data = [
    {
      featuredImage: images.home.caso_1_portada,
      copy: "Diseño de sonrisa y blanqueamiento.",
      images: {
        before: images.home.caso_1_b,
        after: images.home.caso_1_a,
      },
    },
    {
      featuredImage: images.home.caso_4_portada,
      copy: "Paciente presentaba desgaste dental y manchas intrínsicas por consumo de tabaco prolongado, se realizó un diseño de sonrisa con carillas en porcelanas hechas en Brasil.",
      images: {
        before: images.home.caso_4_b,
        after: images.home.caso_4_a,
      },
    },
    {
      featuredImage: images.home.caso_5_portada,
      copy: "Diseño de sonrisa con carillas en resina compuesta.",
      images: {
        before: images.home.caso_5_b,
        after: images.home.caso_5_a,
      },
    },
    // {
    //   featuredImage: images.home.caso_3_portada,
    //   copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    //   images: {
    //     before: images.home.caso_3_b,
    //     after: images.home.caso_3_a,
    //   },
    // },
  ];

  return (
    <Section>
      <Container fluid>
        <Title>Before & After</Title>
        <Body>
          {data.map((item, index) => {
            return <CardTestimonials item={item} key={index} />;
          })}
        </Body>
      </Container>
    </Section>
  );
};

export default HomeTestimonials;

const Section = styled.section`
  padding-bottom: 18rem;
  background-color: ${colors.red.base};
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
  align-items: baseline;

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
