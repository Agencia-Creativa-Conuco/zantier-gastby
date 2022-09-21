import styled from "@emotion/styled";
import React from "react";
import { FadeUp } from "../../components/animation/animation";
import Cta from "../../components/cta";
import FeaturedMedia from "../../components/featured-media";
import { container, mq } from "../../components/grid/index";
import useFiles from "../../hooks/useFiles";
import { InView } from "react-intersection-observer";
import { Spring, animated, config } from "@react-spring/web";
const HomeCover = () => {
  const images = useFiles();

  const data = {
    title: " Expertos en sonrisas",
    copy: "Existen muchas razones para sonreír, queremos darte la confianza para hacerlo. El diseño de sonrisa es un proceso bucal en el cual se reestructura la formación de toda la parte dental, según las necesidades del paciente, para lograr tener la sonrisa de sus sueños.",
    cta: {
      title: "Conocer mas",
      url: "#infografia",
    },
    featuredImage: images.home.chica,
  };
  return (
    <InView threshold={0.4}>
      {({ ref, inView }) => (
        <Section fluid>
          <Container space top>
            <Content>
              <Spring
                reset={inView}
                reverse={!inView}
                config={config.molasses}
                {...FadeUp}
              >
                {(styles) => (
                  <animated.div style={styles} ref={ref}>
                    <Title>{data.title}</Title>
                  </animated.div>
                )}
              </Spring>

              <Spring
                reset={inView}
                delay={200}
                reverse={!inView}
                config={config.molasses}
                {...FadeUp}
              >
                {(styles) => (
                  <animated.div style={styles} ref={ref}>
                    <Copy>{data.copy}</Copy>
                  </animated.div>
                )}
              </Spring>
              <Spring
                reset={inView}
                reverse={!inView}
                delay={300}
                config={config.molasses}
                {...FadeUp}
              >
                {(styles) => (
                  <animated.div style={styles} ref={ref}>
                    <Cta to={data.cta.url}>{data.cta.title}</Cta>
                  </animated.div>
                )}
              </Spring>
            </Content>

            <Spring
              config={config.molasses}
              reset={inView}
              reverse={!inView}
              from={{
                opacity: 0,
              }}
              to={{ opacity: 1 }}
            >
              {(styles) => (
                <animated.div style={styles} ref={ref}>
                  <Media>
                    <FeaturedMedia media={data.featuredImage} size="100%" />
                  </Media>
                </animated.div>
              )}
            </Spring>
          </Container>
        </Section>
      )}
    </InView>
  );
};

export default HomeCover;

const Section = styled.section`
  ${container}
  background: #eaeef2;
  padding: 0;
  padding-top: 5rem;
  position: relative;
  z-index: 1;
  ${mq.lg} {
    padding: 0 5%;
    padding-top: 10rem;
  }
  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(
      0deg,
      #eaeef2ff,
      #eaeef2ff,
      #eaeef2aa,
      #eaeef200
    );
    width: 100%;
    min-height: 30%;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
`;

const Container = styled.div`
  display: grid;
  align-items: flex-end;
  grid-template-columns: 100%;
  padding-bottom: 6.6rem;
  max-width: 1920px;
  margin: 0 auto;

  div:first-of-type {
    order: 2;
  }
  ${mq.md} {
    grid-template-columns: 2fr 3fr;
    div:last-of-type {
      order: 2;
    }
  }
`;

const Content = styled.div`
  padding: 0 1.5rem;
  align-self: center;
  max-width: 60rem;
  margin: 0 auto;
  margin-bottom: 10rem;
  position: relative;
  z-index: 5;
  &:before {
    content: "";
    position: absolute;
    background-color: #eaeef2ff;
    border-radius: 50%;
    width: 300%;
    padding-bottom: 300%;
    height: 0;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -5%);
    z-index: -1;
    ${mq.md} {
      content: none;
    }
  }
  &:after {
    content: "";
    position: absolute;
    background-color: #bc0e03;
    border-radius: 50%;
    width: 300%;
    padding-bottom: 300%;
    height: 0;
    top: 0%;
    left: 50%;
    transform: translate(-49%, -5.5%);
    z-index: -2;
    ${mq.md} {
      content: none;
    }
  }
`;

const Title = styled.h1`
  margin-bottom: 3rem;
  /* animation: ${(props) =>
    props.animate} 1.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; */
}

`;

const Copy = styled.p`
  color: #838383;
  margin-bottom: 3rem;
  /* animation: ${(props) => props.animate} 1.8s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both; */
  font-weight: normal;
`;

const Media = styled.div`
  position: relative;
  ${mq.xl} {
    max-width: 80%;
    margin: 0 auto;
  }
`;
