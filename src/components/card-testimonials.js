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
      <CardContainer>
        <InView threshold={0.3}>
          {({ ref, inView }) => (
            <Card ref={ref}>
              <Spring pause={!inView} config={config.molasses} {...fadeTop}>
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
                pause={!inView}
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
      </CardContainer>

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

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem 2rem;
  cursor: pointer;
`;

const Card = styled.div`
  border-radius: 3rem;
  display: grid !important;
  background-color: white;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  ${mq.sm} {
    max-width: 14rem;
    border-radius: 2rem;
  }
  ${mq.lg} {
    max-width: 19rem;
  }
  ${mq.xl} {
    max-width: 15rem;
  }
  img {
    cursor: pointer;
  }
`;

const Content = styled.div`
  padding: 2rem;
  padding-bottom: 3rem;
  position: relative;
  gap: 2rem;
  ${mq.sm} {
    padding: 1.5rem 1rem;
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
