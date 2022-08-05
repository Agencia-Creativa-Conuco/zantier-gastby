import React from "react";
import styled from "@emotion/styled";
import { FadeUp, fadeTop } from "./animation/animation";
import { InView } from "react-intersection-observer";
import { animated, config, Spring } from "@react-spring/web";
import useModalPolaroid from "../hooks/useModalPolaroid";
import FeaturedMedia from "./featured-media";
import { mq } from "./grid";
import ReactCompareImage from "react-compare-image";

const CardTestimonials = ({ item }) => {
  const { openModal, ModalUI } = useModalPolaroid();
  return (
    <>
      <InView threshold={0.3}>
        {({ ref, inView }) => (
          <Card ref={ref}>
            <Spring
              reset={inView}
              reverse={!inView}
              config={config.molasses}
              {...fadeTop}
            >
              {(styles) => (
                <animated.div style={styles}>
                  <FeaturedMedia
                    media={item.featuredImage}
                    size="70.25%"
                    onClick={openModal}
                  />
                </animated.div>
              )}
            </Spring>
            <Spring
              reset={inView}
              reverse={!inView}
              delay={700}
              config={config.molasses}
              {...FadeUp}
            >
              {(styles) => (
                <animated.div style={styles}>
                  <Content>
                    <Copy>{item.copy}</Copy>
                  </Content>
                </animated.div>
              )}
            </Spring>
          </Card>
        )}
      </InView>

      <ModalUI>
        <ModalInfo>
          <ModalInfoWrappper>
            <ReactCompareImage
              width={640}
              height={480}
              leftImage={item.images.before.publicURL}
              rightImage={item.images.after.publicURL}
            />
            <h4>Antes y Después</h4>
          </ModalInfoWrappper>
        </ModalInfo>
      </ModalUI>
    </>
  );
};

export default CardTestimonials;

const Card = styled.div`
  border-radius: 6.5rem;
  display: grid !important;
  background-color: white;
  margin: 0 auto;
  overflow: hidden;
  width: 25rem;
  ${mq.sm} {
    width: 30rem;
  }
  img {
    cursor: pointer;
  }
`;

const Content = styled.div`
  padding: 2rem 5rem;
  position: relative;
  gap: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 1rem;
    width: 3rem;
    padding-bottom: 3rem;
    border-radius: 100%;
    background-color: #bc0e03;
  }
`;
const Copy = styled.div``;

const ModalInfo = styled.div`
  position: relative;
  ${mq.xs} {
    width: 90vw;
    min-height: 30rem;
  }
  ${mq.sm} {
    width: 40rem;
  }

  max-width: 40rem;
`;

const ModalInfoWrappper = styled.div`
  width: 100%;
  max-width: 47rem;
  h4 {
    text-align: center;
  }
  & > div {
    min-height: 35rem !important;
  }
  img {
    border-radius: initial !important;
  }
`;
