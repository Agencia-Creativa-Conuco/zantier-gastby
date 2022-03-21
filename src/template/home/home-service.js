import styled from "@emotion/styled";
import React from "react";
import FeaturedMedia from "../../components/featured-media";
import { container, mq } from "../../components/layout/index";
import useFiles from "../../hooks/useFiles";

const HomeService = () => {
  const images = useFiles();
  const data = [
    {
      title: "En zantier creemos que la felicidad viene de sonrisa en sonrisa",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      cta: {
        title: "Conocer mas",
        url: "/",
      },
      featuredImage: images.home.img,
    },
    {
      title: "En zantier creemos que la felicidad viene de sonrisa en sonrisa",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      cta: {
        title: "Conocer mas",
        url: "/",
      },
      featuredImage: images.home.img,
    },
    {
      title: "En zantier creemos que la felicidad viene de sonrisa en sonrisa",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      cta: {
        title: "Conocer mas",
        url: "/",
      },
      featuredImage: images.home.img,
    },
  ];

  return (
    <Section fluid >
      {data.map((item, index) => {
        return (
          <Container key={index} direction={index % 2} >
            <Media>
              <FeaturedMedia media={item.featuredImage} size="80%" />
            </Media>

            <Content>
              <Copy>{item.copy}</Copy>
              <Deco direction={index % 2} />
            </Content>
          </Container>
        );
      })}
    </Section>
  );
};

export default HomeService;

const Section = styled.section`
  ${container}
  padding: 0;
  padding: 12rem 0;
  position: relative;
  background: #bc0e03;

  &::before {
    content: "";
    position: absolute;
    background:#bc0e03;
    width: 100%;
    height:30rem ;
    clip-path:ellipse(65% 32% at 50% 100%);
    top:-24rem;
    z-index: 2;

    ${mq.md}{
      clip-path: ellipse(65% 57% at 50% 100%);

    }
}
  }

`;

const Container = styled.div`
  ${container}
  z-index: 5;
  display: grid;
  grid-template-columns: 100%;
  padding-bottom: 6.6rem;
  gap: 3rem;
  div:last-of-type {
    order: ${(props) => props.direction};
  }
  ${mq.md} {
    gap: 5rem;
    margin-bottom: 5rem;
    justify-content: ${(props) => (props.direction ? "end" : "start")};
    grid-template-columns: ${(props) =>
      props.direction === 0 ? "35% 50%" : "50% 35%;"};
    text-align: ${(props) => props.direction && "end"};

    div:first-of-type {
      order: ${(props) => props.direction === 1 && 2};
    }
  }

  img {
    border-radius: ${(props) =>
      props.direction ? "25%" : " 1.5rem 30% 30% 30%"};
  }
`;

const Content = styled.div`
  color: white;
  align-self: center;
`;

const Copy = styled.p``;

const Media = styled.div`
  position: relative;
  max-width: 40rem;
`;

const Deco = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background: white;
    width: 7%;
    padding-bottom: 7%;
    ${mq.md} {
      ${(props) => (props.direction === 1 ? "right: 0" : " left:0")};
    }
    border-radius: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    background: white;
    width: 15%;
    padding-bottom: 7%;
    left: 10%;
    ${mq.md} {
      ${(props) =>
        props.direction === 1 ? "right:10%; left:auto;" : " left:10%"};
    }

    border-radius: 2.8rem;
  }
`;
