import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "../../components/layout/index";
import useFiles from "../../hooks/useFiles";
import BackgroundImage from "gatsby-background-image";

const HomeContact = () => {
  const images = useFiles();
  const data = {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    list: [
      {
        title: "Lorem ipsum dolor  adipiscing elit",
      },
      {
        title: "Lorem ipsum dolor  adipiscing elit",
      },
      {
        title: "Lorem ipsum dolor  adipiscing elit",
      },
    ],

    featuredImage: images.home.img2,
  };

  return (
    <BImage
      Tag="section"
      fluid={data.featuredImage?.childImageSharp?.fluid}
      id="section_3"
    >
      <Section as="div">
        <Container>
          <Title>{data.title} </Title>

          {data.list.map((item) => {
            return (
              <Content>
                <Deco />
                <Copy>{item.title}</Copy>
              </Content>
            );
          })}
        </Container>
      </Section>
    </BImage>
  );
};

export default HomeContact;

const BImage = styled(BackgroundImage)`
  overflow: hidden;
`;

const Section = styled.section`
  /* background: rgb(239 228 228 / 35%); */
  min-height: 45rem;
  padding-top: 5rem;
  padding-bottom: 10rem;
  ${mq.lg} {
    min-height: 70rem;
  }
`;

const Container = styled.div`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  justify-content: end;
  text-align: right;
  padding: 0 1.5rem;
  ${mq.md} {
    grid-template-columns: 70%;
  }
  ${mq.lg} {
    grid-template-columns: 60%;
  }
`;

const Content = styled.div`
  padding: 1rem 1.5rem;
  position: relative;
  display: flex;
  gap: 2rem;
  justify-content: end;

  * {
    color: #bc0e03;
  }
`;

const Title = styled.h2`
  margin-bottom: 4rem;
`;

const Copy = styled.p`
  margin-bottom: 0;
  align-self: center;
`;

const Deco = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background-color: #bc0e03;
`;
