import React from "react";
import styled from "@emotion/styled";
import CardInfo from "./card";
import { Spring, animated, config } from "@react-spring/web";
import { mq } from "./grid";
import useModal from "../hooks/useModal.js";
import { FadeUp } from "./animation/animation";
import FeaturedMedia from "./featured-media";


const CardBody = ({ inView, item, styles }) => {
  const { openModal, ModalUI } = useModal();
  return (
    <>
      <animated.div style={styles}>
        <CardContainer>
          <Deco />
          <Media onClick={openModal}>
            <Spring
              reset={inView}
              reverse={!inView}
              config={config.gentle}
              {...FadeUp}
            >
              {(styles) => (
                <animated.div style={styles}>
                  <FeaturedMedia
                    media={item.featuredImage}
                    size="100%"
                    rounded
                  />
                </animated.div>
              )}
            </Spring>
          </Media>

          <Spring
            reset={inView}
            reverse={!inView}
            config={config.molasses}
            {...FadeUp}
          >
            {(styles) => (
              <animated.div style={styles}>
                <Card onClick={openModal}>
                  <Title>{item.title}</Title>

                  <Spring
                    reset={inView}
                    reverse={!inView}
                    delay={1000}
                    from={{
                      opacity: 0,
                    }}
                    to={{ opacity: 1 }}
                  >
                    {(styles) => (
                      <animated.div style={styles}>
                        <Specialty>{item.specialty}</Specialty>
                      </animated.div>
                    )}
                  </Spring>
                </Card>
              </animated.div>
            )}
          </Spring>
        </CardContainer>
      </animated.div>

      <ModalUI>
        <CardInfo item={item} />
      </ModalUI>
    </>
  );
};

export default CardBody;

const CardContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: max-content;
  grid-template-columns: auto;
  cursor: pointer;
`;

const Media = styled.div`
  position: relative;
  max-width: 19rem;
  margin: 0 auto;
  width: 19rem;
  z-index: 5;

  padding: 2.5rem;
`;

const Deco = styled.div`
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 100%;
    max-width: 21rem;
    max-height: 21rem;
  }
`;

const Card = styled.div`
  background-color: rgb(245 246 248);
  margin: -5rem auto 0;
  z-index: 2;
  padding: 3.5rem 4rem;
  border-radius: 3.5rem;
  ${mq.md} {
    max-width: 28rem;
  }
`;

const Title = styled.h3`
  color: #bc0e03;
  text-align: center;
`;

const Specialty = styled.p`
  padding: 0rem 0;
  color: #838383;
  text-align: center;
`;
