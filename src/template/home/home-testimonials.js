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
      featuredImage: images.home.caso_1_a,
      copy: `
        <p>A veces, todo lo que necesita tu sonrisa es un blanqueamiento realizado por profesionales.</p>
        <p>Diseño de sonrisa y blanqueamiento</p>
        <p>🔴Por <a href="https://www.instagram.com/dr.angelsanchez/" target="_blank">@dr.angelsanchez</a></p>
      `,
      images: {
        before: images.home.caso_1_b,
        after: images.home.caso_1_a,
      },
    },
    {
      featuredImage: images.home.caso_4_a,
      copy: `
        <p>Una de nuestras mayores satisfacciones es poder devolverle la sonrisa deseada a nuestros pacientes.</p>
        <p>En este caso el paciente presentaba desgaste dental y manchas intrínsicas por consumo de tabaco prolongado.</p><p>Se realizó un diseño de sonrisa con carillas en porcelanas hechas en brasil 🇧🇷</p>
        <p>🔴Por <a href="https://www.instagram.com/dr.angelsanchez/" target="_blank">@dr.angelsanchez</a> y <a href="https://www.instagram.com/lepe_cm/" target="_blank">@lepe_cm</a></p>
      `,
      images: {
        before: images.home.caso_4_b,
        after: images.home.caso_4_a,
      },
    },
    // {
    //   featuredImage: images.home.caso_5_a,
    //   copy: "Diseño de sonrisa con carillas en resina compuesta.",
    //   images: {
    //     before: images.home.caso_5_b,
    //     after: images.home.caso_5_a,
    //   },
    // },
    {
      featuredImage: images.home.caso_6_a,
      copy: `
      <p>Entre un 1% y 3 % de la población sufre de agenesia dental, que es la ausencia de un diente,generalmente un incisivo o un premolar,porque nunca ha llegado a desarrollarse ni nacer.Esto afecta tanto la vida diaria, la estetica, y la funcionalidad.</p>
      <p>
        En este caso realizamos
        Implantes, carillas en resina y coronas
        en cerámica por
      </p>
      <p>
      🔴 Por <a href="https://www.instagram.com/drrolandoalvarez/" target="_blank">@drrolandoalvarez</a> y <a href="https://www.instagram.com/dr.angelsanchez/" target="_blank">@dr.angelsanchez</a>
      </p>
      `,
      images: {
        before: images.home.caso_6_b,
        after: images.home.caso_6_a,
      },
    },
  ];

  return (
    <Section id="before_and_after">
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
`;

const Title = styled.h2`
  text-align: center;
  color: white;
  margin-top: initial;
  margin-bottom: 3rem;
  text-transform: uppercase;
`;
