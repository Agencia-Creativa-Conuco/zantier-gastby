import styled from "@emotion/styled";
import React from "react";
import FeaturedMedia from "../../components/featured-media";
import { container, mq } from "../../components/grid/index";
import useFiles from "../../hooks/useFiles";

import Cta from "../../components/cta";
import {
  FadeIn,
  FadeUp,
  TextAnimationRight,
} from "../../components/animation/animation";
import { InView } from "react-intersection-observer";
import { animated, config, Spring } from "@react-spring/web";
import colors from "../../components/styles/colors";

const HomeDescription = () => {
  const images = useFiles();

  const data = {
    title: "Síguenos en Instagram",
    copy: "Descubre todo lo que tenemos para ofrecer en nuestra clínica odontológica Zantier.",

    featuredImage: images.home.redes,
    otherCopy: " Sé parte de nuestra comunidad",

    cta: {
      title: "Conocer mas",
      url: "https://www.instagram.com/zantier.odontologia/",
    },
  };

  return (
    <Section>
      <InView threshold={0.4}>
        {({ ref, inView }) => (
          <Container ref={ref}>
            <Media>
              <Spring pause={!inView} config={{ duration: 100 }} {...FadeIn}>
                {(styles) => (
                  <animated.div style={styles}>
                    <FeaturedMedia media={data.featuredImage} size="100%" />
                  </animated.div>
                )}
              </Spring>
            </Media>

            <Spring pause={!inView} {...TextAnimationRight}>
              {(styles) => (
                <animated.div style={styles}>
                  <Card>
                    <Title>{data.title}</Title>
                    <Copy>{data.copy}</Copy>
                    <Cta to={data.cta.url} target="_blank">
                      Conoce más
                    </Cta>
                  </Card>
                </animated.div>
              )}
            </Spring>
          </Container>
        )}
      </InView>
    </Section>
  );
};

export default HomeDescription;

const Section = styled.section`
  background: ${colors.red.base};
  padding-bottom: 5rem;
  padding-top: 5rem;
`;

const Container = styled.div`
  ${container}
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
      border-radius: 50% 0 50% 50%;
    }
  }
`;

const Card = styled.div`
  position: relative;
  grid-area: col_1;
  padding: 2rem 1.5rem;
  ${mq.md} {
    text-align: right;
  }
  ${mq.lg} {
    padding: 4rem 1.5rem;
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
    z-index: -1;
    ${mq.md} {
      width: 150%;
      border-radius: 2rem 0 0 2rem;
    }
  }
`;

const Title = styled.h2`
  margin-top: 0;
  text-transform: uppercase;
`;

const Copy = styled.p`
  color: ${colors.gray.base};
  position: relative;
  margin-bottom: 1.5rem;
  z-index: 2;
  animation: ${(props) => props.animate} 2.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  ${mq.md} {
    text-align: right;
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
