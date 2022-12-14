import React from "react";
import styled from "@emotion/styled";
import { FadeUp, fadeTop } from "./animation/animation";
import { InView } from "react-intersection-observer";
import { animated, config, Spring } from "@react-spring/web";
import useModalPolaroid from "../hooks/useModalPolaroid";
import FeaturedMedia from "./featured-media";
import { mq } from "./grid";
import ReactCompareImage from "react-compare-image";
import colors from "./styles/colors";

const CardTestimonials = ({ item }) => {
  const { openModal, ModalUI } = useModalPolaroid();
  return (
    <>
      <CardContainer>
        <InView threshold={0.3}>
          {({ ref, inView }) => (
            <Card ref={ref} onClick={openModal}>
              <Spring pause={!inView} config={config.molasses} {...fadeTop}>
                {(styles) => (
                  <animated.div style={styles}>
                    <FeaturedMedia media={item.featuredImage} size="110%" />
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
                      <Button>Ver antes y después</Button>
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
  gap: 2rem 2rem;
  width: 100%;
  max-width: 25rem;
  ${mq.md} {
    max-width: 16rem;
  }
  cursor: pointer;
`;

const Card = styled.div`
  border-radius: 3rem;
  display: grid !important;
  background-color: white;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  max-width: 25rem;
  ${mq.md} {
    max-width: 16rem;
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
  text-align: center;
  ${mq.sm} {
    padding: 1.5rem 1rem;
  }
`;
const Copy = styled.div`
  text-align: left;
`;

const Button = styled.button`
  display: inline-block;
  color: ${colors.red.base};
  cursor: pointer;
  background-color: initial;
  border-radius: initial;
  border: initial;
  outline: initial;
  padding: initial;
  margin: initial;
  margin-top: 1rem;
`;

const ModalInfo = styled.div`
  position: relative;
  width: 17rem;
  max-width: 25rem;
`;

const ModalInfoWrappper = styled.div`
  width: 100%;
  max-width: 28rem;
  h4 {
    text-align: center;
    margin-top: 0.7rem;
  }
  & > div {
    min-height: 10rem !important;
  }
  img {
    border-radius: initial !important;
  }
`;
