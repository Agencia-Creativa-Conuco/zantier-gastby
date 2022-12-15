import styled from "@emotion/styled";
import React from "react";
import { FadeUp } from "../../components/animation/animation";
import Cta from "../../components/cta";
import FeaturedMedia from "../../components/featured-media";
import { container, mq } from "../../components/grid/index";
import useFiles from "../../hooks/useFiles";
import { InView } from "react-intersection-observer";
import { Spring, animated, config } from "@react-spring/web";
import colors from "../../components/styles/colors";
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
        <Section fluid id="inicio">
          <Container fluid>
            <Content>
              <Spring
                // pause={!inView}
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
                // pause={!inView}
                delay={200}
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
                // pause={!inView}
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

            <MediaWrapper>
              <Spring
                config={config.molasses}
                // pause={!inView}
                from={{
                  opacity: 0,
                }}
                to={{ opacity: 1 }}
              >
                {(styles) => (
                  <animated.div style={styles} ref={ref}>
                    <Media>
                      <FeaturedMedia
                        media={data.featuredImage}
                        size="100%"
                        loading="eager"
                      />
                    </Media>
                  </animated.div>
                )}
              </Spring>
            </MediaWrapper>
          </Container>
        </Section>
      )}
    </InView>
  );
};

export default HomeCover;

const Section = styled.section`
  background: ${colors.gray.light};
  background: rgb(229, 229, 229);
  background: radial-gradient(
    circle,
    rgba(229, 229, 229, 1) 0%,
    rgba(245, 245, 245, 1) 100%
  );
  position: relative;
  z-index: 1;
  padding-bottom: 5rem;
  ${mq.lg} {
    padding-bottom: initial;
  }
`;

const Container = styled.div`
  ${container}
  padding-top: 5%;
  min-height: 35vw;
  display: grid;
  align-items: flex-end;
  grid-template-columns: 1fr;
  margin: 0 auto;

  div:first-of-type {
    order: 2;
  }
  ${mq.lg} {
    grid-template-columns: 2fr 4fr;
    div:last-of-type {
      order: 2;
    }
  }
`;

const Content = styled.div`
  align-self: center;
  position: relative;
  z-index: 2;
  padding-top: 1.5rem;
  ${mq.lg} {
    padding-top: initial;
  }
  &:before {
    content: "";
    position: absolute;
    background-color: ${colors.gray.light};
    border-radius: 50%;
    width: 300%;
    padding-bottom: 300%;
    height: 0;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -5%);
    z-index: -1;
    ${mq.lg} {
      content: none;
    }
  }
  &:after {
    content: "";
    position: absolute;
    background-color: ${colors.red.base};
    border-radius: 50%;
    width: 300%;
    padding-bottom: 300%;
    height: 0;
    top: 0%;
    left: 50%;
    transform: translate(-49%, -5.5%);
    z-index: -2;
    ${mq.lg} {
      content: none;
    }
  }
`;

const Title = styled.h1`
  margin-top: 0;
  text-transform: uppercase;
  /* animation: ${(props) =>
    props.animate} 1.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; */
`;

const Copy = styled.p`
  color: ${colors.gray.base};
  margin-bottom: 2rem;
  /* animation: ${(props) => props.animate} 1.8s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both; */
  font-weight: normal;
`;

const MediaWrapper = styled.div`
  position: relative;
  z-index: -3;
`;

const Media = styled.div`
  position: relative;
  ${mq.xl} {
    max-width: 80%;
    margin: 0 auto;
  }
`;
